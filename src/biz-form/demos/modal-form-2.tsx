import * as React from 'react';
import { Button, Space, message } from 'antd';
import {
  ModalForm,
  DrawerForm,
  BizFormItemInput,
  BizFormItemSelect,
  BizFormItemNumber,
  BizFormItemUpload,
  BizFormItemTextArea
} from 'antd-more';
import { waitTime } from 'util-helpers';
import { BillAccountOptions } from './constants';

const Demo = () => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [visibleDrawer, setVisibleDrawer] = React.useState(false);

  return (
    <>
      <Space>
        <Button type="primary" onClick={() => setVisibleModal(true)}>
          Modal表单
        </Button>
        <Button type="primary" onClick={() => setVisibleDrawer(true)}>
          Drawer表单
        </Button>
      </Space>
      <ModalForm
        title="创建付款单"
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('提交成功');
        }}
        labelWidth={112}
        visible={visibleModal}
        onVisibleChange={setVisibleModal}
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
      <DrawerForm
        title="创建付款单"
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
        }}
        labelWidth={112}
        visible={visibleDrawer}
        onVisibleChange={setVisibleDrawer}
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
      </DrawerForm>
    </>
  );
};

export default Demo;
