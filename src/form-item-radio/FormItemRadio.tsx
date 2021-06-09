import * as React from 'react';
import { Form, Radio } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { RadioProps, RadioGroupProps, RadioGroupOptionType } from 'antd/lib/radio';
import { CheckboxOptionType } from 'antd/lib/checkbox/Group';
import getLabel from '../_util/getLabel';
import useFilterOptions from '../_util/useFilterOptions';

interface OptionData extends Omit<CheckboxOptionType, 'label'> {
  name: string;
  [x: string]: any;
}

export interface FormItemRadioProps extends FormItemProps {
  all?: boolean;
  allValue?: any;
  allName?: string;
  excludeValues?: any[];
  options?: OptionData[];
  optionType?: RadioGroupOptionType;
  radioProps?: RadioProps;
  radioGroupProps?: RadioGroupProps;
}

const FormItemRadio: React.FC<FormItemRadioProps> = ({
  all = false,
  allValue = '',
  allName = '全部',
  excludeValues = [],
  options = [],
  optionType = 'default',
  radioProps = {},
  radioGroupProps = {},
  label,
  required = false,
  ...restProps
}) => {
  const labelText = React.useMemo(() => getLabel(label), [label]);
  const opts = useFilterOptions({ options, excludeValues, all, allValue, allName });

  return (
    <Form.Item
      label={label}
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请选择${labelText}` : '';
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
      <Radio.Group {...radioGroupProps}>
        {opts.map(({ value, name, ...restOpts }) => {
          const Comp = optionType === 'button' ? Radio.Button : Radio;
          return (
            <Comp {...radioProps} key={value || name} value={value} {...restOpts}>
              {name}
            </Comp>
          );
        })}
      </Radio.Group>
    </Form.Item>
  );
};

export default FormItemRadio;
