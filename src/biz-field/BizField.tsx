import React from 'react';
import { formatMoney } from 'util-helpers';
import type { BizFieldProps } from './interface';
import FieldProgress from './components/Progress';
import FieldIndex from './components/Index';
import FieldImage from './components/Image';
import Dictionary from '../dictionary';
import Color from '../color';
import Percent from './components/Percent';
import { getDateStr } from './_util/dateUtil';

const DateType = [
  'date',
  'dateWeek',
  'dateMonth',
  'dateQuarter',
  'dateYear',
  'dateRange',
  'dateTime',
  'dateTimeRange',
  'time',
  'timeRange',
  'fromNow'
];
const IndexType = ['index', 'indexBorder'];
const EnumType = ['enum', 'enumTag', 'enumBadge'];

const DectionaryTypeMap = {
  enum: 'text',
  enumBadge: 'badge',
  enumTag: 'tag'
};

const BizField: React.FC<BizFieldProps> = ({
  value,
  valueType,
  valueEnum = [],
  formatValue,
  ...restProps
}) => {
  const realValue = typeof formatValue === 'function' ? formatValue(value) : value;

  if (valueType === 'text' || valueType === 'money') {
    // 文本 或 金额
    const { color, size, prefix, suffix, style, ...restTextProps } = restProps || {}; // eslint-disable-line @typescript-eslint/no-unused-vars
    const styles: Record<string, any> = { ...style };

    const retValue = valueType === 'text' ? realValue : formatMoney(realValue);

    if (restProps?.color && retValue) {
      styles.color = restProps.color;
    }
    if (restProps?.size && retValue) {
      styles.fontSize = restProps.size;
    }

    return (
      <span {...restTextProps} style={styles}>
        {retValue === null || retValue === undefined || retValue === '' ? (
          '-'
        ) : (
          <>
            {prefix}
            {retValue}
            {suffix}
          </>
        )}
      </span>
    );
  } else if (valueType === 'image') {
    // 图片
    return <FieldImage value={realValue} {...restProps} />;
  } else if (DateType.includes(valueType as string)) {
    // 日期类型
    const { format, ...rest } = restProps;
    return <span {...rest}>{getDateStr(realValue, valueType, format)}</span>;
  } else if (IndexType.includes(valueType as string)) {
    // 序号
    return <FieldIndex value={realValue + 1} type={valueType} {...restProps} />;
  } else if (valueType === 'progress') {
    // 进度条
    return <FieldProgress value={realValue} {...restProps} />;
  } else if (valueType === 'percent') {
    // 百分比
    return <Percent value={realValue} {...restProps} />;
  } else if (EnumType.includes(valueType as string)) {
    // 枚举值
    const enumProps = {
      value: realValue,
      type: DectionaryTypeMap[valueType as string],
      data: valueEnum
    };
    return Array.isArray(realValue) ? (
      <Dictionary.List {...enumProps} {...restProps} />
    ) : (
      <Dictionary {...enumProps} {...restProps} />
    );
  } else if (valueType === 'color') {
    // 颜色
    return <Color value={realValue} {...restProps} />;
  }

  return typeof realValue === 'undefined' ? null : realValue;
};

export default BizField;
