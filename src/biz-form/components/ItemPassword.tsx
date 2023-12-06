import * as React from 'react';
import { Input } from 'antd';
import { validatePassword } from 'util-helpers';
import type { PasswordProps } from './antd.interface';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { useConfig } from '../../biz-config-provider';

type Validated = {
  len?: boolean;
  level?: boolean;
  special?: boolean;
};

export interface BizFormItemPasswordProps
  extends BizFormItemProps,
    Pick<PasswordProps, 'placeholder' | 'allowClear' | 'visibilityToggle' | 'maxLength'> {
  level?: 1 | 2 | 3;
  min?: number;
  max?: number;
  ignoreCase?: boolean;
  special?: string;
  inputProps?: PasswordProps;
  disabledPaste?: boolean;
  disabledCopy?: boolean;

  validated?: boolean | Validated;
}

const BizFormItemPassword: React.FC<BizFormItemPasswordProps> = (props) => {
  const { locale } = useConfig();
  const {
    placeholder = locale.form.common.inputPlaceholder,
    allowClear,
    visibilityToggle = true,
    maxLength,
    level = 2,
    min = 8,
    max = 16,
    ignoreCase = false,
    special = '\\x21-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7B-\\x7E',
    validated = true,
    disabledPaste = false,
    disabledCopy = true,

    inputProps = {},
    required = false,
    ...restProps
  } = props;
  const validateObj: Validated = React.useMemo(() => {
    let ret: Validated = {
      len: true,
      level: true,
      special: true
    };
    if (typeof validated === 'boolean') {
      if (!validated) {
        ret = {};
      }
    } else {
      ret = {
        ...ret,
        ...validated
      };
    }
    return ret;
  }, [validated]);

  const handlePaste = React.useCallback(
    (e) => {
      if (disabledPaste) {
        e.preventDefault();
      }
      inputProps?.onPaste?.(e);
    },
    [disabledPaste, inputProps]
  );

  const handleCopy = React.useCallback(
    (e) => {
      if (disabledCopy) {
        e.preventDefault();
      }
      inputProps?.onCopy?.(e);
    },
    [disabledCopy, inputProps]
  );

  return (
    <BizFormItem
      validateTrigger={validated ? 'onBlur' : 'onChange'}
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';

            if (!value) {
              errMsg = required ? locale.form.common.inputRequired : '';
            } else if (validated) {
              if (validateObj.len && (value.length < min || value.length > max)) {
                errMsg = locale.form.password.range(min, max);
              } else {
                const result = validatePassword(value, { ignoreCase, level, special });
                if (validateObj.special && result.containes.unallowableCharacter) {
                  errMsg = locale.form.password.unallowable;
                } else if (validateObj.level && !result.validated) {
                  errMsg = locale.form.password.level(level);
                }
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
      <Input.Password
        placeholder={placeholder}
        autoComplete="off"
        allowClear={allowClear}
        visibilityToggle={visibilityToggle}
        maxLength={maxLength}
        {...inputProps}
        onPaste={handlePaste}
        onCopy={handleCopy}
      />
    </BizFormItem>
  );
};

export default BizFormItemPassword;
