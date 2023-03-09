import * as React from 'react';
import type { RadioGroupProps } from 'antd';
import { Radio, InputNumber } from 'antd';
import classnames from 'classnames';
import styles from './index.module.less';

// 配送规则
// 0--不包邮 1--包邮 2-不配送
export enum FreightRuleType {
  Need = "0",
  No = "1",
  NoExpress = "2"
}

// 配送规则选项
export const FreightRuleOptions = [
  {
    label: '包邮',
    value: FreightRuleType.No
  },
  {
    label: '不包邮',
    value: FreightRuleType.Need
  },
  {
    label: '不配送',
    value: FreightRuleType.NoExpress
  }
];

export type FreightItem = {
  id: number | string;
  freight: number;
  freightRule: FreightRuleType;
};

export interface FreightProps
  extends Omit<RadioGroupProps, 'id' | 'value' | 'onChange'>,
  FreightItem {
  onChange?: (value: FreightItem) => void;
}

const Freight: React.FC<FreightProps> = ({
  id,
  freight,
  freightRule,
  onChange,
  className,
  ...restProps
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [freightValue, setFreightValue] = React.useState<number>(freight);

  const handleChangeRadio = React.useCallback(
    (e) => {
      const val = e.target.value;
      const realFreight = val !== FreightRuleType.Need ? 0 : freightValue;
      setFreightValue(realFreight);

      onChange?.({
        id,
        freightRule: val,
        freight: realFreight
      });

      if (val === FreightRuleType.Need && inputRef) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }
    },
    [freightValue, id, onChange]
  );

  const handleChangeFreight = React.useCallback(
    (val) => {
      setFreightValue(val);
      onChange?.({
        id,
        freightRule,
        freight: val
      });
    },
    [freightRule, id, onChange]
  );

  return (
    <Radio.Group
      className={classnames(styles.wrapper, className)}
      onChange={handleChangeRadio}
      value={freightRule}
      {...restProps}
    >
      {FreightRuleOptions.map((item) => {
        const freightInputName = 'id' + id + (item.value + '');
        return (
          <Radio key={item.value} value={item.value}>
            {item.label}
            {item.value === FreightRuleType.Need && freightRule === FreightRuleType.Need && (
              <div
                className={styles.inputWrapper}
                style={freightRule !== FreightRuleType.Need ? { display: 'none' } : {}}
              >
                <label htmlFor={freightInputName}>运费</label>
                <InputNumber<number>
                  name={freightInputName}
                  id={freightInputName}
                  value={freightValue}
                  precision={2}
                  min={0}
                  max={999}
                  onChange={handleChangeFreight}
                  ref={inputRef}
                />
                元
              </div>
            )}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default Freight;
