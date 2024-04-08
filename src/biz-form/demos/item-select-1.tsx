import * as React from 'react';
import { BizForm, BizFormItemSelect } from 'antd-more';
import { Cycle, CycleOptions } from './constants';

const Demo = () => {
  return (
    <BizForm
      name="form-item-select-1"
      onFinish={(values) => {
        console.log(values);
      }}
      labelWidth={98}
    >
      <BizFormItemSelect label="选择器1" name="select1" options={CycleOptions} />
      <BizFormItemSelect label="选择器2" name="select2" options={CycleOptions} required all />
      <BizFormItemSelect
        label="排除项"
        name="select3"
        options={CycleOptions}
        all
        allValue=""
        excludeValues={[Cycle.Day]}
        tooltip="包含全部，并且排除按日"
      />
      <BizFormItemSelect
        label="多选必填"
        name="select4"
        options={CycleOptions}
        required
        selectProps={{ mode: 'multiple' }}
      />
    </BizForm>
  );
};

export default Demo;
