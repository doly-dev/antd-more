import * as React from 'react';
import { BizForm, BizFormItemNumber } from 'antd-more';

const Demo = () => {
  return (
    <BizForm
      name="form-item-number-1"
      onFinish={(values) => {
        console.log(values);
      }}
      labelWidth={126}
    >
      <BizFormItemNumber label="number1" name="number1" />
      <BizFormItemNumber label="number2" name="number2" required />
      <BizFormItemNumber
        label="金额"
        name="number3"
        precision={2}
        addonAfter="元"
        gte={0}
        lte={10000}
        tooltip="大于等于0，小于等于10000"
        required
        inputProps={{
          formatter: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
          parser: (value) => value!.replace(/\$\s?|(,*)/g, '')
        }}
      />
      <BizFormItemNumber
        label="费率"
        name="number4"
        precision={2}
        addonAfter="%"
        gt={0}
        lt={6}
        tooltip="大于0，小于6"
        required
      />
      <BizFormItemNumber
        label="费率向下舍入"
        name="number5"
        precision={2}
        addonAfter="%"
        gt={0}
        lt={6}
        tooltip="数字精度向下舍入"
        useFloor
        required
      />
      <BizFormItemNumber
        label="费率n位小数"
        name="number6"
        maxPrecision={1}
        addonAfter="%"
        gt={0}
        lt={6}
        tooltip="支持n位小数"
        required
      />
    </BizForm>
  );
};

export default Demo;
