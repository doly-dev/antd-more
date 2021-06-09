import React, { useMemo } from 'react';
import { Select } from 'antd';
import { SelectProps, SelectValue } from 'antd/lib/select';
import { EnumData } from './common';

export interface DictionarySelectProps extends SelectProps<SelectValue> {
  data: EnumData[];
  value?: any;
  excludeValues?: any[];
  all?: boolean;
  allValue?: any;
  allName?: any;
}

const DictionarySelect: React.FC<DictionarySelectProps> = ({
  data = [],
  excludeValues = [],
  all = true,
  allValue = '',
  allName = '全部',
  ...restProps
}) => {
  const dataRet = useMemo(
    () => data.slice().filter((item) => excludeValues.indexOf(item.value) === -1),
    [data, excludeValues],
  );

  return (
    <Select placeholder="请选择" {...restProps}>
      {all ? <Select.Option value={allValue}>{allName}</Select.Option> : null}
      {dataRet.map((item) => (
        <Select.Option key={item.value + item.name} value={item.value}>
          {item.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DictionarySelect;
