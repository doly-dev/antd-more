import { BizForm } from 'antd-more';
import * as React from 'react';
import ItemDateRangeMonthCalc from '../components/ItemDateRangeMonthCalc';

function Demo() {
  return (
    <BizForm
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <ItemDateRangeMonthCalc name="dateRangeCalc" names={['startTime', 'endTime']} />
    </BizForm>
  );
}

export default Demo;
