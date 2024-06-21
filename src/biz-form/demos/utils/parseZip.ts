// import JSZip from 'jszip';
// import { setDataURLPrefix, dataURLToBlob } from 'util-helpers';

// export type ZipDataType = { name: string; fssid: string; base64: string; blob: Blob };

// async function parseZip(base64Str: string) {
//   const blob = dataURLToBlob(setDataURLPrefix(base64Str, 'application/zip'));
//   const zip = await JSZip.loadAsync(blob);
//   // console.log("zip", zip)
//   const tasks: Promise<ZipDataType>[] = [];

//   zip.forEach((_, zipEntry) => {
//     const task = zipEntry.async('base64').then((base64) => {
//       const base64Ret = setDataURLPrefix(base64);
//       return {
//         name: zipEntry.name,
//         fssid: zipEntry.name.split('.')[0],
//         base64: base64Ret,
//         blob: dataURLToBlob(base64Ret),
//       };
//     });

//     tasks.push(task);
//   });

//   return Promise.all(tasks);
// }

// export default parseZip;
