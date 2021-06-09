import * as React from 'react';
import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { InputNumberProps } from 'antd/lib/input-number';
import InputNumber from '../input-number';
import getLabel from '../_util/getLabel';

export interface FormItemNumberProps extends FormItemProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
  lt?: number;
  gt?: number;
  lte?: number;
  gte?: number;
  inputProps?: InputNumberProps;
}

const FormItemNumber: React.FC<FormItemNumberProps> = ({
  before,
  after,
  lt,
  gt,
  lte,
  gte,
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
            if (typeof value !== 'number') {
              errMsg = required ? `请输入${labelText}` : '';
            } else {
              if (typeof lt === 'number' && value >= lt) {
                errMsg = `不能大于等于${lt}`;
              }
              if (typeof gt === 'number' && value <= gt) {
                errMsg = `不能小于等于${gt}`;
              }
              if (typeof lte === 'number' && value > lte) {
                errMsg = `不能大于${lte}`;
              }
              if (typeof gte === 'number' && value < gte) {
                errMsg = `不能小于${gte}`;
              }
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
      <InputNumber
        placeholder="请输入"
        precision={2}
        before={before}
        after={after}
        {...inputProps}
      />
    </Form.Item>
  );
};

export default FormItemNumber;
