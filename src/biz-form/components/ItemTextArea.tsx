import * as React from 'react';
import { Input } from 'antd';
import type { TextAreaProps } from './antd.interface';
import { normalizeWhiteSpace } from '../_util/normalize';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { useConfig } from '../../biz-config-provider';

export interface BizFormItemTextAreaProps
  extends BizFormItemProps,
    Pick<TextAreaProps, 'placeholder' | 'allowClear' | 'maxLength' | 'showCount'> {
  disabledWhiteSpace?: boolean;
  inputProps?: TextAreaProps;
}

const BizFormItemTextArea: React.FC<BizFormItemTextAreaProps> = (props) => {
  const { locale } = useConfig();
  const {
    placeholder = locale.form.common.inputPlaceholder,
    allowClear = false,
    maxLength,
    showCount = false,
    disabledWhiteSpace = false,
    inputProps = {},
    required = false,
    ...restProps
  } = props;
  const handleNormalize = React.useCallback(
    (val) => {
      if (disabledWhiteSpace) {
        return normalizeWhiteSpace(val);
      }
      return val;
    },
    [disabledWhiteSpace]
  );

  return (
    <BizFormItem
      required={required}
      normalize={handleNormalize}
      rules={[
        {
          required,
          message: locale.form.common.inputRequired
        }
      ]}
      {...restProps}
    >
      <Input.TextArea
        placeholder={placeholder}
        allowClear={allowClear}
        maxLength={maxLength}
        showCount={showCount}
        autoComplete="off"
        {...inputProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemTextArea;
