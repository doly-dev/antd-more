import * as React from 'react';
import {
  BizForm,
  BizFormItemRadio,
  BizFormItemInput,
  BizFormItemCaptcha,
  BizFormItemPassword
} from 'antd-more';
import { sleep } from 'ut2';
import { message } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function sendCaptcha(mobile: string) {
  await sleep(2000);
  return;
}

enum LoginType {
  Message,
  Account
}

const LoginTypeOptions = [
  {
    label: '短信验证码',
    value: LoginType.Message
  },
  {
    label: '账号密码',
    value: LoginType.Account
  }
];

function Demo() {
  return (
    <BizForm
      submitter={{
        submitText: '提交',
        submitButtonProps: {
          size: 'large',
          style: {
            padding: '0 40px'
          }
        },
        noReset: true
      }}
      labelWidth={98}
      onFinish={(values) => {
        console.log(values);
      }}
      initialValues={{
        loginType: LoginType.Message
      }}
    >
      <BizFormItemRadio
        label="登录方式"
        name="loginType"
        options={LoginTypeOptions}
        optionType="button"
        radioGroupProps={{ buttonStyle: 'solid' }}
      />
      <BizForm.Item
        noStyle
        shouldUpdate={(prevVlaue, nextValue) => prevVlaue.loginType !== nextValue.loginType}
      >
        {(form) => {
          if (form.getFieldValue('loginType') === LoginType.Message) {
            return (
              <>
                <BizFormItemInput label="手机号码" name="mobile" type="mobile" required />
                <BizFormItemCaptcha
                  label="短信验证码"
                  name="code"
                  required
                  onGetCaptcha={async () => {
                    try {
                      await form.validateFields(['mobile']);
                    } catch (err) {
                      message.error('请输入正确的手机号码');
                      return false;
                    }
                    return sendCaptcha(form.getFieldValue('mobile'));
                  }}
                />
              </>
            );
          } else {
            return (
              <>
                <BizFormItemInput
                  label="账户"
                  name="account"
                  disabledWhiteSpace
                  placeholder="请输入手机号码或邮箱"
                  required
                />
                <BizFormItemPassword label="密码" name="password" validated={false} required />
              </>
            );
          }
        }}
      </BizForm.Item>
    </BizForm>
  );
}

export default Demo;
