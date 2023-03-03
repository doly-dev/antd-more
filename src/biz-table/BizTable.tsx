import * as React from 'react';
import { Table, Card, Space, ConfigProvider } from 'antd';
import type { TableProps, SpaceProps, CardProps, FormInstance } from 'antd';
import classnames from 'classnames';
import { useUpdateEffect, usePagination } from 'rc-hooks';
import type { SearchFormProps } from './SearchForm';
import SearchForm from './SearchForm';
import type { QueryFormProps } from '../biz-form';
import BizField from '../biz-field';
import WithTooltip from '../biz-descriptions/WithTooltip';
import actionCache, { createActionCacheKey } from './_util/actionCache';
import type {
  BizTableRequest,
  BizTableActionType,
  BizTableColumnType,
  ToolbarActionProps
} from './interface';
import { createFormItem } from './_util/createFormItems';
import getRowKey from './_util/getRowKey';
import getColumnKey from './_util/getColumnKey';
import type { ColumnConfigKeys } from './TableContext';
import TableContext from './TableContext';
import ToolbarAction from './components/ToolbarAction';
import omit from '../utils/omit';
import hasLength from '../utils/hasLength';

import './index.less';

const prefixCls = 'antd-more-table';

// 显示数据总量
const showTotal = (total: number) => `共 ${total} 条数据`;

export declare interface BizTableProps<RecordType = any>
  extends Omit<TableProps<RecordType>, 'columns'>,
  Pick<SearchFormProps, 'formItems'> {
  formRef?: React.MutableRefObject<FormInstance | undefined> | ((ref: FormInstance) => void);
  actionRef?: React.MutableRefObject<BizTableActionType | undefined>;
  columns?: BizTableColumnType<RecordType>;
  ready?: boolean;
  autoRequest?: boolean;
  nowrap?: boolean;
  request?: BizTableRequest<RecordType>;
  form?: QueryFormProps;
  spaceProps?: SpaceProps;
  formCardProps?: CardProps;
  tableCardProps?: CardProps;
  toolbar?: React.ReactNode;
  toolbarRender?: (dom: React.ReactElement) => React.ReactNode;
  toolbarAction?: boolean | ToolbarActionProps['config'];
  extra?: React.ReactNode;
  tableRender?: (props: BizTableProps<RecordType>, dom: React.ReactElement) => React.ReactNode;
  tableClassName?: string;
  tableStyle?: React.CSSProperties;
  fullScreenBackgroundColor?: string; // 全屏时的背景颜色

  // 以下供 EditableBizTable 使用
  editableKeys?: (string | number)[];
  editableForm?: FormInstance;
  editableKeyMapRef?: React.MutableRefObject<{ value: object; }>;
  onDataSourceChange?: (newData: RecordType[]) => void;
}

function BizTable<RecordType extends object = any>(props: BizTableProps<RecordType>) {
  const {
    formItems,
    formRef,
    form,

    spaceProps,
    formCardProps,
    tableCardProps,

    toolbar,
    toolbarAction = false,
    toolbarRender,
    extra,
    actionRef,
    tableRender,
    className,
    style,
    tableClassName,
    tableStyle,
    fullScreenBackgroundColor = '#fff',

    request,
    ready = true,
    autoRequest = true,
    nowrap = true,
    editableKeys = [],
    editableForm,
    editableKeyMapRef,
    onDataSourceChange,

    rowKey,
    columns,
    pagination: paginationProp,
    onChange,
    size: defaultSize,
    ...restProps
  } = props;

  const actionCacheKey = React.useMemo(() => createActionCacheKey(), []);
  const editableKeyMap = React.useRef({}); // 可编辑项的namePath映射
  const [size, setSize] = React.useState(defaultSize);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [isFullScreen, setFullScreen] = React.useState(false);
  const toolbarActionConfig: ToolbarActionProps['config'] = React.useMemo(() => {
    const defaultConfig = {
      reload: true,
      density: true,
      fullScreen: true,
      columnSetting: true
    };

    if (typeof toolbarAction === 'object') {
      return {
        ...defaultConfig,
        ...toolbarAction
      };
    }

    if (toolbarAction) {
      return defaultConfig;
    }

    const tmp = {};

    Object.keys(defaultConfig).forEach((item) => {
      tmp[item] = false;
    });
    return tmp;
  }, [toolbarAction]);

  const hasToolbarAction = React.useMemo(
    () => Object.values(toolbarActionConfig).filter((item) => item).length > 0,
    [toolbarActionConfig]
  );

  const innerFormRef = React.useRef<FormInstance>();
  const handleInnerFormRef = React.useCallback(
    (refValue: FormInstance) => {
      innerFormRef.current = refValue;

      if (formRef) {
        if (typeof formRef === 'function') {
          formRef(refValue);
        } else {
          formRef.current = refValue;
        }
      }
    },
    [formRef]
  );

  const columnsWithKey = React.useMemo(() => {
    function recursion(arr: any[] = [], parentKey: string | number = '') {
      const tmpColumns: any[] = [];
      arr.forEach((item, index) => {
        const key = getColumnKey(item, index, parentKey);
        const newItem = { ...item, key }
        if (hasLength(newItem?.children)) {
          newItem.children = recursion(newItem.children, key);
        }
        tmpColumns.push(newItem);
      });
      return tmpColumns;
    }
    return recursion(columns);
  }, [columns]);

  const { searchItems, columns: currentColumns } = React.useMemo(() => {
    const ret = {
      searchItems: [],
      columns: []
    };

    if (!Array.isArray(columnsWithKey) || columnsWithKey.length <= 0) {
      return ret;
    }

    function processColumns(columnsData) {
      return columnsData
        .filter((item) => !!item)
        .map((item) => {
          const {
            dataIndex,
            valueType,
            valueEnum,
            tooltip,
            title,
            className: cellClassName,
            nowrap: cellNowrap,
            field,
            search,
            editable,
            order,
            render,
            ...restItem
          } = item;

          // 处理查询表单
          if (search) {
            const searchItemConfig = {
              dataIndex,
              title,
              valueType,
              valueEnum,
              originItem: item,
              order
            };

            if (typeof search === 'boolean') {
              ret.searchItems.push(searchItemConfig);
            } else if (typeof search === 'object') {
              ret.searchItems.push({
                ...searchItemConfig,
                ...search
              });
            }
          }

          // 处理列数据
          const newItem = {
            dataIndex,
            title: title && tooltip ? <WithTooltip label={title} tooltip={tooltip} /> : title,
            className: classnames(
              { [`${prefixCls}-cell-wrap`]: nowrap && cellNowrap === false },
              cellClassName
            ),
            ...restItem
          };

          if (Array.isArray(newItem.children) && newItem.children.length > 0) {
            newItem.children = processColumns(newItem.children);
          } else {
            newItem.render = (text, record, index) => {
              const currentRowKey = getRowKey(rowKey)(record, index);
              const realEditable =
                typeof editable === 'function' ? editable(text, record, index) : editable;
              const enabledEdit = realEditable !== false;

              const currentNamePath = [
                currentRowKey,
                ...(Array.isArray(dataIndex) ? dataIndex : [dataIndex])
              ];

              // 缓存namePath
              if (enabledEdit && dataIndex) {
                if (!editableKeyMap.current[currentRowKey]) {
                  editableKeyMap.current[currentRowKey] = {
                    nameList: [],
                    dataIndexs: [],
                    record,
                    index,
                    rowKey: currentRowKey
                  };
                }

                if (!editableKeyMap.current[currentRowKey].dataIndexs.includes(dataIndex)) {
                  editableKeyMap.current[currentRowKey].dataIndexs.push(dataIndex);
                  editableKeyMap.current[currentRowKey].nameList.push(currentNamePath);
                }
              }

              // 编辑状态
              if (
                enabledEdit &&
                dataIndex &&
                editableKeys.length > 0 &&
                editableKeys.indexOf(currentRowKey) > -1
              ) {
                return createFormItem(
                  {
                    dataIndex: currentNamePath,
                    title,
                    valueType,
                    valueEnum,
                    search: {
                      initialValue: text,
                      ...(typeof realEditable === 'object' ? realEditable : {}),
                      style: { marginTop: -5, marginBottom: -5, ...realEditable?.style }
                    },
                    originItem: item
                  },
                  editableForm
                );
              }

              // 展示状态
              if (typeof render === 'function') {
                return render(text, record, index);
              }

              const retValue = valueType === 'index' || valueType === 'indexBorder' ? index : text;
              const fieldProps = typeof field === 'function' ? field(text, record, index) : field;
              return (
                <BizField
                  value={retValue}
                  valueType={valueType}
                  valueEnum={valueEnum}
                  {...fieldProps}
                />
              );
            };
          }

          return newItem;
        })
        .filter((columnItem) => columnItem.table !== false);
    }
    ret.columns = processColumns(columnsWithKey);
    return ret;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnsWithKey, nowrap, rowKey, editableKeys.join('.'), editableForm]);
  const [columnConfigKeys, setColumnConfigKeys] = React.useState<ColumnConfigKeys>(() => currentColumns.map(item => item.key));

  const finalColumns = React.useMemo(() => {
    if (!Array.isArray(columnConfigKeys)) {
      return currentColumns;
    }
    const tmpColumns: any[] = [];
    columnConfigKeys.forEach(key => {
      const columnItem = currentColumns.find(item => item?.key === key);
      if (columnItem) {
        tmpColumns.push(columnItem);
      }
    });
    return tmpColumns;
  }, [currentColumns, columnConfigKeys]);

  React.useEffect(() => {
    if (Array.isArray(editableKeys)) {
      const delKeys = Object.keys(editableKeyMap.current).filter(item => !editableKeys.find(k => k === item));
      delKeys.forEach(k => {
        delete editableKeyMap.current[k];
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editableKeys.join('.')]);

  React.useImperativeHandle(editableKeyMapRef, () => ({
    get value() {
      return editableKeyMap.current;
    }
  }));

  const hasSearch = React.useMemo(() => {
    return (
      (Array.isArray(searchItems) && searchItems.length > 0) ||
      (Array.isArray(formItems) && formItems.length > 0)
    );
  }, [searchItems, formItems]);

  const { data, loading, run, refresh, tableProps, params, pagination } = usePagination<{
    list: RecordType[];
    total: number;
  }>(
    (arg) => {
      const {
        current,
        pageSize,
        search,
        filters = {},
        sorter = {},
        extra: extraOut,
        ...restArg
      } = arg;
      const param = { current, pageSize, ...search, ...restArg };
      const extra = {
        currentDataSource: tableProps.dataSource || [],
        action: actionCache[actionCacheKey] || extraOut?.action || 'submit'
      };
      return request(param, filters, sorter, extra).then((res) => ({
        list: res.data,
        total: res.total
      }));
    },
    {
      autoRun: false,
      defaultPageSize: (paginationProp && paginationProp.pageSize) || 10
    }
  );

  const handleChange = React.useCallback(
    (page, filters, sorter, extraInfo) => {
      tableProps.onChange(page, filters, sorter, extraInfo);
      onChange?.(page, filters, sorter, extraInfo);
    },
    [onChange, tableProps]
  );

  const handleReload = React.useCallback(() => {
    actionCache[actionCacheKey] = 'reload';
    refresh();
  }, [actionCacheKey, refresh]);

  const handleReset = React.useCallback(() => {
    actionCache[actionCacheKey] = 'reset';
    if (hasSearch) {
      innerFormRef.current?.resetFields();
      Promise.resolve().then(() => {
        innerFormRef.current?.submit();
      });
    } else {
      pagination.changeCurrent(1);
      actionCache[actionCacheKey] = '';
    }
  }, [actionCacheKey, hasSearch, pagination]);

  const handleSubmit = React.useCallback(() => {
    actionCache[actionCacheKey] = 'submit';
    if (hasSearch) {
      innerFormRef.current?.submit();
    } else {
      pagination.changeCurrent(1);
    }
  }, [actionCacheKey, hasSearch, pagination]);

  // 默认 onReset 中已经重置表单，这里只需触发请求
  const handleDefaultReset = React.useCallback(() => {
    actionCache[actionCacheKey] = 'reset';
    if (hasSearch) {
      innerFormRef.current?.submit();
    } else {
      pagination.changeCurrent(1);
      actionCache[actionCacheKey] = '';
    }
  }, [actionCacheKey, hasSearch, pagination]);

  const handleFinish = React.useCallback(
    (values) => {
      if (actionCache[actionCacheKey] !== 'reset') {
        actionCache[actionCacheKey] = 'submit';
      }
      const [oldParams, ...restParams] = params;
      run(
        {
          ...oldParams,
          current: 1,
          pageSize: pagination.pageSize,
          search: values
        },
        ...restParams
      );
      if (actionCache[actionCacheKey] === 'reset') {
        actionCache[actionCacheKey] = '';
      }
    },
    [actionCacheKey, pagination.pageSize, params, run]
  );

  React.useImperativeHandle(actionRef, () => ({
    reload: handleReload,
    reset: handleReset,
    submit: handleSubmit
  }));

  React.useEffect(() => {
    if (ready && autoRequest) {
      if (hasSearch) {
        Promise.resolve().then(() => {
          innerFormRef.current?.submit();
        });
      } else {
        pagination.changeCurrent(1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRequest, hasSearch, ready]);

  // 删除缓存 action
  React.useEffect(() => {
    return () => {
      delete actionCache[actionCacheKey];
    };
  }, [actionCacheKey]);

  useUpdateEffect(() => {
    onDataSourceChange?.(data.list);
  }, [data]);

  const toolbarDom =
    toolbar || hasToolbarAction ? (
      <div className={`${prefixCls}-toolbar`}>
        <div className={`${prefixCls}-toolbar-content`}>{toolbar}</div>
        {hasToolbarAction && (
          <ToolbarAction config={toolbarActionConfig} className={`${prefixCls}-toolbar-action`} />
        )}
      </div>
    ) : null;

  const tableCardStyle = React.useMemo(() => {
    if (!hasSearch && !extra) {
      return {
        padding: 0
      };
    } else if (paginationProp !== false) {
      return {
        paddingBottom: 8
      };
    } else {
      return {};
    }
  }, [hasSearch, extra, paginationProp]);

  const tableDom = (
    <Card
      bordered={false}
      {...tableCardProps}
      bodyStyle={{ ...tableCardStyle, ...tableCardProps?.bodyStyle }}
    >
      {toolbarRender ? toolbarRender(toolbarDom) : toolbarDom}
      <Table
        loading={loading}
        rowKey={rowKey}
        columns={finalColumns}
        dataSource={tableProps.dataSource}
        pagination={
          paginationProp !== false
            ? {
              ...tableProps.pagination,
              showTotal,
              showSizeChanger: true,
              showQuickJumper: true,
              ...omit(paginationProp, ['current', 'pageSize', 'total'])
            }
            : false
        }
        onChange={handleChange}
        size={size}
        className={tableClassName}
        style={tableStyle}
        {...restProps}
        scroll={{ ...(nowrap ? { x: true } : {}), ...restProps?.scroll }}
      />
    </Card>
  );

  const renderTable = () => (tableRender ? tableRender(props, tableDom) : tableDom);

  const wrapperDefaultStyle = isFullScreen
    ? {
      background: fullScreenBackgroundColor,
      overflow: 'auto',
      padding: !hasSearch && !extra ? 24 : 0
    }
    : {};

  const finallyDom = (
    <TableContext.Provider
      value={{
        size,
        setSize,
        reload: handleReload,
        rootRef,
        isFullScreen,
        setFullScreen,
        columns: currentColumns,
        columnConfigKeys: columnConfigKeys,
        setColumnConfigKeys: setColumnConfigKeys
      }}
    >
      <div
        ref={rootRef}
        className={classnames(
          prefixCls,
          { [`${prefixCls}-nowrap`]: nowrap, [`${prefixCls}-fullscreen`]: isFullScreen },
          className
        )}
        style={{ ...wrapperDefaultStyle, ...style }}
      >
        <Space
          direction="vertical"
          size="middle"
          {...spaceProps}
          style={{ display: 'flex', width: '100%', ...spaceProps?.style }}
        >
          <SearchForm
            formItems={formItems}
            searchItems={searchItems}
            ref={handleInnerFormRef}
            loading={loading}
            onFinish={handleFinish}
            onReset={handleDefaultReset}
            cardProps={formCardProps}
            ready={ready}
            {...form}
          />
          {extra}
          {renderTable()}
        </Space>
      </div>
    </TableContext.Provider>
  );

  if (!toolbarActionConfig.fullScreen) {
    return finallyDom;
  }

  return (
    <ConfigProvider getPopupContainer={() => rootRef.current || document.body}>
      {finallyDom}
    </ConfigProvider>
  );
}

export default BizTable;
