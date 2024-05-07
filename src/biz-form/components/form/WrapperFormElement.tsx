import * as React from 'react';
import composeProps from 'rc-util/es/composeProps';
import { supportRef } from 'rc-util/es/ref';

import './index.less';

const prefixCls = 'antd-more-form-item-wrapper';

export interface WrapperFormElementProps extends Record<string, any> {
  before?: React.ReactNode;
  after?: React.ReactNode;
  align?: React.CSSProperties['alignItems'];
}

const WrapperFormElement = React.forwardRef<any, WrapperFormElementProps>(
  ({ after, before, align, children, ...restProps }, ref) => {
    const childrenView = React.isValidElement(children)
      ? React.cloneElement(
          children,
          composeProps(
            children?.props,
            { ...restProps, ref: supportRef(children) ? ref : undefined },
            true
          )
        )
      : (children as any);

    if (!after && !before) {
      return childrenView === void 0 ? null : childrenView;
    }

    const styles = align
      ? {
          alignItems: align
        }
      : {};

    return (
      <div className={prefixCls} style={styles}>
        {before && <div className={`${prefixCls}-before`}>{before}</div>}
        <div className={`${prefixCls}-content`}>{childrenView}</div>
        {after && <div className={`${prefixCls}-after`}>{after}</div>}
      </div>
    );
  }
);

export default WrapperFormElement;
