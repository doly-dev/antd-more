import * as React from 'react';
import { floor, gt, gte, lt, lte, toNumber } from 'ut2';
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
  lt?: string | number;
  gt?: string | number;
  lte?: string | number;
  gte?: string | number;
  maxPrecision?: number;
  useFloor?: boolean;
  inputProps?: InputNumberProps;
}

const BizFormItemNumber: React.FC<BizFormItemNumberProps> = (props) => {
  const { locale } = useConfig();
  const {
    lt: outLt,
    gt: outGt,
    lte: outLte,
    gte: outGte,
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
            } else if (isValidNumber(outLt) && gte(value, toNumber(outLt))) {
              errMsg = locale.form.number.lt(outLt);
            } else if (isValidNumber(outGt) && lte(value, toNumber(outGt))) {
              errMsg = locale.form.number.gt(outGt);
            } else if (isValidNumber(outLte) && gt(value, toNumber(outLte))) {
              errMsg = locale.form.number.lte(outLte);
            } else if (isValidNumber(outGte) && lt(value, toNumber(outGte))) {
              errMsg = locale.form.number.gte(outGte);
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
