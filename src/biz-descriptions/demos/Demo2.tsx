import * as React from 'react';
import type { BizDescriptionsColumnItemProps } from 'antd-more';
import { BizDescriptions } from 'antd-more';
import { ApproveStatusOptions } from './constants';

const data = {
  text1: '',
  text2: '这是一段文本',
  text3: '长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本',
  number1: 100,
  number2: 40,
  number3: 10,
  color: 'red',
  date: '2020-10-10 10:00:00',
  startDate: '2020-10-10 10:00:00',
  endDate: '2020-12-12 10:00:00',
  status: '1',
  other: '其他内容',
  image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
  image2: [
    'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
    'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  ]
};

const columns: BizDescriptionsColumnItemProps<typeof data>[] = [
  {
    dataIndex: 'text1',
    title: '空字符串',
    tooltip: '空字符串显示 -',
    valueType: 'text'
  },
  {
    dataIndex: 'text2',
    title: '文本',
    valueType: 'text'
  },
  {
    dataIndex: 'number1',
    title: '金额',
    valueType: 'money'
  },
  {
    dataIndex: 'text3',
    title: '长文本',
    tooltip: '占2列',
    span: 2,
    valueType: 'text'
  },
  {
    dataIndex: 'number2',
    title: '进度条',
    valueType: 'progress'
  },
  {
    dataIndex: 'number3',
    title: '百分比',
    valueType: 'percent'
  },
  {
    dataIndex: 'number3',
    title: '百分比样式',
    valueType: 'percent',
    field: {
      showSymbol: true,
      showColor: true
    }
  },
  {
    dataIndex: 'color',
    title: '颜色',
    valueType: 'color'
  },
  {
    dataIndex: 'color',
    title: '颜色带文本',
    valueType: 'color',
    field: {
      showText: true
    }
  },
  {
    dataIndex: 'date',
    title: '日期',
    valueType: 'date'
  },
  {
    dataIndex: 'date',
    title: '日期时间',
    valueType: 'dateTime'
  },
  {
    dataIndex: 'date',
    title: '时间',
    valueType: 'time'
  },
  {
    dataIndex: 'startDate',
    title: '日期时间区间',
    span: 2,
    valueType: 'dateTimeRange',
    field: (text, { startDate, endDate }) => ({
      formatValue: () => [startDate, endDate]
    })
  },
  {
    dataIndex: 'status',
    title: '状态',
    valueType: 'enum',
    valueEnum: ApproveStatusOptions
  },
  {
    dataIndex: 'status',
    title: '状态',
    valueType: 'enumTag',
    valueEnum: ApproveStatusOptions
  },
  {
    dataIndex: 'status',
    title: '状态',
    valueType: 'enumBadge',
    valueEnum: ApproveStatusOptions
  },
  {
    dataIndex: 'image',
    title: '图片',
    valueType: 'image'
  },
  {
    dataIndex: 'image2',
    title: '多张图片',
    valueType: 'image'
  },
  {
    dataIndex: 'other',
    title: '自定义render1',
    render: (val) => <span style={{ color: 'red' }}>{val}</span>
  },
  {
    title: '自定义render2',
    render: (val, record) => <span style={{ color: 'red' }}>{record.other}</span>
  }
];

const Demo = () => {
  return (
    <BizDescriptions title="标题" tooltip="标题提示文字" dataSource={data} columns={columns} />
  );
};

export default Demo;
