import * as React from 'react';
import { message } from 'antd';
import {
  StepsForm,
  BizFormItemInput,
  BizFormItemSelect,
  BizFormItemNumber,
  BizFormItemUpload,
  BizFormItemTextArea
} from 'antd-more';
import { sleep } from 'ut2';
import { BillAccountOptions } from './constants';

const Demo = () => {
  return (
    <StepsForm
      onFinish={async (values) => {
        await sleep(2000);
        console.log(values);
        message.success('提交成功');
      }}
    >
      <StepsForm.StepForm
        title="选择收款方"
        labelWidth={112}
        onFinish={async (values) => {
          await sleep(2000);
          console.log(values);
        }}
      >
        <BizFormItemInput label="收款账号" name="ban" required />
        <BizFormItemSelect
          label="收款账号名称"
          name="accountName"
          options={BillAccountOptions}
          required
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        title="填写付款信息"
        labelWidth={112}
        onFinish={async (values) => {
          await sleep(2000);
          console.log(values);
        }}
      >
        <BizFormItemNumber label="付款金额" name="money" required precision={2} addonAfter="元" />
        <BizFormItemUpload
          label="材料文件"
          name="files"
          required
          title="上传文件"
          transform={(values) => values.map((val) => val.name)}
        />
        <BizFormItemTextArea
          label="备注"
          name="remark"
          disabledWhiteSpace
          maxLength={140}
          showCount
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default Demo;
