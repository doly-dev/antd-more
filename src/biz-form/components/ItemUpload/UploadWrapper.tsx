import * as React from 'react';
import { Upload, message } from 'antd';
import classNames from 'classnames';
import { bytesToSize } from 'util-helpers';
import { useUnmount } from 'rc-hooks';
import type { UploadProps, UploadFile, UploadChangeParam, RcFile } from '../antd.interface';
import { checkFileSize, checkFileType, createFileUrl, getFileName, revokeFileUrl } from './uploadUtil';
import type { PreviewProps } from './Preview';
import Preview from './Preview';

import './index.less';
import uniqueId from '../../_util/uniqueId';

const prefixCls = 'antd-more-form-upload';

export interface UploadWrapperProps extends UploadProps {
  fileTypeMessage?: string | false; // 文件类型错误提示
  fileSizeMessage?: string | false; // 文件超过最大尺寸提示

  /** @deprecated */
  maxCountMessage?: string | false; // 上传文件超过限制数量时提示
  onUpload?: (file: File) => Promise<any>; // 自定义文件上传
  maxSize?: number; // 单个文件最大尺寸，用于校验
  onGetPreviewUrl?: (file: File) => Promise<string>; // 点击预览获取大图URL
  dragger?: boolean; // 支持拖拽
  internalTriggeValidate?: () => void; // 外部透传的校验表单，用于异步上传 或 删除后触发

  // icon和title配置图标和文本内容
  icon?: React.ReactNode;
  title?: React.ReactNode;

  // 内置预览modal props
  previewModalProps?: PreviewProps;
}

const UploadWrapper: React.FC<UploadWrapperProps> = ({
  onUpload,
  fileTypeMessage = '只支持上传 %s 文件',
  fileSizeMessage = '必须小于 %s！',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxCountMessage = '最多上传%s个文件',
  maxSize = 1024 * 1024 * 2,
  maxCount,
  onGetPreviewUrl,
  dragger = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  icon,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  title,

  previewModalProps,

  onChange,
  accept,
  className,
  disabled,
  action,
  internalTriggeValidate,
  beforeUpload,
  ...restProps
}) => {
  // 当前组件唯一标识，用于缓存和释放 URL.createObjectURL
  const uniqueKey = React.useMemo(() => uniqueId('item-upload'), []);

  const [previewProps, setPreviewProps] = React.useState({
    visible: false,
    title: '',
    imgUrl: ''
  });

  // 上传前验证
  const handleBeforeUpload = React.useCallback(
    (file: RcFile, fileList: RcFile[]) => {
      // 检查是否支持文件类型
      const isSupportFileType = checkFileType(file, accept);
      if (!isSupportFileType) {
        if (fileTypeMessage !== false) {
          message.error(fileTypeMessage.replace(/%s/g, accept));
        }
        return Upload.LIST_IGNORE;
      }

      // 检查是否超过文件大小
      const isLessThanFileSize = checkFileSize(file, maxSize);
      if (!isLessThanFileSize) {
        const maxFileSizeStr = bytesToSize(maxSize);
        if (fileSizeMessage !== false) {
          message.error(fileSizeMessage.replace(/%s/g, maxFileSizeStr));
        }
        return Upload.LIST_IGNORE;
      }

      return beforeUpload ? beforeUpload(file, fileList) : !!action;
    },
    [accept, maxSize, beforeUpload, action, fileTypeMessage, fileSizeMessage]
  );

  const handleValidate = React.useCallback(
    (file: UploadFile, force = false) => {
      if ((file?.status && file.status !== 'uploading') || force) {
        internalTriggeValidate?.();
      }
    },
    [internalTriggeValidate]
  );

  // 处理上传
  const handleUpload = React.useCallback(
    async (file: UploadFile, fileList: UploadFile[]) => {
      const { uid } = file;
      let newFileList = [...fileList];

      try {
        // 逐个上传文件
        const res = await onUpload((file.originFileObj || file) as File);
        newFileList = newFileList
          .filter((item) => {
            if (item.status === 'removed') {
              return false;
            }
            if (item.uid === uid) {
              item.status = 'done';
              item.percent = 100;

              // TODO 下个大版本废弃，目前保留是为了兼容
              const resKeys = typeof res === 'object' ? Object.keys(res) : [];
              if (resKeys.length > 0) {
                resKeys.forEach((resKey) => {
                  item[resKey] = res[resKey];
                });
              }

              // 将响应数据挂载到 response 上
              item.response = res;
            }
            return true;
          });
      } catch (err) {
        newFileList = newFileList
          .filter((item) => {
            if (item.status === 'removed') {
              return false;
            }
            if (item.uid === uid) {
              const error = typeof err !== 'object' ? { message: err || '上传错误' } : err;
              item.status = 'error';
              item.percent = 100;
              item.error = error;
            }
            return true;
          });
      }

      onChange({
        file,
        fileList: newFileList
      });
      handleValidate(file, true);
    },
    [handleValidate, onChange, onUpload]
  );

  // 处理修改
  const handleChange = React.useCallback(
    ({ file, fileList }: UploadChangeParam) => {
      const newFileList = [...fileList];

      if (!action && typeof onUpload === 'function' && file.status !== 'removed') {
        newFileList.some((fileItem) => {
          if (fileItem.uid === file.uid) {
            fileItem.status = 'uploading';
            fileItem.percent = 99.9;
            return true;
          }
          return false;
        });
        handleUpload(file, newFileList);
      }

      onChange({
        file,
        fileList: newFileList
      });

      handleValidate(file);
    },
    [onChange, handleValidate, action, onUpload, handleUpload]
  );

  // 是否支持预览
  const enabledShowPreview = React.useMemo(() => {
    if (
      restProps?.showUploadList &&
      typeof restProps.showUploadList === 'object' &&
      restProps.showUploadList.showPreviewIcon === false
    ) {
      return false;
    }
    return true;
  }, [restProps?.showUploadList]);

  // 显示预览
  const handlePreview = React.useCallback(
    async (file: UploadFile) => {
      if (!enabledShowPreview) {
        return;
      }

      if (onGetPreviewUrl && !file.preview) {
        file.preview = await onGetPreviewUrl((file?.originFileObj || file) as File);
      } else if (!file.url) {
        file.url = createFileUrl(uniqueKey, file.uid, (file?.originFileObj || file) as File);
        // file.url = await blobToDataURL((file?.originFileObj || file) as File); // DataURL 太大，可能导致整个页面卡顿
      }

      if (!file.preview && !file.url && !file.thumbUrl) {
        message.error('当前文件不支持预览！');
        return;
      }

      setPreviewProps({
        visible: true,
        imgUrl: file.preview || file.url || file.thumbUrl,
        title: file.name || getFileName(file.url)
      });
    },
    [enabledShowPreview, onGetPreviewUrl, uniqueKey]
  );

  // 关闭预览
  const handlePreviewCancel = React.useCallback(() => {
    setPreviewProps({
      ...previewProps,
      visible: false
    });
  }, [previewProps]);

  const Comp = React.useMemo(() => (dragger ? Upload.Dragger : Upload), [dragger]);

  // 组件卸载时 删除文件引用
  useUnmount(() => {
    revokeFileUrl(uniqueKey);
  });

  return (
    <>
      <Comp
        accept={accept}
        beforeUpload={handleBeforeUpload}
        progress={{
          status: 'active',
          showInfo: false
        }}
        onChange={handleChange}
        onPreview={handlePreview}
        disabled={disabled}
        className={classNames(prefixCls, className)}
        action={action}
        maxCount={maxCount}
        {...restProps}
      />
      {enabledShowPreview && !restProps.onPreview && <Preview {...previewProps} {...previewModalProps} onCancel={handlePreviewCancel} />}
    </>
  );
};

export default UploadWrapper;
