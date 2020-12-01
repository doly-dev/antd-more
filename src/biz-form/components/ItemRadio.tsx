import * as React from 'react';
import { Radio } from 'antd';
import { RadioProps, RadioGroupProps, RadioGroupOptionType } from 'antd/es/radio';
import { CheckboxOptionType } from 'antd/es/checkbox/Group';
import useFilterOptions from '../_util/useFilterOptions';
import BizFormItem, { BizFormItemProps } from './Item';

interface OptionData extends Omit<CheckboxOptionType, 'label'> {
  name: string;
  [x: string]: any;
}

export interface FormItemRadioProps extends BizFormItemProps {
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
  const opts = useFilterOptions({ options, excludeValues, all, allValue, allName });

  return (
    <BizFormItem
      label={label}
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请选择${label}` : '';
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
    </BizFormItem>
  );
};

export default FormItemRadio;