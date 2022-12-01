import * as React from 'react';
import { Modal, Button, message } from 'antd';
import type { StepsFormActionType } from 'antd-more';
import {
  StepsForm,
  BizFormItemInput,
  BizFormItemSelect,
  BizFormItemNumber,
  BizFormItemUpload,
  BizFormItemTextArea
} from 'antd-more';
import { waitTime } from 'util-helpers';
import { BillAccountOptions } from './constants';

const Demo = () => {
  const [open, setOpen] = React.useState(false);
  const actionRef = React.useRef<StepsFormActionType>();

  // 关闭时重置表单
  React.useEffect(() => {
    if (!open) {
      actionRef.current.reset();
    }
  }, [open]);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        创建付款单
      </Button>
      <StepsForm
        actionRef={actionRef}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          setOpen(false);
          message.success('提交成功');

          // 提交成功再重置表单
          // actionRef.current.reset();
        }}
        stepsFormRender={(stepsDom, formDom, submitterDom) => (
          <Modal
            title="分步表单"
            open={open}
            footer={submitterDom}
            width={600}
            onCancel={() => setOpen(false)}
            centered
            destroyOnClose
          >
            {stepsDom}
            {formDom}
          </Modal>
        )}
      >
        <StepsForm.StepForm title="选择收款方" labelWidth={112}>
          <BizFormItemInput label="收款账号" name="ban" required />
          <BizFormItemSelect
            label="收款账号名称"
            name="accountName"
            options={BillAccountOptions}
            required
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm title="填写付款信息" labelWidth={112}>
          <BizFormItemNumber
            label="付款金额"
            name="money"
            required
            precision={2}
            contentAfter="¥"
          />
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
        </StepsForm.StepForm>
      </StepsForm>
    </>
  );
};

export default Demo;
