import * as React from 'react';
// import { DatePicker } from 'antd';
import DatePicker from './form/DatePicker';
import classNames from 'classnames';
import type {
  DatePickerProps,
  MonthPickerProps,
  WeekPickerProps
} from './antd.interface';
import type { Picker } from '../_util/dateUtil';
import { createDisabledDate, transformDayjsValue, getDateFormat, DateFormat } from '../_util/dateUtil';
import { transformDate } from '../_util/transform';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import getLabel from '../_util/getLabel';

// 兼容 antd v4
import 'antd/es/date-picker/style';

const DatePickerWrapper: React.FC<DatePickerProps | MonthPickerProps | WeekPickerProps> = ({
  value,
  format,
  ...restProps
}) => {
  return <DatePicker value={transformDayjsValue(value, format as string)} format={format === DateFormat['quarter'] ? undefined : format} {...restProps} />;
};

export interface BizFormItemDateProps extends BizFormItemProps {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
  showTime?: boolean;
  format?: string;
  picker?: Picker;
  placeholder?: string;
  allowClear?: boolean;
  pickerProps?: DatePickerProps;
}

const prefixCls = 'antd-more-form-item-date';

const BizFormItemDate: React.FC<BizFormItemDateProps> = ({
  disabledDateBefore,
  disabledDateAfter,
  showTime = false,
  placeholder,
  allowClear = true,
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
    [pickerProps.picker, picker]
  );
  const currentFormat = React.useMemo(() => {
    return getDateFormat(
      pickerProps.format || format,
      currentPicker,
      (pickerProps.showTime as boolean) || showTime
    );
  }, [format, pickerProps.format, currentPicker, pickerProps.showTime, showTime]);
  const disabledDate = React.useMemo(
    () => createDisabledDate(currentPicker, { disabledDateBefore, disabledDateAfter }),
    [disabledDateBefore, disabledDateAfter, currentPicker]
  );
  const handleTransform = React.useCallback(
    (val) => {
      if (typeof transform === 'function') {
        return transform(val);
      }
      return transformDate(val, currentFormat);
    },
    [currentFormat, transform]
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
          }
        }
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
        placeholder={placeholder}
        allowClear={allowClear}
        {...pickerProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemDate;
