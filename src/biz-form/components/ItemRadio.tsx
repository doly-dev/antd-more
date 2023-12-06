import * as React from 'react';
import { Radio } from 'antd';
import type { CheckboxOptionType, RadioGroupProps } from './antd.interface';
import useFilterOptions from '../_util/useFilterOptions';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { useConfig } from '../../biz-config-provider';

export interface BizFormItemRadioProps extends BizFormItemProps {
  all?: boolean;
  allValue?: any;
  allLabel?: React.ReactNode;
  excludeValues?: ((options: CheckboxOptionType[]) => any[]) | any[];
  options?: CheckboxOptionType[];
  optionType?: RadioGroupProps['optionType'];
  radioGroupProps?: Omit<RadioGroupProps, 'options'> & { options?: CheckboxOptionType[] };
}

const BizFormItemRadio: React.FC<BizFormItemRadioProps> = (props) => {
  const { locale } = useConfig();
  const {
    all = false,
    allValue = locale.form.common.allValue,
    allLabel = locale.form.common.allLabel,
    excludeValues = [],
    options: outOptions = [],
    optionType = 'default',
    radioGroupProps = {},
    required = false,
    ...restProps
  } = props;
  const options = React.useMemo(
    () => radioGroupProps.options || outOptions,
    [outOptions, radioGroupProps.options]
  );
  const opts = useFilterOptions<CheckboxOptionType[]>({
    options,
    excludeValues,
    all,
    allValue,
    allName: allLabel
  });

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (required) {
              const hasOptValue = options.find((item) => item.value === value);
              if (!value && !hasOptValue && !(all && allValue === value)) {
                errMsg = locale.form.common.selectRequired;
              }
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          }
        }
      ]}
      {...restProps}
    >
      <Radio.Group optionType={optionType} {...radioGroupProps} options={opts} />
    </BizFormItem>
  );
};

export default BizFormItemRadio;
