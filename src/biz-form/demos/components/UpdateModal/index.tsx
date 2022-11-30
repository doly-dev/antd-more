import * as React from 'react';
import type { ModalFormProps } from 'antd-more';
import { BizForm, ModalForm, BizFormItemInput, BizFormItemTextArea } from 'antd-more';
import { waitTime } from 'util-helpers';

export interface UpdateModalProps extends ModalFormProps {
  data?: any;
  onChange?: () => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ data, onChange, open, ...restProps }) => {
  const [form] = BizForm.useForm();

  React.useEffect(() => {
    if (open && data) {
      form.setFieldsValue(data);
      // } else {
      //   form.resetFields(); // 和 modalProps.destroyOnClose=true 效果一样
    }
  }, [open, data, form]);

  return (
    <ModalForm
      name='update-modal-form'
      title={data ? '修改' : '新增'}
      open={open}
      form={form}
      pressEnterSubmit={false} // 回车建不触发提交
      onFinish={async (values) => {
        await waitTime(); // 发起请求
        console.log(values);

        onChange(); // 响应成功后，通知外部数据更新
      }}
      modalProps={{
        destroyOnClose: true, // 弹窗关闭后，将重置表单
        maskClosable: false
      }}
      {...restProps}
    >
      <BizFormItemInput label="姓名" name="name" required />
      <BizFormItemTextArea
        label="简介"
        name="resume"
        required
        inputProps={{ showCount: true, maxLength: 100 }}
      />
    </ModalForm>
  );
};

export default UpdateModal;
