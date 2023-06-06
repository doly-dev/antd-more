import * as React from 'react';
import type { FormInstance } from 'antd';
import { Button, Card, Space, message } from 'antd';
import type { BizTableActionType, BizTableRequest, BizTableColumnType } from 'antd-more';
import { BizTable } from 'antd-more';
import { getApplyList } from './service';
import type { DataItem } from './service';
import { ApproveStatusOptions } from './constants';

const columns: BizTableColumnType<DataItem> = [
  {
    dataIndex: 'applyCode',
    title: '申请编号',
    search: true,
    table: false
  },
  {
    dataIndex: 'createTime',
    title: '提交时间',
    search: {
      valueType: 'date'
    }
  },
  {
    dataIndex: 'approveTime',
    title: '审核时间',
    sorter: true,
    valueType: 'dateTime',
    search: {
      valueType: 'dateTimeRange',
      names: ['startTime', 'endTime'],
      colProps: { lg: 12, md: 24 },
      order: 1
    }
  },
  {
    dataIndex: 'approverName',
    title: '审核员'
  },
  {
    dataIndex: 'approveResult',
    title: '审核状态',
    filters: ApproveStatusOptions.map((item) => ({ text: item.label, ...item })),
    valueType: 'enumBadge',
    valueEnum: ApproveStatusOptions,
    search: {
      name: 'approveStatus',
      all: true,
      initialValue: ''
    }
  }
];

const Demo = () => {
  const formRef = React.useRef<FormInstance>();
  const actionRef = React.useRef<BizTableActionType>();
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

  const currentColumns = React.useMemo(
    () => [
      ...columns,
      {
        title: '操作',
        render: () => (
          <Space size="middle">
            <a
              onClick={() => {
                actionRef.current?.reload();
              }}
            >
              reload
            </a>
            <a
              onClick={() => {
                actionRef.current?.submit();
              }}
            >
              submit
            </a>
            <a
              onClick={() => {
                actionRef.current?.reset();
              }}
            >
              reset
            </a>
          </Space>
        )
      }
    ],
    []
  );

  return (
    <BizTable<DataItem>
      request={request}
      columns={currentColumns}
      rowKey="applyCode"
      pagination={{
        pageSize: 5
      }}
      formRef={formRef}
      actionRef={actionRef}
      form={{
        submitter: {
          render: (_, submitterDom) => {
            return (
              <Space>
                {submitterDom}
                <Button key="export" onClick={() => message.success('点击导出按钮')}>
                  导出
                </Button>
              </Space>
            );
          }
        },
        defaultColsNumber: 1
      }}
      toolbar={
        <Space>
          <Button type="primary" onClick={() => message.success('点击新增按钮')}>
            新增
          </Button>
          <Button
            onClick={() => {
              formRef.current.setFieldsValue({ applyCode: '12345' });
            }}
          >
            赋值
          </Button>
        </Space>
      }
      toolbarAction
      fullScreenBackgroundColor="#f5f5f5"
      extra={<Card bordered={false}>Extra Block!</Card>}
    />
  );
};

export default Demo;
