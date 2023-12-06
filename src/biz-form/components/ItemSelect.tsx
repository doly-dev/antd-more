import * as React from 'react';
import { Select } from 'antd';
import type { SelectProps } from './antd.interface';
import useFilterOptions from '../_util/useFilterOptions';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import FieldContext from '../FieldContext';
import { useConfig } from '../../biz-config-provider';

export interface BizFormItemSelectProps<ValueType = any>
  extends BizFormItemProps,
    Pick<
      SelectProps<ValueType>,
      'allowClear' | 'placeholder' | 'options' | 'fieldNames' | 'filterOption'
    > {
  all?: boolean;
  allValue?: any;
  allLabel?: React.ReactNode;
  excludeValues?: ((options: Required<SelectProps<ValueType>>['options']) => any[]) | any[];
  selectProps?: SelectProps<ValueType>;
}

function BizFormItemSelect<Values = any>(props: BizFormItemSelectProps<Values>) {
  const { locale } = useConfig();
  const {
    placeholder = locale.form.common.selectPlaceholder,
    allowClear = false,
    fieldNames,
    filterOption = true,

    all = false,
    allValue = locale.form.common.allValue,
    allLabel = locale.form.common.allLabel,
    excludeValues = [],
    options: outOptions = [],
    selectProps = {},
    required = false,
    ...restProps
  } = props;
  const { getPopupContainer } = React.useContext(FieldContext);
  const options = React.useMemo(
    () => selectProps.options || outOptions,
    [outOptions, selectProps.options]
  );
  const opts = useFilterOptions<BizFormItemSelectProps['options']>({
    options,
    excludeValues,
    all,
    allValue,
    allName: allLabel,
    fieldNames: selectProps?.fieldNames
  });

  const { value: valueKey } = React.useMemo(
    () => ({
      value: 'value',
      ...selectProps?.fieldNames
    }),
    [selectProps?.fieldNames]
  );

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (required) {
              const hasOptValue = options.find((item) => item[valueKey] === value);
              if (
                (!value && !hasOptValue && !(all && allValue === value)) ||
                ((selectProps?.mode === 'multiple' || selectProps?.mode === 'tags') &&
                  value &&
                  value.length <= 0)
              ) {
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
      <Select
        placeholder={placeholder}
        allowClear={allowClear}
        fieldNames={fieldNames}
        filterOption={filterOption}
        getPopupContainer={getPopupContainer}
        {...selectProps}
        options={opts}
      />
    </BizFormItem>
  );
}

export default BizFormItemSelect;
