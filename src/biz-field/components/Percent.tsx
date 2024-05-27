import * as React from 'react';
import { isNil } from 'ut2';
import type { BizFieldProps } from '../interface';

function getColor(value) {
  if (value === 0) {
    return '#595959';
  }
  return value > 0 ? '#ff4d4f' : '#52c41a';
}

function getSymbol(value) {
  if (value <= 0) {
    return '';
  }
  return '+';
}

const Percent: React.FC<
  Pick<BizFieldProps, 'value' | 'defaultValue'> & {
    precision?: number | 'auto';
    showColor?: boolean;
    showSymbol?: boolean;
    suffix?: React.ReactNode;
  } & Omit<React.HTMLAttributes<HTMLSpanElement>, 'defaultValue'>
> = React.memo(
  ({
    value,
    style,
    precision = 2,
    showColor = false,
    showSymbol = false,
    suffix = '%',
    defaultValue = '-',
    ...restProps
  }) => {
    const realValue =
      typeof value === 'string' && (value as string).includes('%')
        ? parseFloat((value as string).replace('%', ''))
        : parseFloat(value);
    const color = getColor(realValue);
    const styles = showColor && color ? { color, ...style } : style;
    const symbol = showSymbol ? getSymbol(realValue) : '';

    const ret =
      value === '' || isNil(value)
        ? defaultValue
        : symbol +
          (typeof precision === 'number' ? realValue.toFixed(precision) : realValue) +
          suffix;

    return (
      <span style={styles} {...restProps}>
        {ret}
      </span>
    );
  }
);

export default Percent;
