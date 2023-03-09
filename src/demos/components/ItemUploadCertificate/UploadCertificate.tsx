import * as React from 'react';
import { useCallback, useMemo, useRef, useState } from "react";
import classnames from 'classnames';
import type { PopoverProps, UploadProps } from "antd";
import { Image, message, Popover, Upload } from "antd";
import type { RcFile } from "antd/es/upload/interface";
import ImageIdCardPersonal from './assets/idcard-personal.jpg';
import ImageIdCardNational from './assets/idcard-national.jpg';
import ImageBusinessLicense from './assets/business-license.jpg';
import ImagePassport from './assets/passport.jpg';
import ImageAuthorization from './assets/authorization.jpg';
import ImageCommonCert from './assets/common-cert.jpg';
import ImageExampleIdCardPersonal from './assets/example-idcard-personal.jpg';
import ImageExampleIdCardNational from './assets/example-idcard-national.jpg';
import ImageExamplePassport from './assets/example-passport.jpg';
import ImageExampleBusinessLicense from './assets/example-business-license.jpg';
import ImageExampleAuthorization from './assets/example-authorization.jpg';
import ImageExampleBusinessRegistry from './assets/example-business-registry.jpg';
import styles from './index.module.less';
import IconPDF from './assets/icon-pdf.png';
import { isPDFFile } from "./utils";

const InternalConfig = {
  idCardFront: {
    icon: <img src={ImageIdCardPersonal} alt='' />,
    title: '身份证人像面',
    popoverProps: {
      title: '身份证人像面示例图',
      content: <img src={ImageExampleIdCardPersonal} alt='' style={{ width: 260, height: 160 }} />
    }
  },
  idCardBack: {
    icon: <img src={ImageIdCardNational} alt='' />,
    title: '身份证国徽面',
    popoverProps: {
      title: '身份证国徽面示例图',
      content: <img src={ImageExampleIdCardNational} alt='' style={{ width: 260, height: 160 }} />
    }
  },
  businessLicense: {
    icon: <img src={ImageBusinessLicense} alt='' />,
    popoverProps: {
      title: '营业执照示例图',
      content: <img src={ImageExampleBusinessLicense} alt='' style={{ width: 300, height: 428 }} />
    }
  },
  businessRegistry: {
    icon: <img src={ImageBusinessLicense} alt='' />,
    popoverProps: {
      title: '商业登记证BR示例图',
      content: <img src={ImageExampleBusinessRegistry} alt='' style={{ width: 300, height: 395 }} />
    }
  },
  passport: {
    icon: <img src={ImagePassport} alt='' />,
    popoverProps: {
      title: '护照示例图',
      content: <img src={ImageExamplePassport} alt='' style={{ width: 260, height: 178 }} />
    }
  },
  authorization: {
    icon: <img src={ImageAuthorization} alt='' />,
    popoverProps: {
      title: '授权书示例图',
      content: <img src={ImageExampleAuthorization} alt='' style={{ width: 300, height: 421 }} />
    }
  }
} as const;

const supportedFileType = ['image/jpg', 'image/jpeg', 'image/bmp', 'image/png', 'application/pdf'];

export interface UploadCertificateProps extends UploadProps {
  idType?: 'idCardFront' | 'idCardBack' | 'businessLicense' | 'businessRegistry' | 'passport' | 'authorization'; // 证件类型
  icon?: React.ReactNode;
  title?: React.ReactNode;
  block?: boolean;
  popoverProps?: PopoverProps;
  onUpload?: (file: File) => Promise<any>;
}

const UploadCertificate: React.FC<UploadCertificateProps> = ({
  idType,
  icon: outIcon,
  title: outTitle,
  popoverProps,
  disabled,
  onUpload,
  fileList = [],
  maxCount = 1,
  block,
  ...restProps
}) => {
  const previewCurrentRef = useRef(0);
  const uploadingFlagRef = useRef(false); // 标识正在上传
  const [visible, setVisible] = useState(false);
  const config: Record<string, any> = useMemo(() => idType ? InternalConfig[idType] : {}, [idType]);
  const icon = useMemo(() => outIcon || config?.icon || <img src={ImageCommonCert} alt='' />, [config?.icon, outIcon]);
  const title = useMemo(() => outTitle || config?.title || '点击上传', [config?.title, outTitle]);

  const uploadBoxDom = useMemo(() => {
    return (
      <div className={styles.uploadBox}>
        {icon}
        <div className={styles.text}>{title}</div>
      </div>
    )
  }, [icon, title]);

  const handleBeforeUpload = useCallback((file: RcFile) => {
    const isSupportedFileType = supportedFileType.includes(file.type);
    if (!isSupportedFileType) {
      message.error('只支持上传 PDF, JPG, JPEG, PNG, BMP 文件');
    }
    const isLt20M = file.size / 1024 / 1024 < 20;
    if (!isLt20M) {
      message.error('文件不能超过 20MB');
    }

    return (isSupportedFileType && isLt20M) || Upload.LIST_IGNORE;
  }, []);

  return (
    <div className={block ? styles.uploadCertificateBlock : ''}>
      <Upload
        listType="picture-card"
        previewFile={async (file) => {
          // console.log(file);
          if (isPDFFile(file)) {
            return IconPDF;
          }
          // return blobToDataURL(file); // 文件较大时会卡顿
          return URL.createObjectURL(file);
        }}
        disabled={disabled}
        beforeUpload={handleBeforeUpload}
        accept='application/pdf,.pdf,image/*'
        customRequest={(obj) => {
          // console.log('customRequest: ', obj);
          // const formData = new FormData();
          // formData.append('file', obj.file);
          // formData.append('fileType', FileType.BusinessLicense);
          let timer: any = null;
          function queueUpload() {
            if (!uploadingFlagRef.current) {
              uploadingFlagRef.current = true;
              clearTimeout(timer);

              setTimeout(() => {
                obj.onProgress?.({ percent: 99 });
                onUpload?.(obj.file as File).then(obj.onSuccess).catch(obj.onError).finally(() => {
                  uploadingFlagRef.current = false;
                });
              });
            } else {
              timer = setTimeout(queueUpload, 100);
            }
          }

          queueUpload();
        }}
        onPreview={(file) => {
          previewCurrentRef.current = fileList.findIndex(item => item.uid === file.uid);
          setVisible(true);
        }}
        fileList={fileList}
        maxCount={maxCount}
        {...restProps}
      >
        {
          fileList.length < maxCount && (
            (config?.popoverProps || popoverProps) && fileList.length === 0 ? (
              <Popover
                placement='rightTop'
                {...(config?.popoverProps || {})}
                {...popoverProps}
                overlayClassName={classnames(styles.popoverTip, popoverProps?.className)}
              >
                {uploadBoxDom}
              </Popover>
            ) : uploadBoxDom
          )
        }
      </Upload>
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis), current: previewCurrentRef.current }}>
          {
            fileList.map(item => {
              return <Image src={item.preview || item.url || item.thumbUrl} key={item.uid} />
            })
          }
        </Image.PreviewGroup>
      </div>
    </div>
  );
}

export default UploadCertificate;

