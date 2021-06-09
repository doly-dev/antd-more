import * as React from 'react';
import { Form, Input } from 'antd';
import { isMobile } from 'util-helpers';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import getLabel from '../_util/getLabel';
import normalizeWhiteSpace from '../_util/normalizeWhiteSpace';

export interface FormItemUserNameProps extends FormItemProps {
  min?: number;
  max?: number;
  inputProps?: InputProps;
}

const FormItemUserName: React.FC<FormItemUserNameProps> = ({
  min = 6,
  max = 32,
  inputProps = {},
  label,
  required = false,
  ...restProps
}) => {
  const labelText = React.useMemo(() => getLabel(label), [label]);

  return (
    <Form.Item
      label={label}
      normalize={normalizeWhiteSpace}
      validateTrigger="onBlur"
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请输入${labelText}` : '';
            } else if (value.length < min || value.length > max) {
              errMsg = `${labelText}为${min}~${max}位`;
            } else if (isMobile(value)) {
              errMsg = `${labelText}不能为手机号码`;
            } else if (value.indexOf('@') > -1) {
              errMsg = `${labelText}不能包含@符号`;
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
      <Input placeholder="请输入" maxLength={max} allowClear autoComplete="off" {...inputProps} />
    </Form.Item>
  );
};

export default FormItemUserName;
