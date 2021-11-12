import * as React from 'react';
import { message, Checkbox } from 'antd';
import { BizForm } from 'antd-more';
import {
  UserOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
  MobileOutlined,
  MailOutlined
} from '@ant-design/icons';
import waitTime from './utils/waitTime';

const { ItemInput, ItemCaptcha, ItemPassword, Item } = BizForm;

function sendCaptcha(mobile) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      message.success(`验证码已发送至 ${mobile}`);
      resolve();
    }, 2000);
  });
}

const LoginDemo = () => {
  const [form] = BizForm.useForm();

  return (
    <div style={{ width: '80%', maxWidth: 380, margin: '0 auto' }}>
      <BizForm
        name="form-login"
        form={form}
        onFinish={async (values) => {
          await waitTime(2000);
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
        <ItemInput
          name="userName"
          inputProps={{
            prefix: <UserOutlined />,
            placeholder: '请输入用户名'
          }}
          label="用户名"
          required
        />
        <ItemPassword
          name="password"
          inputProps={{
            prefix: <LockOutlined />,
            placeholder: '请输入密码'
          }}
          label="密码"
          required
          validated={false}
        />
        <ItemInput
          name="email"
          type="email"
          inputProps={{
            prefix: <MailOutlined />,
            placeholder: '请输入邮箱'
          }}
          validateTrigger="onChange"
          label="邮箱"
          required
        />
        <ItemInput
          name="mobile"
          type="mobile"
          inputProps={{
            prefix: <MobileOutlined />,
            placeholder: '请输入手机号码'
          }}
          validateTrigger="onChange"
          label="手机号码"
          required
        />
        <ItemCaptcha
          name="captcha"
          normalize={(val) => val.replace(/[^\d]/g, '')}
          inputProps={{
            prefix: <SafetyCertificateOutlined />,
            placeholder: '请输入验证码',
            maxLength: 6
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
        <ItemInput
          name="verifyCode"
          inputProps={{
            prefix: <SafetyCertificateOutlined />,
            placeholder: '请输入图片验证码'
          }}
          contentAfter={
            <img
              src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wgARCAAoAIsDAREAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAUGBwQD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA2UAAFdPQngRhwlhAAAAABlZoZIg8ChGiAiziLCACCM8NPJEopegCJKgaKDyM/NFABVivltJwAAAAz8ly0gAHIdYAAAAAAP/EADkQAAEDAQMGCwYHAAAAAAAAAAMCBAUTAAYSAQcQICIjERQwMjM0QlJiksIVFiVyhLIXJDZDUVSi/9oACAEBAAE/ANY18oRq9KyI74XTfpRCCQlLyos0vZEujjbgKeqTYRwtCo9OmWmmcOIa3xCox9wJCfZaNvnCy50Cjntcq9jdiJg8+DlYB8dhnRvattGu39Sn1anu/OtNox8Z+EizR7tnt8xzT9C1aXfVi/JbMn+g/qSaZe8EVB0/aj8DOp0dWwr83aOUYQTTJZSbCN7q3sXLogXK4EYiPsG7qejx2L7r+7Q1xjl37fr7vo+P16nbR89oZT8kU3XKjEN9+7kHouxDvmecS8z9y1KNq7p0i9/UmZFbIGwwePKmNH5an61ptmwHI3ehBxD+FfoKs5CVdin9+ki0DHlWvmIsYf4jTTVYRUoOLc1Buf7RE9zwat/gzJ7puEQPT9vv4PB47P310l3B4kz+mai65X7GxzseO11RyoLvNkTxAkfdun/nks5GWUJliGjJq7cRpy/EeLCXUppWju7dmF5WIxCaAjJgQtgY/hpx63EGaCY0NQ5CfzS5f//EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQIBAT8ANf/EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQMBAT8ANf/Z"
              style={{ height: 40, margin: 0 }}
              alt=""
            />
          }
          label="图片验证码"
          required
        />
        <Item>
          <Item noStyle name="autoLogin" valuePropName="checked">
            <Checkbox>自动登录</Checkbox>
          </Item>
          <a style={{ float: 'right' }}>忘记密码</a>
        </Item>
      </BizForm>
    </div>
  );
};

export default LoginDemo;
