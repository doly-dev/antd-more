import * as React from 'react';
import { isPromiseLike } from 'util-helpers';
import { Form } from 'antd';
import type { StepProps } from '../antd.interface';
import BaseForm from '../BaseForm';
import type { BaseFormProps } from '../BaseForm';
import StepsFormContext from './StepsFormContext';
import type { StepsSubmitterProps } from './StepsSubmitter';

export interface StepFormProps
  extends Omit<BaseFormProps, 'title' | 'onReset' | 'contentRender' | 'submitter' | 'ready'>,
    Pick<StepProps, 'title' | 'icon' | 'subTitle' | 'description'> {
  stepProps?: StepProps;
  submitter?: Omit<StepsSubmitterProps, 'total' | 'current' | 'form'> | false;
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

          const currentAction = ctx?.actionCache.get();
          if (currentAction === 'next' || currentAction === 'submit') {
            ctx?.[currentAction]();
          }
        }
      }}
      {...restProps}
    />
  );
};

export default StepForm;
