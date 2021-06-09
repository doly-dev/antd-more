import * as React from 'react';
import { Form, DatePicker } from 'antd';
import classNames from 'classnames';
import { FormItemProps } from 'antd/lib/form';
import { RangePickerProps } from 'antd/lib/date-picker';
import { MomentScale, DateUnit, createDisabledDate } from './util';
import getLabel from '../_util/getLabel';

export interface FormItemDateRangeProps extends FormItemProps {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
  maxRange?: number; // 最大可选范围值，根据当前 picker 为单位。
  pickerProps?: RangePickerProps;
}

const prefixCls = 'antd-more-form-item-date';

const FormItemDateRange: React.FC<FormItemDateRangeProps> = ({
  disabledDateBefore,
  disabledDateAfter,
  maxRange,
  pickerProps = {},
  label,
  required = false,
  className,
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
            } else if (maxRange > 0) {
              const [t1, t2] = value;
              const range = currentPicker === 'quarter' ? maxRange * 3 : maxRange;

              if (t2.diff(t1, MomentScale[currentPicker]) > range) {
                errMsg = `时间跨度不能超过${maxRange}${DateUnit[currentPicker]}`;
              }
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
      <DatePicker.RangePicker disabledDate={disabledDate} {...pickerProps} />
    </Form.Item>
  );
};

export default FormItemDateRange;
