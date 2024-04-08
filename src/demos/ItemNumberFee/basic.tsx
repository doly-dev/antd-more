import * as React from 'react';
import { BizForm } from 'antd-more';
import ItemNumberFee from '../components/ItemNumberFee';

function Demo() {
  return (
    <BizForm
      labelWidth={98}
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <ItemNumberFee
        label="微信扫码"
        name="wxscanRate"
        beforeValue={0.21}
        gte={0.21}
        lte={0.42}
        required
        tooltip="当前值范围大于等于0.21，小于等于0.42"
      />
    </BizForm>
  );
}

export default Demo;
