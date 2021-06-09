import * as React from 'react';
import { Form, Select } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { SelectProps } from 'antd/lib/select';
// eslint-disable-next-line import/no-extraneous-dependencies
import { OptionCoreData, OptionGroupData } from 'rc-select/es/interface';
import getLabel from '../_util/getLabel';
import useFilterOptions from '../_util/useFilterOptions';

const { Option, OptGroup } = Select;

interface OptionDataExtend extends Omit<OptionCoreData, 'children' | 'title' | 'label'> {
  name: string;
  [x: string]: any;
}

interface OptionGroupDataExtend extends OptionGroupData {
  options: OptionDataExtend[];
}

type OptionType = (OptionDataExtend | OptionGroupDataExtend)[];

export interface FormItemSelectProps extends FormItemProps {
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
      <Select
        placeholder="请选择"
        // allowClear={!required && !all}
        {...selectProps}
      >
        {opts.map(({ options: itemOpts, ...restOpts }: OptionGroupDataExtend) => {
          if (itemOpts) {
            return (
              <OptGroup key={restOpts.key || restOpts.label || restOpts.value} {...restOpts}>
                {itemOpts.map(({ name, label, ...restSubOpts }: OptionDataExtend) => (
                  <Option key={restSubOpts.key || restSubOpts.value || name} {...restSubOpts}>
                    {name}
                  </Option>
                ))}
              </OptGroup>
            );
          } else {
            const { name, label, ...rest } = restOpts as OptionDataExtend;
            return (
              <Option key={rest.key || rest.value || name} {...rest}>
                {name}
              </Option>
            );
          }
        })}
      </Select>
    </Form.Item>
  );
};

export default FormItemSelect;
