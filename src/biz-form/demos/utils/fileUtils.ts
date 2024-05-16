import type { UploadFile } from 'antd';
import { castArray, isArray, isObject, uniqueId } from 'ut2';
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

// 通过 fssid 转为 UploadFile
// 适用于详情页图片展示、表单回显
export function fssidToUploadFile<T = any>(fssid: string | string[]): Promise<UploadFile<T>[]> {
  if (!fssid) {
    return Promise.resolve([]);
  }

  const ids = castArray(fssid);
  const tasks: Promise<{ data: string }>[] = [];

  ids.forEach((id) => {
    tasks.push(asyncMemo.run(() => downloadFile(id), id)); // 如果有特殊处理可以在此次修改，例如解压zip文件（注意修改类型和后续处理）
  });

  return Promise.allSettled(tasks).then((result) =>
    result.map((item) => {
      if (item.status === 'fulfilled') {
        return wrapperUploadFile({
          name: item.value.data,
          response: {
            fssid
          },
          url: item.value.data
        });
      }

      return wrapperUploadFile({
        status: 'error',
        error: item.reason,
        response: {
          fssid
        }
      });
    })
  );
}

// 通过 UploadFile 转为 fssid
// 表单提交时提取出上传文件的 fssid
export function uploadFileToFssid(fileList: UploadFile[], nil: false): (string | undefined)[];
export function uploadFileToFssid(fileList: UploadFile[], nil?: true): string[];
export function uploadFileToFssid(fileList: any, nil = true) {
  const result: string[] = [];
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
