import React, { useMemo } from 'react';
import classNames from 'classnames';
import './index.less';

const prefixCls = 'antd-more-color';

export interface ColorProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  value?: string;
  showText?: boolean;
  size?: 'small' | 'middle';
  renderColor?: (dom: JSX.Element, color: string) => React.ReactNode;
}

/**
 * @deprecated 即将废弃，建议使用 `import { ColorPicker } from antd`
 */
const Color: React.FC<ColorProps> = ({
  className,
  value,
  size = 'small',
  showText = false,
  renderColor,
  ...restProps
}) => {
  const colorDom = useMemo(() => {
    const dom = (
      <span className={`${prefixCls}-outer`} title={value}>
        <span className={`${prefixCls}-inner`} style={{ backgroundColor: value }} />
      </span>
    );
    return renderColor ? renderColor(dom, value) : dom;
  }, [value, renderColor]);

  return (
    <span className={classNames(className, prefixCls, `${prefixCls}-${size}`)} {...restProps}>
      {colorDom}
      {showText && value && <span className={`${prefixCls}-text`}>{value}</span>}
    </span>
  );
};

export default Color;
