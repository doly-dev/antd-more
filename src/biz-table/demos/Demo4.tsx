import * as React from 'react';
import type { BizTableRequest, BizTableColumnType } from 'antd-more';
import { BizTable } from 'antd-more';
import { getPC } from 'lcn';
import { getApplyList } from './service';
import type { DataItem } from './service';
import { ApproveStatusOptions } from './constants';

const pcOptions = getPC({
  inland: true,
  fieldNames: { code: 'value', name: 'label' }
});

const columns: BizTableColumnType<DataItem> = [
  {
    dataIndex: 'applyCode',
    title: '申请编号',
    tooltip: '提示文字',
    search: true // 无 valueType，默认为 ItemInput
  },
  {
    dataIndex: 'createTime',
    title: '提交时间',
    search: {
      itemType: 'date' // 日期
    }
  },
  {
    dataIndex: 'applicantName',
    title: '经办员'
  },
  {
    dataIndex: 'dateTimeRange',
    title: '日期时间区间',
    tooltip: '提示文字',
    sorter: true,
    search: {
      valueType: 'dateTimeRange', // 日期范围，当valueType不满足时，使用 itemType 指定 formItem 类型
      names: ['startTime', 'endTime'],
      initialValue: ['2020-10-10 00:00:00', '2020-11-11 11:11:11'],
      colProps: { lg: 12, md: 24 },
      order: 9
    },
    table: false
  },
  {
    dataIndex: 'approverName',
    title: '审核员',
    search: true,
    table: false
  },
  {
    dataIndex: 'money',
    valueType: 'money', // progress percent 一样
    title: '数字',
    search: true,
    table: false
  },
  {
    dataIndex: 'color',
    valueType: 'color',
    title: '颜色',
    search: true,
    table: false
  },
  {
    dataIndex: 'select',
    valueType: 'enum', // enumTag enumBadge 一样
    valueEnum: ApproveStatusOptions,
    title: '选择器',
    search: {
      all: true,
      initialValue: ''
    },
    table: false
  },
  {
    dataIndex: 'radio',
    valueType: 'enum',
    valueEnum: ApproveStatusOptions,
    title: '单选框',
    search: {
      itemType: 'radio',
      all: true,
      initialValue: '',
      colProps: { lg: 24, md: 24 }
    },
    table: false
  },
  {
    dataIndex: 'checkbox',
    valueType: 'enum',
    valueEnum: ApproveStatusOptions,
    title: '多选框',
    search: {
      itemType: 'checkbox',
      all: true,
      colProps: { lg: 24, md: 24 }
    },
    table: false
  },
  {
    dataIndex: 'dateWeek',
    valueType: 'dateWeek',
    title: '周',
    search: {
      order: 1
    },
    table: false
  },
  {
    dataIndex: 'dateMonth',
    valueType: 'dateMonth',
    title: '月',
    search: {
      order: 2
    },
    table: false
  },
  {
    dataIndex: 'dateQuarter',
    valueType: 'dateQuarter',
    title: '季',
    search: {
      order: 3
    },
    table: false
  },
  {
    dataIndex: 'dateYear',
    valueType: 'dateYear',
    title: '年',
    search: {
      order: 4
    },
    table: false
  },
  {
    dataIndex: 'dateTime',
    valueType: 'dateTime',
    title: '日期时间',
    search: {
      order: 5
    },
    table: false
  },
  {
    dataIndex: 'time',
    valueType: 'time',
    title: '时间',
    search: {
      order: 6
    },
    table: false
  },
  {
    dataIndex: 'dateRange',
    valueType: 'dateRange',
    title: '日期区间',
    search: {
      colProps: { lg: 12, md: 24 },
      order: 7
    },
    table: false
  },
  {
    dataIndex: 'timeRange',
    valueType: 'timeRange',
    title: '时间区间',
    search: {
      colProps: { lg: 12, md: 24 },
      order: 8
    },
    table: false
  },
  {
    dataIndex: 'slider',
    title: '自定义滑动条',
    search: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // render: ({ dataIndex, title }, dom, form) => (
      //   <BizFormItem name={dataIndex} label={title as string} colProps={{ lg: 12, md: 24 }}>
      //     <Slider />
      //   </BizFormItem>
      // ),
      itemType: 'slider',
      order: 10
    },
    table: false
  },
  {
    dataIndex: 'cascader',
    title: '省市',
    search: {
      itemType: 'cascader',
      options: pcOptions,
      colProps: { lg: 12, md: 24 },
      order: 11
    },
    table: false
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
      pagination={{
        pageSize: 5
      }}
      form={{
        labelWidth: 112
      }}
    />
  );
};

export default Demo;
