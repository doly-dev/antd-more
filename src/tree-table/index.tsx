import * as React from 'react';
import type { TableProps } from 'antd';
import { Checkbox, Table } from 'antd';
import { useControllableValue, useLatest, useSafeState } from 'rc-hooks';
import { findTreeNode } from 'util-helpers';
import { omit, isEmpty } from 'ut2';
import classNames from 'classnames';
import type { ValueType, TreeTableDataItem, TreeTableData, TreeTableFieldNames } from './type';
import './index.less';

const prefixCls = 'antd-more-tree-table';

export type { TreeTableDataItem, TreeTableData, TreeTableFieldNames };

const EmptyArray = []; // 处理默认值不变，如果props中使用 `x=[]`，且该属性在依赖更新中，可能导致无限更新。

// 计算树型数据层级
const flatTree = (data: TreeTableData, childrenKey = 'children') => {
  const ret = [];

  function recursion(childs: TreeTableData, prevArray: TreeTableData = []) {
    childs.forEach((item) => {
      const newValue = [...prevArray, omit(item, [childrenKey]) as any];
      if (!isEmpty(item[childrenKey])) {
        recursion(item[childrenKey], newValue);
      } else {
        ret.push(newValue);
      }
    });
  }

  recursion(data);
  return ret;
};

const compactTree = (data: TreeTableData, fieldNames: TreeTableFieldNames) => {
  const { value: valueKey, children: childrenKey } = fieldNames;
  const ret: (Omit<TreeTableDataItem, 'children'> & {
    children?: Omit<TreeTableDataItem, 'children'>[];
    parent: ValueType;
  })[] = [];

  function recursion(list: TreeTableData, parent: TreeTableDataItem = null) {
    list.forEach((item) => {
      ret.push({
        ...item,
        parent: parent?.[valueKey] || null,
        [childrenKey]:
          item?.[childrenKey]?.map(
            (item) => omit(item, [childrenKey]) as Omit<TreeTableDataItem, 'children'>
          ) || null
      });

      if (!isEmpty(item[childrenKey])) {
        recursion(item[childrenKey], omit(item, [childrenKey]));
      }
    });
  }

  recursion(data);

  return ret;
};

// 处理合并行数
function processRowSpan(data: object) {
  const cloneData = JSON.parse(JSON.stringify(data));
  const childNodes = [];

  // 记录已加过的值
  const recordAddChildNodes = new Set();

  for (const prop in cloneData) {
    cloneData[prop].name = prop;
    if (!cloneData[prop].hasChildren) {
      childNodes.push(cloneData[prop]);
    }
  }

  function recursion(dataItem: any) {
    if (dataItem.parent && cloneData[dataItem.parent]) {
      cloneData[dataItem.parent].len +=
        dataItem.len - (recordAddChildNodes.has(dataItem.name) ? cloneData[dataItem.name].len : 1);

      recordAddChildNodes.add(dataItem.name);

      if (cloneData[dataItem.parent].parent) {
        recursion(cloneData[dataItem.parent]);
      }
    }
  }

  childNodes.forEach((item) => {
    recursion(item);
  });

  return cloneData;
}

function transformTreeToList(
  data: TreeTableData,
  lastColumnMerged = false,
  fieldNames: TreeTableFieldNames
) {
  const { value: valueKey, children: childrenKey } = fieldNames;

  // 先处理一次扁平数据得到最大层级
  const flatData = flatTree(data, childrenKey);

  const lastColumnIndex = Math.max(...flatData.map((item) => item.length - 1));

  const list = [];

  // 合并行数缓存
  let rowSpanCache = {};

  function recursion(childs: TreeTableData, prevData = {}, parentValue = null, index = 0) {
    childs.forEach((item) => {
      const newValue: any = {
        ...prevData,
        [`col${index}`]: {
          [valueKey]: item[valueKey],
          parent: parentValue,
          data: [omit(item, [childrenKey])]
        }
      };

      if (!rowSpanCache[item[valueKey]]) {
        rowSpanCache[item[valueKey]] = {
          len: item[childrenKey]?.length || 1,
          parent: parentValue
        };
      }

      if (isEmpty(item[childrenKey])) {
        list.push({
          ...newValue,
          key: `row_${parentValue}_${item[valueKey]}`
        });
        rowSpanCache[item[valueKey]].hasChildren = false;
      } else if (lastColumnMerged && lastColumnIndex - 1 === index) {
        rowSpanCache[item[valueKey]].len = 1;
        rowSpanCache[item[valueKey]].hasChildren = false;

        list.push({
          ...newValue,
          key: `row_${parentValue}_${item[valueKey]}`,
          [`col${index + 1}`]: {
            [valueKey]: item[valueKey],
            parent: parentValue,
            data: item[childrenKey]
          }
        });
      } else {
        rowSpanCache[item[valueKey]].hasChildren = true;
        recursion(item[childrenKey], newValue, item[valueKey], index + 1);
      }
    });
  }

  recursion(data);

  rowSpanCache = processRowSpan(rowSpanCache);

  // console.log(rowSpanCache);

  // 记录第一行需要合并的行数
  const recordRowSpanValues = [];

  // 列数据
  const columns = [];

  // 防止不同层级数据错误
  for (let i = 0; i <= lastColumnIndex; i++) {
    columns.push({
      dataIndex: `col${i}`
    });

    for (let j = 0; j < list.length; j++) {
      if (!list[j][`col${i}`]) {
        list[j][`col${i}`] = {
          [valueKey]: null,
          data: [],
          rowSpan: 1
        };
      } else {
        const currValue = list[j][`col${i}`][valueKey];
        let currRowSpan = 1;

        if (!recordRowSpanValues.includes(currValue)) {
          recordRowSpanValues.push(currValue);
          currRowSpan = rowSpanCache[currValue].len;
        } else if (rowSpanCache[currValue].len > 1) {
          currRowSpan = 0;
        }
        list[j][`col${i}`] = {
          ...list[j][`col${i}`],
          rowSpan: currRowSpan
        };
      }
    }
  }

  return { columns, list };
}

// 查找当前项的子项
function findChildrenByValue(
  data: TreeTableData,
  value: ValueType,
  fieldNames: TreeTableFieldNames
): TreeTableData {
  const { value: valueKey, children: childrenKey } = fieldNames;
  const currentItem = findTreeNode(data, item => item[valueKey] === value, childrenKey);
  return currentItem?.[childrenKey] || EmptyArray;
}

// 查找子项的value
function getChildrenValue(
  data: TreeTableData,
  value: ValueType,
  deep = false,
  fieldNames: TreeTableFieldNames
) {
  const { children: childrenKey } = fieldNames;
  const ret: Omit<TreeTableDataItem, 'children'>[] = [];
  const currChild = findChildrenByValue(data, value, fieldNames);

  function recursion(list: TreeTableData) {
    list.forEach((item) => {
      ret.push(omit(item, [childrenKey]) as Omit<TreeTableDataItem, 'children'>);
      if (!isEmpty(item[childrenKey])) {
        recursion(item[childrenKey]);
      }
    });
  }

  if (deep) {
    recursion(currChild);
  } else {
    currChild.forEach((item) => {
      ret.push(omit(item, [childrenKey]) as Omit<TreeTableDataItem, 'children'>);
    });
  }

  return ret;
}

export interface TreeTableProps<RecordType = any>
  extends Omit<
    TableProps<RecordType>,
    'columns' | 'dataSource' | 'pagination' | 'rowKey' | 'onChange'
  > {
  columnTitles: React.ReactNode[];
  lastColumnMerged?: boolean;
  halfToChecked?: boolean;
  treeData?: TreeTableData;
  value?: ValueType[];
  onChange?: (values: ValueType[]) => void;
  labelRender?: (nodeData: TreeTableDataItem) => React.ReactNode;
  fieldNames?: TreeTableFieldNames;
  hideCheckbox?: boolean;
}

const TreeTable: React.FC<TreeTableProps> = (props) => {
  const {
    columnTitles = EmptyArray,
    treeData = EmptyArray,
    lastColumnMerged = false,
    halfToChecked = false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    value: outValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange,
    labelRender,
    fieldNames: outFieldNames,
    className,
    hideCheckbox = false,
    ...restProps
  } = props;
  const [checkList, setCheckList] = useControllableValue<ValueType[]>({
    defaultValue: [],
    ...props
  });
  const [indeterminateList, setIndeterminateList] = useSafeState<ValueType[]>([]);
  const indeterminateListRef = useLatest(indeterminateList);
  const checkListRef = useLatest(checkList);

  // 修复外部数据为 undefined 导致报错
  if (!checkListRef.current) {
    checkListRef.current = [];
  }

  const fieldNames = React.useMemo(
    () => ({
      label: 'label',
      value: 'value',
      children: 'children',
      ...outFieldNames
    }),
    [outFieldNames]
  );
  const { value: valueKey, label: labelKey, children: childrenKey } = fieldNames;

  const { columns, list } = React.useMemo(
    () => transformTreeToList(treeData, lastColumnMerged, fieldNames),
    [lastColumnMerged, treeData, fieldNames]
  );

  const compactData = React.useMemo(
    () => compactTree(treeData, fieldNames),
    [treeData, fieldNames]
  );

  // 处理父级勾选/半勾选
  const processParentChecked = React.useCallback(
    (value?: ValueType, checks?: ValueType[], indeterminates?: ValueType[]) => {
      const newChecks = new Set(checks || EmptyArray);
      const newIndetermanites = new Set(indeterminates || EmptyArray);

      // 递归处理父级勾选/半勾选
      function recursion(val: ValueType) {
        const currItem = compactData.find((item) => item[valueKey] === val);
        if (currItem) {
          let childHasChecked = false;
          let childHasIndetermanite = false;
          let childAllChecked = true;

          currItem[childrenKey]?.forEach((item) => {
            if (!item.disabled) {
              if (newChecks.has(item[valueKey])) {
                childHasChecked = true;
              } else {
                childAllChecked = false;
                if (newIndetermanites.has(item[valueKey])) {
                  childHasIndetermanite = true;
                }
              }
            }
          });

          if (childAllChecked) {
            newChecks.add(val);
            newIndetermanites.delete(val);
          } else {
            newChecks.delete(val);
            if (childHasChecked || childHasIndetermanite) {
              (halfToChecked ? newChecks : newIndetermanites).add(val);
              (!halfToChecked ? newChecks : newIndetermanites).delete(val);
            } else {
              (halfToChecked ? newChecks : newIndetermanites).delete(val);
            }
          }

          if (currItem.parent) {
            recursion(currItem.parent);
          }
        }
      }

      const currItem = compactData.find((item) => item[valueKey] === value);
      if (currItem?.parent) {
        recursion(currItem.parent);
      }

      return {
        checks: Array.from(newChecks),
        indeterminates: Array.from(newIndetermanites)
      };
    },
    [childrenKey, compactData, halfToChecked, valueKey]
  );

  const handleChange = React.useCallback(
    (dataItem) => {
      const newIndetermaniteList = new Set(indeterminateListRef.current);
      const newCheckList = new Set(checkListRef.current);

      const childValues = getChildrenValue(treeData, dataItem[valueKey], true, fieldNames);

      const currentValue = dataItem[valueKey];
      const currentChecked = checkListRef.current.includes(currentValue);

      // 处理当前层级勾选，已选中变为不勾选，不勾选改为勾选
      if (currentChecked) {
        newCheckList.delete(currentValue);
      } else {
        newCheckList.add(currentValue);
        newIndetermaniteList.delete(currentValue);
      }

      // 处理所有子级勾选/不勾选
      childValues.forEach((item) => {
        if (currentChecked) {
          if (checkListRef.current.find(checkItem => checkItem === item[valueKey])) {
            newCheckList.delete(item[valueKey]);
          }
        } else if (!item.disabled) {
          newCheckList.add(item[valueKey]);
          newIndetermaniteList.delete(item[valueKey]);
        }
      });

      // 处理父级勾选/半勾选
      const { checks, indeterminates } = processParentChecked(
        dataItem[valueKey],
        Array.from(newCheckList),
        Array.from(newIndetermaniteList)
      );

      // console.log(checks);
      setIndeterminateList(indeterminates);
      setCheckList(checks);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fieldNames, processParentChecked, treeData, valueKey]
  );

  // 处理初始化数据 或 半勾选 prop 值切换
  React.useEffect(() => {
    let newCheckList = checkListRef.current;
    let newIndetermaniteList = indeterminateListRef.current;

    checkListRef.current.forEach((item) => {
      const { checks, indeterminates } = processParentChecked(
        item,
        newCheckList,
        newIndetermaniteList
      );
      newCheckList = checks;
      newIndetermaniteList = indeterminates;
    });

    setCheckList(newCheckList);
    setIndeterminateList(newIndetermaniteList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processParentChecked]);

  const realColumns = React.useMemo(() => {
    // 优化没有数据时的表格标题展示
    const internalColumns = Array.isArray(columns) && columns.length > 0 ? columns : (Array.isArray(columnTitles) && columnTitles.length > 0 ? columnTitles.map(() => ({})) : []);
    return internalColumns.map((item, i) => ({
      ...item,
      title: columnTitles[i] || '-',
      // ref: https://github.com/ant-design/ant-design/issues/33093
      onCell: (record) => {
        const col = record[item.dataIndex];
        return {
          rowSpan: col.rowSpan
        };
      },
      render: (_, record) => {
        const col = record[item.dataIndex];

        return col[valueKey]
          ? col.data.map((subItem) => (
            <Checkbox
              checked={(checkList || EmptyArray).includes(subItem[valueKey])}
              indeterminate={indeterminateList.includes(subItem[valueKey])}
              onChange={() => {
                handleChange(subItem);
              }}
              disabled={subItem.disabled}
              key={subItem[valueKey]}
            >
              {labelRender ? labelRender(subItem) : subItem[labelKey] || subItem[valueKey]}
            </Checkbox>
          ))
          : '-';
      }
    }));
  }, [checkList, columnTitles, columns, handleChange, indeterminateList, labelKey, labelRender, valueKey]);

  return (
    <Table
      columns={realColumns}
      dataSource={list}
      pagination={false}
      bordered
      className={classNames(prefixCls, { [`${prefixCls}-hideCheckbox`]: hideCheckbox }, className)}
      {...restProps}
    />
  );
};

export default TreeTable;
