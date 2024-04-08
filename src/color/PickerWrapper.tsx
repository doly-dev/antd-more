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

export interface PickerCommonProps extends Pick<PopoverProps, 'trigger'> {
  className?: string;
  value?: string;
  showText?: boolean;
  onChange?: (colorStr: string) => void;
  colorMode?: 'hex' | 'rgb';
  placement?: TooltipProps['placement'];
  changeMethod?: 'onChange' | 'onChangeComplete';
  size?: 'small' | 'middle';
}

export interface PickerWrapperProps extends PickerCommonProps, PopoverProps {
  children?: React.ReactElement | any;
  defined?: boolean;
  [key: string]: any;
}

const PickerWrapper: React.FC<PickerWrapperProps> = ({
  className,
  id,
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
  ...restProps
}) => {
  const [visible, setVisible] = useControllableValue<boolean>(restProps, {
    valuePropName: 'visible',
    defaultValuePropName: 'defaultVisible',
    defaultValue: false,
    trigger: 'onVisibleChange'
  });

  const handleChange = useCallback(
    (color: ColorResult) => {
      onChange?.(transformColor(color, colorMode));
    },
    [colorMode, onChange]
  );

  return (
    <Color
      id={id}
      value={value}
      showText={showText}
      size={size}
      className={classNames(`${prefixCls}-picker`, className)}
      renderColor={(dom) => (
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
          visible={visible}
          onVisibleChange={setVisible}
          autoAdjustOverflow={false}
          placement={placement}
          overlayClassName={`${prefixCls}-overlay-normalize`}
          {...restProps}
        >
          {dom}
        </Popover>
      )}
    />
  );
};

export default PickerWrapper;
