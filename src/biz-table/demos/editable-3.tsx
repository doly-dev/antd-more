import * as React from 'react';
import { Button } from 'antd';
import type { EditableBizTableActionType, BizTableColumnType } from 'antd-more';
import { BizTable } from 'antd-more';
import Mock from 'mockjs';

const defaultData = Mock.mock({
  'list|2-5': [
    {
      'id|+1': 1,
      'age|1-99': 20,
      name: '@cname',
      birthday: '@date'
    }
  ]
}).list;

const { EditableBizTable } = BizTable;

const Demo = () => {
  const [dataSource, setDataSource] = React.useState(defaultData);
  const [editableKeys, setEditableKeys] = React.useState(() => defaultData.map((item) => item.id));
  const editableActionRef = React.useRef<EditableBizTableActionType>();

  const columns: BizTableColumnType = [
    {
      valueType: 'indexBorder',
      title: '序号',
      width: 50
    },
    {
      dataIndex: 'name',
      title: '名字',
      width: 150
    },
    {
      dataIndex: 'age',
      title: '年龄',
      width: 150,
      editable: {
        itemType: 'number',
        precision: 0
      }
    },
    {
      dataIndex: 'birthday',
      title: '生日',
      valueType: 'date'
    },
    {
      title: '操作',
      width: 160,
      render: (_, record) => <a onClick={() => editableActionRef.current.delete(record.id)}>删除</a>
    }
  ];

  return (
    <>
      <EditableBizTable
        value={dataSource}
        onValuesChange={(values) => {
          console.log('onValuesChange ', values);
          setDataSource(values);
        }}
        columns={columns}
        rowKey="id"
        size="middle"
        bordered
        editable={{
          editableKeys,
          editableActionRef,
          onChange: setEditableKeys
        }}
      />
      <Button
        type="dashed"
        block
        onClick={() => editableActionRef.current.add({ id: Date.now() })}
        style={{ margin: '10px 0' }}
      >
        添加一行数据
      </Button>
    </>
  );
};

export default Demo;
