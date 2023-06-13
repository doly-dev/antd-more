import * as React from 'react';
import { Button, Space } from 'antd';
import {
  BizForm,
  ModalForm,
  BizFormItemInput,
  BizFormItemSelect,
  BizFormItemNumber,
  BizFormItemUpload,
  BizFormItemTextArea
} from 'antd-more';
import { sleep } from 'ut2';
import { BillAccountOptions } from './constants';

const Demo = () => {
  const [form1] = BizForm.useForm();
  const [form2] = BizForm.useForm();

  return (
    <Space>
      <ModalForm
        name='modal-form-3.1'
        title="test提交按钮"
        trigger={<Button type="primary">自定义test按钮</Button>}
        onFinish={async (values) => {
          await sleep(2000);
          console.log(values);
        }}
        labelWidth={112}
        form={form1}
        submitter={{
          render: (submitterProps, dom) => [
            ...dom,
            <Button {...submitterProps.submitButtonProps} onClick={() => form1.submit()} key="test">
              test
            </Button>
          ]
        }}
        modalProps={{
          destroyOnClose: true
        }}
      >
        <BizFormItemInput label="收款账号" name="ban" required />
        <BizFormItemSelect
          label="收款账号名称"
          name="accountName"
          options={BillAccountOptions}
          required
        />
        <BizFormItemNumber label="付款金额" name="money" required precision={2} contentAfter="¥" />
        <BizFormItemUpload
          label="材料文件"
          name="files"
          required
          title="上传文件"
          transform={(values) => values.map((val) => val.name)}
        />
        <BizFormItemTextArea
          label="备注（选填）"
          name="remark"
          disabledWhiteSpace
          inputProps={{ showCount: true, maxLength: 140 }}
        />
      </ModalForm>
      <ModalForm
        name='modal-form-3.2'
        title="创建付款单"
        trigger={<Button type="primary">自定义文字</Button>}
        onFinish={async (values) => {
          await sleep(2000);
          console.log(values);
        }}
        labelWidth={112}
        form={form2}
        submitter={{
          submitText: '提交',
          noReset: true
        }}
      >
        <BizFormItemInput label="收款账号" name="ban" required />
        <BizFormItemSelect
          label="收款账号名称"
          name="accountName"
          options={BillAccountOptions}
          required
        />
        <BizFormItemNumber label="付款金额" name="money" required precision={2} contentAfter="¥" />
        <BizFormItemUpload
          label="材料文件"
          name="files"
          required
          title="上传文件"
          transform={(values) => values.map((val) => val.name)}
        />
        <BizFormItemTextArea
          label="备注（选填）"
          name="remark"
          disabledWhiteSpace
          maxLength={140}
          showCount
        />
      </ModalForm>
    </Space>
  );
};

export default Demo;
