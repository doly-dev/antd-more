import * as React from 'react';
import type { AutoCompleteProps } from 'antd';
import { AutoComplete } from 'antd';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { useConfig } from '../../biz-config-provider';

export interface BizFormItemAutoCompleteProps
  extends BizFormItemProps,
    Pick<
      AutoCompleteProps,
      'allowClear' | 'placeholder' | 'maxLength' | 'onSearch' | 'onFocus' | 'onBlur' | 'options'
    > {
  autoCompleteProps?: AutoCompleteProps;
}

const ItemAutoComplete: React.FC<BizFormItemAutoCompleteProps> = (props) => {
  const { locale } = useConfig();
  const {
    allowClear = true,
    placeholder = locale.form.common.inputPlaceholder,
    maxLength,
    onSearch,
    onFocus,
    onBlur,
    options,
    autoCompleteProps,

    required,
    ...restProps
  } = props;
  return (
    <BizFormItem
      required={required}
      rules={[
        {
          required,
          message: locale.form.common.inputRequired
        }
      ]}
      {...restProps}
    >
      <AutoComplete
        allowClear={allowClear}
        placeholder={placeholder}
        maxLength={maxLength}
        onSearch={onSearch}
        onFocus={onFocus}
        onBlur={onBlur}
        options={options}
        {...autoCompleteProps}
      />
    </BizFormItem>
  );
};

export default ItemAutoComplete;
