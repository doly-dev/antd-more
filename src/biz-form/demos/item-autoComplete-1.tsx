import * as React from 'react';
import type { BizFormItemAutoCompleteProps } from 'antd-more';
import { BizForm, BizFormItemAutoComplete } from 'antd-more';
import { randomString } from 'util-helpers';
import ItemAutoCompleteEmail from './components/ItemAutoCompleteEmail';

function Demo() {
  const [options, setOptions] = React.useState<BizFormItemAutoCompleteProps['options']>([]);
  const handleSearch = (searchText: string) => {
    const opts = new Array(5).fill('').map(() => ({
      label: `${searchText}-${randomString(3)}`,
      value: `${searchText}-${randomString(3)}`
    }));
    setOptions(opts);
  };

  return (
    <BizForm
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <BizFormItemAutoComplete
        label="自动完成"
        name="auto-complete-1"
        onSearch={handleSearch}
        options={options}
      />
      <BizFormItemAutoComplete
        label="必填"
        name="auto-complete-2"
        onSearch={handleSearch}
        options={options}
        required
      />
      <ItemAutoCompleteEmail label="邮箱地址" name="auto-complete-email" />
    </BizForm>
  );
}

export default Demo;
