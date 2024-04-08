import * as React from 'react';
import type { UploadFile, UploadProps } from 'antd';
import { Upload } from 'antd';
import type { FileViewerProps } from './FileViewer';
import FileViewer from './FileViewer';
import { previewFile } from './upload-utils';

export interface FileViewerPictureCardProps extends Omit<FileViewerProps, 'file'> {
  fileList: UploadProps['fileList'];
  uploadProps?: UploadProps;
}

const FileViewerPictureCard: React.FC<FileViewerPictureCardProps> = ({
  fileList,
  uploadProps,
  ...restProps
}) => {
  const [fileInfo, setFileInfo] = React.useState<UploadFile>();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Upload
        fileList={fileList}
        listType="picture-card"
        onPreview={(file) => {
          setFileInfo(file);
          setOpen(true);
        }}
        showUploadList={{ showRemoveIcon: false }}
        previewFile={previewFile}
        {...uploadProps}
      />
      <FileViewer open={open} onCancel={() => setOpen(false)} file={fileInfo} {...restProps} />
    </>
  );
};

export default FileViewerPictureCard;
