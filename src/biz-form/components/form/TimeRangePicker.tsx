import * as React from 'react';
import type { Dayjs } from 'dayjs';
import DatePicker from './DatePicker';
import type { RangePickerTimeProps } from 'antd/es/date-picker/generatePicker';

export interface TimeRangePickerProps extends Omit<RangePickerTimeProps<Dayjs>, 'picker'> { }

const TimeRangePicker = React.forwardRef<any, TimeRangePickerProps>((props, ref) => (
  <DatePicker.RangePicker {...props} picker="time" mode={undefined} ref={ref} />
));

TimeRangePicker.displayName = 'TimeRangePicker';

export default TimeRangePicker;