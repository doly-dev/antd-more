import * as React from 'react';
import { BizForm, BizFormItemDate, BizFormItemSelect } from 'antd-more';

// 身份证有效期
// 五年、十年、二十年、长期
enum IdCardExpireDate {
  Five = 5,
  Ten = 10,
  Twenty = 20,
  Forever = 9999
}
const IdCardExpireDateOptions = [
  {
    label: '五年',
    value: IdCardExpireDate.Five
  },
  {
    label: '十年',
    value: IdCardExpireDate.Ten
  },
  {
    label: '二十年',
    value: IdCardExpireDate.Twenty
  },
  {
    label: '长期',
    value: IdCardExpireDate.Forever
  }
];

function Demo() {
  return (
    <BizForm
      labelWrap
      labelWidth={98}
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <BizFormItemDate
        label="身份证有效期起始日期"
        name="beginDate"
        required
        disabledDateAfter={1}
      />
      <BizFormItemSelect
        label="身份证有效期结束日期"
        name="expireDate"
        options={IdCardExpireDateOptions}
        required
      />
    </BizForm>
  );
}

export default Demo;
