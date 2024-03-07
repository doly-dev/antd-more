import * as React from 'react';
import { floor } from 'ut2';
import { isValidNumber } from 'util-helpers';
import { InputNumber } from 'antd';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import type { InputNumberProps } from './antd.interface';
import { useConfig } from '../../biz-config-provider';

export interface BizFormItemNumberProps
  extends BizFormItemProps,
    Pick<
      InputNumberProps,
      | 'precision'
      | 'placeholder'
      | 'step'
      | 'min'
      | 'max'
      | 'formatter'
      | 'addonAfter'
      | 'addonBefore'
    > {
  lt?: number;
  gt?: number;
  lte?: number;
  gte?: number;
  maxPrecision?: number;
  useFloor?: boolean;
  inputProps?: InputNumberProps;
}

const BizFormItemNumber: React.FC<BizFormItemNumberProps> = (props) => {
  const { locale } = useConfig();
  const {
    lt,
    gt,
    lte,
    gte,
    inputProps = {},
    precision,
    useFloor = false,
    maxPrecision,
    placeholder = locale.form.common.inputPlaceholder,
    step = 1,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    formatter,
    addonBefore,
    addonAfter,

    required = false,
    ...restProps
  } = props;
  const internalParse = React.useCallback(
    (displayValue: any) => {
      if (displayValue && useFloor && typeof precision === 'number') {
        return floor(displayValue, precision);
      }
      return displayValue;
    },
    [precision, useFloor]
  );

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!isValidNumber(value, true)) {
              errMsg = required ? locale.form.common.inputRequired : '';
            } else if (isValidNumber(lt) && value >= lt) {
              errMsg = locale.form.number.lt(lt);
            } else if (isValidNumber(gt) && value <= gt) {
              errMsg = locale.form.number.gt(gt);
            } else if (isValidNumber(lte) && value > lte) {
              errMsg = locale.form.number.lte(lte);
            } else if (isValidNumber(gte) && value < gte) {
              errMsg = locale.form.number.gte(gte);
            } else if (isValidNumber(maxPrecision) && maxPrecision > 0) {
              const decimal = `${value}`.split('.')[1];
              if (decimal && decimal.length > maxPrecision) {
                errMsg = locale.form.number.maxPrecision(maxPrecision);
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
      <InputNumber
        placeholder={placeholder}
        precision={precision}
        // 需要显式指定最大最小值，并且不设置 parser ，否则输入过大数值会转换为科学记数法，最终导致错误的结果。
        max={max}
        min={min}
        step={step}
        formatter={formatter}
        parser={internalParse}
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        {...inputProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemNumber;
