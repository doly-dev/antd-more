import * as React from 'react';
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

const Demo = () => {
  return (
    <BizDescriptions title="标题" tooltip="标题提示文字">
      <BizDescriptions.Item label="空字符串" valueType="text" tooltip="空字符串显示 -">
        {data.text1}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="空字符串" valueType="text">
        {data.text2}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="金额" valueType="money">
        {data.number1}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="长文本" valueType="text" span={2} tooltip="占2列">
        {data.text3}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="进度条" valueType="progress">
        {data.number2}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="百分比" valueType="percent">
        {data.number3}
      </BizDescriptions.Item>
      <BizDescriptions.Item
        label="百分比样式"
        valueType="percent"
        field={{
          showSymbol: true,
          showColor: true
        }}
      >
        {data.number3}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="颜色" valueType="color">
        {data.color}
      </BizDescriptions.Item>
      <BizDescriptions.Item
        label="颜色"
        valueType="color"
        field={{
          showText: true
        }}
      >
        {data.color}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="日期" valueType="date">
        {data.date}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="日期时间" valueType="dateTime">
        {data.date}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="时间" valueType="time">
        {data.date}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="日期时间区间" valueType="dateTimeRange" span={2}>
        {[data.startDate, data.endDate]}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="状态" valueType="enum" valueEnum={ApproveStatusOptions}>
        {data.status}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="状态" valueType="enumTag" valueEnum={ApproveStatusOptions}>
        {data.status}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="状态" valueType="enumBadge" valueEnum={ApproveStatusOptions}>
        {data.status}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="图片" valueType="image">
        {data.image}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="多张图片" valueType="image">
        {data.image2}
      </BizDescriptions.Item>
    </BizDescriptions>
  );
};

export default Demo;
