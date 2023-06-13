import * as React from 'react';
import { Drawer, Form } from 'antd';
import { useControllableValue } from 'rc-hooks';
import { isPromiseLike } from 'ut2';
import type { DrawerProps } from './antd.interface';
import type { BaseFormProps } from './BaseForm';
import BaseForm from './BaseForm';

export interface DrawerFormProps<Values = any> extends Omit<BaseFormProps<Values>, 'title' | 'defaultValue'> {
  title?: React.ReactNode;
  width?: DrawerProps['width'];
  trigger?: React.ReactElement;
  drawerProps?: Omit<DrawerProps, 'visible' | 'footer'>;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}

function DrawerForm<Values = any>(props: DrawerFormProps<Values>) {
  const {
    title,
    width,
    trigger,
    drawerProps,
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
        formComponentType="DrawerForm"
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
          submitText: '确认',
          resetText: '取消',
          ...submitter,
          resetButtonProps: {
            preventDefault: true,
            ...(submitter ? submitter?.resetButtonProps : {}),
            onClick: (e: any) => {
              drawerProps?.onClose?.(e);
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
          <Drawer
            title={title}
            width={width || 600}
            {...drawerProps}
            visible={visible}
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
              setVisible(false);
              drawerProps?.onClose?.(e);
            }}
            afterVisibleChange={v => {
              if (!v && drawerProps?.destroyOnClose) {
                formRef.current.resetFields();
              }
              drawerProps?.afterVisibleChange?.(v);

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
            setVisible(true);
            trigger.props?.onClick?.(e);
          }
        })}
    </>
  );
}

export default DrawerForm;
