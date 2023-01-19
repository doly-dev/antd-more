import * as React from 'react';
import { useAsync } from 'rc-hooks';
import type { BizFieldProps } from 'antd-more';
import { BizField } from 'antd-more';
import { Spin } from 'antd';
import { useMemo } from 'react';
import { fssidToUploadFile } from '../utils/fileUtils';
import FallbackImage from './fallback.png';

interface AsyncImageProps extends Omit<BizFieldProps, 'value' | 'valueType'> {
  fssid?: string | string[] | { fileId: string; fileName: string } | { fileId: string; fileName: string }[];
  enabledDownload?: boolean;
}

const AsyncImage: React.FC<AsyncImageProps> = ({ fssid, enabledDownload = false, ...restProps }) => {
  const tempFiles = useMemo(() => {
    const names: string[] = [];
    const ids: string[] = [];

    const fssidArr = Array.isArray(fssid) ? fssid : [fssid];

    fssidArr.forEach(item => {
      if (typeof item === 'string') {
        ids.push(item);
        names.push('');
      } else if (item && typeof item === 'object') {
        ids.push(item.fileId);
        names.push(item.fileName);
      }
    });

    return {
      names,
      ids
    }
  }, [fssid]);

  const { data, loading } = useAsync(() => fssidToUploadFile(tempFiles.ids).then(res => {
    if (!Array.isArray(res)) {
      return [];
    }
    return res.map((item, index) => ({
      src: item.url,
      name: tempFiles.names[index] || undefined,
      originUrl: item.response.url
    }))
  }), {
    refreshDeps: [tempFiles]
  });

  if (loading) {
    return <Spin />
  }

  if (typeof fssid === 'undefined' || !data || (Array.isArray(data) && data.length <= 0)) {
    return <span>-</span>;
  }

  return (
    <BizField
      bordered
      fallback={FallbackImage}
      renderName={(name: string, index: number, item: any) => {
        const href = item.originUrl || item.src;
        return enabledDownload && href ? <a href={href} download={item.name} target="_blank" rel="noreferrer">{name}</a> : name
      }}
      {...restProps}
      value={data}
      valueType="image"
    />
  );
}

export default AsyncImage;