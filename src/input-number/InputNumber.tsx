import React from 'react';
import { InputNumber } from 'antd';
import { InputNumberProps } from 'antd/lib/input-number';

const prefixCls = 'antd-more-input-number';

export interface InputNumberWrapperProps extends InputNumberProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
}

const InputNumberWrapper: React.FC<InputNumberWrapperProps> = ({ after, before, ...restProps }) => {
  return (
    <div className={prefixCls}>
      {before && <div style={{ margin: '0 8px' }}>{before}</div>}
      <InputNumber {...restProps} />
      {after && <div style={{ margin: '0 8px' }}>{after}</div>}
    </div>
  );
};

export default InputNumberWrapper;
