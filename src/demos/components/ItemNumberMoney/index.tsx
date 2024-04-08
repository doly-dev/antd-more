import React from 'react';
import type { BizFormItemNumberProps } from 'antd-more';
import { BizFormItemNumber } from 'antd-more';
import classnames from 'classnames';
import styles from './index.module.less';

export interface ItemNumberMoneyProps extends BizFormItemNumberProps {
  inputPrefixReverse?: boolean; // 前缀反转到后缀位置，开启后默认关闭 controls
}

const ItemNumberMoney: React.FC<ItemNumberMoneyProps> = ({
  inputProps,
  className,
  inputPrefixReverse = false,
  ...restProps
}) => {
  return (
    <BizFormItemNumber
      {...restProps}
      useFloor
      precision={2}
      min={0}
      inputProps={{
        controls: !inputPrefixReverse,
        ...inputProps
      }}
      className={classnames(
        styles.itemNumberMoney,
        { [styles.inputPrefixReverse]: inputPrefixReverse },
        className
      )}
    />
  );
};

export default ItemNumberMoney;
