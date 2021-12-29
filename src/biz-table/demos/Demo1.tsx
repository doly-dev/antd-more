import * as React from 'react';
import type { BizTableRequest, BizTableColumnType } from 'antd-more';
import { BizTable } from 'antd-more';
import { divide } from 'util-helpers';
import { getApplyList } from './service';

type DataItem = {
  applyCode: string;
  applicantName: string;
  approverName: string;
  createTime: string;
  approveTime: string;
  money: number;
};

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
    // 写法一，传递给 BizField的参数
    field: {
      formatValue: (value) => divide(value, 100), // 分转元
      prefix: '¥'
    },
    // 写法二，可关联当前数据配置
    // field: (text, record, index) => {
    //   console.log(text, record, index);
    //   return {
    //     formatValue: value => divide(value, 100), // 分转元
    //     prefix: `${record.applicantName} `,
    //   }
    // },
    order: 2
  },
  {
    dataIndex: 'createTime',
    title: '提交时间',
    valueType: 'dateTime',
    search: {
      valueType: 'date'
    },
    order: 2
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
      colProps: { lg: 12, md: 24 }
    },
    order: 10
  },
  {
    dataIndex: 'approverName',
    title: '审核员',
    search: true
  }
];

const Demo = () => {
  const handleRequest: BizTableRequest<DataItem> = React.useCallback(
    (params, filters, sorter, extra) => {
      const { pageSize, current, ...restParams } = params;
      console.log(params, filters, sorter, extra);

      return getApplyList({
        page: {
          pageSize,
          pageNum: current
        },
        data: restParams
      }).then((res: any) => {
        return {
          total: res.pageInfo.total,
          ...res
        };
      });
    },
    []
  );

  return (
    <BizTable<DataItem>
      columns={columns}
      rowKey="applyCode"
      request={handleRequest}
      toolbarAction
    />
  );
};

export default Demo;
