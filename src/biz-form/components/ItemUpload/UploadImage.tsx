import * as React from 'react';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper from './UploadWrapper';
import UploadImageButton from './UploadImageButton';
import type { UploadRef } from '../antd.interface';

const UploadImage = React.forwardRef<UploadRef, UploadWrapperProps>(
  ({ fileList, maxCount, icon, title, ...restProps }, ref) => {
    return (
      <UploadWrapper
        fileList={fileList}
        maxCount={maxCount}
        listType="picture-card"
        {...restProps}
        ref={ref}
        accept={restProps?.accept || '.jpg, .jpeg, .png'}
      >
        {maxCount && fileList && fileList.length >= maxCount ? null : (
          <UploadImageButton icon={icon} title={title} />
        )}
      </UploadWrapper>
    );
  }
);

export default UploadImage;
