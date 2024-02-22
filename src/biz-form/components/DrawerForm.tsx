import * as React from 'react';
import { Drawer, Form } from 'antd';
import { useControllableValue } from 'rc-hooks';
import { isPromiseLike } from 'ut2';
import type { DrawerProps } from './antd.interface';
import type { BaseFormProps } from './BaseForm';
import BaseForm from './BaseForm';
import { useConfig } from '../../biz-config-provider';

export interface DrawerFormProps<Values = any>
  extends Omit<BaseFormProps<Values>, 'title' | 'defaultValue'>,
    Pick<DrawerProps, 'open' | 'title' | 'width' | 'maskClosable' | 'destroyOnClose'> {
  trigger?: React.ReactElement;
  drawerProps?: Omit<DrawerProps, 'open' | 'visible' | 'footer'>;
  onOpenChange?: (open: boolean) => void;
}

function DrawerForm<Values = any>(props: DrawerFormProps<Values>) {
  const { locale } = useConfig();
  const {
    title,
    width,
    trigger,
    drawerProps,
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
        formComponentType="DrawerForm"
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
                submitText: locale.form.common.ok,
                resetText: locale.form.common.cancel,
                ...submitter,
                resetButtonProps: {
                  preventDefault: true,
                  ...(submitter ? submitter?.resetButtonProps : {}),
                  onClick: (e: any) => {
                    drawerProps?.onClose?.(e);
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
          <Drawer
            title={title}
            width={width || 600}
            maskClosable={maskClosable}
            {...drawerProps}
            open={open}
            footer={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                {submitterDom}
              </div>
            }
            onClose={(e) => {
              setOpen(false);
              drawerProps?.onClose?.(e);
            }}
            afterOpenChange={(v) => {
              if (!v && (destroyOnClose || drawerProps?.destroyOnClose)) {
                formRef.current.resetFields();
              }
              drawerProps?.afterOpenChange?.(v);
            }}
          >
            {formDom}
          </Drawer>
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

export default DrawerForm;
