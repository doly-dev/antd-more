import * as React from 'react';
import type { ModalFormProps } from 'antd-more';
import { BizForm, ModalForm, BizFormItemInput, BizFormItemTextArea } from 'antd-more';
import { sleep } from 'ut2';

export interface UpdateModalProps extends ModalFormProps {
  data?: any;
  onChange?: () => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ data, onChange, visible, ...restProps }) => {
  const [form] = BizForm.useForm();

  React.useEffect(() => {
    if (visible && data) {
      form.setFieldsValue(data);
      // } else {
      //   form.resetFields(); // 和 modalProps.destroyOnClose=true 效果一样
    }
  }, [visible, data, form]);

  return (
    <ModalForm
      name="update-modal-form"
      title={data ? '修改' : '新增'}
      visible={visible}
      form={form}
      pressEnterSubmit={false} // 回车建不触发提交
      onFinish={async (values) => {
        await sleep(); // 发起请求
        console.log(values);

        onChange(); // 响应成功后，通知外部数据更新
      }}
      destroyOnClose // 弹窗关闭后，将重置表单
      maskClosable={false}
      {...restProps}
    >
      <BizFormItemInput label="姓名" name="name" required />
      <BizFormItemTextArea label="简介" name="resume" required maxLength={100} showCount />
    </ModalForm>
  );
};

export default UpdateModal;
