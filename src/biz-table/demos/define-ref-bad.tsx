import * as React from 'react';
import type {
  BizTableActionType,
  BizTableProps,
  BizTableRequest,
  BizTableColumnType
} from 'antd-more';
import { BizTable } from 'antd-more';
import { sleep } from 'ut2';

const mockData = [{ name: '' }, { name: '张三' }, { name: '李四' }];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const request: BizTableRequest = async (params) => {
  // const { current, pageSize, ...restParams } = params;
  await sleep();
  return { data: mockData };
};

// 外部封装的BizTable 含 ref ，不推荐
export interface DefineTableProps extends BizTableProps {
  ref?:
  | React.MutableRefObject<BizTableActionType | undefined>
  | ((actionRef: BizTableActionType) => void);
}

const DefineTable: React.FC<DefineTableProps> = React.forwardRef((props, ref) => {
  const innerActionRef = React.useRef<BizTableActionType>();

  React.useImperativeHandle(ref, () => innerActionRef.current);

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
        render: () => <a onClick={innerActionRef.current.reload}>刷新</a>
      }
    ],
    []
  );

  return (
    <BizTable
      columns={columns}
      request={request}
      pagination={false}
      rowKey="name"
      actionRef={innerActionRef}
      {...props}
    />
  );
});

// 页面
const Demo = () => {
  const actionRef = React.useRef<BizTableActionType>();

  // 额外的ref使用，不推荐
  // React.useEffect(() => {
  //   actionRef.current.reload();
  // }, []);

  return <DefineTable ref={actionRef} />;
};

export default Demo;
