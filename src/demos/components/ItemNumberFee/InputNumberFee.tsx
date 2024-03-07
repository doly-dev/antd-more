import React, { useCallback, useEffect, useState } from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
import { floor } from 'ut2';
import { isValidNumber, plus, minus } from 'util-helpers';
import styles from './index.module.less';

export interface InputNumberFeeProps extends InputNumberProps {
  beforeValue: string | number;
}

const InputNumberFee: React.FC<InputNumberFeeProps> = ({
  beforeValue,
  value,
  onChange,
  precision = 4,
  step = 0.1,
  onBlur,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState<string | number | null>();
  const commonProps = {
    precision,
    step
  };
  const handleChange = (val: string | number | null) => {
    const realVal = val ? floor(val as number, precision) : 0;
    onChange?.(plus(beforeValue, realVal));
  };

  const handleBlur = (e: any) => {
    onBlur?.(e);
    if (inputValue === '' || inputValue === void 0) {
      onChange?.(beforeValue);
    }
  };

  const handleParser = useCallback(
    (displayValue: any) => {
      if (displayValue && typeof precision === 'number') {
        return floor(displayValue, precision);
      }
      return displayValue;
    },
    [precision]
  );

  useEffect(() => {
    if (isValidNumber(value, true) && isValidNumber(beforeValue, true)) {
      setInputValue(minus(value!, beforeValue));
    }
  }, [value, beforeValue]);

  return (
    <div className={styles.inputNumberFee}>
      <InputNumber disabled value={beforeValue} {...commonProps} />
      <span className={styles.symbol}>+</span>
      <InputNumber
        onChange={handleChange}
        value={inputValue}
        min={0}
        onBlur={handleBlur}
        parser={handleParser}
        {...commonProps}
        {...restProps}
      />
      <span className={styles.symbol}>=</span>
      <InputNumber disabled value={value || beforeValue} addonAfter="%" {...commonProps} />
    </div>
  );
};

export default InputNumberFee;
