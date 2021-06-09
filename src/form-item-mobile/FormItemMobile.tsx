import * as React from 'react';
import { Form, Input } from 'antd';
import { isMobile } from 'util-helpers';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import getLabel from '../_util/getLabel';

export interface FormItemMobileProps extends FormItemProps {
  security?: boolean; // 脱敏。 为 true 时，必须传入 initialValue
  symbol?: string; // 脱敏符号
  inputProps?: InputProps;
}

const FormItemMobile: React.FC<FormItemMobileProps> = ({
  security = false,
  symbol = '*',
  inputProps = {},
  label,
  required = false,
  ...restProps
}) => {
  const labelText = React.useMemo(() => getLabel(label), [label]);
  const handleNormalize = React.useCallback(
    (value: string | undefined) => {
      if (typeof value === 'string') {
        const reg = security ? new RegExp(`[^\\d\\${symbol}]`, 'g') : /[^\d]/g;
        return value.replace(reg, '');
      }
      return value;
    },
    [security, symbol],
  );

  return (
    <Form.Item
      label={label}
      normalize={handleNormalize}
      validateTrigger="onBlur"
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请输入${labelText}` : '';
            } else if (security && restProps && restProps.initialValue === value) {
              // 脱敏校验
              errMsg = '';
            } else if (!isMobile(value)) {
              errMsg = `请输入正确的${labelText}`;
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          },
        },
      ]}
      {...restProps}
    >
      <Input placeholder="请输入" maxLength={11} allowClear autoComplete="off" {...inputProps} />
    </Form.Item>
  );
};

export default FormItemMobile;
