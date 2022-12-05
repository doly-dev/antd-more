import React from 'react';
import type { ModalProps } from 'antd';
import { Modal } from 'antd';

// 兼容 antd v4
import 'antd/es/modal/style';

export interface PreviewProps extends ModalProps {
  imgUrl: string;
}

const Preview: React.FC<PreviewProps> = ({ imgUrl = '', style = {}, ...restProps }) => {
  return (
    <Modal
      footer={null}
      width="auto"
      centered
      style={{
        maxWidth: '80%',
        ...style
      }}
      {...restProps}
    >
      <img alt="" style={{ width: '100%' }} src={imgUrl} />
    </Modal>
  );
};

export default React.memo(Preview);