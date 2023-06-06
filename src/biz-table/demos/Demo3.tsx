import * as React from 'react';
import type { BizTableRequest, BizTableColumnType } from 'antd-more';
import { BizTable } from 'antd-more';
import { getApplyList } from './service';
import type { DataItem } from './service';

const columns: BizTableColumnType<DataItem> = [
  {
    dataIndex: 'applyCode',
    title: '申请编号'
  },
  {
    dataIndex: 'createTime',
    title: '提交时间'
  },
  {
    dataIndex: 'applicantName',
    title: '经办员'
  },
  {
    dataIndex: 'approveTime',
    title: '审核时间',
    sorter: true
  },
  {
    dataIndex: 'approverName',
    title: '审核员'
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
    <BizTable<DataItem>
      request={request}
      columns={columns}
      rowKey="applyCode"
      pagination={{
        pageSize: 5
      }}
    />
  );
};

export default Demo;
