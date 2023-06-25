import * as React from 'react';
import type { BizFormItemUploadProps } from 'antd-more';
import { BizFormItemUpload } from 'antd-more';
import { uniqueId } from 'ut2';
import styles from './style.module.less';

const ItemUploadSpecial: React.FC<BizFormItemUploadProps> = ({
  uploadProps = {},
  ...restProps
}) => {
  const id = React.useMemo(() => uniqueId('itemUploadSpecial_'), []);

  return (
    <div id={id}>
      <BizFormItemUpload
        maxCount={1}
        className={styles.itemUploadSpecial}
        renderField={(dom) => {
          return React.cloneElement(dom, {
            ...dom.props,
            onChange: (e) => {
              const uploadObj = document
                .querySelector(`#${id}`)
                .querySelector('.ant-upload') as HTMLDivElement;
              uploadObj.style.display = 'none';

              // 这里需要异步获取dom
              setTimeout(() => {
                const removeBtn = document
                  .querySelector(`#${id}`)
                  .querySelector('.ant-upload-list-item-card-actions-btn') as HTMLButtonElement;
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
            const uploadBtn = document.querySelector(`#${id}`).querySelector('button');
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
