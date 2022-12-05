import * as React from 'react';
// import { TimePicker } from 'antd';
import TimePicker from './form/TimePicker';
import classNames from 'classnames';
import type { TimePickerProps } from './antd.interface';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { transformDayjsTime } from '../_util/dateUtil';
import { transformDate } from '../_util/transform';
import getLabel from '../_util/getLabel';

// 兼容 antd v4
import 'antd/es/date-picker/style';

const prefixCls = 'antd-more-form-item-date';

const TimePickerWrapper: React.FC<TimePickerProps> = ({
  value,
  format = 'HH:mm:ss',
  ...restProps
}) => {
  return (
    <TimePicker
      value={transformDayjsTime(value, format as string)}
      format={format}
      {...restProps}
    />
  );
};

export interface BizFormItemTimeProps extends BizFormItemProps, Pick<TimePickerProps, 'placeholder' | 'allowClear'> {
  format?: string;
  pickerProps?: TimePickerProps;
}

const BizFormItemTime: React.FC<BizFormItemTimeProps> = ({
  placeholder,
  allowClear = true,
  format,
  pickerProps,

  name,
  required,
  className,
  transform,
  ...restProps
}) => {
  const currentFormat = React.useMemo(() => {
    if (format) {
      return format;
    }
    return pickerProps?.use12Hours ? 'h:mm:ss a' : 'HH:mm:ss';
  }, [format, pickerProps?.use12Hours]);

  const handleTransform = React.useCallback(
    (val) => {
      if (typeof transform === 'function') {
        return transform(val);
      }
      return transformDate(val, currentFormat);
    },
    [currentFormat, transform]
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
      name={name}
      required={required}
      rules={[
        {
          validator(rules, value) {
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
      <TimePickerWrapper
        {...defaultTimePickerProps}
        format={currentFormat}
        {...pickerProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemTime;
