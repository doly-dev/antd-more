import * as React from 'react';
import { Descriptions } from 'antd';
import { BizField } from 'antd-more';

function Demo() {
  return (
    <Descriptions>
      <Descriptions.Item label="空格换行">
        <BizField value="2022-10-10 08:00:00" valueType="text" whitespaceLineBreak />
      </Descriptions.Item>
      {/* <Descriptions.Item label="空格换行空值">
        <BizField value={undefined} valueType="text" whitespaceLineBreak />
        <BizField value={null} valueType="text" whitespaceLineBreak />
        <BizField value={''} valueType="text" whitespaceLineBreak />
      </Descriptions.Item> */}
      <Descriptions.Item label="百分比无值">
        {/* <BizField value={undefined} valueType="percent" />,
        <BizField value={null} valueType="percent" />, */}
        <BizField value={''} valueType="percent" />
      </Descriptions.Item>
      <Descriptions.Item label="百分比默认值">
        <BizField value={''} valueType="percent" defaultValue="/" />
      </Descriptions.Item>
    </Descriptions>
  );
}

export default Demo;
