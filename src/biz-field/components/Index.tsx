import * as React from 'react';
import classnames from 'classnames';
import type { BizFieldProps } from '../interface';

import './Index.less';

const prefixCls = 'antd-more-field-index';

const FieldIndex: React.FC<
  Pick<BizFieldProps, 'value' | 'type'> & React.HTMLAttributes<HTMLSpanElement>
> = ({ value, type = 'index', className, ...restProps }) => {
  return (
    <span
      className={classnames(prefixCls, className, {
        [`${prefixCls}-border`]: type === 'indexBorder',
        'top-three': (value as number) > 3
      })}
      {...restProps}
    >
      {value}
    </span>
  );
};

export default FieldIndex;
