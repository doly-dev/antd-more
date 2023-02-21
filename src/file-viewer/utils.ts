import Cache2 from 'cache2';
import type { UploadFile } from 'antd/es/upload';

function checkFileType(file?: UploadFile, types: string[] = [], suffix: string[] = []) {
  let ret = false;
  if (file?.type) {
    ret = types.some(item => file.type.indexOf(item) !== -1);
  }
  if (!ret && file?.name) {
    ret = suffix.some(item => file.name.indexOf(item) !== -1);
  }
  if (!ret && file?.url) {
    ret = suffix.some(item => file.url.indexOf(item) !== -1);
  }
  return ret;
}

export function isImageType(file?: UploadFile) {
  return checkFileType(file, ['image/'], ['.jpg', '.png', '.jpeg', '.gif', '.bmp']);
}
export function isAudioType(file?: UploadFile) {
  return checkFileType(file, ['audio/'], ['.mp3', '.wav']);
}
export function isVideoType(file?: UploadFile) {
  return checkFileType(file, ['video/'], ['.mp4', '.webm', '.ogg', '.ogv', '.ogm']);
}
export function isPdfType(file?: UploadFile) {
  return checkFileType(file, ['application/pdf'], ['.pdf']);
}
export function isWordType(file?: UploadFile) {
  return checkFileType(file, ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'], ['.doc', '.docx']);
}
export function isExcelType(file?: UploadFile) {
  return checkFileType(file, ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'], ['.xls', '.xlsx']);
}

export function getFileType(file?: UploadFile) {
  if (isImageType(file)) {
    return 'image';
  }
  if (isPdfType(file)) {
    return 'pdf';
  }
  if (isAudioType(file)) {
    return 'audio';
  }
  if (isVideoType(file)) {
    return 'video';
  }
  if (isWordType(file)) {
    return 'word';
  }
  if (isExcelType(file)) {
    return 'excel';
  }
  return undefined;
}

// 缓存 URL.createObjectURL
export const fileCache = new Cache2({ max: 20, maxStrategy: 'replaced' });

fileCache.on('del', (key, value) => {
  try {
    URL.revokeObjectURL(value);
  } catch (err) {
    console.error(`fileCache revokeObjectURL error: ${err}`);
  }
});

export function getFileUrl(file: UploadFile) {
  if (file.url) {
    return file.url;
  }

  const originFileObj = (file?.originFileObj || file) as File;

  let url: string;
  try {
    if (file.uid) {
      url = fileCache.get(file.uid);
      if (!url) {
        url = URL.createObjectURL(originFileObj);
        fileCache.set(file.uid, url);
      }
    } else {
      url = URL.createObjectURL(originFileObj);
    }
  } catch (err) {
    console.error(err);
  }
  return url;
}

let stamp = 1;
export const uniqueId = (prefix = 'file-viewer') => `${prefix}${stamp++}`;