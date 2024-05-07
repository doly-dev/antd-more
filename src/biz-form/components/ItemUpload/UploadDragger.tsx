import * as React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper from './UploadWrapper';
import { useConfig } from '../../../biz-config-provider';
import type { UploadRef } from '../antd.interface';

const defaultShowUploadList = {
  showPreviewIcon: false
};

const UploadDragger = React.forwardRef<UploadRef, UploadWrapperProps>((props, ref) => {
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
    <UploadWrapper dragger {...restProps} ref={ref} showUploadList={innerShowUploadList}>
      <p className="ant-upload-drag-icon">{icon}</p>
      <p className="ant-upload-text">{title}</p>
    </UploadWrapper>
  );
});

export default UploadDragger;
