import React from 'react';
import { isArray } from 'ut2';
import classnames from 'classnames';
import type { BizFormItemProps } from 'antd-more';
import { BizFormItem } from 'antd-more';
import styles from './index.module.less';
import type { UploadCertificateProps } from './UploadCertificate';
import UploadCertificate from './UploadCertificate';

const normFile = (e: any) => {
  // console.log('Upload event:', e);
  if (isArray(e)) {
    return e;
  }
  return e?.fileList;
};

interface ItemUploadCertificateProps
  extends BizFormItemProps,
    Pick<
      UploadCertificateProps,
      'idType' | 'icon' | 'title' | 'popoverProps' | 'onUpload' | 'maxCount' | 'block'
    > {
  uploadProps?: UploadCertificateProps;
}

const ItemUploadCertificate: React.FC<ItemUploadCertificateProps> = ({
  idType,
  icon,
  title,
  maxCount,
  block,
  popoverProps,
  uploadProps,
  onUpload,

  className,
  required,
  ...restProps
}) => {
  return (
    <BizFormItem
      className={classnames(styles.itemUploadCertificate, className)}
      valuePropName="fileList"
      getValueFromEvent={normFile}
      required={required}
      rules={[
        {
          validator(_, value) {
            if (value) {
              const realValue = value.filter((item: any) => item?.response?.fssid);
              if (realValue.length <= 0) {
                return Promise.reject('请上传${label}');
              }
            }
            return Promise.resolve();
          }
        }
      ]}
      {...restProps}
    >
      <UploadCertificate
        idType={idType}
        icon={icon}
        title={title}
        maxCount={maxCount}
        block={block}
        popoverProps={popoverProps}
        onUpload={onUpload}
        {...uploadProps}
      />
    </BizFormItem>
  );
};

export default ItemUploadCertificate;
