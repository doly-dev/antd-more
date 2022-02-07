import * as React from 'react';
import { message } from 'antd';
import type { ModalFormProps } from 'antd-more';
import { BizForm, ModalForm, BizFormItemPassword } from 'antd-more';
import waitTime from '../../../../utils/waitTime';

export interface ChangePasswordModalProps
  extends Pick<ModalFormProps, 'visible' | 'onVisibleChange'> {}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  visible = false,
  onVisibleChange
}) => {
  const [form] = BizForm.useForm();

  return (
    <ModalForm
      title="修改密码"
      width={520}
      labelWidth={112}
      submitter={{
        submitText: '确定修改'
      }}
      onFinish={async (values) => {
        console.log(values);

        await waitTime();
        message.success('修改成功，请重新登录！');
      }}
      visible={visible}
      onVisibleChange={onVisibleChange}
      modalProps={{
        destroyOnClose: true,
        maskClosable: false
      }}
      form={form}
    >
      <BizFormItemPassword
        name="oldPassword"
        label="旧密码"
        inputProps={{
          placeholder: '请输入旧密码'
        }}
        required
        validated={false}
      />
      <BizFormItemPassword
        name="password"
        label="新密码"
        min={6}
        max={16}
        inputProps={{
          placeholder: '请输入6-16位新密码'
        }}
        required
        validateTrigger="onChange"
      />
      <BizFormItemPassword
        name="repeatPassword"
        label="新密码确认"
        inputProps={{
          placeholder: '请再次输入新密码'
        }}
        required
        validateTrigger="onChange"
        dependencies={['password']}
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
    </ModalForm>
  );
};

export default ChangePasswordModal;
