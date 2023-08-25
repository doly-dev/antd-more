import * as React from 'react';
import type { BizTableRequest, BizTableColumnType } from 'antd-more';
import { BizTable } from 'antd-more';
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
    dataIndex: 'createTime',
    title: '提交时间',
    valueType: 'dateTime',
    search: {
      valueType: 'date'
    },
    order: 1
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

  return (
    <BizTable
      request={request}
      columns={columns}
      rowKey="applyCode"
      toolbarAction
    />
  );
};

export default Demo;
