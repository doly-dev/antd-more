import * as React from 'react';
import type { BizTableRequest, BizTableColumnType } from 'antd-more';
import BizTableWithCache from '../components/BizTableWithCache';
import { getApplyList } from '../../biz-table/demos/service';

function Demo() {
  const request: BizTableRequest = (params, filters, sorter, extra) => {
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

  const columns: BizTableColumnType = [
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

  return (
    <BizTableWithCache
      cacheKey="uniqueCacheKey"
      request={request}
      columns={columns}
      rowKey="applyCode"
    />
  );
}

export default Demo;
