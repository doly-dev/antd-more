import * as React from 'react';
import type { UploadProps } from '../antd.interface';
import type { BizFormItemProps } from '../Item';
import BizFormItem from '../Item';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadButton from './UploadButton';
import UploadImage from './UploadImage';
import UploadAvatar from './UploadAvatar';
import UploadDragger from './UploadDragger';
import Preview from './Preview';
import { useConfig } from '../../../biz-config-provider';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export interface BizFormItemUploadProps
  extends BizFormItemProps,
    Pick<
      UploadWrapperProps,
      | 'accept'
      | 'onUpload'
      | 'fileTypeMessage'
      | 'fileSizeMessage'
      | 'maxCountMessage'
      | 'maxSize'
      | 'maxCount'
      | 'onGetPreviewUrl'
      | 'previewModalProps'
    > {
  type?: 'default' | 'image' | 'avatar' | 'dragger';
  uploadProps?: UploadProps;
  disabled?: boolean;
  multiple?: boolean;
  icon?: React.ReactNode;
  title?: React.ReactNode;
}

const BizFormItemUpload: React.FC<BizFormItemUploadProps> & {
  Preview: typeof Preview;
} = ({
  name,
  uploadProps,
  accept,
  onUpload,
  onGetPreviewUrl,
  fileTypeMessage,
  fileSizeMessage,
  maxCountMessage,
  maxSize,
  maxCount,
  type = 'default',
  disabled = false,
  multiple = false,
  icon,
  title,
  previewModalProps,

  required,
  transform,
  ...restProps
}) => {
  const { locale } = useConfig();
  const Comp = React.useMemo(() => {
    if (type === 'image') {
      return UploadImage;
    }
    if (type === 'avatar') {
      return UploadAvatar;
    }
    if (type === 'dragger') {
      return UploadDragger;
    }
    return UploadButton;
  }, [type]);

  return (
    <BizFormItem
      required={required}
      valuePropName="fileList"
      getValueFromEvent={normFile}
      transform={transform}
      name={name}
      rules={[
        {
          validator(rules, value) {
            let errMsg = '';
            const realValue = value && typeof transform === 'function' ? transform(value) : value;

            if (!realValue || (Array.isArray(realValue) && realValue.length <= 0)) {
              errMsg = required ? locale.form.common.uploadRequired : '';
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          }
        }
      ]}
      {...restProps}
    >
      <Comp
        accept={accept}
        onUpload={onUpload}
        onGetPreviewUrl={onGetPreviewUrl}
        fileTypeMessage={fileTypeMessage}
        fileSizeMessage={fileSizeMessage}
        maxSize={maxSize}
        maxCount={maxCount}
        maxCountMessage={maxCountMessage}
        disabled={disabled}
        multiple={multiple}
        icon={icon}
        title={title}
        previewModalProps={previewModalProps}
        {...uploadProps}
      />
    </BizFormItem>
  );
};

BizFormItemUpload.Preview = Preview;

export default BizFormItemUpload;
