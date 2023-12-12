import React, { useCallback, useMemo } from 'react';
import { Badge, Tag, Space } from 'antd';
import classnames from 'classnames';
import type { DictionaryProps } from './interface';
import './index.less';
import { isArray } from 'ut2';

const prefixCls = 'antd-more-dictionary';

function Dictionary<ValueType = any>({
  valueEnum = [],
  value,
  defaultLabel = '-',
  type = 'text',
  propsName = '',
  fieldNames,
  match,
  className,
  ...restProps
}: DictionaryProps<ValueType>) {
  const { label: labelKey, value: valueKey } = useMemo(
    () => ({
      label: 'label',
      value: 'value',
      ...fieldNames
    }),
    [fieldNames]
  );
  const values = isArray(value) ? value : [value];
  const realPropsName = propsName || type;
  const matchMethod = useCallback(
    (itemValue, currentValue) => {
      return typeof match === 'function'
        ? match(itemValue, currentValue)
        : itemValue === currentValue;
    },
    [match]
  );

  const ret = values
    .map((curr) => valueEnum.find((item) => matchMethod(item[valueKey], curr)))
    .filter((item) => !!item);
  let view: JSX.Element;

  if (!isArray(ret) || ret.length <= 0) {
    view = <span className={`${prefixCls}-default`}>{defaultLabel}</span>;
  } else {
    view = (
      <>
        {ret.map((item, index) => {
          const options = item[realPropsName] || {};
          const { alias, ...restOptions } = options;
          const label = alias || item[labelKey];
          const key = `${item[valueKey]}${typeof label === 'string' ? label : ''}${index}`;

          if (type === 'tag') {
            return (
              <Tag key={key} {...restOptions}>
                {label}
              </Tag>
            );
          }

          if (type === 'badge') {
            return <Badge key={key} text={label} {...restOptions} />;
          }

          return (
            <span key={key} {...restOptions}>
              {label}
            </span>
          );
        })}
      </>
    );
  }

  return (
    <Space className={classnames(prefixCls, className)} {...restProps}>
      {view}
    </Space>
  );
}

export default Dictionary;
