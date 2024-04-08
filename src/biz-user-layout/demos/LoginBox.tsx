import * as React from 'react';
import { Card, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { sleep } from 'ut2';
import { BizForm, BizFormItem, BizFormItemInput, BizFormItemPassword } from 'antd-more';

const LoginBox: React.FC<{ showRegisterEnter?: boolean }> = ({ showRegisterEnter = false }) => {
  return (
    <Card
      title="账号密码登录"
      bordered={false}
      style={{ minWidth: 320 }}
      headStyle={{ border: '0 none', fontSize: 24 }}
      bodyStyle={{ paddingTop: 0 }}
    >
      <BizForm
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
        <BizFormItem>
          <BizFormItem noStyle name="autoLogin" valuePropName="checked">
            <Checkbox>自动登录</Checkbox>
          </BizFormItem>
          <a style={{ float: 'right' }}>忘记密码</a>
        </BizFormItem>
      </BizForm>
      {showRegisterEnter && (
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          还没注册，<a>免费注册</a>
        </div>
      )}
    </Card>
  );
};

export default LoginBox;
