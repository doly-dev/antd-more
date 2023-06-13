import { sleep } from "ut2";

// 上传文件
export async function uploadFile(file: File): Promise<{ fssid: string }> {
  console.log('uploadFile: ', file);

  await sleep(2000);
  if (Math.random() > 0.2) {
    return {
      fssid: `${Math.random()}`
    };
  }
  throw new Error('error');
}

// 下载文件
export async function downloadFile(fssid: string) {
  console.log('downloadFile: ', fssid);

  await sleep(2000);
  if (Math.random() > 0.2) {
    return {
      data: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`
    };
  }
  throw new Error('error');
}

