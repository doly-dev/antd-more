import * as React from 'react';
import type { BizTableRequest, BizTableColumnType } from 'antd-more';
import { BizTable } from 'antd-more';
import { renderMoney, renderStatusWithRemark } from './utils/field';
import { getApplyList } from './service';
import type { DataItem } from './service';
import { ApproveStatus, ApproveStatusOptions } from './constants';

const columns: BizTableColumnType<DataItem> = [
  {
    valueType: 'indexBorder'
  },
  {
    dataIndex: 'applyCode',
    title: '申请编号',
    tooltip: '提示文字'
  },
  {
    dataIndex: 'money',
    title: '金额',
    align: 'right',
    render: renderMoney
  },
  {
    dataIndex: 'createTime',
    title: '提交时间',
    field: {
      valueType: 'text',
      whitespaceLineBreak: true
    },
    search: {
      valueType: 'date',
      order: 1
    }
  },
  {
    dataIndex: 'applicantName',
    title: '经办员',
    search: true
  },
  {
    dataIndex: 'approveTime',
    title: '审核时间',
    tooltip: '提示文字',
    sorter: true,
    valueType: 'dateTime',
    field: {
      valueType: 'text',
      whitespaceLineBreak: true
    }
  },
  {
    dataIndex: 'approveResult',
    title: '审核状态',
    render: (text, record) => {
      return renderStatusWithRemark(
        text,
        ApproveStatusOptions,
        text === ApproveStatus.Refused && record.remark ? record.remark : ''
      );
    }
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
    <BizTable request={request} columns={columns} rowKey="applyCode" pagination={{ pageSize: 5 }} />
  );
};

export default Demo;
