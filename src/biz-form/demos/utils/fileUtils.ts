import type { UploadFile } from 'antd';
import { isArray, isObject, uniqueId } from 'ut2';
import { downloadFile } from '../services';
import { AsyncMemo } from 'util-helpers';

export function wrapperUploadFile<T = any>(opts: Partial<UploadFile>) {
  return {
    uid: uniqueId(),
    status: 'done',
    thumbUrl: opts.url,
    url: opts.url,
    name: '',
    ...opts
  } as UploadFile<T>;
}

const asyncMemo = new AsyncMemo({
  max: 20,
  maxStrategy: 'replaced',
  stdTTL: 10 * 60 * 1000,
  prefix: 'fileUtils'
});
asyncMemo.cache.on('del', (key, value) => {
  if (isObject(value) && value.fileUrl) {
    URL.revokeObjectURL(value.fileUrl);
  }
});

async function getFileByFssid(fssid: string): Promise<UploadFile> {
  try {
    const res = await asyncMemo.run(() => downloadFile(fssid), fssid);
    return wrapperUploadFile({
      name: res?.data,
      response: {
        fssid
      },
      url: res?.data
    });
  } catch (error) {
    return wrapperUploadFile({
      status: 'error',
      error,
      response: {
        fssid
      }
    });
  }
}

// 通过 fssid 转为 UploadFile
// 适用于详情页图片展示、表单回显
export function fssidToUploadFile<T = any>(fssid: string): Promise<UploadFile<T>>;
export function fssidToUploadFile<T = any>(fssid: string[]): Promise<UploadFile<T>[]>;
export function fssidToUploadFile(fssid: string | string[]) {
  if (typeof fssid === 'string') {
    return getFileByFssid(fssid);
  }

  if (isArray(fssid)) {
    const tasks: Promise<any>[] = [];

    fssid.forEach((item) => {
      tasks.push(getFileByFssid(item));
    });

    return Promise.all(tasks);
  }

  return Promise.reject('fssidToUploadFile 参数必须为 string 或 string[]');
}

// 通过 UploadFile 转为 fssid
// 表单提交时提取出上传文件的 fssid
export function uploadFileToFssid(fileList: UploadFile[], nil: false): (string | undefined)[];
export function uploadFileToFssid(fileList: UploadFile[], nil?: true): string[];
export function uploadFileToFssid(fileList: any, nil = true) {
  const result: any[] = [];
  if (isArray(fileList)) {
    fileList.forEach((item) => {
      if (item && typeof item === 'object' && typeof item.response === 'object') {
        const fssid = item.response.fssid || item.response.fssId; // 部分项目中没有严格区分 fssId 和 fssid
        if (!nil || fssid) {
          result.push(fssid);
        }
      }
    });
  }
  return result;
}
