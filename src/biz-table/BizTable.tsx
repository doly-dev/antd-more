import * as React from 'react';
import { Table, Card, Space, ConfigProvider } from 'antd';
import type { TableProps, SpaceProps, CardProps, FormInstance } from 'antd';
import classnames from 'classnames';
import type { AsyncOptions } from 'rc-hooks';
import { useUpdateEffect, usePagination } from 'rc-hooks';
import { isEmpty, omit } from 'ut2';
import type { SearchFormProps } from './SearchForm';
import SearchForm from './SearchForm';
import type { BizFormExtraInstance, QueryFormProps } from '../biz-form';
import BizField from '../biz-field';
import WithTooltip from '../biz-descriptions/WithTooltip';
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
import { useConfig } from '../biz-config-provider';

import './index.less';

const prefixCls = 'antd-more-table';

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
  asyncOptions?: Pick<
    AsyncOptions,
    | 'cacheKey'
    | 'cacheTime'
    | 'pollingInterval'
    | 'pollingWhenHidden'
    | 'refreshOnWindowFocus'
    | 'focusTimespan'
  >;
  compact?: boolean; // 去掉表格容器的阴影、内间距，一般只有纯表格的情况下使用。

  // 以下供 EditableBizTable 使用
  editableKeys?: (string | number)[];
  editableForm?: FormInstance;
  editableKeyMapRef?: React.MutableRefObject<{ value: object }>;
  onDataSourceChange?: (newData: RecordType[]) => void;
}

function BizTable<RecordType extends object = any>(props: BizTableProps<RecordType>) {
  const { locale, bizTable: contextProps } = useConfig();
  const mergeProps = { ...contextProps, ...props };
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
    asyncOptions,
    compact = false,

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
  } = mergeProps;

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

  const innerFormExtraRef = React.useRef<BizFormExtraInstance>();
  const handleInnerFormExtraRef = React.useCallback(
    (refValue: BizFormExtraInstance) => {
      innerFormExtraRef.current = refValue;

      if (form?.formExtraRef) {
        if (typeof form.formExtraRef === 'function') {
          form.formExtraRef(refValue);
        } else {
          form.formExtraRef.current = refValue;
        }
      }
    },
    [form]
  );

  const columnsWithKey = React.useMemo(() => {
    function recursion(arr: any[] = [], parentKey: React.Key = '') {
      const tmpColumns: any[] = [];
      arr.forEach((item, index) => {
        const key = getColumnKey(item, index, parentKey);
        const newItem = { ...item, key };
        if (!isEmpty(newItem?.children)) {
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
              originItem: item
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
  const [columnConfigKeys, setColumnConfigKeys] = React.useState<ColumnConfigKeys>(() =>
    currentColumns.map((item) => item.key)
  );

  useUpdateEffect(() => {
    setColumnConfigKeys(currentColumns.map((item) => item.key));
  }, [currentColumns]);

  const finalColumns = React.useMemo(() => {
    if (!Array.isArray(columnConfigKeys)) {
      return currentColumns;
    }
    const tmpColumns: any[] = [];
    columnConfigKeys.forEach((key) => {
      const columnItem = currentColumns.find((item) => item?.key === key);
      if (columnItem) {
        tmpColumns.push(columnItem);
      }
    });
    return tmpColumns;
  }, [currentColumns, columnConfigKeys]);

  React.useEffect(() => {
    if (Array.isArray(editableKeys)) {
      const delKeys = Object.keys(editableKeyMap.current).filter(
        (item) => !editableKeys.find((k) => k === item)
      );
      delKeys.forEach((k) => {
        delete editableKeyMap.current[k];
      });
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

  const { data, loading, run, refresh, tableProps, params, pagination } = usePagination<RecordType>(
    (arg) => {
      const {
        current,
        pageSize,
        search,
        filters = {},
        sorter = {},
        extra: outExtra = {},
        ...restArg
      } = arg;
      const param = { current, pageSize, ...search, ...restArg };
      const extra = {
        currentDataSource: tableProps.dataSource || [],
        action: outExtra?.action || 'paginate'
      };
      if (!autoRequest && !request) {
        const { dataSource = [] } = restProps;
        return Promise.resolve({
          list: dataSource,
          total: dataSource.length
        });
      }
      return request(param, filters, sorter, extra).then((res) => ({
        list: res.data,
        total: res.total
      }));
    },
    {
      ...asyncOptions,
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

  const handleReset = React.useCallback(() => {
    if (hasSearch) {
      innerFormRef.current?.resetFields();
      Promise.resolve().then(() => {
        innerFormRef.current?.submit();
      });
    } else {
      pagination.changeCurrent(1);
    }
  }, [hasSearch, pagination]);

  const handleSubmit = React.useCallback(() => {
    if (hasSearch) {
      innerFormRef.current?.submit();
    } else {
      pagination.changeCurrent(1);
    }
  }, [hasSearch, pagination]);

  const handleSubmitAndCurrent = React.useCallback(
    (current: number) => {
      const [oldParams, ...restParams] = params;
      const formValues = hasSearch ? innerFormExtraRef.current.getTransformFieldsValue() : {};
      return run(
        {
          ...oldParams,
          current,
          pageSize: pagination.pageSize,
          search: formValues
        },
        ...restParams
      );
    },
    [hasSearch, pagination.pageSize, params, run]
  );

  // 默认 onReset 中已经重置表单，这里只需触发请求
  const handleDefaultReset = React.useCallback(() => {
    if (hasSearch) {
      innerFormRef.current?.submit();
    } else {
      pagination.changeCurrent(1);
    }
  }, [hasSearch, pagination]);

  const handleFinish = React.useCallback(
    (values) => {
      const [oldParams, ...restParams] = params;
      return run(
        {
          ...oldParams,
          current: 1,
          pageSize: pagination.pageSize,
          search: values
        },
        ...restParams
      );
    },
    [pagination.pageSize, params, run]
  );

  React.useImperativeHandle(actionRef, () => ({
    reload: refresh,
    reset: handleReset,
    submit: handleSubmit,
    submitAndCurrent: handleSubmitAndCurrent
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
    return paginationProp !== false
      ? {
          paddingBottom: 8
        }
      : {};
  }, [paginationProp]);

  const tableDom = (
    <Card
      bordered={false}
      {...tableCardProps}
      className={classnames({ [`${prefixCls}-compact`]: compact }, tableCardProps?.className)}
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
                showTotal: locale.table.pagination.total,
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

  const renderTable = () => (tableRender ? tableRender(mergeProps as any, tableDom) : tableDom);

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
        reload: refresh,
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
            onFinish={handleFinish}
            onReset={handleDefaultReset}
            cardProps={formCardProps}
            loading={loading}
            ready={ready}
            {...form}
            formExtraRef={handleInnerFormExtraRef}
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
