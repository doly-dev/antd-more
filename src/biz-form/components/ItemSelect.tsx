import * as React from 'react';
import { Select } from 'antd';
import type { SelectProps, OptionCoreData, OptionGroupData } from './antd.interface';
import useFilterOptions from '../_util/useFilterOptions';
import BizFormItem from './Item';
import type { BizFormItemProps } from './Item';
import getLabel from '../_util/getLabel';

const { Option, OptGroup } = Select;

interface OptionDataExtend extends Omit<OptionCoreData, 'children' | 'title' | 'label'> {
  name: string;
  [x: string]: any;
}

interface OptionGroupDataExtend extends OptionGroupData {
  options: OptionDataExtend[];
}

type OptionType = (OptionDataExtend | OptionGroupDataExtend)[];

export interface FormItemSelectProps extends BizFormItemProps {
  all?: boolean;
  allValue?: any;
  allName?: string;
  excludeValues?: any[];
  options?: OptionType;
  selectProps?: SelectProps<any>;
}

const FormItemSelect: React.FC<FormItemSelectProps> = ({
  all = false,
  allValue = '',
  allName = '全部',
  excludeValues = [],
  options = [],
  selectProps = {},
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
      <Select
        placeholder="请选择"
        // allowClear={!required && !all}
        {...selectProps}
      >
        {opts.map(({ options: itemOpts, ...restOpts }: OptionGroupDataExtend, index) => {
          if (itemOpts) {
            return (
              <OptGroup key={restOpts.key || restOpts.value + index.toString()} {...restOpts}>
                {itemOpts.map(({ name, label, ...restSubOpts }: OptionDataExtend, subIndex) => (
                  <Option
                    key={restSubOpts.key || restSubOpts.value + subIndex.toString()}
                    {...restSubOpts}
                  >
                    {name}
                  </Option>
                ))}
              </OptGroup>
            );
          } else {
            const { name, label, ...rest } = restOpts as OptionDataExtend;
            return (
              <Option key={rest.key || rest.value + index.toString()} {...rest}>
                {name}
              </Option>
            );
          }
        })}
      </Select>
    </BizFormItem>
  );
};

export default FormItemSelect;
