/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { isPromiseLike } from 'ut2';
import { Form } from 'antd';
import type { StepProps } from '../antd.interface';
import type { BaseFormProps } from '../BaseForm';
import BaseForm from '../BaseForm';
import StepsFormContext, { StepsFormAction } from './StepsFormContext';
import type { StepsFormSubmitterProps } from './StepsSubmitter';

export interface StepFormProps
  extends Omit<BaseFormProps, 'title' | 'onReset' | 'contentRender' | 'submitter' | 'ready'>,
  Pick<StepProps, 'title' | 'icon' | 'subTitle' | 'description'> {
  stepProps?: StepProps;
  submitter?: Omit<StepsFormSubmitterProps, 'total' | 'current' | 'form'> | false;
  readonly step?: number;
}

const StepForm: React.FC<StepFormProps> = ({
  name,
  onFinish,
  form: formProp,
  submitter,

  step,

  title,
  icon,
  subTitle,
  description,
  stepProps,

  ...restProps
}) => {
  const ctx = React.useContext(StepsFormContext);
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (ctx && ctx?.formArrayRef) {
      ctx.formArrayRef.current[step] = formProp || form;
    }
    // modal 可能未加载时拿不到 form
    ctx?.forgetUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseForm
      name={name}
      form={formProp || form}
      onFinish={async (values) => {
        let ret = typeof onFinish === 'function' ? onFinish(values) : true;
        if (isPromiseLike(ret)) {
          ctx?.setLoading(true);
          try {
            ret = await ret;
          } catch (err) {
            console.error(err); // eslint-disable-line
            ret = false;
          } finally {
            ctx?.setLoading(false);
          }
        }
        if (ret !== false) {
          ctx?.onFormFinish(name, values);
          const currentAction = ctx.getAction();
          if (currentAction === StepsFormAction.Next) {
            ctx?.next();
          } else if (currentAction === StepsFormAction.Submit) {
            ctx?.submit();
          }
        }
      }}
      {...restProps}
    />
  );
};

export default StepForm;
