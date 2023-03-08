import React, { useState, useEffect, useMemo } from 'react';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import classnames from 'classnames';
import CountDown from 'countdown-pro';
import './CaptchaButton.less';

const prefixCls = 'antd-more-captcha-button';

export interface CaptchaButtonProps extends ButtonProps {
  start?: boolean;
  second?: number;
  onEnd?: () => void;
  initText?: string;
  runText?: string;
  resetText?: string;
  ref?: React.MutableRefObject<HTMLElement | undefined> | ((ref: HTMLElement) => void);
}

const CaptchaButton = React.forwardRef<HTMLElement, CaptchaButtonProps>(
  (
    {
      // 开始倒计时
      start = false,
      // 初始显示文本
      initText = '获取验证码',
      // 倒计时显示文本，包含%s会自动替换为秒数
      runText = '%s秒后重新获取',
      // 结束显示文本
      resetText = '重新获取验证码',
      // 倒计时时长，单位秒
      second = 60,
      // 倒计时结束的回调方法
      onEnd,
      className,
      ...restProps
    },
    ref
  ) => {
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
      <Button ref={ref} className={classnames(prefixCls, className)} {...restProps} disabled={status === 1}>
        {status === 0 && initText}
        {status === 1 && runText.replace(/%s/g, runSecond.toString())}
        {status === 2 && resetText}
      </Button>
    );
  }
);

export default CaptchaButton;
