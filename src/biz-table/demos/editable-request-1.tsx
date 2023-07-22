import * as React from 'react';
import { Space } from 'antd';
import type { BizTableRequest, BizTableColumnType, EditableBizTableActionType } from 'antd-more';
import { BizTable } from 'antd-more';
import { getApplyList } from './service';

type DataItem = {
  applyCode: string;
  applicantName: string;
  approverName: string;
  createTime: string;
  approveTime: string;
};

const { EditableBizTable } = BizTable;

const Demo = () => {
  const [editableKeys, setEditableKeys] = React.useState([]);
  const editableActionRef = React.useRef<EditableBizTableActionType>();

  const request: BizTableRequest<DataItem> = (params, filters, sorter, extra) => {
    const { pageSize, current, ...restParams } = params;
    console.log(params, filters, sorter, extra);

    return getApplyList({
      page: {
        pageSize,
        pageNum: current
      },
      data: restParams
    }).then((res) => {
      return {
        total: res.pageInfo.total,
        data: res.data
      };
    });
  };

  const columns: BizTableColumnType<DataItem> = [
    {
      dataIndex: 'applyCode',
      title: '申请编号',
      tooltip: '提示文字',
      search: true,
      editable: false
    },
    {
      dataIndex: 'createTime',
      title: '提交时间',
      valueType: 'dateTime',
      search: {
        valueType: 'date',
        order: 1
      }
    },
    {
      dataIndex: 'applicantName',
      title: '经办员'
    },
    {
      dataIndex: 'approveTime',
      title: '审核时间',
      tooltip: '提示文字',
      sorter: true,
      valueType: 'dateTime',
      search: {
        valueType: 'dateTimeRange',
        names: ['startTime', 'endTime'],
        colProps: { lg: 12, md: 24 },
        order: 2
      }
    },
    {
      dataIndex: 'approverName',
      title: '审核员',
      search: true
    },
    {
      title: '操作',
      width: 120,
      fixed: 'right',
      render: (_, record) => {
        return (
          <Space>
            {editableKeys.includes(record.applyCode) ? (
              <>
                <a onClick={() => editableActionRef.current.save(record.applyCode)}>保存</a>
                <a onClick={() => editableActionRef.current.cancel(record.applyCode)}>取消</a>
              </>
            ) : (
              <>
                <a onClick={() => editableActionRef.current.edit(record.applyCode)}>编辑</a>
                <a onClick={() => editableActionRef.current.delete(record.applyCode)}>删除</a>
              </>
            )}
          </Space>
        );
      }
    }
  ];

  return (
    <EditableBizTable
      request={request}
      columns={columns}
      rowKey="applyCode"
      pagination={{ pageSize: 5 }}
      onChange={(values) => {
        console.log(values);
      }}
      autoRequest
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
  );
};

export default Demo;
