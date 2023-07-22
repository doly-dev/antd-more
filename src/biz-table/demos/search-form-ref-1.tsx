import * as React from 'react';
import type { FormInstance } from 'antd';
import type { BizTableRequest, BizTableColumnType, BizTableActionType } from 'antd-more';
import { BizTable } from 'antd-more';
import { divide } from 'util-helpers';
import { getApplyList } from './service';
import type { DataItem } from './service';

const columns: BizTableColumnType<DataItem> = [
  {
    valueType: 'indexBorder'
  },
  {
    dataIndex: 'applyCode',
    title: '申请编号',
    tooltip: '提示文字',
    search: true
  },
  {
    dataIndex: 'money',
    title: '金额',
    valueType: 'money',
    align: 'right',
    // 传递给 BizField的参数
    field: {
      formatValue: (value) => divide(value, 100), // 分转元
      prefix: '¥'
    }
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
  }
];

const Demo = () => {
  // 查询表单实例引用
  const formRef = React.useRef<FormInstance>();
  // 操作引用
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

  React.useEffect(() => {
    // 设置查询表单值
    formRef.current.setFieldsValue({
      approverName: '123',
      createTime: '2021-10-28',
      approveTime: ['2021-10-28 00:00:00', '2021-10-28 23:59:59']
    });

    // 手动发起请求
    actionRef.current.submit();
  }, []);

  return (
    <BizTable
      request={request}
      columns={columns}
      rowKey="applyCode"
      pagination={{ pageSize: 5 }}
      toolbarAction
      // 关闭自动请求
      autoRequest={false}
      formRef={formRef}
      actionRef={actionRef}
    />
  );
};

export default Demo;
