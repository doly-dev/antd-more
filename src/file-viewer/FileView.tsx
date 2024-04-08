import * as React from 'react';
import MediaViewer from './MediaViewer';

const isIE = window.ActiveXObject || 'ActiveXObject' in window;
const isPC = () => window.innerWidth > 768;

export interface FileViewProps {
  fileName?: string;
  url: string;
  // fileType: 'image' | 'audio' | 'video' | 'pdf' | 'excel' | 'word';
  fileType: string;
}

const FileView: React.FunctionComponent<FileViewProps> = ({ fileName, url, fileType }) => {
  if (fileType === 'image') {
    return <img src={url} alt={fileName} />;
  }
  if (fileType === 'audio') {
    return <MediaViewer url={url} mediaType="audio" />;
  }
  if (fileType === 'video') {
    return <MediaViewer url={url} mediaType="video" />;
  }
  if (fileType === 'pdf') {
    // ref: https://caniuse.com/?search=createObjectURL
    // Created blob url can't be used as object or iframe src
    if ((!isIE || url.indexOf('blob:') !== 0) && isPC()) {
      return <iframe src={url} style={{ border: '0 none', width: '100%', height: '70vh' }} />;
    }
  }

  return (
    <div>
      该文件不支持预览，你可尝试
      <a href={url} download={fileName}>
        点击下载
      </a>
      。
    </div>
  );
};

export default FileView;
