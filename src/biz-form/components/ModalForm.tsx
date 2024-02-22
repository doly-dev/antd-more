import * as React from 'react';
import { Modal, Form } from 'antd';
import { useControllableValue } from 'rc-hooks';
import { isPromiseLike } from 'ut2';
import type { ModalProps } from './antd.interface';
import type { BaseFormProps } from './BaseForm';
import BaseForm from './BaseForm';
import { useConfig } from '../../biz-config-provider';

export interface ModalFormProps<Values = any>
  extends Omit<BaseFormProps<Values>, 'title' | 'defaultValue'>,
    Pick<ModalProps, 'open' | 'title' | 'width' | 'maskClosable' | 'destroyOnClose'> {
  trigger?: React.ReactElement;
  modalProps?: Omit<ModalProps, 'open' | 'visible' | 'footer'>;
  onOpenChange?: (open: boolean) => void;
}

function ModalForm<Values = any>(props: ModalFormProps<Values>) {
  const { locale } = useConfig();
  const {
    title,
    width,
    trigger,
    modalProps,
    maskClosable,
    destroyOnClose,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    open: outOpen,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onOpenChange,
    children,
    submitter,
    onFinish,
    form: formProp,
    ...restProps
  } = props;
  const [open, setOpen] = useControllableValue(props, {
    defaultValue: false,
    valuePropName: 'open',
    trigger: 'onOpenChange'
  });
  const [form] = Form.useForm<Values>();
  const formRef = React.useRef(formProp || form);

  return (
    <>
      <BaseForm<Values>
        {...restProps}
        formComponentType="ModalForm"
        form={formRef.current}
        onFinish={async (values) => {
          let ret = typeof onFinish === 'function' ? onFinish(values) : true;
          if (isPromiseLike(ret)) {
            ret = await ret;
          }
          if (ret !== false) {
            setOpen(false);
          }
        }}
        submitter={
          typeof submitter === 'undefined' || submitter
            ? {
                submitText: modalProps?.okText || locale.form.common.ok,
                resetText: modalProps?.cancelText || locale.form.common.cancel,
                submitButtonProps: {
                  type: (modalProps?.okType as 'text') || 'primary'
                },
                ...submitter,
                resetButtonProps: {
                  preventDefault: true,
                  ...(submitter ? submitter?.resetButtonProps : {}),
                  onClick: (e) => {
                    modalProps?.onCancel?.(e as any);
                    setOpen(false);
                    submitter && submitter?.resetButtonProps?.onClick?.(e);
                  }
                },
                render: (submitterProps, submitterDom) => {
                  if (submitter && typeof submitter?.render === 'function') {
                    return submitter.render(submitterProps, submitterDom.reverse());
                  }
                  return submitterDom.reverse();
                }
              }
            : submitter
        }
        formRender={(formDom, submitterDom) => (
          <Modal
            title={title}
            width={width || 600}
            centered
            destroyOnClose={destroyOnClose}
            maskClosable={maskClosable}
            {...modalProps}
            open={open}
            footer={submitterDom}
            onCancel={(e) => {
              setOpen(false);
              modalProps?.onCancel?.(e);
            }}
            afterClose={() => {
              if (destroyOnClose || modalProps?.destroyOnClose) {
                formRef.current.resetFields();
              }
              modalProps?.afterClose?.();
            }}
          >
            {formDom}
          </Modal>
        )}
        {...restProps}
      >
        {children}
      </BaseForm>
      {trigger &&
        React.cloneElement(trigger, {
          ...trigger.props,
          onClick(e) {
            setOpen(true);
            trigger.props?.onClick?.(e);
          }
        })}
    </>
  );
}

export default ModalForm;
