import * as React from 'react';
import { Form } from 'antd';
import { FormProps, FormInstance } from 'antd/es/form';
import namePathSet from 'rc-util/es/utils/set';
import classnames from 'classnames';
import { isPromiseLike } from 'util-helpers';
import { useUpdateEffect, useIsMounted } from 'rc-hooks';
import { transformFormValues } from '../_util/transform';
import FieldContext, { TransformFn } from '../FieldContext';
import ChildFormContext from '../ChildFormContext';
import Submitter, { SubmitterProps } from './Submitter';

const prefixCls = 'antd-more-form';

export type TransformRecordActionType = {
  get: () => Record<string, TransformFn | undefined>;
};

export interface BaseFormProps extends Omit<FormProps, 'onFinish'> {
  contentRender?: (
    items: React.ReactNode[],
    submitter: React.ReactElement<Omit<SubmitterProps, 'form'>> | undefined,
  ) => React.ReactNode;
  formRender?: (
    formDom: JSX.Element,
    submitter: React.ReactElement<Omit<SubmitterProps, 'form'>> | undefined,
  ) => JSX.Element | React.ReactElement | undefined;
  ready?: boolean; // false 时，禁止触发 submit 。 true 时，会对表单初始值重新赋值。
  loading?: boolean;
  submitter?: false | Omit<SubmitterProps, 'form'>;
  onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
  pressEnterSubmit?: boolean;
  children?: React.ReactNode;
  labelWidth?: number | 'auto';
  hideLabel?: boolean;
  onFinish?: (values) => any;
  transformRecordActionRef?: React.MutableRefObject<TransformRecordActionType>;
}

const BaseForm: React.FC<BaseFormProps> = ({
  contentRender,
  formRender,
  form: formProp,
  pressEnterSubmit = true,
  ready = true,
  loading: outLoading = false,
  submitter = {},
  onFinish,
  onFinishFailed,
  onReset,
  children,
  initialValues,
  labelWidth = 84,
  layout = 'horizontal',
  labelCol,
  hideLabel = false,
  transformRecordActionRef,
  className,
  ...restProps
}) => {
  const [form] = Form.useForm();
  const formRef = React.useRef<FormInstance>(formProp || form);
  const [loading, setLoading] = React.useState(outLoading);
  const isMountedRef = useIsMounted();

  const [isUpdate, updateState] = React.useState(false);
  const forgetUpdate = () => {
    setTimeout(() => {
      if (isMountedRef.current) {
        updateState(true);
      }
    });
  };

  const transformRecordRef = React.useRef<Record<string, TransformFn | undefined>>({});

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

  const childFormRefs = React.useRef<Record<string, FormInstance>>({});

  const regChildForm = React.useCallback((name, internalForm) => {
    childFormRefs.current[name] = internalForm;
  }, []);

  const unregChildForm = React.useCallback((name) => {
    delete childFormRefs.current[name];
  }, []);

  const mergeFieldsError = (err1, err2) => {
    if (!err1) {
      return err2;
    }
    if (!err2) {
      return err1;
    }
    return {
      values: { ...err1.values, ...err2.values },
      errorFields: [...err1.errorFields, err2.errorFields],
      outOfDate: err1.outOfDate || err2.outOfDate,
    };
  };

  const validateChildFormFields = React.useCallback(async (isScrollToField = false) => {
    let errorInfo = null;
    const childForms = Object.values(childFormRefs.current);

    for (let i = 0; i < childForms.length; i += 1) {
      try {
        await childForms[i].validateFields(); // eslint-disable-line
      } catch (err) {
        if (!errorInfo) {
          errorInfo = err;
          // 外部表单有错误时，不需要滚动
          isScrollToField &&
            Array.isArray(err?.errorFields) &&
            err.errorFields[0]?.name &&
            childForms[i].scrollToField(err.errorFields[0].name);
        } else {
          errorInfo = mergeFieldsError(errorInfo, err);
        }
      }
    }
    return errorInfo;
  }, []);

  const submitterProps = typeof submitter === 'boolean' || !submitter ? {} : submitter;

  const submitterDom = submitter ? (
    <Submitter
      {...submitterProps}
      onReset={onReset}
      form={formProp || form}
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

  // 将转换记录传给外部
  // 这里不能直接将transformRecordRef.current传给外部ref，因为无法获取到最新的值，所以通过方法获取。
  React.useImperativeHandle(transformRecordActionRef, () => ({
    get: () => transformRecordRef.current,
  }));

  useUpdateEffect(() => {
    // 准备完成后，重新设置初始值
    if (ready) {
      formRef.current?.resetFields?.();
    }
  }, [ready]);

  useUpdateEffect(() => {
    setLoading(outLoading);
  }, [outLoading]);

  const formDom = (
    <ChildFormContext.Provider
      value={{
        regChildForm,
        unregChildForm,
      }}
    >
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
          form={formProp || form}
          onFinish={async (values) => {
            if (typeof onFinish !== 'function') {
              return;
            }

            // 验证子表单
            const childFormErrors = await validateChildFormFields(true);
            if (childFormErrors) {
              return;
            }

            const transValues = transformFormValues(values, transformRecordRef.current);
            // console.log(values, transValues);

            const ret = onFinish(transValues);

            if (isPromiseLike(ret)) {
              setLoading(true);
              return ret
                .then((res) => {
                  setLoading(false);
                  return res;
                })
                .catch((err) => {
                  setLoading(false);
                  return Promise.reject(err);
                });
            }
          }}
          onFinishFailed={async (errorInfo) => {
            let ret = errorInfo;

            // 验证子表单
            const childFormErrors = await validateChildFormFields();
            if (childFormErrors) {
              ret = mergeFieldsError(childFormErrors, ret);
            }
            if (typeof onFinishFailed === 'function') {
              onFinishFailed(ret);
            }
          }}
          initialValues={initialValues}
          layout={layout}
          labelCol={labelColProps}
          className={classnames(prefixCls, className)}
          {...restProps}
        >
          <input
            type="text"
            style={{
              display: 'none',
            }}
          />
          <Form.Item noStyle shouldUpdate>
            {(formInstance) => {
              if (!isUpdate) forgetUpdate();
              // 支持 fromRef，这里 ref 里面可以随时拿到最新的值
              formRef.current = formInstance as FormInstance;
              return null;
            }}
          </Form.Item>
          {content}
        </Form>
      </FieldContext.Provider>
    </ChildFormContext.Provider>
  );
  return formRender ? formRender(formDom, submitterDom) : formDom;
};

export default BaseForm;
