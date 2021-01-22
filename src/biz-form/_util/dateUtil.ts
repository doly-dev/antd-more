import moment, { Moment } from 'moment';

// DatePicker picker值
export type Picker = 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year';

// moment 度量值
export enum MomentScale {
  time = 'hours',
  date = 'days',
  week = 'weeks',
  month = 'months',
  quarter = 'months',
  year = 'years',
}

// 中文单位
export enum DateUnit {
  time = '小时',
  date = '天',
  week = '周',
  month = '月',
  quarter = '季',
  year = '年',
}

// 日期格式
export enum DateFormat {
  date = 'YYYY-MM-DD',
  week = 'YYYY-wo',
  month = 'YYYY-MM',
  quarter = 'YYYY-\\QQ',
  year = 'YYYY',
}

// 获取日期格式
export function getDateFormat(format, picker, showTime) {
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

  const scale = MomentScale[picker];

  if (!scale) {
    return () => false;
  }

  return (current: Moment) => {
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
        current <= moment().add(before, scale).endOf(scale) ||
        current >= moment().add(after, scale).startOf(scale)
      );
    } else if (hasBefore) {
      return current <= moment().add(before, scale).endOf(scale);
    } else if (hasAfter) {
      return current >= moment().add(after, scale).startOf(scale);
    }
    return false;
  };
}

// 转换为moment值
export function transformMomentValue(val) {
  if (Array.isArray(val)) {
    return val.map(transformMomentValue);
  }
  if (typeof val === 'string' && val) {
    return moment(val);
  }
  return val;
}

// 转换time为moment值
export function transformMomentTime(time, format = 'HH:mm:ss') {
  if (Array.isArray(time)) {
    return time.map((timeItem) => transformMomentTime(timeItem, format));
  }
  if (typeof time === 'string' && time) {
    return moment(time, format);
  }
  return time;
}
