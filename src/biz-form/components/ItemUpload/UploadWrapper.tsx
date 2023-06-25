import * as React from 'react';
import { Upload, message } from 'antd';
import classNames from 'classnames';
import { bytesToSize } from 'util-helpers';
import { useUnmount } from 'rc-hooks';
import { uniqueId } from 'ut2';
import type { UploadProps, UploadFile, RcFile } from '../antd.interface';
import { checkFileSize, checkFileType, createFileUrl, getFileName, revokeFileUrl } from './uploadUtil';
import type { PreviewProps } from './Preview';
import Preview from './Preview';

import './index.less';

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

  // icon和title配置图标和文本内容
  icon?: React.ReactNode;
  title?: React.ReactNode;

  // 内置预览modal props
  previewModalProps?: Partial<PreviewProps>;
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

  accept,
  className,
  disabled,
  action,
  beforeUpload,
  ...restProps
}) => {
  // 当前组件唯一标识，用于缓存和释放 URL.createObjectURL
  const uniqueKey = React.useMemo(() => uniqueId('__am_itemUpload_'), []);

  // 标识正在上传
  const uploadingFlagRef = React.useRef(false);

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

      return beforeUpload ? beforeUpload(file, fileList) : (!!action || !!onUpload || !!restProps?.customRequest);
    },
    [accept, maxSize, beforeUpload, action, onUpload, restProps?.customRequest, fileTypeMessage, fileSizeMessage]
  );

  // 自定义上传
  const internalCustomRequest = React.useCallback((obj: any) => {
    let timer: any = null;

    function queueUpload() {
      if (!uploadingFlagRef.current) {
        uploadingFlagRef.current = true;
        clearTimeout(timer);

        setTimeout(() => {
          obj.onProgress?.({ percent: 99 });
          onUpload?.(obj.file).then(res => {
            // TODO 下个大版本废弃，目前保留是为了兼容
            if (typeof res === 'object') {
              const resKeys = Object.keys(res);
              if (resKeys.length > 0) {
                resKeys.forEach((resKey) => {
                  obj.file[resKey] = res[resKey];
                });
              }
            }

            return obj.onSuccess?.(res);
          }).catch(obj.onError).finally(() => {
            uploadingFlagRef.current = false;
          });
        });
      } else {
        timer = setTimeout(queueUpload, 100);
      }
    }

    queueUpload();
  }, [onUpload]);

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
        customRequest={!action ? internalCustomRequest : undefined}
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
