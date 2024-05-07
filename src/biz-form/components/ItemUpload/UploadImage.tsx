import * as React from 'react';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper from './UploadWrapper';
import UploadImageButton from './UploadImageButton';

const UploadImage = React.forwardRef<any, UploadWrapperProps>(
  ({ fileList, maxCount, icon, title, ...restProps }, ref) => {
    return (
      <UploadWrapper
        fileList={fileList}
        maxCount={maxCount}
        listType="picture-card"
        {...restProps}
        accept={restProps?.accept || '.jpg, .jpeg, .png'}
        ref={ref}
      >
        {maxCount && fileList && fileList.length >= maxCount ? null : (
          <UploadImageButton icon={icon} title={title} />
        )}
      </UploadWrapper>
    );
  }
);

export default UploadImage;
