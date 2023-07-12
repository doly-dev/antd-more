import React from "react";
import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";
import { floor } from "ut2";

interface InputNumberWrapperProps extends InputNumberProps {
  useFloor?: boolean;
}

const InputNumberWrapper: React.FC<InputNumberWrapperProps> = ({ value, onChange, precision, useFloor, ...restProps }) => {

  const handleChange = (value: Parameters<typeof onChange>[0]) => {
    let result = value;
    if (value && useFloor && typeof precision === 'number') {
      result = floor(value as number, precision);
    }
    onChange(result);
  }

  return (
    <InputNumber
      value={value}
      onChange={handleChange}
      {...restProps}
    />
  );
}

export default InputNumberWrapper;