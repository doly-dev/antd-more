import React from 'react';
import BaseFileViewer from './FileViewer';
import type { FileViewerProps } from './FileViewer';
import type { FileViewerPictureCardProps } from './PictureCard';
import PictureCard from './PictureCard';
import { getFileUrl, getFileType } from './utils';
import { getFileThumbUrl, previewFile, removeFile } from './upload-utils';

export type { FileViewerProps, FileViewerPictureCardProps };

function FileViewer(props: FileViewerProps) {
  return <BaseFileViewer {...props} />;
}

FileViewer.PictureCard = PictureCard;

FileViewer.getFileUrl = getFileUrl;
FileViewer.getFileType = getFileType;

FileViewer.getFileThumbUrl = getFileThumbUrl;
FileViewer.previewFile = previewFile;
FileViewer.removeFile = removeFile;

export default FileViewer;
