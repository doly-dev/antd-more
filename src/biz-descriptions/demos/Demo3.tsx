import * as React from 'react';
import type { BizDescriptionsColumnItemProps } from 'antd-more';
import { BizDescriptions } from 'antd-more';

const data = {
  text1: '',
  text2: '这是一段文本',
  text3: '长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本',
  number1: 100
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
  }
];

const Demo = () => {
  return (
    <BizDescriptions<typeof data> dataSource={data} columns={columns}>
      <BizDescriptions.Item label="Label1" valueType="text">
        {''}
      </BizDescriptions.Item>
      <BizDescriptions.Item label="Label2" span={2}>
        测试文本
      </BizDescriptions.Item>
    </BizDescriptions>
  );
};

export default Demo;
