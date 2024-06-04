import * as React from 'react';
import type { BizFormItemAutoCompleteProps } from 'antd-more';
import { BizForm, BizFormItemAutoComplete } from 'antd-more';
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
  name,
  extendRules = [],
  ...restProps
}) => {
  // 通过表单获取值，兼容表单有初始值或手动设置表单值的情况
  const form = BizForm.useFormInstance();
  const value = BizForm.useWatch(name, form);

  const options = React.useMemo(() => {
    if (!value) {
      return [];
    }

    const [valPrefix, valSuffix] = value.split('@');
    return EmailSuffix.filter((item) => !valSuffix || item.indexOf(valSuffix) > 0).map((item) => {
      const opt = valPrefix + item;
      return {
        label: opt,
        value: opt
      };
    });
  }, [value]);

  return (
    <BizFormItemAutoComplete
      name={name}
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
      {...restProps}
    />
  );
};

export default ItemAutoCompleteEmail;
