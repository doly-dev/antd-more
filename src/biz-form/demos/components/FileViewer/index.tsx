import * as React from 'react';
import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import type { FileViewProps } from './FileView';
import FileView from './FileView';
import classNames from 'classnames';
import styles from './index.less';

export interface FileViewerProps extends ModalProps, FileViewProps { }

function FileViewer({
  url,
  fileName,
  fileType,
  visible,
  className,
  ...restProps
}: FileViewerProps) {
  return (
    <Modal
      visible={visible}
      title={fileName}
      centered
      width={fileType === 'pdf' ? 850 : undefined}
      footer={null}
      {...restProps}
      style={{ maxWidth: '80%', ...restProps.style }}
      className={classNames(styles.viewer, className)}
    >
      <FileView url={url} fileType={fileType} fileName={fileName} />
    </Modal>
  );
}

export default FileViewer;
