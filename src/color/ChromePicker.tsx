import React from 'react';
import type { ChromePickerProps } from 'react-color';
import { ChromePicker } from 'react-color';
import type { PickerWrapperProps } from './PickerWrapper';
import PickerWrapper from './PickerWrapper';

export interface ColorChromePickerProps extends PickerWrapperProps {
  pickerProps?: Omit<ChromePickerProps, 'onChange' | 'onChangeComplete'>;
}

/**
 * @deprecated 即将废弃，建议使用 `import { ColorPicker } from antd`
 */
const ColorChromePicker: React.FC<ColorChromePickerProps> = ({ pickerProps, ...restProps }) => {
  return (
    <PickerWrapper {...restProps}>
      <ChromePicker disableAlpha={restProps?.colorMode !== 'rgb'} {...pickerProps} />
    </PickerWrapper>
  );
};

export default ColorChromePicker;
