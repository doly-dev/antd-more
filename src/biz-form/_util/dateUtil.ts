import type { Dayjs } from 'dayjs';
import { isArray } from 'ut2';
import dayjs, { transformQuarter } from '../../utils/dayjs-wrapper';

// DatePicker picker值
export type Picker = 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year';

// 日期度量值
export enum DateScale {
  time = 'hours',
  date = 'days',
  week = 'weeks',
  month = 'months',
  quarter = 'months',
  year = 'years'
}

// 日期格式
export enum DateFormat {
  date = 'YYYY-MM-DD',
  week = 'YYYY-wo',
  month = 'YYYY-MM',
  quarter = 'YYYY-\\QQ',
  year = 'YYYY'
}

// 获取日期格式
export function getDateFormat(format: any, picker?: string, showTime = false) {
  if (format) {
    return format;
  }
  const timeFormatStr = picker === 'date' && showTime ? ' HH:mm:ss' : '';
  return DateFormat[picker] + timeFormatStr || 'YYYY-MM-DD';
}

type CreateDisabledDateOptions = {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
};

// 创建不可选日期方法
export function createDisabledDate(picker: Picker = 'date', opts?: CreateDisabledDateOptions) {
  const { disabledDateBefore, disabledDateAfter } = opts;

  if (typeof disabledDateBefore !== 'number' && typeof disabledDateAfter !== 'number') {
    return () => false;
  }

  const scale = DateScale[picker];

  if (!scale) {
    return () => false;
  }

  return (current: Dayjs) => {
    if (!current) {
      return false;
    }

    const hasBefore = typeof disabledDateBefore === 'number';
    const hasAfter = typeof disabledDateAfter === 'number';

    let before = disabledDateBefore;
    let after = disabledDateAfter;

    // 处理季度
    if (picker === 'quarter') {
      if (hasBefore) {
        before *= 3;
      }
      if (hasAfter) {
        after *= 3;
      }
    }

    if (hasBefore && hasAfter) {
      return (
        current <= dayjs().add(before, scale).endOf(scale) ||
        current >= dayjs().add(after, scale).startOf(scale)
      );
    } else if (hasBefore) {
      return current <= dayjs().add(before, scale).endOf(scale);
    } else if (hasAfter) {
      return current >= dayjs().add(after, scale).startOf(scale);
    }
    return false;
  };
}

// 转换为dayjs值
export function transformDayjsValue(val: string | Dayjs, format?: string): Dayjs;
export function transformDayjsValue(val: (string | Dayjs)[], format?: string): [Dayjs, Dayjs];
export function transformDayjsValue(
  val: string | Dayjs | (string | Dayjs)[],
  format = 'YYYY-MM-DD'
) {
  if (isArray(val)) {
    return val.map((item) => transformDayjsValue(item, format));
  }

  if (typeof val === 'string' && val) {
    return format === DateFormat.quarter ? transformQuarter(val) : dayjs(val, format);
  }
  return val;
}

// 转换time为dayjs值
export function transformDayjsTime(time: string | Dayjs, format?: string): Dayjs;
export function transformDayjsTime(time: (string | Dayjs)[], format?: string): [Dayjs, Dayjs];
export function transformDayjsTime(time, format = 'HH:mm:ss') {
  if (isArray(time)) {
    return time.map((timeItem) => transformDayjsTime(timeItem, format));
  }
  if (typeof time === 'string' && time) {
    return dayjs(time, format);
  }
  return time;
}
