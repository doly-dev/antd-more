import * as React from 'react';
import { Form, Input } from 'antd';
import { isIdCard } from 'util-helpers';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import getLabel from '../_util/getLabel';

export interface FormItemIdCardProps extends FormItemProps {
  security?: boolean; // 脱敏。 为 true 时，必须传入 initialValue
  symbol?: string; // 脱敏符号
  inputProps?: InputProps;
}

const FormItemIdCard: React.FC<FormItemIdCardProps> = ({
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
        const reg = security ? new RegExp(`[^\\d|x|\\${symbol}]`, 'ig') : /[^\d|x]/gi;
        return value.replace(reg, '').toUpperCase();
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
            } else if (!isIdCard(value)) {
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
      <Input placeholder="请输入" maxLength={18} allowClear autoComplete="off" {...inputProps} />
    </Form.Item>
  );
};

export default FormItemIdCard;
