import * as React from 'react';
import { isValidNumber } from 'util-helpers';
import type { BizFormItemProps } from 'antd-more';
import { BizFormItem } from 'antd-more';
import type { InputNumberFeeProps } from './InputNumberFee';
import InputNumberFee from './InputNumberFee';

interface ItemNumberFeeProps extends BizFormItemProps, Pick<InputNumberFeeProps, 'beforeValue'> {
  inputProps?: InputNumberFeeProps;
  gte?: number;
  lte?: number;
}

const ItemNumberFee: React.FC<ItemNumberFeeProps> = ({
  beforeValue,
  lte,
  gte,
  inputProps,
  label,
  messageVariables,
  required,
  ...restProps
}) => {
  return (
    <BizFormItem
      required={required}
      label={label}
      messageVariables={messageVariables}
      validateFirst
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!isValidNumber(value, true)) {
              errMsg = required ? `请输入${messageVariables?.label || label}` : '';
            } else if (isValidNumber(gte) && value < gte) {
              errMsg = `\${label}必须大于或等于${gte}`;
            } else if (isValidNumber(lte) && value > lte) {
              errMsg = `\${label}必须小于或等于${lte}`;
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
      <InputNumberFee beforeValue={beforeValue} {...inputProps} />
    </BizFormItem>
  );
};

export default ItemNumberFee;
