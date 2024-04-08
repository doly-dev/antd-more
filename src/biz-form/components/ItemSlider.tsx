import * as React from 'react';
import { Slider } from 'antd';
import type { SliderSingleProps, SliderRangeProps } from './antd.interface';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';

export interface BizFormItemSliderProps
  extends BizFormItemProps,
    Pick<SliderSingleProps, 'min' | 'max' | 'step' | 'marks'> {
  sliderProps?: SliderSingleProps | SliderRangeProps;
}

const BizFormItemSlider: React.FC<BizFormItemSliderProps> = ({
  min,
  max,
  step,
  marks,
  sliderProps = {},
  ...restProps
}) => {
  return (
    <BizFormItem {...restProps}>
      <Slider min={min} max={max} step={step} marks={marks} {...sliderProps} />
    </BizFormItem>
  );
};

export default BizFormItemSlider;
