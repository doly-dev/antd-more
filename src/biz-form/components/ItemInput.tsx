import * as React from 'react';
import { isBankCard, isEmail, isIdCard, isMobile } from 'util-helpers';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import type { InputWrapperProps } from './form/InputWrapper';
import InputWrapper from './form/InputWrapper';
import type { InputProps } from './antd.interface';
import { useConfig } from '../../biz-config-provider';

const validateMethod = {
  bankCard: (val) => isBankCard(val, { loose: true }),
  email: isEmail,
  idCard: (val) => isIdCard(val, { loose: true }),
  mobile: isMobile
};

export interface BizFormItemInputProps
  extends BizFormItemProps,
    Pick<InputProps, 'placeholder' | 'allowClear' | 'maxLength'> {
  type?: InputWrapperProps['type'];
  disabledWhiteSpace?: boolean;
  inputProps?: InputProps;
  format?: InputWrapperProps['format'];
}

const BizFormItemInput: React.FC<BizFormItemInputProps> = (props) => {
  const { locale } = useConfig();
  const {
    placeholder = locale.form.common.inputPlaceholder,
    allowClear,
    maxLength,
    type,
    disabledWhiteSpace,
    inputProps = {},
    required = false,
    transform,
    format = false,
    ...restProps
  } = props;
  const hasSpecialType = React.useMemo(
    () =>
      type === 'bankCard' ||
      type === 'idCard' ||
      type === 'mobile' ||
      type === 'userName' ||
      type === 'email',
    [type]
  );
  const handleTransform = React.useCallback(
    (val) => {
      if (transform) {
        return transform(val);
      }
      if (format && (type === 'bankCard' || type === 'mobile')) {
        return val?.replace(/\D/g, '');
      }
      return val;
    },
    [format, transform, type]
  );

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? locale.form.common.inputRequired : '';
            } else if (type === 'userName') {
              if (isMobile(value)) {
                errMsg = locale.form.input.userName.mobile;
              } else if (value.indexOf('@') > -1) {
                errMsg = locale.form.input.userName.email;
              }
            } else if (validateMethod[type] && !validateMethod[type](value)) {
              errMsg = locale.form.input.invalid;
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          },
          transform: handleTransform
        }
      ]}
      transform={handleTransform}
      validateTrigger={hasSpecialType ? 'onBlur' : 'onChange'}
      {...restProps}
    >
      <InputWrapper
        placeholder={placeholder}
        allowClear={allowClear}
        maxLength={maxLength}
        autoComplete="off"
        type={type}
        disabledWhiteSpace={disabledWhiteSpace}
        format={format}
        {...inputProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemInput;
