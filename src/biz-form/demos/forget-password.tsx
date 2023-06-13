import * as React from 'react';
import { message } from 'antd';
import { BizForm, BizFormItemCaptcha, BizFormItemPassword, BizFormItemInput } from 'antd-more';
import { sleep } from 'ut2';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function sendCaptcha(mobile: string) {
  await sleep(2000);
  return;
}

const ForgetPassword = () => {
  const [form] = BizForm.useForm();

  return (
    <BizForm
      name="form-forget-password"
      onFinish={async (values) => {
        await sleep();
        console.log(values);
      }}
      submitter={{
        submitText: '确定',
        noReset: true
      }}
      form={form}
      labelWidth={98}
    >
      <BizFormItemInput label="手机号码" name="mobile" type="mobile" required />
      <BizFormItemCaptcha
        label="验证码"
        name="captcha"
        required
        normalize={(val) => val.replace(/[^\d]/g, '')}
        maxLength={6}
        onGetCaptcha={async () => {
          try {
            // 验证手机号码或邮箱是否正确
            await form.validateFields(['mobile']);
          } catch (err) {
            message.error('请输入正确的手机号码');
            return false;
          }

          // 发送验证码
          return sendCaptcha(form.getFieldValue('mobile'));
        }}
      />
      <BizFormItemPassword
        label="新密码"
        name="password"
        required
        allowClear={false}
      />
      <BizFormItemPassword
        label="重复新密码"
        name="repeatPassword"
        required
        dependencies={['password']}
        validateTrigger="onBlur"
        rules={[
          {
            validator(rules, value) {
              let errMsg = '';
              if (!value) {
                errMsg = '请再次输入新密码';
              } else if (value !== form.getFieldValue('password')) {
                errMsg = '两次输入的密码不一致';
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            }
          }
        ]}
      />
    </BizForm>
  );
};

export default ForgetPassword;
