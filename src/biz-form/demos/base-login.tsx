import * as React from 'react';
import { message, Checkbox } from 'antd';
import {
  BizForm,
  BizFormItem,
  BizFormItemInput,
  BizFormItemCaptcha,
  BizFormItemPassword
} from 'antd-more';
import { useAsync } from 'rc-hooks';
import {
  UserOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
  MobileOutlined,
  MailOutlined
} from '@ant-design/icons';
import IdentifyCode from './components/IdentifyCode';
import { sleep } from 'ut2';

async function sendCaptcha(mobile) {
  await sleep(2000);
  message.success(`验证码已发送至 ${mobile}`);
  return;
}

async function getGraphValidateCode() {
  await sleep();
  return `data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wgARCAAoAIsDAREAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAUGBwQD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA2UAAFdPQngRhwlhAAAAABlZoZIg8ChGiAiziLCACCM8NPJEopegCJKgaKDyM/NFABVivltJwAAAAz8ly0gAHIdYAAAAAAP/EADkQAAEDAQMGCwYHAAAAAAAAAAMCBAUTAAYSAQcQICIjERQwMjM0QlJiksIVFiVyhLIXJDZDUVSi/9oACAEBAAE/ANY18oRq9KyI74XTfpRCCQlLyos0vZEujjbgKeqTYRwtCo9OmWmmcOIa3xCox9wJCfZaNvnCy50Cjntcq9jdiJg8+DlYB8dhnRvattGu39Sn1anu/OtNox8Z+EizR7tnt8xzT9C1aXfVi/JbMn+g/qSaZe8EVB0/aj8DOp0dWwr83aOUYQTTJZSbCN7q3sXLogXK4EYiPsG7qejx2L7r+7Q1xjl37fr7vo+P16nbR89oZT8kU3XKjEN9+7kHouxDvmecS8z9y1KNq7p0i9/UmZFbIGwwePKmNH5an61ptmwHI3ehBxD+FfoKs5CVdin9+ki0DHlWvmIsYf4jTTVYRUoOLc1Buf7RE9zwat/gzJ7puEQPT9vv4PB47P310l3B4kz+mai65X7GxzseO11RyoLvNkTxAkfdun/nks5GWUJliGjJq7cRpy/EeLCXUppWju7dmF5WIxCaAjJgQtgY/hpx63EGaCY0NQ5CfzS5f//EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQIBAT8ANf/EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQMBAT8ANf/Z`;
}

const LoginDemo = () => {
  const [form] = BizForm.useForm();

  const { loading, data: src, refresh: refreshGraphValidateCode } = useAsync(getGraphValidateCode);

  return (
    <div style={{ width: '80%', maxWidth: 380, margin: '0 auto' }}>
      <BizForm
        name="form-login"
        form={form}
        onFinish={async (values) => {
          await sleep(2000);
          console.log(values);
        }}
        submitter={{
          noReset: true,
          submitText: '登录',
          submitButtonProps: {
            size: 'large',
            block: true
          }
        }}
        hideLabel
        size="large"
      >
        <BizFormItemInput
          name="userName"
          placeholder="请输入用户名"
          inputProps={{
            prefix: <UserOutlined />
          }}
          label="用户名"
          required
        />
        <BizFormItemPassword
          name="password"
          placeholder="请输入密码"
          inputProps={{
            prefix: <LockOutlined />
          }}
          label="密码"
          required
          validated={false}
        />
        <BizFormItemInput
          name="email"
          type="email"
          placeholder="请输入邮箱"
          inputProps={{
            prefix: <MailOutlined />
          }}
          label="邮箱"
          required
        />
        <BizFormItemInput
          name="mobile"
          type="mobile"
          placeholder="请输入手机号码"
          inputProps={{
            prefix: <MobileOutlined />
          }}
          label="手机号码"
          required
        />
        <BizFormItemCaptcha
          name="captcha"
          normalize={(val) => val.replace(/[^\d]/g, '')}
          placeholder="请输入验证码"
          maxLength={6}
          inputProps={{
            prefix: <SafetyCertificateOutlined />
          }}
          required
          label="验证码"
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
        <BizFormItemInput
          name="verifyCode"
          placeholder="请输入图片验证码"
          inputProps={{
            prefix: <SafetyCertificateOutlined />
          }}
          contentAfter={
            <IdentifyCode loading={loading} src={src} onClick={refreshGraphValidateCode} />
          }
          label="图片验证码"
          required
        />
        <BizFormItem>
          <BizFormItem noStyle name="autoLogin" valuePropName="checked">
            <Checkbox>自动登录</Checkbox>
          </BizFormItem>
          <a style={{ float: 'right' }}>忘记密码</a>
        </BizFormItem>
      </BizForm>
    </div>
  );
};

export default LoginDemo;
