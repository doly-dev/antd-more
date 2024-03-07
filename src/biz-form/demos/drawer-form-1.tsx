import * as React from 'react';
import { Button, message } from 'antd';
import {
  DrawerForm,
  BizFormItemInput,
  BizFormItemSelect,
  BizFormItemNumber,
  BizFormItemUpload,
  BizFormItemTextArea
} from 'antd-more';
import { BillAccountOptions } from './constants';
import { sleep } from 'ut2';

const Demo = () => {
  return (
    <DrawerForm
      title="创建付款单"
      trigger={<Button type="primary">创建付款单</Button>}
      drawerProps={{
        destroyOnClose: true
      }}
      onFinish={async (values) => {
        await sleep(2000);
        console.log(values);
        message.success('提交成功');
      }}
      labelWidth={112}
    >
      <BizFormItemInput label="收款账号" name="ban" required />
      <BizFormItemSelect
        label="收款账号名称"
        name="accountName"
        options={BillAccountOptions}
        required
      />
      <BizFormItemNumber label="付款金额" name="money" required precision={2} addonAfter="元" />
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
    </DrawerForm>
  );
};

export default Demo;
