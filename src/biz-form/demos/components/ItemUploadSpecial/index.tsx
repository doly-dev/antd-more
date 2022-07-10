import * as React from 'react';
import type { BizFormItemUploadProps } from 'antd-more';
import { BizFormItemUpload } from 'antd-more';
import './style.less';

const ItemUploadSpecial: React.FC<BizFormItemUploadProps> = ({
  uploadProps = {},
  ...restProps
}) => {
  const uniqueId = React.useMemo(() => `uniqueId${Date.now()}`, []);

  return (
    <div id={uniqueId}>
      <BizFormItemUpload
        maxCount={1}
        className="item-upload-special"
        renderField={(dom) => {
          return React.cloneElement(dom, {
            ...dom.props,
            onChange: (e) => {
              const uploadObj: HTMLDivElement = document
                .querySelector(`#${uniqueId}`)
                .querySelector('.ant-upload');
              uploadObj.style.display = 'none';

              // 这里需要异步获取dom
              setTimeout(() => {
                const removeBtn: HTMLButtonElement = document
                  .querySelector(`#${uniqueId}`)
                  .querySelector('.ant-upload-list-item-card-actions-btn');
                removeBtn.setAttribute('title', '重新选择');
              }, 0);
              dom.props?.onChange?.(e);
            }
          });
        }}
        uploadProps={{
          showUploadList: {
            removeIcon: '重新选择'
          },
          onRemove: () => {
            const uploadBtn = document.querySelector(`#${uniqueId}`).querySelector('button');
            uploadBtn.click();
            return false;
          },
          ...uploadProps
        }}
        {...restProps}
      />
    </div>
  );
};

export default ItemUploadSpecial;
