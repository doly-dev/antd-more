import * as React from 'react';
import { BizForm } from 'antd-more';

function waitTime(time: number = 1000) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

const { QueryForm, ItemInput, ItemDate, ItemDateRange } = BizForm;

const Demo: React.FC = () => {
  return (
    <QueryForm
      name="query-form-2"
      onFinish={async (values) => {
        await waitTime();
        console.log(values);
      }}
      defaultColsNumber={2}
    >
      <ItemInput label="商品编号" name="goodsNo" />
      <ItemDate label="交易日期" name="tradeDate" />
      <ItemInput label="手机号码" name="mobile" type="mobile" />
      <ItemDateRange label="时间" name="time" showTime colProps={{ xs: 24, md: 24, lg: 14 }} />
    </QueryForm>
  );
}

export default Demo;