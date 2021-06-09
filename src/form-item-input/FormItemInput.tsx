import * as React from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import getLabel from '../_util/getLabel';
import normalizeWhiteSpace from '../_util/normalizeWhiteSpace';
import FormItemTextArea from './FormItemTextArea';
import FormItemPassword from './FormItemPassword';

export interface FormItemInputProps extends FormItemProps {
  disabledWhiteSpace?: boolean;
  inputProps?: InputProps;
}

const FormItemInput: React.FC<FormItemInputProps> & {
  TextArea: typeof FormItemTextArea;
  Password: typeof FormItemPassword;
} = ({ disabledWhiteSpace = false, inputProps = {}, required = false, label, ...restProps }) => {
  const labelText = React.useMemo(() => getLabel(label), [label]);
  const handleNormalize = React.useCallback(
    (val) => {
      if (disabledWhiteSpace) {
        return normalizeWhiteSpace(val);
      }
      return val;
    },
    [disabledWhiteSpace],
  );

  return (
    <Form.Item
      label={label}
      required={required}
      normalize={handleNormalize}
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
      <Input placeholder="请输入" allowClear autoComplete="off" {...inputProps} />
    </Form.Item>
  );
};

FormItemInput.TextArea = FormItemTextArea;
FormItemInput.Password = FormItemPassword;

export default FormItemInput;
