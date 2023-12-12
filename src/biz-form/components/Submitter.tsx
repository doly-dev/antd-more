import * as React from 'react';
import { Button, Space } from 'antd';
import { isArray, omit } from 'ut2';
import type { ButtonProps, FormInstance } from './antd.interface';
import { useConfig } from '../../biz-config-provider';

export interface BizFormSubmitterProps {
  resetText?: React.ReactNode;
  resetButtonProps?: ButtonProps & { preventDefault?: boolean };
  onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
  noReset?: boolean;

  submitText?: React.ReactNode;
  submitButtonProps?: ButtonProps & { preventDefault?: boolean };
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;

  form?: FormInstance;
  render?:
    | ((
        props: BizFormSubmitterProps,
        dom: React.ReactElement[]
      ) => React.ReactNode[] | React.ReactNode | false)
    | false;
}

const BizFormSubmitter: React.FC<BizFormSubmitterProps> = (props) => {
  const { locale } = useConfig();
  const {
    onSubmit = () => {},
    onReset = () => {},
    submitText = locale.form.common.submit,
    resetText = locale.form.common.reset,
    submitButtonProps = {},
    resetButtonProps = {},
    noReset = false,
    form,
    render
  } = props;

  const handleReset = React.useCallback(
    (e) => {
      form?.resetFields();
      // 由于刚重置表单，使用异步可防止立即触发提交操作，导致数据过时而提交失败。
      // refs: https://github.com/ant-design/ant-design/issues/26747
      Promise.resolve().then(() => {
        onReset?.(e);
      });
    },
    [form, onReset]
  );

  const handleSubmit = React.useCallback(
    (e) => {
      form?.submit();
      onSubmit?.(e);
    },
    [form, onSubmit]
  );

  const dom = React.useMemo(() => {
    const ret = [
      <Button
        key="submit"
        type="primary"
        {...omit(submitButtonProps, ['preventDefault'])}
        onClick={(e) => {
          if (!submitButtonProps?.preventDefault) handleSubmit(e);
          submitButtonProps?.onClick?.(e);
        }}
      >
        {submitText}
      </Button>,
      <Button
        key="reset"
        {...omit(resetButtonProps, ['preventDefault'])}
        onClick={(e) => {
          if (!resetButtonProps?.preventDefault) handleReset(e);
          resetButtonProps?.onClick?.(e);
        }}
      >
        {resetText}
      </Button>
    ];
    if (noReset) {
      return ret.slice(0, 1);
    }
    return ret;
  }, [
    submitButtonProps,
    submitText,
    resetButtonProps,
    resetText,
    noReset,
    handleSubmit,
    handleReset
  ]);

  const renderDom = render ? render(props, dom) : dom;

  if (!renderDom) {
    return null;
  }

  if (isArray(renderDom)) {
    if (renderDom?.length < 1) {
      return null;
    }
    if (renderDom.length === 1) {
      return renderDom[0] as React.ReactElement;
    }
    return <Space>{renderDom}</Space>;
  }

  return renderDom as React.ReactElement;
};

export default BizFormSubmitter;
