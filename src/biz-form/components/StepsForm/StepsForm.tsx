import * as React from 'react';
import { Steps } from 'antd';
import classNames from 'classnames';
import { isArray, isPromiseLike, uniqueId } from 'ut2';
import { useUpdate, useControllableValue, useSafeState, useLatest } from 'rc-hooks';
import type { StepsProps, StepProps, FormInstance } from '../antd.interface';
import BizFormItem from '../Item';
import StepsFormContext, { StepsFormAction } from './StepsFormContext';
import type { BaseFormProps } from '../BaseForm';
import type { StepFormProps } from './StepForm';
import StepForm from './StepForm';
import type { StepsFormSubmitterProps } from './StepsSubmitter';
import StepsSubmitter from './StepsSubmitter';

import './index.less';

const prefixCls = 'antd-more-steps-form';

export type StepsFormActionType = {
  prev: () => void; // 返回上一步
  next: (submitted?: boolean) => void; // 触发当前表单校验（可选，部分中间步骤提交后，可直接进入下一步），校验成功则跳转下一步
  submit: () => void; // 触发当前表单校验，并提交所有表单值
  reset: () => void; // 重置所有表单和值，将步骤恢复初始步骤
};

export interface StepsFormProps {
  defaultCurrent?: number;
  current?: number;
  onCurrentChange?: (current: number) => void;
  ready?: boolean;
  stepsProps?: Omit<StepsProps, 'current' | 'onChange'>;
  formProps?: Omit<BaseFormProps, 'title' | 'onReset' | 'contentRender'>;
  onFinish?: (values) => void | Promise<any>;
  submitter?: Omit<StepsFormSubmitterProps, 'total' | 'current' | 'form'> | false;
  actionRef?: React.MutableRefObject<StepsFormActionType | undefined>;
  // 自定义步骤条渲染
  stepsRender?: (stepsProps: StepProps[], stepsDom: React.ReactNode) => React.ReactNode;
  // 自定义单个表单渲染
  stepFormRender?: (formDom: React.ReactNode) => React.ReactNode;
  // 自定义整个表单渲染
  stepsFormRender?: (
    stepsDom: React.ReactNode,
    formDom: React.ReactNode,
    submitterDom: React.ReactNode
  ) => React.ReactNode;
  children?: React.ReactNode;
}

const StepsForm: React.FC<StepsFormProps> & {
  StepForm: typeof StepForm;
} = (props) => {
  const {
    defaultCurrent = 0,
    // current = 0,
    // onCurrentChange,
    ready = true,
    stepsProps,
    formProps,
    submitter,
    actionRef,
    children,
    onFinish,
    stepsRender,
    stepFormRender,
    stepsFormRender
  } = props;
  const [step, setStep] = useControllableValue(props, {
    defaultValue: defaultCurrent,
    defaultValuePropName: 'defaultCurrent',
    valuePropName: 'current',
    trigger: 'onCurrentChange'
  });
  const [loading, setLoading] = useSafeState(false);
  const latestStep = useLatest(step);
  // const [stepsConfig, setStepsConfig] = React.useState([]);
  // const [submitterConfig, setSubmitterConfig] = React.useState([]);
  const formArrayRef = React.useRef<FormInstance[]>([]);
  const formSubmitterRef = React.useRef([]); // 操作配置
  const stepsConfigRef = React.useRef<StepProps[]>([]); // 步骤条配置
  const formDataRef = React.useRef({}); // 全部表单数据
  // 记录当前操作
  const action = React.useRef<StepsFormAction>();
  const getAction = React.useCallback(() => {
    return action.current;
  }, []);
  const uniqueKey = React.useMemo(() => uniqueId('__am_stepsForm_'), []);

  // 手动触发更新
  const update = useUpdate();
  const forceUpdate = () => {
    setTimeout(() => {
      update();
    });
  };

  // 遍历子组件提取配置
  const childs = React.Children.toArray(children);
  childs.forEach((childItem: React.ReactElement, index) => {
    const {
      stepProps,
      title,
      subTitle,
      icon,
      description,
      submitter: childSubmitter
    } = childItem.props as StepFormProps;
    stepsConfigRef.current[index] = {
      title,
      subTitle,
      icon,
      description,
      ...stepProps
    };

    if (childSubmitter === false || childSubmitter === null) {
      formSubmitterRef.current[index] = false;
    } else if (typeof childSubmitter === 'object') {
      formSubmitterRef.current[index] = submitter
        ? { ...submitter, ...childSubmitter }
        : childSubmitter;
    } else {
      formSubmitterRef.current[index] = submitter;
    }
  });

  // 下一步
  const next = () => {
    if (latestStep.current < childs.length - 1) {
      const currStep = latestStep.current + 1;
      setStep(currStep);
    }
  };
  // 上一步
  const prev = () => {
    if (latestStep.current > 0) {
      const currStep = latestStep.current - 1;
      setStep(currStep);
    }
  };
  // 提交
  const submit = async () => {
    if (typeof onFinish === 'function') {
      const values = Object.values<typeof formDataRef.current>(formDataRef.current).reduce(
        (pre, cur) => ({ ...pre, ...cur }),
        {}
      );
      const ret = onFinish(values);
      if (isPromiseLike(ret)) {
        setLoading(true);
        try {
          await ret;
        } catch (err) {
          console.error(err); // eslint-disable-line
        } finally {
          setLoading(false);
        }
      }
    }
  };
  // 单个表单下一步/提交时触发，仅用于记录当前表单值
  // 不能在这里直接使用最后一步提交，可能中间某个步骤就要提交。最后一步仅是显示结果或完成
  const onFormFinish = (name, values) => {
    formDataRef.current[name] = values;
  };

  const renderSubmitter = () => {
    if (!isArray(formSubmitterRef.current) || formSubmitterRef.current.length <= 0) {
      return null;
    }

    const currentSubmitter = formSubmitterRef.current[step];

    if (currentSubmitter === false) {
      return null;
    }

    const internalProps = {
      prevButtonProps: {
        disabled: loading || !ready,
        ...currentSubmitter?.prevButtonProps
      },
      nextButtonProps: {
        loading,
        disabled: !ready,
        ...currentSubmitter?.nextButtonProps
      },
      submitButtonProps: {
        loading,
        disabled: !ready,
        ...currentSubmitter?.submitButtonProps
      },
      onPrev: (e) => {
        action.current = StepsFormAction.Prev;
        prev();
        currentSubmitter?.onPrev?.(e);
      },
      onNext: (e) => {
        action.current = StepsFormAction.Next;
        currentSubmitter?.onNext?.(e);
      },
      onSubmit: (e) => {
        action.current = StepsFormAction.Submit;
        currentSubmitter?.onSubmit?.(e);
      }
    };

    return (
      <StepsSubmitter
        total={stepsConfigRef.current.length}
        current={step}
        {...currentSubmitter}
        form={formArrayRef.current[step]}
        {...internalProps}
      />
    );
  };

  const submitterDom = renderSubmitter();

  const renderStepsDom = () => {
    if (!isArray(stepsConfigRef.current) || stepsConfigRef.current.length <= 0) {
      return null;
    }

    const dom = <Steps {...stepsProps} items={stepsConfigRef.current} current={step} />;

    return stepsRender ? stepsRender(stepsConfigRef.current, dom) : dom;
  };

  const stepsDom = renderStepsDom();

  const formDom = childs.map((item: any, index) => {
    const isCurrentIndex = step === index;
    const name = item.props?.name || uniqueKey + index;

    const config = {
      submitter: false,
      contentRender: (dom) => (
        <>
          {stepFormRender ? stepFormRender(dom) : dom}
          {!stepsFormRender && isCurrentIndex ? (
            <BizFormItem placeholderLabel>{submitterDom}</BizFormItem>
          ) : null}
        </>
      )
    };

    return (
      <div
        className={classNames(`${prefixCls}-item`, { [`${prefixCls}-active`]: isCurrentIndex })}
        key={name}
      >
        {React.cloneElement(item, {
          ...config,
          ...formProps,
          ...item.props,
          step: index,
          name
        })}
      </div>
    );
  });

  React.useImperativeHandle(actionRef, () => ({
    prev: () => {
      if (!ready) {
        return;
      }

      action.current = StepsFormAction.Prev;
      prev();
      const currentSubmitter = formSubmitterRef.current[latestStep.current];
      currentSubmitter && currentSubmitter?.onPrev();
    },
    // 是否触发当前表单提交验证
    // 部分情况下第二步提交，第三步为结果。提交之后无需再次触发当前表单提交校验
    next: (submitted = true) => {
      if (!ready) {
        return;
      }

      action.current = StepsFormAction.Next;
      if (submitted) {
        formArrayRef.current[latestStep.current].submit();
      } else {
        next();
      }
      const currentSubmitter = formSubmitterRef.current[latestStep.current];
      currentSubmitter && currentSubmitter?.onNext?.();
    },
    submit: () => {
      if (!ready) {
        return;
      }

      action.current = StepsFormAction.Submit;
      formArrayRef.current[latestStep.current].submit();
      const currentSubmitter = formSubmitterRef.current[latestStep.current];
      currentSubmitter && currentSubmitter?.onSubmit?.();
    },
    reset: () => {
      if (!ready) {
        return;
      }

      setStep(defaultCurrent);
      formDataRef.current = {};
      formArrayRef.current.forEach((item) => {
        item?.resetFields();
      });
    }
  }));

  return (
    <div className={prefixCls}>
      <StepsFormContext.Provider
        value={{
          loading,
          setLoading,
          formArrayRef,
          next,
          prev,
          submit,
          onFormFinish,
          getAction,
          forceUpdate
        }}
      >
        {stepsFormRender ? (
          stepsFormRender(
            stepsDom,
            <div className={`${prefixCls}-container`}>{formDom}</div>,
            submitterDom
          )
        ) : (
          <>
            {stepsDom}
            <div className={`${prefixCls}-container`}>{formDom}</div>
          </>
        )}
      </StepsFormContext.Provider>
    </div>
  );
};

StepsForm.StepForm = StepForm;

export default StepsForm;
