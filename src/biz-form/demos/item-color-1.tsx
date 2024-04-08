import * as React from 'react';
import { BizForm, BizFormItemColor } from 'antd-more';

const Demo = () => {
  return (
    <BizForm
      name="form-item-color-1"
      onFinish={(values) => {
        console.log(values);
      }}
      labelWidth={98}
    >
      <BizFormItemColor label="颜色" name="color1" showText />
      <BizFormItemColor label="rgb" name="color2" showText colorMode="rgb" />
      <BizFormItemColor label="hover" name="color3" colorProps={{ trigger: 'hover' }} />
      <BizFormItemColor label="颜色必选" name="color4" required />
      <BizFormItemColor label="不同尺寸" name="color5" size="middle" />
    </BizForm>
  );
};

export default Demo;
