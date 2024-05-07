import * as React from 'react';
import { isArray, uniqueId } from 'ut2';
import { useUnmount } from 'rc-hooks';
import { Tooltip } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import type { UploadFile } from '../antd.interface';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper from './UploadWrapper';
import UploadImageButton from './UploadImageButton';
import { createFileUrl, revokeFileUrl } from './uploadUtil';

const prefixCls = 'antd-more-form-upload-avatar';

const UploadAvatar: React.FC<{
  fileList?: UploadFile[];
  title?: React.ReactNode;
  icon?: React.ReactNode;
}> = ({ fileList, icon, title }) => {
  // 当前组件唯一标识，用于缓存和释放 URL.createObjectURL
  const uniqueKey = React.useMemo(() => uniqueId('__am_itemUpload_avatar_'), []);
  const [imgUrl, setImgUrl] = React.useState('');
  const currentFile = React.useMemo(() => {
    return isArray(fileList) && fileList.length > 0 ? fileList[0] : null;
  }, [fileList]);
  const uploading = currentFile?.status === 'uploading';

  React.useEffect(() => {
    if (currentFile) {
      if (!currentFile.thumbUrl && !currentFile.url && !currentFile.preview) {
        currentFile.preview = createFileUrl(
          uniqueKey,
          currentFile.uid,
          (currentFile?.originFileObj || currentFile) as File
        );
      }
      setImgUrl(currentFile.thumbUrl || currentFile.url || currentFile.preview);
    } else {
      setImgUrl('');
    }
  }, [currentFile, uniqueKey]);

  useUnmount(() => {
    revokeFileUrl(uniqueKey);
  });

  let view = null;

  if (currentFile && currentFile.status === 'error') {
    view = (
      <div style={{ width: '100%' }}>
        <PictureOutlined />
        <div
          style={{
            marginTop: 8,
            padding: '0 8px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
          title={currentFile.name || ''}
        >
          {currentFile.name || ''}
        </div>
      </div>
    );
  } else if (uploading || !imgUrl) {
    view = <UploadImageButton uploading={uploading} icon={icon} title={title} />;
  } else {
    view = <img src={imgUrl} alt={(currentFile && currentFile.name) || ''} />;
  }

  const dom = (
    <div
      className={classNames(`${prefixCls}-box`, {
        [`${prefixCls}-box-error`]: currentFile && currentFile.status === 'error'
      })}
    >
      {view}
    </div>
  );

  if (currentFile && currentFile.status === 'error' && currentFile.response) {
    return <Tooltip title={currentFile.response}>{dom}</Tooltip>;
  }
  return dom;
};

const UploadImage = React.forwardRef<any, UploadWrapperProps>(
  ({ fileList, className, icon, title, ...restProps }, ref) => {
    return (
      <UploadWrapper
        {...restProps}
        listType="picture-card"
        accept={restProps?.accept || '.jpg, .jpeg, .png'}
        fileList={fileList}
        showUploadList={false}
        multiple={false}
        maxCount={1}
        className={classNames(prefixCls, className)}
        ref={ref}
      >
        <UploadAvatar fileList={fileList} icon={icon} title={title} />
      </UploadWrapper>
    );
  }
);

export default UploadImage;
