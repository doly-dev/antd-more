import * as React from 'react';
import { Button, Space } from 'antd';
import type { EditableBizTableActionType, BizTableColumnType } from 'antd-more';
import { BizTable, BizFormItemTextArea } from 'antd-more';
import Mock from 'mockjs';
import { ApproveStatusOptions } from './constants';

const defaultData = Mock.mock({
  'list|2-5': [
    {
      'id|+1': 1,
      'age|1-99': 20,
      name: '@cname',
      birthday: '@date',
      'status|1': ["1", "2", "3"]
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
      width: 150,
      valueType: 'text',
      tooltip: '第一行自定义渲染',
      editable: (_, record, index) => {
        if (index !== 0) {
          return {};
        }

        return {
          // 自定义渲染
          render: () => (
            <BizFormItemTextArea
              name={[record.id, 'name']}
              initialValue={record.name}
              label="名字"
              style={{ margin: '-5px 0' }}
            />
          )
        };
      }
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
      dataIndex: 'status',
      title: '审核状态',
      tooltip: '单数行编辑时为选择器',
      valueType: 'enumBadge',
      valueEnum: ApproveStatusOptions,
      editable: (_, record, index) => ({
        itemType: index % 2 === 0 ? 'select' : 'radio'
      })
    },
    {
      title: '操作',
      width: 160,
      render: (_, record, index) => {
        return (
          <Space>
            {editableKeys.includes(record.id) ? (
              <>
                <a onClick={() => editableActionRef.current.save(record.id)}>保存</a>
                <a
                  onClick={() => {
                    editableActionRef.current.setFields(record.id, { name: 'test', age: 18 });
                  }}
                >
                  赋值
                </a>
                <a
                  onClick={() => {
                    editableActionRef.current.reset(record.id);
                  }}
                >
                  重置
                </a>
                <a onClick={() => editableActionRef.current.cancel(record.id)}>取消</a>
              </>
            ) : (
              <>
                <a onClick={() => editableActionRef.current.edit(record.id)}>编辑</a>
                <a
                  onClick={() => {
                    editableActionRef.current.add({ id: Date.now() }, index + 1);
                  }}
                >
                  插入
                </a>
                <a onClick={() => editableActionRef.current.delete(record.id)}>删除</a>
              </>
            )}
          </Space>
        );
      }
    }
  ];

  return (
    <EditableBizTable
      value={dataSource}
      onChange={(values) => {
        console.log('onChange ', values);
        setDataSource(values);
      }}
      columns={columns}
      rowKey="id"
      size="middle"
      bordered
      toolbar={
        <Space>
          <Button
            type="primary"
            onClick={() => editableActionRef.current.add({ id: Date.now() }, 0)}
          >
            顶部新增
          </Button>
          <Button type="primary" onClick={() => editableActionRef.current.add({ id: Date.now() })}>
            底部新增
          </Button>
          <Button onClick={() => editableActionRef.current.reset()}>重置表单</Button>
        </Space>
      }
      editable={{
        editableKeys,
        editableActionRef,
        onChange: setEditableKeys,
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
  );
};

export default Demo;
