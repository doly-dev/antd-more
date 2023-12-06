import * as React from 'react';
import { TimePicker } from 'antd';
import classNames from 'classnames';
import type { TimeRangePickerProps } from './antd.interface';
import type { Dayjs } from 'dayjs';
import { uniqueId } from 'ut2';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { transformDayjsTime } from '../_util/dateUtil';
import { transformDate, InvalidFieldValue } from '../_util/transform';
import { useConfig } from '../../biz-config-provider';

const prefixCls = 'antd-more-form-item-date';

const { RangePicker } = TimePicker;

const TimePickerRangeWrapper: React.FC<TimeRangePickerProps> = ({
  value,
  format,
  ...restProps
}) => {
  return (
    <RangePicker
      value={transformDayjsTime(value as [Dayjs, Dayjs], format as string)}
      format={format}
      {...restProps}
    />
  );
};

export interface BizFormItemTimeRangeProps
  extends BizFormItemProps,
    Pick<TimeRangePickerProps, 'placeholder' | 'allowClear'> {
  format?: string;
  pickerProps?: TimeRangePickerProps;
  names?: [string, string];
}

const BizFormItemTimeRange: React.FC<BizFormItemTimeRangeProps> = ({
  placeholder,
  allowClear = true,
  format,
  pickerProps,
  names = [],

  name,
  required,
  className,
  transform,
  ...restProps
}) => {
  const { locale } = useConfig();
  const hasNames = React.useMemo(() => Array.isArray(names) && names.length > 0, [names]);
  const currentName = React.useMemo(
    () => name || (hasNames ? uniqueId('__am_timeRange_') : name),
    [hasNames, name]
  );
  const currentFormat = React.useMemo(() => {
    if (format) {
      return format;
    }
    return pickerProps?.use12Hours ? 'h:mm:ss a' : 'HH:mm:ss';
  }, [format, pickerProps?.use12Hours]);

  const handleTransform = React.useCallback(
    (val, currentPathValues) => {
      let transValue;
      if (typeof transform === 'function') {
        transValue = transform(val);
      } else {
        transValue = transformDate(val, currentFormat);
      }

      if (Array.isArray(names) && names.length === 2 && currentPathValues) {
        currentPathValues[names[0]] = Array.isArray(transValue) ? transValue[0] : undefined;
        currentPathValues[names[1]] = Array.isArray(transValue) ? transValue[1] : undefined;
        return InvalidFieldValue;
      } else {
        return transValue;
      }
    },
    [currentFormat, names, transform]
  );

  // 由于 placeholder 为 undefined 时也生效，所以做了额外处理
  const defaultTimePickerProps = React.useMemo(() => {
    const ret: any = { allowClear };
    if (typeof placeholder !== 'undefined') {
      ret.placeholder = placeholder;
    }
    return ret;
  }, [allowClear, placeholder]);

  return (
    <BizFormItem
      name={currentName}
      required={required}
      rules={[
        {
          required,
          message: locale.form.common.selectRequired
        }
      ]}
      className={classNames(prefixCls, className)}
      transform={handleTransform}
      {...restProps}
    >
      <TimePickerRangeWrapper {...defaultTimePickerProps} format={currentFormat} {...pickerProps} />
    </BizFormItem>
  );
};

export default BizFormItemTimeRange;
