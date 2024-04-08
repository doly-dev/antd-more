import * as React from 'react';
import { Col, Row } from 'antd';
import type { BizFormItemDateRangeProps } from 'antd-more';
import { BizForm, BizFormItem, BizFormItemDate, BizFormItemDateRange } from 'antd-more';
import type { NamePath } from 'antd/es/form/interface';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const now = dayjs();
const currentYear = now.year();
const currentMonth = now.month() + 1;
const currentDay = now.date();

function isCurrentMonth(value: Dayjs) {
  return value.year() === currentYear && value.month() + 1 === currentMonth;
}

function getCalcDate(value: Dayjs): [Dayjs, Dayjs] {
  return isCurrentMonth(value)
    ? [value.startOf('month').startOf('day'), value.date(currentDay - 1).startOf('day')]
    : [value.startOf('month').startOf('day'), value.endOf('month').startOf('day')];
}

// 如果当前日期是否为1日，默认为上个月
const dateNow = currentDay === 1 ? now.add(-1, 'day') : now;
const initialDate = getCalcDate(dateNow);

interface ItemDateRangeMonthCalcProps extends BizFormItemDateRangeProps {
  name: NamePath;
  names: [string, string];
}

const ItemDateRangeMonthCalc: React.FC<ItemDateRangeMonthCalcProps> = ({
  name,
  names,
  colProps,
  ...restProps
}) => {
  const form = BizForm.useFormInstance();
  const onMonthChange = (value: Dayjs) => {
    const range = getCalcDate(value);
    form.setFieldValue(name, range);
  };

  const disabledDate = (date: Dayjs) => {
    const month = form.getFieldValue('month');
    const range = getCalcDate(dayjs(month).startOf('day'));
    // console.log(date.format('YYYY-MM-DD'), [range[0].format('YYYY-MM-DD HH:mm:ss'), range[1].format('YYYY-MM-DD HH:mm:ss')]);
    // console.log(date.diff(range[0], 'day', true), date.diff(range[1], 'day', true));

    return date.diff(range[0], 'day') < 0 || date.diff(range[1], 'day') > 0;
  };

  return (
    <BizFormItem
      label="计算时间"
      colProps={colProps}
      tooltip="交易产生后计算的时间"
      style={{ marginBottom: 0 }}
    >
      <Row wrap={false} gutter={16}>
        <Col>
          <BizFormItemDate
            name="month"
            picker="month"
            disabledDateAfter={1}
            allowClear={false}
            style={{ width: 102 }}
            placeholder="月份"
            initialValue={dateNow}
            pickerProps={{
              onChange: onMonthChange
            }}
          />
        </Col>
        <Col>
          <BizFormItemDateRange
            hideLabel
            name={name}
            names={names}
            disabledDateAfter={0}
            allowClear={false}
            initialValue={initialDate}
            {...restProps}
            pickerProps={{
              disabledDate
            }}
          />
        </Col>
      </Row>
    </BizFormItem>
  );
};

export default ItemDateRangeMonthCalc;
