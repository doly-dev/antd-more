import * as React from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
import type { Dayjs } from 'dayjs';
import { isArray, uniqueId } from 'ut2';
import type { RangePickerProps } from './antd.interface';
import type { Picker } from '../_util/dateUtil';
import {
  DateScale,
  createDisabledDate,
  transformDayjsValue,
  getDateFormat,
  DateFormat
} from '../_util/dateUtil';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { transformDate, InvalidFieldValue } from '../_util/transform';
import { useConfig } from '../../biz-config-provider';

const prefixCls = 'antd-more-form-item-date';

const DateRangePickerWrapper: React.FC<RangePickerProps> = ({ value, format, ...restProps }) => {
  return (
    <DatePicker.RangePicker
      value={transformDayjsValue(value as [Dayjs, Dayjs], format as string)}
      format={format === DateFormat['quarter'] ? undefined : format}
      {...restProps}
    />
  );
};

export interface BizFormItemDateRangeProps
  extends BizFormItemProps,
    Pick<RangePickerProps, 'showTime' | 'placeholder' | 'allowClear'> {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
  maxRange?: number; // 最大可选范围值，根据当前 picker 为单位。
  format?: string;
  picker?: Picker;
  pickerProps?: RangePickerProps & Pick<RangePickerProps, 'showTime'>;
  names?: [string, string];
}

const BizFormItemDateRange: React.FC<BizFormItemDateRangeProps> = ({
  disabledDateBefore,
  disabledDateAfter,
  maxRange,
  showTime = false,
  placeholder,
  allowClear = true,
  format,
  picker = 'date',
  names = [],
  pickerProps = {},
  name,
  required = false,
  className,
  transform,
  ...restProps
}) => {
  const { locale } = useConfig();
  const hasNames = React.useMemo(() => isArray(names) && names.length > 0, [names]);
  const currentName = React.useMemo(
    () => name || (hasNames ? uniqueId('__am_dateRange_') : name),
    [hasNames, name]
  );
  const currentPicker = React.useMemo(
    () => pickerProps.picker || picker,
    [pickerProps.picker, picker]
  );
  const currentFormat = React.useMemo(() => {
    return getDateFormat(
      pickerProps.format || format,
      currentPicker,
      !!(pickerProps?.showTime || showTime)
    );
  }, [format, pickerProps.format, currentPicker, pickerProps.showTime, showTime]);
  const disabledDate = React.useMemo(
    () => createDisabledDate(currentPicker, { disabledDateBefore, disabledDateAfter }),
    [disabledDateBefore, disabledDateAfter, currentPicker]
  );
  const handleTransform = React.useCallback(
    (val, currentPathValues) => {
      let transValue;
      if (typeof transform === 'function') {
        transValue = transform(val);
      } else {
        transValue = transformDate(val, currentFormat);
      }

      if (isArray(names) && names.length === 2 && currentPathValues) {
        currentPathValues[names[0]] = isArray(transValue) ? transValue[0] : undefined;
        currentPathValues[names[1]] = isArray(transValue) ? transValue[1] : undefined;
        return InvalidFieldValue;
      } else {
        return transValue;
      }
    },
    [currentFormat, names, transform]
  );

  return (
    <BizFormItem
      name={currentName}
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? locale.form.common.selectRequired : '';
            } else if (maxRange > 0) {
              const [t1, t2] = value;
              const range = currentPicker === 'quarter' ? maxRange * 3 : maxRange;

              if (t2.diff(t1, DateScale[currentPicker]) >= range) {
                errMsg = locale.form.dateRange.maxRange(
                  maxRange,
                  locale.form.dateRange.unit[currentPicker]
                );
              }
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          }
        }
      ]}
      className={classNames(prefixCls, className)}
      transform={handleTransform}
      {...restProps}
    >
      <DateRangePickerWrapper
        disabledDate={disabledDate}
        format={currentFormat}
        showTime={showTime}
        placeholder={placeholder}
        allowClear={allowClear}
        picker={picker}
        locale={locale.DatePicker}
        {...pickerProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemDateRange;
