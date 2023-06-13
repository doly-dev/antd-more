import * as React from 'react';
import { Modal, Form } from 'antd';
import { useControllableValue } from 'rc-hooks';
import { isPromiseLike } from 'ut2';
import type { ModalProps } from './antd.interface';
import type { BaseFormProps } from './BaseForm';
import BaseForm from './BaseForm';

export interface ModalFormProps<Values = any> extends Omit<BaseFormProps<Values>, 'title' | 'defaultValue'> {
  title?: React.ReactNode;
  width?: ModalProps['width'];
  trigger?: React.ReactElement;
  modalProps?: Omit<ModalProps, 'visible' | 'footer'>;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}

function ModalForm<Values = any>(props: ModalFormProps<Values>) {
  const {
    title,
    width,
    trigger,
    modalProps,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible: outVisible,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onVisibleChange,
    children,
    submitter,
    onFinish,
    form: formProp,
    ...restProps
  } = props;
  const [visible, setVisible] = useControllableValue(props, {
    valuePropName: 'visible',
    trigger: 'onVisibleChange'
  });

  const [form] = Form.useForm();
  const formRef = React.useRef(formProp || form);

  return (
    <>
      <BaseForm
        {...restProps}
        formComponentType="ModalForm"
        form={formProp || form}
        onFinish={async (values) => {
          let ret = typeof onFinish === 'function' ? onFinish(values) : true;
          if (isPromiseLike(ret)) {
            ret = await ret;
          }
          if (ret !== false) {
            setVisible(false);
          }
        }}
        submitter={typeof submitter === 'undefined' || submitter ? {
          submitText: modalProps?.okText || '确认',
          resetText: modalProps?.cancelText || '取消',
          submitButtonProps: {
            type: (modalProps?.okType as 'text') || 'primary'
          },
          ...submitter,
          resetButtonProps: {
            preventDefault: true,
            ...(submitter ? submitter?.resetButtonProps : {}),
            onClick: (e) => {
              modalProps?.onCancel?.(e);
              setVisible(false);
              submitter && submitter?.resetButtonProps?.onClick?.(e);
            }
          },
          render: (submitterProps, submitterDom) => {
            if (submitter && typeof submitter?.render === 'function') {
              return submitter.render(submitterProps, submitterDom.reverse());
            }
            return submitterDom.reverse();
          }
        } : submitter}
        formRender={(formDom, submitterDom) => (
          <Modal
            title={title}
            width={width || 600}
            centered
            {...modalProps}
            visible={visible}
            footer={submitterDom}
            onCancel={(e) => {
              setVisible(false);
              modalProps?.onCancel?.(e);
            }}
            afterClose={() => {
              if (modalProps?.destroyOnClose) {
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
            setVisible(true);
            trigger.props?.onClick?.(e);
          }
        })}
    </>
  );
}

export default ModalForm;
