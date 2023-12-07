import * as React from 'react';
import type { BizFormItemAutoCompleteProps } from 'antd-more';
import { BizFormItemAutoComplete } from 'antd-more';
import { useState } from 'react';
import { isEmail } from 'util-helpers';

// 邮箱后缀
const EmailSuffix = [
  '@qq.com',
  '@126.com',
  '@163.com',
  '@sina.com',
  '@gmail.com',
  '@hotmail.com',
  '@yahoo.com',
  '@outlook.com'
];

const ItemAutoCompleteEmail: React.FC<BizFormItemAutoCompleteProps> = ({
  extendRules = [],
  ...restProps
}) => {
  const [options, setOptions] = useState<BizFormItemAutoCompleteProps['options']>([]);

  const updateOptions = (val?: string) => {
    const [valPrefix, valSuffix] = val.split('@');
    const opts = val
      ? EmailSuffix.filter((suffix) => {
          if (!valSuffix) {
            return true;
          }
          return suffix.indexOf(valSuffix) > 0;
        }).map((suffix) => {
          const opt = valPrefix + suffix;
          return {
            label: opt,
            value: opt
          };
        })
      : [];
    setOptions(opts);
  };

  return (
    <BizFormItemAutoComplete
      validateTrigger="onBlur"
      extendRules={[
        {
          validator(rule, value) {
            if (value && !isEmail(value)) {
              return Promise.reject('请输入正确的${label}');
            }
            return Promise.resolve();
          }
        },
        ...extendRules
      ]}
      options={options}
      onSearch={updateOptions}
      onFocus={(e) => {
        updateOptions((e.target as HTMLInputElement).value);
      }}
      {...restProps}
    />
  );
};

export default ItemAutoCompleteEmail;
