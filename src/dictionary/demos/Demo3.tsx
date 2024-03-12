/**
 * title: 多个枚举
 * desc: |
 *  外层包裹 `Space` 组件，可配置 `align` `direction` `size`。
 *
 *  其中 `value` 变为一个字段值数组，`defaultLabel` 仅在 `value` 为非数组或长度小于0时显示。其他参数用于配置和 `Dictionary`。
 */

import React from 'react';
import { Divider } from 'antd';
import { Dictionary } from 'antd-more';

const BiologyCategoryOtions = [
  {
    value: '1',
    label: '动物',
    tag: {
      color: 'orange'
    }
  },
  {
    value: '2',
    label: '植物',
    tag: {
      color: 'green'
    }
  },
  {
    value: '3',
    label: '微生物',
    custom: {
      color: 'purple'
    }
  }
];

export default () => {
  return (
    <>
      <Divider orientation="left">empty</Divider>
      <Dictionary valueEnum={BiologyCategoryOtions} value={[]} />
      <br />
      <Dictionary valueEnum={BiologyCategoryOtions} value={[]} defaultLabel="empty" />
      <Divider orientation="left">text</Divider>
      <Dictionary valueEnum={BiologyCategoryOtions} value={['1', '2']} />
      <br />
      <Dictionary valueEnum={BiologyCategoryOtions} value={['2', '3']} />
      <br />
      <Dictionary valueEnum={BiologyCategoryOtions} value={['1', '2', '3']} split="、" size={0} />
      <br />
      <Divider orientation="left">tag</Divider>
      <Dictionary valueEnum={BiologyCategoryOtions} value={['1', '2']} type="tag" />
      <br />
      <Dictionary valueEnum={BiologyCategoryOtions} value={['2', '3']} type="tag" />
      <br />
      <Divider orientation="left">自动过滤未匹配的项</Divider>
      <Dictionary valueEnum={BiologyCategoryOtions} value={['4', '5']} type="tag" />
      <br />
      <Dictionary valueEnum={BiologyCategoryOtions} value={['4', '5', '1', '2', '3']} type="tag" />
      <br />
      <Dictionary valueEnum={BiologyCategoryOtions} value={['1', '2', '3', '4', '5']} type="tag" />
      <br />
      <Dictionary
        valueEnum={BiologyCategoryOtions}
        value={['1', '2', '4', '5', '3', '2', '3', '4', '5']}
        type="tag"
      />
    </>
  );
};
