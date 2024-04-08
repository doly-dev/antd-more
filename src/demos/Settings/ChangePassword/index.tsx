import * as React from 'react';
import { BizForm, BizFormItem, BizFormItemPassword } from 'antd-more';
import { sleep } from 'ut2';
import {
  wrapperValidateNewPassword,
  wrapperValidateRepeatPassword
} from '../../../biz-form/demos/utils/passwordUtils';

const Demo = () => {
  const [form] = BizForm.useForm();

  return (
    <BizForm
      submitter={{
        submitText: '确定',
        noReset: true
      }}
      onFinish={async (values) => {
        await sleep(2000);
        console.log(values);
      }}
      form={form}
      labelWidth={98}
      name="form-change-password"
    >
      <BizFormItem label="手机号码">13000000000</BizFormItem>
      <BizFormItem label="用户名">guest</BizFormItem>
      <BizFormItemPassword
        label="原密码"
        name="password"
        required
        allowClear
        validated={false}
        validateTrigger="onBlur"
        visibilityToggle={false}
      />
      <BizFormItemPassword
        label="新密码"
        name="newPassword"
        required
        allowClear
        validateTrigger="onBlur"
        visibilityToggle={false}
        dependencies={['password']}
        extendRules={[
          {
            validator: wrapperValidateNewPassword(form)
          }
        ]}
      />
      <BizFormItemPassword
        label="重复新密码"
        name="repeatNewPassword"
        required
        allowClear
        validateTrigger="onBlur"
        visibilityToggle={false}
        dependencies={['newPassword']}
        rules={[
          {
            validator: wrapperValidateRepeatPassword(form, 'newPassword')
          }
        ]}
      />
    </BizForm>
  );
};

export default Demo;
