import * as React from 'react';
import { Checkbox } from 'antd';
import { BizForm, BizFormItemTimeRange } from 'antd-more';
import moment from 'moment';
import { isArray } from 'ut2';

const initialValues = {
  time5: ['14:59:45', '18:00:00'],
  time6: [moment('14:59:45', 'HH:mm:ss'), moment('18:00:00', 'HH:mm:ss')]
};

// 回显时判断是否选中24小时
function isAllDay(times) {
  if (isArray(times) && times.length === 2) {
    const t1 = typeof times[0] === 'object' ? times[0]?.format('HH:mm:ss') : times[0];
    const t2 = typeof times[1] === 'object' ? times[1]?.format('HH:mm:ss') : times[1];
    return t1 === '00:00:00' && t2 === '23:59:59';
  }
  return false;
}

const Demo = () => {
  const [form] = BizForm.useForm();
  const [allDay, setAllDay] = React.useState(false);

  const handleSelect = React.useCallback(
    (e) => {
      const { checked } = e.target;

      const values = form.getFieldsValue();
      form.setFieldsValue({
        ...values,
        time3: checked ? ['00:00:00', '23:59:59'] : []
      });

      setAllDay(checked);
    },
    [form]
  );

  return (
    <BizForm
      form={form}
      name="item-timeRange-1"
      onFinish={(value) => console.log(value)}
      initialValues={initialValues}
      labelWidth={98}
      onValuesChange={(changedValues) => {
        console.log(changedValues);
        if (changedValues.time3) {
          setAllDay(isAllDay(changedValues.time3));
        }
      }}
    >
      <BizFormItemTimeRange label="时间" name="time1" />
      <BizFormItemTimeRange
        label="解构字段"
        name="time2"
        names={['startTime2', 'endTime2']}
        required
        tooltip="传入names会自动将值解构到当前层级"
      />
      <BizFormItemTimeRange
        label="快速选择"
        name="time3"
        names={['startTime3', 'endTime3']}
        contentAfter={
          <Checkbox
            style={{ whiteSpace: 'nowrap', marginRight: -8 }}
            checked={allDay}
            onChange={handleSelect}
          >
            24小时
          </Checkbox>
        }
      />
      <BizFormItemTimeRange label="时分" name="time4" format="HH:mm" />
      <BizFormItemTimeRange label="默认值1" name="time5" tooltip="支持string格式" />
      <BizFormItemTimeRange label="默认值2" name="time6" tooltip="moment格式" />
    </BizForm>
  );
};

export default Demo;
