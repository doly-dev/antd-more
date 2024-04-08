import React from 'react';
import { MobileOutlined, SafetyCertificateOutlined, LockOutlined } from '@ant-design/icons';
import { Card, message } from 'antd';
import {
  BizForm,
  BizFormItemInput,
  BizFormItem,
  BizFormItemCaptcha,
  BizFormItemPassword
} from 'antd-more';
import SliderCaptcha from 'rc-slider-captcha';
import { getCaptcha, verifyCaptcha } from './service';
import { sleep } from 'ut2';

async function sendCode(mobile: string) {
  console.log(mobile);
  await sleep();
  return true;
}

const RegisterBox = () => {
  const [form] = BizForm.useForm();

  return (
    <Card
      title="欢迎免费注册"
      bordered={false}
      headStyle={{ border: '0 none', fontSize: 28, textAlign: 'center' }}
      bodyStyle={{ padding: 0 }}
      style={{ width: 348, margin: '0 auto 48px' }}
    >
      <BizForm
        form={form}
        onFinish={async (values) => {
          await sleep(2000);
          console.log(values);
        }}
        submitter={{
          noReset: true,
          submitText: '注册',
          submitButtonProps: {
            size: 'large',
            block: true
          }
        }}
        hideLabel
        size="large"
      >
        <BizFormItemInput
          type="mobile"
          name="mobile"
          placeholder="请输入手机号码"
          inputProps={{
            prefix: <MobileOutlined />
          }}
          label="手机号码"
          required
        />
        <BizFormItem>
          <SliderCaptcha
            request={getCaptcha}
            onVerify={verifyCaptcha}
            bgSize={{
              width: 348,
              height: 110
            }}
            puzzleSize={{
              width: 62
            }}
            mode="float"
            style={{ zIndex: 2 }}
          />
        </BizFormItem>
        <BizFormItemCaptcha
          name="code"
          normalize={(val) => val.replace(/[^\d]/g, '')}
          placeholder="短信验证码"
          maxLength={6}
          inputProps={{
            prefix: <SafetyCertificateOutlined />
          }}
          required
          label="验证码"
          type="inline"
          onGetCaptcha={async () => {
            try {
              // 验证手机号码或邮箱是否正确
              await form.validateFields(['mobile']);
            } catch (err) {
              message.error('请输入正确的手机号码');
              return false;
            }

            // 发送验证码
            return sendCode(form.getFieldValue('mobile').replace(/\s/g, ''));
          }}
        />
        <BizFormItemPassword
          name="password"
          placeholder="设置密码"
          inputProps={{
            prefix: <LockOutlined />
          }}
          label="密码"
          required
          validated={false}
        />
        <BizFormItemPassword
          label="重复新密码"
          name="repeatPassword"
          placeholder="请再次输入您的密码"
          inputProps={{
            prefix: <LockOutlined />
          }}
          required
          dependencies={['password']}
          validateTrigger="onBlur"
          rules={[
            {
              validator(rules, value) {
                let errMsg = '';
                if (!value) {
                  errMsg = '请再次输入您的密码';
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
    </Card>
  );
};

export default RegisterBox;
