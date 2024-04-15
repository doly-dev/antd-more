import React, { useState, useEffect, useMemo } from 'react';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import classnames from 'classnames';
import CountDown from 'countdown-pro';
import { useConfig } from '../biz-config-provider';
import './CaptchaButton.less';

const prefixCls = 'antd-more-captcha-button';

export interface CaptchaButtonProps extends ButtonProps {
  start?: boolean;
  second?: number;
  onEnd?: () => void;
  initText?: string;
  runText?: string;
  resetText?: string;
  ref?: React.LegacyRef<HTMLButtonElement | HTMLAnchorElement>;
}

const CaptchaButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, CaptchaButtonProps>(
  (props, ref) => {
    const { locale } = useConfig();
    const {
      // 开始倒计时
      start = false,
      // 初始显示文本
      initText = locale.captcha.initText,
      // 倒计时显示文本，包含%s会自动替换为秒数
      runText = locale.captcha.runText,
      // 结束显示文本
      resetText = locale.captcha.resetText,
      // 倒计时时长，单位秒
      second = 60,
      // 倒计时结束的回调方法
      onEnd,
      className,
      ...restProps
    } = props;

    // 0-初始化 1-运行中 2-结束
    const [status, setStatus] = useState(() => (start ? 1 : 0));
    const [runSecond, setRunSecond] = useState(second);

    const countdown = useMemo(
      () =>
        new CountDown({
          time: second * 1000,
          onChange(currentTime) {
            setRunSecond(currentTime / 1000);
          },
          onEnd() {
            setStatus(2);
            onEnd?.();
          }
        }),
      [onEnd, second]
    );

    useEffect(() => {
      if (start) {
        setStatus(1);
        countdown.start();

        return () => {
          countdown.pause();
        };
      }
    }, [countdown, start]);

    useEffect(() => {
      if (status !== 1) {
        countdown.reset();
      }
    }, [countdown, status]);

    return (
      <Button
        ref={ref}
        className={classnames(prefixCls, className)}
        {...restProps}
        disabled={status === 1}
      >
        {status === 0 && initText}
        {status === 1 && runText.replace(/%s/g, runSecond.toString())}
        {status === 2 && resetText}
      </Button>
    );
  }
);

export default CaptchaButton;
