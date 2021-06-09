import * as React from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { PasswordProps } from 'antd/lib/input';
import getLabel from '../_util/getLabel';

export interface FormItemPasswordProps extends FormItemProps {
  inputProps?: PasswordProps;
}

const FormItemPassword: React.FC<FormItemPasswordProps> = ({
  inputProps = {},
  label,
  required = false,
  ...restProps
}) => {
  const labelText = React.useMemo(() => getLabel(label), [label]);

  return (
    <Form.Item
      label={label}
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请输入${labelText}` : '';
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
      <Input.Password placeholder="请输入" autoComplete="off" {...inputProps} />
    </Form.Item>
  );
};

export default FormItemPassword;
