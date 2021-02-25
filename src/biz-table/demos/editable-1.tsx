import * as React from 'react';
import { Space, Button } from 'antd';
import { BizTable } from 'antd-more';
import { EditableActionType } from 'antd-more/es/biz-table';
import Mock from 'mockjs';
import { ApproveStatus } from './constants';

const defaultData = Mock.mock({
  'list|2-5': [{
    'id|+1': 1,
    'age|1-99': 20,
    'name': '@cname',
    'birthday': '@DATE',
    'status|1-3': 1
  }]
}).list;

const { EditableBizTable } = BizTable;

const Demo: React.FC = () => {
  const [dataSource, setDataSource] = React.useState(defaultData);
  const [editableKeys, setEditableKeys] = React.useState([]);
  const editableActionRef = React.useRef<EditableActionType>();

  const columns = [
    {
      valueType: "indexBorder",
      title: "序号",
      width: 50,
    },
    {
      dataIndex: "name",
      title: "名字",
      tooltip: "第一行名字不可编辑",
      width: 150,
      editable: (text, record, index) => index !== 0
    },
    {
      dataIndex: "age",
      title: "年龄",
      width: 150,
      editable: {
        itemType: "number",
        precision: 0,
        required: true,
        gte: 1,
        lte: 99
      }
    },
    {
      dataIndex: "birthday",
      title: "生日",
      valueType: "date"
    },
    {
      dataIndex: "status",
      title: "审核状态",
      valueType: "enumBadge",
      valueEnum: ApproveStatus,
      width: 150
    },
    {
      title: "操作",
      width: 120,
      render: (_, record, index) => {
        return (
          <Space>
            {
              editableKeys.includes(record.id) ? (
                <>
                  <a onClick={() => editableActionRef.current.save(record.id)}>保存</a>
                  <a onClick={() => editableActionRef.current.cancel(record.id)}>取消</a>
                </>
              ) : (
                  <>
                    <a onClick={() => editableActionRef.current.edit(record.id)}>编辑</a>
                    <a onClick={() => editableActionRef.current.delete(record.id)}>删除</a>
                  </>
                )
            }
          </Space>
        )
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
          console.log("onChange ", values);
          setDataSource(values);
        }}
        editable={{
          editableKeys,
          onChange: setEditableKeys,
          editableActionRef
        }}
      />
      <Button type="dashed" block onClick={() => editableActionRef.current.add({ id: Date.now() })} style={{ margin: "10px 0" }}>添加一行数据</Button>
    </>
  );
}

export default Demo;