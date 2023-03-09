
export const isPDFFile = (file: any) => {
  if (file.type === 'application/pdf') {
    return true;
  }

  const arr = (file?.name || '').split('.');
  const ext = arr[arr.length - 1];

  if (ext.toLowerCase() === 'pdf') {
    return true;
  }
  return false;
}
