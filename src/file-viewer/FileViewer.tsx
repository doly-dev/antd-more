import * as React from 'react';
import type { ModalProps, UploadFile } from 'antd';
import { Modal } from 'antd';
import classNames from 'classnames';
import { uniqueId } from 'ut2';
import FileView from './FileView';
import './index.less';
import { getFileType, getFileUrl } from './utils';

const prefixCls = 'antd-more-file-viewer';

export interface FileViewerProps extends Pick<ModalProps, 'visible' | 'onCancel' | 'className' | 'style'> {
  file: string | UploadFile; // url 或 UploadFile 对象
  renderView?: (dom: React.ReactElement, props: FileViewerProps) => React.ReactNode; // 自定义渲染视图
  modalProps?: ModalProps;
}

function FileViewer(props: FileViewerProps) {
  const {
    file,
    visible,
    onCancel,
    className,
    renderView,
    style,
    modalProps
  } = props;
  const fileObj = React.useMemo(() => typeof file === 'string' ? { uid: uniqueId('__am_fileViewer_'), name: '', url: file } : file, [file]);

  if (!file || !fileObj) {
    return null;
  }

  const fileName = fileObj.name || '文件预览';
  const fileType = getFileType(fileObj);
  const url = fileObj.url || getFileUrl(fileObj);

  const dom = <FileView url={url} fileType={fileType} fileName={fileName} />;

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title={fileName}
      centered
      width={fileType === 'pdf' ? 850 : undefined}
      footer={null}
      {...modalProps}
      style={{ maxWidth: '80%', ...style, ...modalProps?.style }}
      className={classNames(prefixCls, className, modalProps?.className)}
    >
      {renderView ? renderView(dom, props) : dom}
    </Modal>
  );
}

export default FileViewer;
