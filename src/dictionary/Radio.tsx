import React from 'react';
import { Radio } from 'antd';
import type { RadioGroupProps } from 'antd/lib/radio/interface';
import type { EnumData } from './interface';

export interface DictionaryRadioProps extends RadioGroupProps {
  data: EnumData;
  value?: any;
  type?: 'default' | 'button';
}

const DictionaryRadio: React.FC<DictionaryRadioProps> = ({
  data,
  type = 'default',
  ...restProps
}) => {
  const RadioComp = type === 'button' ? Radio.Button : Radio;

  return (
    <Radio.Group {...restProps}>
      {data.map(({ value, name, disabled, key }, index) => (
        <RadioComp value={value} key={key || value + index.toString()} disabled={disabled}>
          {name}
        </RadioComp>
      ))}
    </Radio.Group>
  );
};

export default DictionaryRadio;
