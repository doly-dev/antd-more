import * as React from 'react';
import { Radio } from 'antd';
import type { CheckboxOptionType, RadioProps, RadioGroupProps } from './antd.interface';
import useFilterOptions from '../_util/useFilterOptions';
import BizFormItem from './Item';
import type { BizFormItemProps } from './Item';
import getLabel from '../_util/getLabel';

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
  optionType?: RadioGroupProps['optionType'];
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
  required = false,
  ...restProps
}) => {
  const opts = useFilterOptions({ options, excludeValues, all, allValue, allName });

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            const hasOptValue = options.find((item) => item.value === value);
            if (!value && !hasOptValue && !(all && allValue === value)) {
              errMsg = required ? `请选择${getLabel(restProps)}` : '';
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
        {opts.map(({ value, name, ...restOpts }, index) => {
          const Comp = optionType === 'button' ? Radio.Button : Radio;
          return (
            <Comp {...radioProps} key={value + index.toString()} value={value} {...restOpts}>
              {name}
            </Comp>
          );
        })}
      </Radio.Group>
    </BizFormItem>
  );
};

export default FormItemRadio;
