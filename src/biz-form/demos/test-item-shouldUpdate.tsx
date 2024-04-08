import * as React from 'react';
import { BizForm, BizFormItem, BizFormItemInput, BizFormItemSelect } from 'antd-more';

const options = [
  {
    label: 'male',
    value: 'male'
  },
  {
    label: 'female',
    value: 'female'
  },
  {
    label: 'other',
    value: 'other'
  }
];

const Demo = () => {
  return (
    <BizForm>
      <BizFormItemInput name="note" label="Note" required />
      <BizFormItemSelect name="gender" label="Gender" options={options} required allowClear />
      <BizFormItem
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) => {
          console.log('111');
          return getFieldValue('gender') === 'other' ? (
            <BizFormItemInput name="customizeGender" label="Customize Gender" required />
          ) : null;
        }}
      </BizFormItem>
    </BizForm>
  );
};

export default Demo;
