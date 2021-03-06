import * as React from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
import type {
  DatePickerProps,
  TimePickerProps,
  MonthPickerProps,
  WeekPickerProps,
} from './antd.interface';
import { createDisabledDate, transformMomentValue, getDateFormat } from '../_util/dateUtil';
import type { Picker } from '../_util/dateUtil';
import { transformDate } from '../_util/transform';
import BizFormItem from './Item';
import type { BizFormItemProps } from './Item';
import getLabel from '../_util/getLabel';

const DatePickerWrapper: React.FC<DatePickerProps | MonthPickerProps | WeekPickerProps | any> = ({
  value,
  ...restProps
}) => {
  return <DatePicker value={transformMomentValue(value)} {...restProps} />;
};

export interface FormItemDateProps extends BizFormItemProps {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
  showTime?: TimePickerProps | boolean;
  format?: string;
  picker?: Picker;
  pickerProps?: DatePickerProps | MonthPickerProps | WeekPickerProps | any;
}

const prefixCls = 'antd-more-form-item-date';

const FormItemDate: React.FC<FormItemDateProps> = ({
  disabledDateBefore,
  disabledDateAfter,
  showTime = false,
  format,
  picker = 'date',
  pickerProps = {},
  className,
  required = false,
  transform,
  ...restProps
}) => {
  const currentPicker = React.useMemo(
    () => pickerProps.picker || picker,
    [pickerProps.picker, picker],
  );
  const currentFormat = React.useMemo(() => {
    return getDateFormat(
      pickerProps.format || format,
      currentPicker,
      pickerProps.showTime || showTime,
    );
  }, [format, pickerProps.format, currentPicker, pickerProps.showTime, showTime]);
  const disabledDate = React.useMemo(
    () => createDisabledDate(currentPicker, { disabledDateBefore, disabledDateAfter }),
    [disabledDateBefore, disabledDateAfter, currentPicker],
  );
  const handleTransform = React.useCallback(
    (val) => {
      if (typeof transform === 'function') {
        return transform(val);
      }
      return transformDate(val, currentFormat);
    },
    [currentFormat],
  );

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请选择${getLabel(restProps)}` : '';
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          },
        },
      ]}
      className={classNames(prefixCls, className)}
      transform={handleTransform}
      {...restProps}
    >
      <DatePickerWrapper
        disabledDate={disabledDate}
        showTime={showTime}
        format={currentFormat}
        picker={picker}
        {...pickerProps}
      />
    </BizFormItem>
  );
};

export default FormItemDate;
