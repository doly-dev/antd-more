import * as React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper from './UploadWrapper';
import { useConfig } from '../../../biz-config-provider';

const defaultShowUploadList = {
  showPreviewIcon: false
};

const UploadDragger: React.FC<UploadWrapperProps> = (props) => {
  const { locale } = useConfig();
  const {
    showUploadList,
    icon = <InboxOutlined />,
    title = locale.form.upload.dragTiptext,
    ...restProps
  } = props;
  const innerShowUploadList = React.useMemo(() => {
    if (typeof showUploadList === 'boolean' && showUploadList === false) {
      return false;
    }
    if (typeof showUploadList === 'object') {
      return {
        ...defaultShowUploadList,
        ...showUploadList
      };
    }
    // 为 true 或 undefined 时
    return defaultShowUploadList;
  }, [showUploadList]);

  return (
    <UploadWrapper {...restProps} dragger showUploadList={innerShowUploadList}>
      <p className="ant-upload-drag-icon">{icon}</p>
      <p className="ant-upload-text">{title}</p>
    </UploadWrapper>
  );
};

export default UploadDragger;
