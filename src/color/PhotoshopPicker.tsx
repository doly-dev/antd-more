import React, { useState, useCallback } from 'react';
import type { PhotoshopPickerProps } from 'react-color';
import { PhotoshopPicker } from 'react-color';
import type { PickerWrapperProps } from './PickerWrapper';
import PickerWrapper from './PickerWrapper';
import { transformColor } from './utils';

export interface ColorPhotoshopPickerProps extends Omit<PickerWrapperProps, 'changeMethod'> {
  pickerProps?: Omit<PhotoshopPickerProps, 'onChange' | 'onChangeComplete'>;
  changeMethod?: 'onChangeComplete' | 'onAccept';
}

/**
 * @deprecated 即将废弃，建议使用 `import { ColorPicker } from antd`
 */
const ColorPhotoshopPicker: React.FC<ColorPhotoshopPickerProps> = ({
  pickerProps,
  changeMethod = 'onAccept',
  onChange,
  ...restProps
}) => {
  const [open, setOpen] = useState(false);
  const [innerColor, setInnerColor] = useState(restProps?.value);

  const handleChange = useCallback(
    (color) => {
      setInnerColor(transformColor(color, restProps?.colorMode));
    },
    [restProps?.colorMode]
  );

  const handleAccept = useCallback(() => {
    onChange?.(innerColor as string);
    setOpen(false);
  }, [onChange, innerColor]);

  const handleCancel = useCallback(() => {
    setOpen(false);
  }, []);

  const changeMethodProps = {
    [changeMethod]: handleAccept
  };

  const wrapperProps = {
    open,
    onOpenChange: setOpen
  };

  return (
    <PickerWrapper {...wrapperProps} {...restProps} defined>
      <PhotoshopPicker
        color={innerColor}
        onChange={handleChange}
        onCancel={handleCancel}
        {...changeMethodProps}
        {...pickerProps}
      />
    </PickerWrapper>
  );
};

export default ColorPhotoshopPicker;
