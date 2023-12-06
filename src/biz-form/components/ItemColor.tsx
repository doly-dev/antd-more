import * as React from 'react';
import type { ColorSketchPickerProps } from '../../color';
import { ColorSketchPicker } from '../../color';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { useConfig } from '../../biz-config-provider';

export enum ColorPicker {
  block = 'BlockPicker',
  chrome = 'ChromePicker',
  compact = 'CompactPicker',
  photoshop = 'PhotoshopPicker',
  sketch = 'SketchPicker'
}

export interface BizFormItemColorProps
  extends BizFormItemProps,
    Pick<ColorSketchPickerProps, 'showText' | 'colorMode' | 'placement' | 'size'> {
  colorProps?: ColorSketchPickerProps;
}

const BizFormItemColor: React.FC<BizFormItemColorProps> = ({
  required = false,
  size,
  showText,
  colorMode,
  placement,
  colorProps,
  ...restProps
}) => {
  const { locale } = useConfig();

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          required,
          message: locale.form.common.selectRequired
        }
      ]}
      {...restProps}
    >
      <ColorSketchPicker
        showText={showText}
        colorMode={colorMode}
        placement={placement}
        size={size}
        {...colorProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemColor;
