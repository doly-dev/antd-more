import Cache2 from 'cache2';
import type { RcFile, UploadFile } from 'antd/es/upload';
import IconAudio from '../assets/icon-audio.png';
import IconExcel from '../assets/icon-excel.png';
import IconFile from '../assets/icon-file.png';
import IconPdf from '../assets/icon-pdf.png';
import IconWord from '../assets/icon-word.png';
import IconVideo from '../assets/icon-video.png';

function checkFileType(file?: File, types: string[] = [], suffix: string[] = []) {
  let ret = false;
  if (file?.type) {
    ret = types.some(item => file.type.indexOf(item) !== -1);
  }
  if (!ret && file?.name) {
    ret = suffix.some(item => file.name.indexOf(item) !== -1);
  }
  return ret;
}

export function isImageType(file?: File) {
  return checkFileType(file, ['image/'], ['.jpg', '.png', '.jpeg', '.gif', '.bmp']);
}
export function isAudioType(file?: File) {
  return checkFileType(file, ['audio/'], ['.mp3', '.wav']);
}
export function isVideoType(file?: File) {
  return checkFileType(file, ['video/'], ['.mp4', '.webm', '.ogg', '.ogv', '.ogm']);
}
export function isPdfType(file?: File) {
  return checkFileType(file, ['application/pdf'], ['.pdf']);
}
export function isWordType(file?: File) {
  return checkFileType(file, ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'], ['.doc', '.docx']);
}
export function isExcelType(file?: File) {
  return checkFileType(file, ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'], ['.xls', '.xlsx']);
}

export function getFileType(file?: File) {
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
const fileCache = new Cache2({ max: 20, maxStrategy: 'replaced' });
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
  if (file.uid) {
    url = fileCache.get(file.uid);
    if (!url) {
      url = URL.createObjectURL(originFileObj);
      fileCache.set(file.uid, url);
    }
  } else {
    url = URL.createObjectURL(originFileObj);
  }
  return url;
}

export function removeFile(file: RcFile) {
  fileCache.del(file.uid);
}

export function getFileThumbUrl(file: RcFile): string {
  // 图片类型内部会自动处理 thumbUrl
  if (isImageType(file)) {
    return getFileUrl(file);
  }
  if (isAudioType(file)) {
    return IconAudio;
  }
  if (isVideoType(file)) {
    return IconVideo;
  }
  if (isPdfType(file)) {
    return IconPdf;
  }
  if (isWordType(file)) {
    return IconWord;
  }
  if (isExcelType(file)) {
    return IconExcel;
  }
  return IconFile;
}

export async function previewFile(file: RcFile) {
  return getFileThumbUrl(file);
}