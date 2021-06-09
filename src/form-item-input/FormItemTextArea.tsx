import * as React from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { TextAreaProps } from 'antd/lib/input';
import getLabel from '../_util/getLabel';
import normalizeWhiteSpace from '../_util/normalizeWhiteSpace';

export interface FormItemTextAreaProps extends FormItemProps {
  disabledWhiteSpace?: boolean;
  inputProps?: TextAreaProps;
}

const FormItemTextArea: React.FC<FormItemTextAreaProps> = ({
  disabledWhiteSpace = false,
  inputProps = {},
  label,
  required = false,
  ...restProps
}) => {
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
      <Input.TextArea
        placeholder="请输入"
        autoComplete="off"
        autoSize={{ minRows: 4, maxRows: 6 }}
        {...inputProps}
      />
    </Form.Item>
  );
};

export default FormItemTextArea;
