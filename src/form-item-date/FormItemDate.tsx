import * as React from 'react';
import { Form, DatePicker } from 'antd';
import classNames from 'classnames';
import { FormItemProps } from 'antd/lib/form';
import { DatePickerProps, MonthPickerProps, WeekPickerProps } from 'antd/lib/date-picker';
import FormItemDateRange from './FormItemDateRange';
import { createDisabledDate } from './util';
import getLabel from '../_util/getLabel';

export interface FormItemDateProps extends FormItemProps {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
  pickerProps?: DatePickerProps | MonthPickerProps | WeekPickerProps | any;
}

const prefixCls = 'antd-more-form-item-date';

const FormItemDate: React.FC<FormItemDateProps> & {
  Range: typeof FormItemDateRange;
} = ({
  disabledDateBefore,
  disabledDateAfter,
  pickerProps = {},
  label,
  className,
  required = false,
  ...restProps
}) => {
  const labelText = React.useMemo(() => getLabel(label), [label]);
  const currentPicker = React.useMemo(
    () => (pickerProps && pickerProps.picker ? pickerProps.picker : 'date'),
    [pickerProps.picker],
  );
  const disabledDate = React.useMemo(
    () => createDisabledDate(currentPicker, { disabledDateBefore, disabledDateAfter }),
    [disabledDateBefore, disabledDateAfter, currentPicker],
  );
  return (
    <Form.Item
      label={label}
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请选择${labelText}` : '';
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          },
        },
      ]}
      className={classNames(prefixCls, className)}
      {...restProps}
    >
      <DatePicker disabledDate={disabledDate} {...pickerProps} />
    </Form.Item>
  );
};

FormItemDate.Range = FormItemDateRange;

export default FormItemDate;
