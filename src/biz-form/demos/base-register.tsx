import * as React from 'react';
import { BizForm, BizFormItemInput, BizFormItemAddress, BizFormItemPassword } from 'antd-more';
import { getPCA } from 'lcn';
import { sleep } from 'ut2';

const pca = getPCA({ inland: true, fieldNames: { code: 'value', name: 'label' } });

const RegisterDemo = () => {
  return (
    <BizForm
      name="base-register"
      onFinish={async (values) => {
        await sleep(2000);
        console.log(values);
      }}
    >
      <BizFormItemInput
        label="用户名"
        name="userName"
        type="userName"
        required
        extendRules={[
          {
            min: 6,
            max: 32,
            message: '用户名为6～32位'
          }
        ]}
      />
      <BizFormItemInput label="手机号码" name="mobile" type="mobile" required />
      <BizFormItemInput label="身份证号" name="idCard" type="idCard" required />
      <BizFormItemInput label="邮箱" name="email" type="email" placeholder="请输入（选填）" />
      <BizFormItemPassword label="密码" name="password" required />
      <BizFormItemAddress
        label="地址"
        names={['location', 'address']}
        labels={['省/市/区', '详细地址']}
        required
        options={pca}
      />
    </BizForm>
  );
};

export default RegisterDemo;
