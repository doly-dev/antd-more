import React from 'react';
import { BizForm, BizFormItemCascader } from 'antd-more';
import { getPC } from 'lcn';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
];

const pc = getPC();

function Demo() {
  return (
    <BizForm
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <BizFormItemCascader label="默认" name="cascader1" options={options} />
      <BizFormItemCascader label="必填" name="cascader2" options={options} required />
      <BizFormItemCascader
        label="多选必填"
        name="cascader3"
        options={options}
        required
        cascaderProps={{ multiple: true }}
      />
      <BizFormItemCascader
        label="省市"
        names={['province', 'city']}
        tooltip="通过设置names自动拆分转化字段名"
        options={pc}
        fieldNames={{
          value: 'code',
          label: 'name'
        }}
      />
    </BizForm>
  );
}

export default Demo;
