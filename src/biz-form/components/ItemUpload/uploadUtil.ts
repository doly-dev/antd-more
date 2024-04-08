// 检查文件类型
export function checkFileType(file: File, accept?: string) {
  if (!accept || !accept.trim() || accept === '*') {
    return true;
  }

  const types = accept.toLowerCase().split(/,(?:\s+)?/);
  let ret = false;
  types.some((type) => {
    // .doc .docx .jpg .png
    if (
      file.type === type ||
      (type.indexOf('.') === 0 &&
        file.name.toLowerCase().substring(file.name.length - type.length) === type)
    ) {
      ret = true;
    } else if (type.includes('/*') && file.type.includes('/')) {
      // image/* 匹配所有图片类型
      const match = type.match(/(.*)\/\*/);
      const fileParentType = file.type.split('/')[0];
      if (match && match[1] === fileParentType) {
        ret = true;
      }
    }
    return ret;
  });

  return ret;
}

// 检查文件大小
export function checkFileSize(file: File, size: number) {
  return file.size < size;
}

// 获取文件名
export function getFileName(url: string): string {
  if (typeof url !== 'string' || !url) {
    return '';
  }

  let divider = '/';

  if (url.indexOf('\\') > -1) {
    divider = '\\';
  }

  const pathArr = url.split(divider);
  return pathArr[pathArr.length - 1] || '';
}

// 缓存 URL.createObjectURL
const urlCache: {
  [ukey: string]: {
    [uid: string]: string;
  };
} = {};

export const createFileUrl = (ukey: string, uid: string, file: File) => {
  if (!urlCache[ukey]) {
    urlCache[ukey] = {};
  }
  if (!urlCache[ukey][uid]) {
    urlCache[ukey][uid] = URL.createObjectURL(file);
  }
  return urlCache[ukey][uid];
};

export const revokeFileUrl = (ukey: string, uid?: string) => {
  if (urlCache[ukey]) {
    if (uid) {
      if (urlCache[ukey][uid]) {
        URL.revokeObjectURL(urlCache[ukey][uid]);
      }
      delete urlCache[ukey][uid];
    } else {
      const uids = Object.keys(urlCache[ukey]);
      uids.forEach((item) => {
        URL.revokeObjectURL(urlCache[ukey][item]);
      });
      delete urlCache[ukey];
    }
  }
};
