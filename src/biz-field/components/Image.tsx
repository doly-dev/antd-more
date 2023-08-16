import * as React from 'react';
import type { ImageProps } from 'antd';
import { Image, Typography } from 'antd';
import classNames from 'classnames';

import './Image.less';

const prefixCls = 'antd-more-field-image';

type ImageValue = {
  src: string;
  name?: string;
  [k: string]: any;
};

const defaultWidth = 100;

export interface FiledImageProps extends Omit<ImageProps, 'src' | 'width'> {
  value: string | string[] | ImageValue | ImageValue[];
  bordered?: boolean;
  renderName?: (name: string, index: number, item: string | ImageValue) => React.ReactNode;
  width?: string | number;
  nameWrap?: boolean;
}

const FiledImage: React.FC<FiledImageProps> = ({
  value,
  bordered = false,
  width: outWidth = defaultWidth,
  nameWrap = false,
  renderName,
  ...restProps
}) => {
  const values = React.useMemo(() => (Array.isArray(value) ? value : [value]), [value]);
  const width = React.useMemo(() => typeof outWidth === 'number' ? outWidth : (parseInt(outWidth) || defaultWidth), [outWidth]);
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
                <div className={classNames(`${prefixCls}-item-name`, { [`${prefixCls}-item-name-wrap`]: nameWrap })} style={{ width: width + (bordered ? 20 : 0) }}>
                  <Typography.Text ellipsis={nameWrap ? undefined : { tooltip: name }}>
                    {typeof renderName === 'function' ? renderName(name, index, item) : name}
                  </Typography.Text>
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
