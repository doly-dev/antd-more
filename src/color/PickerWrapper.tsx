import React, { useCallback, cloneElement } from 'react';
import type { PopoverProps, TooltipProps } from 'antd';
import { Popover } from 'antd';
import { useControllableValue } from 'rc-hooks';
import classNames from 'classnames';
import type { ColorResult } from 'react-color';
import { transformColor } from './utils';
import Color from './Color';

import './index.less';

const prefixCls = 'antd-more-color';

export interface PickerCommonProps {
  className?: string;
  value?: string;
  showText?: boolean;
  trigger?: 'click' | 'hover' | string | string[];
  onChange?: (colorStr: string) => void;
  colorMode?: 'hex' | 'rgb';
  placement?: TooltipProps['placement'];
  changeMethod?: 'onChange' | 'onChangeComplete';
  size?: 'small' | 'middle';
  disabled?: boolean;
}

export interface PickerWrapperProps extends PickerCommonProps, PopoverProps {
  children?: React.ReactElement;
  defined?: boolean;
  [key: string]: any;
}

const PickerWrapper: React.FC<PickerWrapperProps> = ({
  className,
  value,
  showText = false,
  trigger = 'click',
  onChange,
  colorMode = 'hex',
  placement = 'bottomLeft',
  children,
  changeMethod = 'onChange',
  size = 'small',
  defined = false,
  disabled = false,
  ...restProps
}) => {
  const [open, setOpen] = useControllableValue<boolean>(restProps, {
    valuePropName: 'open',
    defaultValuePropName: 'defaultOpen',
    defaultValue: false,
    trigger: 'onOpenChange'
  });

  const handleChange = useCallback(
    (color: ColorResult) => {
      onChange?.(transformColor(color, colorMode));
    },
    [colorMode, onChange]
  );

  return (
    <Color
      value={value}
      showText={showText}
      size={size}
      className={classNames(`${prefixCls}-picker`, { [`${prefixCls}-picker-disabled`]: disabled }, className)}
      renderColor={(dom) => disabled ? dom : (
        <Popover
          content={
            defined
              ? children
              : cloneElement(children, {
                [changeMethod]: handleChange,
                color: value
              })
          }
          trigger={trigger}
          autoAdjustOverflow={false}
          placement={placement}
          showArrow={false}
          overlayClassName={`${prefixCls}-overlay-normalize`}
          {...restProps}
          open={open}
          onOpenChange={setOpen}
        >
          {dom}
        </Popover>
      )}
    />
  );
};

export default PickerWrapper;
