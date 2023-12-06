import * as React from 'react';
import { useMount } from 'rc-hooks';
import { Input, Divider } from 'antd';
import type { InputProps } from './antd.interface';
import type { CaptchaButtonProps } from '../../captcha-button';
import CaptchaButton from '../../captcha-button';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { useConfig } from '../../biz-config-provider';

interface VerificateCodeInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type' | 'size'>,
    Pick<InputProps, 'size' | 'allowClear' | 'placeholder'> {
  value?: any;
  onChange?: (value: any) => void;
  onGetCaptcha?: () => boolean | Promise<any>; // 发送验证码
  inputProps?: InputProps;
  buttonProps?: CaptchaButtonProps;
  type?: 'default' | 'inline'; // 显示类型
  autoClick?: boolean;
  autoFocusOnGetCaptcha?: true;
}

const checkResult = async (fn: () => boolean | Promise<boolean>) => {
  try {
    const ret = await fn();
    if (ret !== false) {
      return ret;
    }
  } catch (err) {
    console.error(err);
  }
  return Promise.reject();
};

const VerificateCodeInput: React.FC<VerificateCodeInputProps> = ({
  value,
  onChange,
  onGetCaptcha = () => true,
  inputProps = {},
  buttonProps = {},
  type = 'default',
  autoClick,
  autoFocusOnGetCaptcha = true,
  ...restProps
}) => {
  const inputRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  const { onClick, onEnd } = buttonProps;

  // 倒计时按钮状态
  const [start, setStart] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // 点击按钮
  const onButtonClick = React.useCallback(
    async (e: React.MouseEvent<any>) => {
      setLoading(true);
      onClick?.(e);

      try {
        // 验证手机号码/邮箱是否正确
        // 发送验证码
        await checkResult(onGetCaptcha);

        setStart(true);
        setLoading(false);

        if (autoFocusOnGetCaptcha) {
          inputRef.current.focus();
        }
      } catch (err) {
        setLoading(false);
      }
    },
    [autoFocusOnGetCaptcha, onClick, onGetCaptcha]
  );

  const handleEnd = React.useCallback(() => {
    setStart(false);
    onEnd?.();
  }, [onEnd]);

  const handleButtonMouseUp = React.useCallback(
    (e: React.MouseEvent<any>) => {
      e.stopPropagation();
      buttonProps?.onMouseUp?.(e);
    },
    [buttonProps]
  );

  React.useImperativeHandle(buttonProps?.ref, () => buttonRef.current, [buttonRef]);

  const defaultStyle = React.useMemo(() => {
    let inputStyle: Record<string, any> = {
      flex: 1,
      transition: 'width 0.3s ease 0s',
      marginRight: '8px'
    };
    let buttonStyle = {};

    if (type === 'inline') {
      inputStyle = {
        flex: 1
      };
      buttonStyle = {
        height: 'auto',
        padding: '0 4px 0 6px'
      };
    }
    return {
      input: inputStyle,
      button: buttonStyle
    };
  }, [type]);

  const buttonStyle = React.useMemo(
    () => ({
      ...defaultStyle.button,
      ...buttonProps?.style
    }),
    [buttonProps?.style, defaultStyle.button]
  );

  const captchaButtonDom = (
    <CaptchaButton
      start={start}
      loading={loading}
      type={type === 'inline' ? 'link' : 'default'}
      {...buttonProps}
      onMouseUp={handleButtonMouseUp}
      onClick={onButtonClick}
      onEnd={handleEnd}
      ref={buttonRef}
      style={buttonStyle}
    />
  );

  useMount(() => {
    if (autoClick) {
      buttonRef.current.click();
    }
  });

  return (
    <div style={{ display: 'flex' }}>
      <Input
        onChange={onChange}
        value={value}
        allowClear
        autoComplete="off"
        ref={inputRef}
        {...restProps}
        {...inputProps}
        style={{
          ...defaultStyle.input,
          ...inputProps?.style
        }}
        suffix={
          type === 'inline' ? (
            <>
              {inputProps?.suffix}
              <Divider type="vertical" />
              {captchaButtonDom}
            </>
          ) : (
            inputProps?.suffix
          )
        }
      />
      {type !== 'inline' ? captchaButtonDom : null}
    </div>
  );
};

export interface BizFormItemCaptchaProps
  extends BizFormItemProps,
    Pick<
      VerificateCodeInputProps,
      | 'onGetCaptcha'
      | 'type'
      | 'inputProps'
      | 'buttonProps'
      | 'autoClick'
      | 'autoFocusOnGetCaptcha'
      | 'placeholder'
      | 'allowClear'
      | 'maxLength'
    >,
    Pick<CaptchaButtonProps, 'initText' | 'runText' | 'resetText' | 'second'> {}

const BizFormItemCaptcha: React.FC<BizFormItemCaptchaProps> = (props) => {
  const { locale } = useConfig();
  const {
    type,
    placeholder = locale.form.common.inputPlaceholder,
    maxLength,
    allowClear,
    onGetCaptcha,
    initText,
    runText,
    resetText,
    second,
    autoClick,
    autoFocusOnGetCaptcha = true,
    inputProps = {},
    buttonProps = {},

    required,
    ...restProps
  } = props;

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          required,
          message: locale.form.common.inputRequired
        }
      ]}
      {...restProps}
    >
      <VerificateCodeInput
        type={type}
        onGetCaptcha={onGetCaptcha}
        autoClick={autoClick}
        autoFocusOnGetCaptcha={autoFocusOnGetCaptcha}
        inputProps={inputProps}
        placeholder={placeholder}
        maxLength={maxLength}
        allowClear={allowClear}
        buttonProps={{
          initText,
          runText,
          resetText,
          second,
          ...buttonProps
        }}
      />
    </BizFormItem>
  );
};

export default BizFormItemCaptcha;
