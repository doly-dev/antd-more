import * as React from 'react';
import { Input } from 'antd';
import { calculateCursorPosition } from 'util-helpers';
import {
  normalizeBankCard,
  normalizeIdCard,
  normalizeMobile,
  normalizeWhiteSpace
} from '../../_util/normalize';
import type { InputProps } from '../antd.interface';

type InputType = InputProps['type'] | 'bankCard' | 'email' | 'idCard' | 'mobile' | 'userName';

export interface InputWrapperProps extends InputProps {
  type?: InputType;
  disabledWhiteSpace?: boolean;
  format?: boolean;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
  value,
  onChange,
  type,
  disabledWhiteSpace,
  format = true,
  maxLength,
  ...restProps
}) => {
  const maxLen = React.useMemo(() => {
    if (typeof maxLength !== 'undefined') {
      return maxLength;
    }
    if (!format) {
      if (type === 'mobile') {
        return 11;
      } else if (type === 'idCard') {
        return 18;
      }
    }
    return undefined;
  }, [format, maxLength, type]);
  const realType = React.useMemo(() => {
    if (
      type === 'bankCard' ||
      type === 'mobile' ||
      type === 'idCard' ||
      type === 'email' ||
      type === 'userName'
    ) {
      return 'text';
    }
    return type;
  }, [type]);
  const needAdjustPos = React.useMemo(
    () =>
      format &&
      (type === 'bankCard' ||
        type === 'mobile' ||
        type === 'idCard' ||
        type === 'email' ||
        type === 'userName' ||
        disabledWhiteSpace),
    [format, type, disabledWhiteSpace]
  );

  const calcPosOpts = React.useMemo(() => {
    const ret: Record<string, any> = {};
    if (type === 'bankCard') {
      ret.type = 'bankCard';
    } else if (type === 'mobile') {
      ret.type = 'mobile';
    } else if (type === 'idCard') {
      ret.maskReg = /[^\dx]/gi;
      ret.placeholderChars = [];
    } else if (type === 'email' || type === 'userName' || disabledWhiteSpace) {
      ret.maskReg = /\s/g;
      ret.placeholderChars = [];
    }
    return ret;
  }, [disabledWhiteSpace, type]);

  const normalize = React.useCallback(
    (val: string) => {
      if (type === 'bankCard') {
        return normalizeBankCard(val, format);
      } else if (type === 'mobile') {
        return normalizeMobile(val, format);
      } else if (type === 'idCard') {
        return normalizeIdCard(val, format);
      } else if (type === 'email' || type === 'userName' || disabledWhiteSpace) {
        return normalizeWhiteSpace(val);
      }
      return val;
    },
    [disabledWhiteSpace, format, type]
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const el = e.target;
      const prevPos = el.selectionEnd;
      const rawValue = el.value;
      const ctrlValue = normalize(rawValue);
      onChange?.(ctrlValue as any);

      // 调整光标位置
      if (needAdjustPos) {
        const cursorPos = calculateCursorPosition(
          prevPos,
          value as string,
          rawValue,
          ctrlValue,
          calcPosOpts
        );

        if (rawValue !== ctrlValue) {
          setTimeout(() => {
            el.selectionStart = el.selectionEnd = cursorPos;
          });
        } else {
          el.selectionStart = el.selectionEnd = cursorPos;
        }
      }
    },
    [calcPosOpts, needAdjustPos, normalize, onChange, value]
  );

  React.useEffect(() => {
    if (value && needAdjustPos) {
      const newValue = normalize(value as string);
      if (newValue !== value) {
        onChange?.(newValue as any);
      }
    }
  }, [needAdjustPos, normalize, onChange, value]);

  return (
    <Input
      value={value}
      onChange={handleChange}
      type={realType}
      maxLength={maxLen}
      {...restProps}
    />
  );
};

export default InputWrapper;
