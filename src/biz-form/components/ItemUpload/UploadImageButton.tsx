import * as React from 'react';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { useConfig } from '../../../biz-config-provider';

interface UploadImageButtonProps {
  loading?: boolean;
  uploading?: boolean;
  icon?: React.ReactNode;
  title?: React.ReactNode;
}

const UploadImageButton: React.FC<UploadImageButtonProps> = (props) => {
  const { locale } = useConfig();
  const {
    loading = false,
    uploading = false,
    icon = <PlusOutlined />,
    title = locale.form.upload.buttonText
  } = props;

  const text = React.useMemo(() => {
    return loading ? locale.form.upload.loading : uploading ? locale.form.upload.uploading : title;
  }, [loading, locale.form.upload.loading, locale.form.upload.uploading, title, uploading]);

  return (
    <div>
      {loading || uploading ? <LoadingOutlined /> : icon}
      <div style={{ marginTop: 8, lineHeight: 1.5 }}>{text}</div>
    </div>
  );
};

export default UploadImageButton;
