import * as React from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
import type { Moment } from 'moment';
import { uniqueId } from 'ut2';
import type { RangePickerProps, RangePickerDateProps } from './antd.interface';
import type { Picker } from '../_util/dateUtil';
import {
  MomentScale,
  DateUnit,
  createDisabledDate,
  transformMomentValue,
  getDateFormat
} from '../_util/dateUtil';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { transformDate, InvalidFieldValue } from '../_util/transform';
import getLabel from '../_util/getLabel';

const DateRangePickerWrapper: React.FC<RangePickerProps> = ({ value, ...restProps }) => {
  return <DatePicker.RangePicker value={transformMomentValue(value)} {...restProps} />;
};

export interface BizFormItemDateRangeProps
  extends BizFormItemProps,
  Pick<RangePickerDateProps<Moment>, 'showTime' | 'placeholder' | 'allowClear'> {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
  maxRange?: number; // 最大可选范围值，根据当前 picker 为单位。
  format?: string;
  picker?: Picker;
  pickerProps?: RangePickerProps & Pick<RangePickerDateProps<Moment>, 'showTime'>;
  names?: [string, string];
}

const prefixCls = 'antd-more-form-item-date';

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
  const hasNames = React.useMemo(() => Array.isArray(names) && names.length > 0, [names]);
  const currentName = React.useMemo(
    () => name || (hasNames ? uniqueId('dateRange') : name),
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

  return (
    <BizFormItem
      name={currentName}
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请选择${getLabel(restProps)}` : '';
            } else if (maxRange > 0) {
              const [t1, t2] = value;
              const range = currentPicker === 'quarter' ? maxRange * 3 : maxRange;

              if (t2.diff(t1, MomentScale[currentPicker]) >= range) {
                errMsg = `时间跨度不能超过${maxRange}${DateUnit[currentPicker] === '月' ? '个月' : DateUnit[currentPicker]}`;
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
        {...pickerProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemDateRange;
