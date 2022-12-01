import * as React from 'react';
import { BizForm, BizFormItemNumber } from 'antd-more';

const Demo = () => {
  return (
    <BizForm
      name="form-item-number-1"
      onFinish={(values) => {
        console.log(values);
      }}
      labelWidth={98}
    >
      <BizFormItemNumber label="number1" name="number1" />
      <BizFormItemNumber label="number2" name="number2" required />
      <BizFormItemNumber
        label="金额"
        name="number3"
        precision={2}
        contentAfter="元"
        gte={0}
        lte={10000}
        tooltip="大于等于0，小于等于10000"
        required
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      />
      <BizFormItemNumber
        label="费率"
        name="number4"
        precision={2}
        contentAfter="%"
        gt={0}
        lt={6}
        tooltip="大于0，小于6"
        required
      />
    </BizForm>
  );
};

export default Demo;
