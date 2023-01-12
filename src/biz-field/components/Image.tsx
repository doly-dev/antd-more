import * as React from 'react';
import type { ImageProps } from 'antd';
import { Image } from 'antd';
import classNames from 'classnames';

import './Image.less';

const prefixCls = 'antd-more-field-image';

type ImageValue = {
  src: string;
  name?: string;
};

export interface FiledImageProps extends Omit<ImageProps, 'src'> {
  value: string | string[] | ImageValue | ImageValue[];
  bordered?: boolean;
  renderName?: (name: string) => React.ReactNode;
}

const FiledImage: React.FC<FiledImageProps> = ({
  value,
  bordered = false,
  width = 100,
  renderName,
  ...restProps
}) => {
  const values = React.useMemo(() => (Array.isArray(value) ? value : [value]), [value]);
  const defaultProps = React.useMemo(() => (bordered ? { height: width } : {}), [bordered, width]);

  return (
    <div className={classNames(prefixCls, { [`${prefixCls}-bordered`]: bordered })}>
      <Image.PreviewGroup>
        {values.map((item, index) => {
          const src = typeof item === 'string' ? item : item.src;
          const name = typeof item !== 'string' ? item.name : '';

          return (
            <div className={`${prefixCls}-item`} key={src + index.toString()}>
              <div className={`${prefixCls}-item-image`}>
                <Image src={src} width={width} {...defaultProps} {...restProps} />
              </div>
              {name && (
                <div className={`${prefixCls}-item-name`}>
                  <div className={`${prefixCls}-item-name-inner`} title={name}>
                    {typeof renderName === 'function' ? renderName(name) : name}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Image.PreviewGroup>
    </div>
  );
};

export default FiledImage;
