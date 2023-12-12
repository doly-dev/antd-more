import moment from 'moment';
import { isArray } from 'ut2';

const MOMENT_INVALID_DATE = 'Invalid date';

export enum DateFormat {
  date = 'YYYY-MM-DD',
  dateRange = 'YYYY-MM-DD',
  dateWeek = 'YYYY-wo',
  dateMonth = 'YYYY-MM',
  dateQuarter = 'YYYY-\\QQ',
  dateYear = 'YYYY',
  dateTime = 'YYYY-MM-DD HH:mm:ss',
  dateTimeRange = 'YYYY-MM-DD HH:mm:ss',
  time = 'HH:mm:ss',
  timeRange = 'HH:mm:ss'
}

function transformDateString(value, type, fmt) {
  let str: string;

  if (type === 'time' || type === 'timeRange') {
    str = moment(value, fmt).format(fmt);

    if (str === MOMENT_INVALID_DATE) {
      return moment(value).format(fmt);
    }
    return str;
  }

  str = moment(value).format(fmt);

  if (str === MOMENT_INVALID_DATE) {
    return moment(value, fmt).format(fmt);
  }
  return str;
}

export function getDateStr(value, type, format) {
  let str = '';

  if (!value) {
    return '-';
  }

  const fmt = format || DateFormat[type];

  if (type === 'dateRange' || type === 'dateTimeRange' || type === 'timeRange') {
    const [startDate, endDate] = isArray(value) ? value : [];
    const startText = startDate ? transformDateString(startDate, type, fmt) : '';
    const endText = endDate ? transformDateString(endDate, type, fmt) : '';
    str = `${startText} ~ ${endText}`;
  } else if (type === 'fromNow') {
    str = moment(value).fromNow();
  } else {
    str = transformDateString(value, type, fmt);
  }

  return str;
}
