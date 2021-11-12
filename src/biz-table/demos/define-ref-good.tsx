import * as React from 'react';
import { BizTable } from 'antd-more';
import type {
  BizTableActionType,
  BizTableProps,
  BizTableRequest,
  BizTableColumnType
} from 'antd-more';

const mockData = [{ name: '' }, { name: '张三' }, { name: '李四' }];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const request: BizTableRequest = (params) => {
  // const { current, pageSize, ...restParams } = params;
  return new Promise((resolve) => {
    // console.log(restParams);
    setTimeout(() => resolve({ data: mockData }), 2000);
  });
};

// 部分场景下外部封装BizTable中使用操作，推荐
const DefineTable: React.FC<BizTableProps> = ({ actionRef, ...restProps }) => {
  const columns: BizTableColumnType = React.useMemo(
    () => [
      {
        title: '序号',
        valueType: 'indexBorder'
      },
      {
        title: '名字',
        dataIndex: 'name',
        valueType: 'text'
      },
      {
        title: '操作',
        render: () => <a onClick={actionRef.current.reload}>刷新</a>
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    ],
    [actionRef]
  );

  return (
    <BizTable
      columns={columns}
      request={request}
      pagination={false}
      rowKey="name"
      actionRef={actionRef}
      {...restProps}
    />
  );
};

// 页面
const Demo = () => {
  const actionRef = React.useRef<BizTableActionType | undefined>();

  // 正常使用 actionRef
  // React.useEffect(() => {
  //   actionRef.current.reload();
  // }, []);

  return <DefineTable actionRef={actionRef} />;
};

export default Demo;
