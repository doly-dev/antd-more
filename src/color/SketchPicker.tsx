import React from 'react';
import type { SketchPickerProps } from 'react-color';
import { SketchPicker } from 'react-color';
import type { PickerWrapperProps } from './PickerWrapper';
import PickerWrapper from './PickerWrapper';

export interface ColorSketchPickerProps extends PickerWrapperProps {
  pickerProps?: Omit<SketchPickerProps, 'onChange' | 'onChangeComplete'>;
}

/**
 * @deprecated 即将废弃，建议使用 `import { ColorPicker } from antd`
 */
const ColorSketchPicker: React.FC<ColorSketchPickerProps> = ({ pickerProps, ...restProps }) => {
  return (
    <PickerWrapper {...restProps}>
      <SketchPicker disableAlpha={restProps?.colorMode !== 'rgb'} {...pickerProps} />
    </PickerWrapper>
  );
};

export default ColorSketchPicker;
