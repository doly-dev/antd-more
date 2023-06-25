import * as React from 'react';
import { isBankCard, isEmail, isIdCard, isMobile } from 'util-helpers';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import type { InputWrapperProps } from './form/InputWrapper';
import InputWrapper from './form/InputWrapper';
import getLabel from '../_util/getLabel';
import type { InputProps } from './antd.interface';

const validateUserName = (value, { label }) => {
  const ret = {
    validated: true,
    message: ''
  };
  if (isMobile(value)) {
    ret.message = `${label}不能为手机号码`;
  } else if (value.indexOf('@') > -1) {
    ret.message = `${label}不能包含@符号`;
  }
  if (ret.message) {
    ret.validated = false;
  }
  return ret;
};

const validateMethod = {
  bankCard: (val) => isBankCard(val, { loose: true }),
  email: isEmail,
  idCard: (val) => isIdCard(val, { loose: true }),
  mobile: isMobile
};

export interface BizFormItemInputProps extends BizFormItemProps, Pick<InputProps, 'placeholder' | 'allowClear' | 'maxLength'> {
  type?: InputWrapperProps['type'];
  disabledWhiteSpace?: boolean;
  inputProps?: InputProps;
  format?: InputWrapperProps['format'];
}

const BizFormItemInput: React.FC<BizFormItemInputProps> = ({
  placeholder = '请输入',
  allowClear,
  maxLength,
  type,
  disabledWhiteSpace,
  inputProps = {},
  required = false,
  transform,
  format = false,
  ...restProps
}) => {
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

  const messageLabel = getLabel(restProps);

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请输入${messageLabel}` : '';
            } else if (type === 'userName') {
              errMsg = validateUserName(value, { label: messageLabel }).message;
            } else if (validateMethod[type] && !validateMethod[type](value)) {
              errMsg = `请输入正确的${messageLabel}`;
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
