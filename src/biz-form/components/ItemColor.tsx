import * as React from 'react';
import type { TooltipProps } from './antd.interface';
import Color from '../../color';
import BizFormItem from './Item';
import type { BizFormItemProps } from './Item';
import getLabel from '../_util/getLabel';

export enum ColorPicker {
  block = 'BlockPicker',
  chrome = 'ChromePicker',
  compact = 'CompactPicker',
  photoshop = 'PhotoshopPicker',
  sketch = 'SketchPicker',
}

export interface FormItemColorProps extends BizFormItemProps {
  showText?: boolean;
  picker?: keyof typeof ColorPicker;
  trigger?: 'hover' | 'click' | string;
  colorMode?: 'rgb' | 'hex';
  placement?: TooltipProps['placement'];
  colorProps?: any;
}

const FormItemColor: React.FC<FormItemColorProps> = ({
  required = false,

  picker = 'sketch',
  showText,
  trigger,
  colorMode,
  placement,
  colorProps,
  ...restProps
}) => {
  const Comp = Color[ColorPicker[picker]];

  return (
    <BizFormItem
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
          },
        },
      ]}
      {...restProps}
    >
      <Comp
        showText={showText}
        trigger={trigger}
        colorMode={colorMode}
        placement={placement}
        {...colorProps}
      />
    </BizFormItem>
  );
};

export default FormItemColor;
