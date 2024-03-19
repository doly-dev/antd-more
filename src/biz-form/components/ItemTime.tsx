import * as React from 'react';
import { TimePicker } from 'antd';
import classNames from 'classnames';
import type { TimePickerProps } from './antd.interface';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { transformMomentTime } from '../_util/dateUtil';
import { transformDate } from '../_util/transform';
import { useConfig } from '../../biz-config-provider';

const prefixCls = 'antd-more-form-item-date';

const TimePickerWrapper: React.FC<TimePickerProps> = ({
  value,
  format = 'HH:mm:ss',
  ...restProps
}) => {
  return (
    <TimePicker
      value={transformMomentTime(value, format as string)}
      format={format}
      {...restProps}
    />
  );
};

export interface BizFormItemTimeProps
  extends BizFormItemProps,
    Pick<TimePickerProps, 'placeholder' | 'allowClear'> {
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
  const { locale } = useConfig();
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
          required,
          message: locale.form.common.selectRequired
        }
      ]}
      className={classNames(prefixCls, className)}
      transform={handleTransform}
      {...restProps}
    >
      <TimePickerWrapper
        {...defaultTimePickerProps}
        format={currentFormat}
        locale={locale.DatePicker}
        {...pickerProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemTime;
