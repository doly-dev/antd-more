import * as React from 'react';
import { Form } from 'antd';
import { FormProps, FormInstance } from 'antd/es/form';
import namePathSet from 'rc-util/es/utils/set'; // eslint-disable-line import/no-extraneous-dependencies
import { transformFormValues } from '../_util/transform';
import FieldContext, { TransformFn } from '../FieldContext';
import Submitter, { SubmitterProps } from './Submitter';

export interface BaseFormProps extends Omit<FormProps, 'onFinish'> {
  contentRender?: (
    items: React.ReactNode[],
    submitter: React.ReactElement<Omit<SubmitterProps, 'form'>> | undefined,
  ) => React.ReactNode;
  ready?: boolean; // false 时，禁止触发 submit 。 true 时，会对表单初始值重新赋值。
  loading?: boolean;
  submitter?: false | Omit<SubmitterProps, 'form'>;
  onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
  pressEnterSubmit?: boolean;
  children?: React.ReactNode;
  labelWidth?: number | 'auto';
  hideLabel?: boolean;
  onFinish?: (values, originValues) => any;
}

const BaseForm: React.FC<BaseFormProps> = ({
  contentRender,
  form: formProp,
  pressEnterSubmit = true,
  ready = true,
  loading = false,
  submitter = {},
  onFinish,
  onReset,
  children,
  initialValues,
  labelWidth = 84,
  layout = 'horizontal',
  labelCol,
  hideLabel = false,
  ...restProps
}) => {
  const [form] = Form.useForm();
  const formRef = React.useRef<FormInstance>(formProp || form);

  const transformRecordRef = React.useRef<{ [x: string]: TransformFn | undefined }>({});

  const setFieldTransform = React.useCallback((name, transform, parentListName) => {
    if (name && transform) {
      if (Array.isArray(parentListName) && parentListName.length > 0) {
        const paths: (string | number)[] = [];
        parentListName.forEach((parentItemPath) => {
          if (Array.isArray(parentItemPath)) {
            paths.push(...parentItemPath);
          } else {
            paths.push(parentItemPath);
          }
        });
        if (Array.isArray(name)) {
          paths.push(...name);
        } else {
          paths.push(name);
        }
        transformRecordRef.current = namePathSet(transformRecordRef.current, paths, transform);
      } else if (Array.isArray(name)) {
        transformRecordRef.current = namePathSet(transformRecordRef.current, name, transform);
      } else {
        transformRecordRef.current[String(name)] = transform;
      }
    }
  }, []);

  const submitterProps = typeof submitter === 'boolean' || !submitter ? {} : submitter;

  const submitterDom = submitter ? (
    <Submitter
      {...submitterProps}
      onReset={onReset}
      form={formRef.current}
      submitButtonProps={{
        loading,
        disabled: !ready,
        ...submitterProps?.submitButtonProps,
      }}
      resetButtonProps={{
        disabled: loading || !ready,
        ...submitterProps?.resetButtonProps,
      }}
    />
  ) : null;

  const items = React.Children.toArray(children);
  const content = contentRender ? contentRender(items, submitterDom) : items;

  const labelColProps = React.useMemo(() => {
    const labelFlex =
      layout !== 'vertical' && labelWidth && labelWidth !== 'auto'
        ? { flex: `0 0 ${labelWidth}px` }
        : {};
    const labelStyle = { style: { ...(hideLabel ? { display: 'none' } : {}), ...labelCol?.style } };
    return {
      ...labelFlex,
      ...labelCol,
      ...labelStyle,
    };
  }, [hideLabel, layout, labelWidth, labelCol]);

  React.useEffect(() => {
    // 准备完成后，重新设置初始值
    if (ready) {
      formRef.current?.resetFields();
    }
  }, [ready]);

  return (
    <FieldContext.Provider
      value={{ setFieldTransform, layout, hideLabel, labelCol: labelColProps }}
    >
      <Form
        onKeyPress={(event) => {
          const buttonHtmlType = submitterProps?.submitButtonProps?.htmlType;
          if (pressEnterSubmit && buttonHtmlType !== 'submit' && event.key === 'Enter' && ready) {
            formRef.current?.submit();
          }
        }}
        form={formRef.current}
        onFinish={(values) => {
          if (typeof onFinish === 'function') {
            const transValues = transformFormValues(values, transformRecordRef.current);
            // console.log(values, transValues);
            return onFinish(transValues, values);
          }
          return true;
        }}
        initialValues={initialValues}
        layout={layout}
        labelCol={labelColProps}
        {...restProps}
      >
        {content}
      </Form>
    </FieldContext.Provider>
  );
};

export default BaseForm;
