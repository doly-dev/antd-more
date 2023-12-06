import * as React from 'react';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper from './UploadWrapper';
import { useConfig } from '../../../biz-config-provider';

const defaultShowUploadList = {
  showPreviewIcon: false
};

const UploadButton: React.FC<UploadWrapperProps> = (props) => {
  const { locale } = useConfig();
  const {
    showUploadList,
    icon = <UploadOutlined />,
    title = locale.form.upload.buttonText,
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
    <UploadWrapper {...restProps} showUploadList={innerShowUploadList}>
      <Button icon={icon}>{title}</Button>
    </UploadWrapper>
  );
};

export default UploadButton;
