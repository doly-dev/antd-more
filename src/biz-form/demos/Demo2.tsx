import * as React from 'react';
import { QueryForm, BizFormItemInput, BizFormItemDate, BizFormItemDateRange } from 'antd-more';
import { sleep } from 'ut2';

const Demo = () => {
  return (
    <QueryForm
      name="biz-form-demo2"
      onFinish={async (values) => {
        await sleep();
        console.log(values);
      }}
      labelWidth={80}
      defaultColsNumber={2}
    >
      <BizFormItemInput label="商品编号" name="goodsNo" />
      <BizFormItemDate label="交易日期" name="tradeDate" />
      <BizFormItemInput label="手机号" name="mobile" type="mobile" />
      <BizFormItemDateRange
        label="时间"
        name="time"
        showTime
        colProps={{ xs: 24, md: 24, lg: 14 }}
      />
    </QueryForm>
  );
};

export default Demo;
