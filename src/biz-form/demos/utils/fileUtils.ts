import Cache2 from 'cache2';
import type { UploadFile } from 'antd';
import { uniqueId } from 'ut2';
import { downloadFile } from '../services';

const asyncCache: Record<string, any> = {};
const fileCache = new Cache2({ max: 20, maxStrategy: 'replaced', stdTTL: 5 * 60 * 1000 });

fileCache.on('del', (key, value) => {
  if (value && value?.fileUrl) {
    URL.revokeObjectURL(value.fileUrl);
  }
});

async function getFileByFssid(fssid: string): Promise<UploadFile> {
  let cache = fileCache.get(fssid);

  if (!cache) {
    if (!asyncCache[fssid]) {
      asyncCache[fssid] = async () => downloadFile(fssid).finally(() => {
        delete asyncCache[fssid];
      });
    }
    try {
      const res = await asyncCache[fssid]();
      fileCache.set(fssid, res);
      cache = res;
    } catch (error) {
      return {
        uid: uniqueId(fssid),
        name: '',
        status: 'error',
        error,
        url: '',
        response: {
          fssid
        }
      }
    }
  }

  return {
    uid: uniqueId(fssid),
    name: cache?.data,
    status: 'done',
    response: {
      fssid
    },
    thumbUrl: cache?.data,
    url: cache?.data
  };
}

// 通过 fssid 转为 UploadFile
// 适用于详情页图片展示、表单回显
export function fssidToUploadFile<T = any>(fssid: string): Promise<UploadFile<T>>;
export function fssidToUploadFile<T = any>(fssid: string[]): Promise<UploadFile<T>[]>;
export function fssidToUploadFile(fssid: string | string[]) {
  if (typeof fssid === 'string') {
    return getFileByFssid(fssid);
  }

  if (Array.isArray(fssid)) {
    const tasks: Promise<any>[] = [];

    fssid.forEach(item => {
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
  if (Array.isArray(fileList)) {
    fileList.forEach(item => {
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