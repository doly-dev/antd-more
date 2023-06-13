import * as React from 'react';
import {
  BizForm,
  QueryForm,
  BizFormItemInput,
  BizFormItemDate,
  BizFormItemDateRange
} from 'antd-more';
import { sleep } from 'ut2';

const Demo = () => {
  const [form] = BizForm.useForm();

  return (
    <QueryForm
      name="query-form-1"
      form={form}
      onFinish={async (values) => {
        await sleep();
        console.log(values);
      }}
    >
      <BizFormItemInput label="商品编号" name="goodsNo" />
      <BizFormItemDate label="交易日期" name="tradeDate" />
      <BizFormItemInput label="手机号码" name="mobile" type="mobile" />
      <BizFormItemDateRange
        label="时间"
        name="time"
        names={['startTime', 'endTime']}
        showTime
        colProps={{ xs: 24, md: 24, lg: 14 }}
      />
    </QueryForm>
  );
};

export default Demo;
