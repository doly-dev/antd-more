import * as React from 'react';
import { Space, Button } from 'antd';
import type { EditableBizTableActionType, BizTableColumnType } from 'antd-more';
import { BizTable } from 'antd-more';
import Mock from 'mockjs';
import { ApproveStatusOptions } from './constants';

const defaultData = Mock.mock({
  'list|2-5': [
    {
      'id|+1': 1,
      'age|1-99': 20,
      name: '@cname',
      birthday: '@date',
      'status|1': ['1', '2', '3']
    }
  ]
}).list;

const { EditableBizTable } = BizTable;

const Demo = () => {
  const [dataSource, setDataSource] = React.useState(defaultData);
  const [editableKeys, setEditableKeys] = React.useState([]);
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
      tooltip: '第一行名字不可编辑',
      width: 150,
      editable: (text, record, index) => index !== 0
    },
    {
      dataIndex: 'age',
      title: '年龄',
      width: 150,
      editable: {
        itemType: 'number',
        precision: 0,
        required: true,
        gte: 1,
        lte: 99
      }
    },
    {
      dataIndex: 'birthday',
      title: '生日',
      valueType: 'date'
    },
    {
      dataIndex: 'status',
      title: '审核状态',
      valueType: 'enumBadge',
      valueEnum: ApproveStatusOptions,
      width: 150
    },
    {
      title: '操作',
      width: 120,
      render: (_, record) => {
        return (
          <Space>
            {editableKeys.includes(record.id) ? (
              <>
                <a onClick={() => editableActionRef.current.save(record.id)}>保存</a>
                <a onClick={() => editableActionRef.current.cancel(record.id)}>取消</a>
              </>
            ) : (
              <>
                <a onClick={() => editableActionRef.current.edit(record.id)}>编辑</a>
                <a onClick={() => editableActionRef.current.delete(record.id)}>删除</a>
              </>
            )}
          </Space>
        );
      }
    }
  ];

  return (
    <>
      <EditableBizTable
        rowKey="id"
        columns={columns}
        value={dataSource}
        onChange={(values) => {
          console.log('onChange ', values);
          setDataSource(values);
        }}
        editable={{
          editableKeys,
          onChange: setEditableKeys,
          editableActionRef,
          onSave: async (rowKey, record, isNewRecord) => {
            console.log(`保存${isNewRecord ? '新增' : '已有'}的数据`, rowKey, record);
            // return Promise.reject(); // 如果返回Project.reject即保存失败，自动保留当前的状态
          },
          onDelete: async (rowKey, record, isNewRecord) => {
            // 新增的数据如果没有保存过，取消时会触发删除
            console.log(`删除${isNewRecord ? '新增' : '已有'}的数据`, rowKey, record);
            // return Promise.reject(); // 如果返回Project.reject即删除失败，自动保留当前的状态
          }
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
