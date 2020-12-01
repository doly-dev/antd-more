import * as React from 'react';
import { Button, Space } from 'antd';
import { ButtonProps } from 'antd/es/button';
import { FormInstance } from 'antd/es/form';

export interface SubmitterProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
  submitText?: React.ReactNode;
  resetText?: React.ReactNode;
  submitButtonProps?: ButtonProps;
  resetButtonProps?: ButtonProps;
  form?: FormInstance;
  render?:
    | ((props: SubmitterProps, dom: JSX.Element[]) => React.ReactNode[] | React.ReactNode | false) // eslint-disable-line
    | false;
}

const Submitter: React.FC<SubmitterProps> = (props) => {
  const {
    onSubmit = () => {},
    onReset = () => {},
    submitText = '提交',
    resetText = '重置',
    submitButtonProps = {},
    resetButtonProps = {},
    form,
    render,
  } = props;
  const handleReset = React.useCallback(
    (e) => {
      form?.resetFields();
      onReset?.(e);
      resetButtonProps.onClick?.(e);
    },
    [resetButtonProps, form, onReset],
  );
  const handleSubmit = React.useCallback(
    (e) => {
      form?.submit();
      onSubmit?.(e);
      submitButtonProps.onClick?.(e);
    },
    [submitButtonProps, form, onSubmit],
  );

  const dom = React.useMemo(
    () => [
      <Button key="submit" type="primary" {...submitButtonProps} onClick={handleSubmit}>
        {submitText}
      </Button>,
      <Button key="reset" {...resetButtonProps} onClick={handleReset}>
        {resetText}
      </Button>,
    ],
    [resetButtonProps, submitButtonProps, form, onSubmit, submitText, resetText],
  );

  const renderDom = render ? render(props, dom) : dom;

  if (!renderDom) {
    return null;
  }
  if (Array.isArray(renderDom)) {
    if (renderDom?.length < 1) {
      return null;
    }
    return <Space>{renderDom}</Space>;
  }
  return renderDom as React.ReactElement;
};

export default Submitter;