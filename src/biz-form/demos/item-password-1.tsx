import * as React from 'react';
import { BizForm, BizFormItemPassword } from 'antd-more';

const Demo = () => {
  return (
    <BizForm
      name="form-item-password-1"
      onFinish={(values) => {
        console.log(values);
      }}
      labelWidth={112}
    >
      <BizFormItemPassword label="默认" name="password1" />
      <BizFormItemPassword
        label="自定义规则"
        name="password3"
        min={4}
        max={8}
        level={3}
        ignoreCase
        special="><?-="
        required
        tooltip="4-8位字符，包含大小写字母、数字和符号(><?-=)三者组成"
      />
      <BizFormItemPassword
        label="无校验"
        name="password2"
        validated={false}
        tooltip="关闭校验后，即为普通密码输入框"
      />
      {/* <BizFormItemPassword label="禁止复制粘贴" name="password4" disabledPaste /> */}
    </BizForm>
  );
};

export default Demo;
