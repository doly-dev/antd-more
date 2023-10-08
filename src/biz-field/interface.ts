import type { ReactNode } from 'react';
import type { EnumData } from '../dictionary';

type BizFieldValueType =
  | 'text'
  | 'date'
  | 'dateWeek'
  | 'dateMonth'
  | 'dateQuarter'
  | 'dateYear'
  | 'dateRange'
  | 'dateTime'
  | 'dateTimeRange'
  | 'time'
  | 'timeRange'
  | 'fromNow'
  | 'money'
  | 'index'
  | 'indexBorder'
  | 'progress'
  | 'percent'
  | 'enum'
  | 'enumTag'
  | 'enumBadge'
  | 'image'
  | 'color';

export type { EnumData, BizFieldValueType };

export interface BizFieldProps<T = any> {
  value: T;
  valueType?: BizFieldValueType;
  valueEnum?: EnumData<T>;
  formatValue?: (value: any) => T;
  defaultValue?: ReactNode;
  whitespaceLineBreak?: boolean;
  [x: string]: any;
}
