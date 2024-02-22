import React from 'react';
import type { BlockPickerProps } from 'react-color';
import { BlockPicker } from 'react-color';
import type { PickerWrapperProps } from './PickerWrapper';
import PickerWrapper from './PickerWrapper';

export interface ColorBlockPickerProps extends PickerWrapperProps {
  pickerProps?: Omit<BlockPickerProps, 'onChange' | 'onChangeComplete'>;
}

/**
 * @deprecated 即将废弃，建议使用 `import { ColorPicker } from antd`
 */
const ColorBlockPicker: React.FC<ColorBlockPickerProps> = ({ pickerProps, ...restProps }) => {
  return (
    <PickerWrapper {...restProps}>
      <BlockPicker triangle="hide" {...pickerProps} />
    </PickerWrapper>
  );
};

export default ColorBlockPicker;
