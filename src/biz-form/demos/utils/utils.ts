import Cache2 from 'cache2';
import type { RcFile, UploadFile } from 'antd/es/upload';
import IconAudio from '../assets/icon-audio.png';
import IconExcel from '../assets/icon-excel.png';
import IconFile from '../assets/icon-file.png';
import IconPdf from '../assets/icon-pdf.png';
import IconWord from '../assets/icon-word.png';
import IconVideo from '../assets/icon-video.png';

export function isImageType(file?: File) {
  return file?.type.indexOf('image/') > -1;
}
export function isAudioType(file?: File) {
  return file?.type.indexOf('audio/') > -1;
}
export function isVideoType(file?: File) {
  return file?.type.indexOf('video/') > -1;
}
export function isPdfType(file?: File) {
  return file?.type === 'application/pdf' || file?.name.lastIndexOf('.pdf') > -1;
}
export function isWordType(file?: File) {
  return (
    file?.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    file?.name.lastIndexOf('.doc') > -1 ||
    file?.name.lastIndexOf('.docx') > -1
  );
}
export function isExcelType(file?: File) {
  return (
    file?.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
    file?.type === 'application/vnd.ms-excel' ||
    file?.name.lastIndexOf('.xls') > -1 ||
    file?.name.lastIndexOf('.xlsx') > -1
  );
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

export async function getFileThumbUrl(file: RcFile): Promise<string> {
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
