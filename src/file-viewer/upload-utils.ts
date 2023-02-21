import type { RcFile, UploadFile } from 'antd/es/upload';
import IconAudio from './images/icon-audio.png';
import IconExcel from './images/icon-excel.png';
import IconFile from './images/icon-file.png';
import IconPdf from './images/icon-pdf.png';
import IconWord from './images/icon-word.png';
import IconVideo from './images/icon-video.png';
import { isAudioType, isExcelType, isImageType, isPdfType, isVideoType, isWordType, fileCache, getFileUrl } from './utils';

export function removeFile(file: RcFile) {
  fileCache.del(file.uid);
}

export function getFileThumbUrl(file: UploadFile): string {
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