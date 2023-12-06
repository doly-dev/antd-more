import * as React from 'react';
import { Checkbox } from 'antd';
import { isArray } from 'ut2';
import type { CheckboxOptionType, CheckboxGroupProps } from './antd.interface';
import useFilterOptions from '../_util/useFilterOptions';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { useConfig } from '../../biz-config-provider';

export interface CheckboxWrapperProps {
  value?: any;
  onChange?: (checkValue: any) => void;
  all?: boolean;
  allLabel?: React.ReactNode;
  excludeValues?: ((options: CheckboxOptionType[]) => any[]) | any[];
  options?: CheckboxOptionType[];
  checkboxGroupProps?: Omit<CheckboxGroupProps, 'options'> & { options?: CheckboxOptionType[] };
}

const CheckboxWrapper: React.FC<CheckboxWrapperProps> = (props) => {
  const {
    value,
    onChange,
    all,
    allLabel,
    excludeValues = [],
    options: outOptions = [],
    checkboxGroupProps = {}
  } = props;
  const options = React.useMemo(
    () => checkboxGroupProps.options || outOptions,
    [checkboxGroupProps.options, outOptions]
  );
  const opts = useFilterOptions<CheckboxOptionType[]>({
    options,
    excludeValues,
    all: false
  });

  const [indeterminate, setIndeterminate] = React.useState(
    () => !!value && !!value.length && value.length < opts.length
  );
  const [checkAll, setCheckAll] = React.useState(() => !!value && value.length === opts.length);

  const onChangeValue = (list) => {
    onChange?.(list);
    checkboxGroupProps?.onChange?.(list);
    setIndeterminate(!!list.length && list.length < opts.length);
    setCheckAll(list.length === opts.length);
  };

  const onCheckAllChange = (e) => {
    const checkedValue = e.target.checked ? opts.map((item) => item.value) : [];
    onChange?.(checkedValue);
    checkboxGroupProps?.onChange?.(checkedValue);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const allDom = all ? (
    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
      {allLabel}
    </Checkbox>
  ) : null;

  return (
    <>
      {allDom}
      <Checkbox.Group
        value={value}
        {...checkboxGroupProps}
        onChange={onChangeValue}
        options={opts}
      />
    </>
  );
};

export interface BizFormItemCheckboxProps extends BizFormItemProps, CheckboxWrapperProps {}

const BizFormItemCheckbox: React.FC<BizFormItemCheckboxProps> = (props) => {
  const { locale } = useConfig();
  const {
    all = false,
    allLabel = locale.form.common.allLabel,
    excludeValues = [],
    options = [],
    checkboxGroupProps = {},
    required = false,
    ...restProps
  } = props;
  const checkboxWrapperProps = { all, allLabel, excludeValues, options, checkboxGroupProps };

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (required && (!value || (isArray(value) && value.length === 0))) {
              errMsg = locale.form.common.selectRequired;
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
      <CheckboxWrapper {...checkboxWrapperProps} />
    </BizFormItem>
  );
};

export default BizFormItemCheckbox;
