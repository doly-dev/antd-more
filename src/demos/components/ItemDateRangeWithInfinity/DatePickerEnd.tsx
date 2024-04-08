import React, { useMemo, useRef } from 'react';
import dayjs from 'dayjs';
import { Checkbox, DatePicker, Space } from 'antd';
import type { DatePickerProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

export type DatePickerEndProps = DatePickerProps & {
  infinityValue?: string;
  infinityLabel?: string;
  hideOnInfinity?: boolean;
};

const DatePickerEnd: React.FC<DatePickerEndProps> = ({
  infinityValue = '9999-12-31',
  infinityLabel = '长期',
  hideOnInfinity = true,
  format = 'YYYY-MM-DD',
  value,
  onChange,
  disabled,
  ...restProps
}) => {
  const datePickerRef = useRef<any>();
  const valueIsInfinity = useMemo(() => {
    const fmtValue = dayjs.isDayjs(value) ? value.format(format as string) : value;
    return fmtValue === infinityValue;
  }, [value, format, infinityValue]);

  const handleChangeChecked = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      onChange?.(dayjs(infinityValue), infinityValue);
    } else {
      onChange?.(null, '');
      setTimeout(() => {
        datePickerRef.current?.focus();
      });
    }
  };

  return (
    <Space>
      {(!hideOnInfinity || !valueIsInfinity) && (
        <DatePicker
          value={
            !valueIsInfinity ? (value && !dayjs.isDayjs(value) ? dayjs(value) : value) : undefined
          }
          disabled={valueIsInfinity || disabled}
          onChange={onChange}
          ref={datePickerRef}
          {...restProps}
        />
      )}
      <Checkbox
        style={{ marginTop: 5, marginBottom: 5, whiteSpace: 'nowrap' }}
        checked={valueIsInfinity}
        onChange={handleChangeChecked}
        disabled={disabled}
      >
        {infinityLabel}
      </Checkbox>
    </Space>
  );
};

export default DatePickerEnd;
