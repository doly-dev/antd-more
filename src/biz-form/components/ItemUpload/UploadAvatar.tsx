import * as React from 'react';
import { Tooltip } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import type { UploadFile } from '../antd.interface';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper from './UploadWrapper';
import UploadContext from './UploadContext';
import UploadImageButton from './UploadImageButton';
import { getBase64 } from './uploadUtil';

const prefixCls = 'antd-more-form-upload-avatar';

const UploadAvatar: React.FC<{
  fileList?: UploadFile[];
  title?: React.ReactNode;
  icon?: React.ReactNode;
}> = ({ fileList, icon, title }) => {
  const { uploading } = React.useContext(UploadContext);
  const [imgUrl, setImgUrl] = React.useState('');
  const currentFile = React.useMemo(() => {
    return Array.isArray(fileList) && fileList.length > 0 ? fileList[0] : null;
  }, [fileList]);

  const transformBase64 = React.useCallback(async () => {
    if (currentFile) {
      if (!currentFile.url && !currentFile.preview) {
        currentFile.preview = await getBase64((currentFile?.originFileObj || currentFile) as File);
      }
      setImgUrl(currentFile.url || currentFile.preview);
    }
  }, [currentFile]);

  React.useEffect(() => {
    transformBase64();
  }, [transformBase64]);

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

const UploadImage: React.FC<UploadWrapperProps> = ({
  fileList,
  className,
  icon,
  title,
  ...restProps
}) => {
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
    >
      <UploadAvatar fileList={fileList} icon={icon} title={title} />
    </UploadWrapper>
  );
};

export default UploadImage;
