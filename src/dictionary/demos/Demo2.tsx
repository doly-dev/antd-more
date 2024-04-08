/**
 * title: 多种展示方式
 * desc: |
 *  通过 `type` 设置展示方式，支持 `text` `tag` `badge` ，默认为 `text` 。
 *
 *  在数据字典中配置 `props`，默认读取 `type` 对应的配置项，也可以传入 `optionName` 自定义读取配置名。还有个特别的属性 `alias` 可以替换 `label`。
 *
 *  *注意：如果展示 `badge`，一定要有 `status` 或 `color`，不然可能显示不了。*
 *
 */

import React from 'react';
import { Divider } from 'antd';
import { Dictionary } from 'antd-more';
import { ApproveStatusOptions } from './constants';

export default () => {
  return (
    <>
      <Divider orientation="left">empty or noMatch</Divider>
      <Dictionary valueEnum={ApproveStatusOptions} value={[]} />
      <br />
      <Dictionary
        valueEnum={ApproveStatusOptions}
        value={['5', '2', '3']}
        defaultLabel="not match value"
      />
      <br />
      <Dictionary valueEnum={ApproveStatusOptions} value="5" defaultLabel="not match value" />
      <br />
      <Divider orientation="left">text</Divider>
      <Dictionary valueEnum={ApproveStatusOptions} value="1" />
      <br />
      <Dictionary valueEnum={ApproveStatusOptions} value="2" />
      <br />
      <Dictionary valueEnum={ApproveStatusOptions} value="3" />
      <br />
      <Divider orientation="left">tag</Divider>
      <Dictionary valueEnum={ApproveStatusOptions} value="1" type="tag" />
      <br />
      <Dictionary valueEnum={ApproveStatusOptions} value="2" type="tag" />
      <br />
      <Dictionary valueEnum={ApproveStatusOptions} value="3" type="tag" />
      <br />
      <Divider orientation="left">badge</Divider>
      <Dictionary valueEnum={ApproveStatusOptions} value="1" type="badge" />
      <br />
      <Dictionary valueEnum={ApproveStatusOptions} value="2" type="badge" />
      <br />
      <Dictionary valueEnum={ApproveStatusOptions} value="3" type="badge" />
      <br />
      <Divider orientation="left">自定义</Divider>
      <Dictionary valueEnum={ApproveStatusOptions} value="3" optionName="custom" />
      <br />
      <Dictionary valueEnum={ApproveStatusOptions} value="3" type="tag" optionName="custom" />
      <br />
      <Dictionary valueEnum={ApproveStatusOptions} value="3" type="badge" optionName="custom" />
    </>
  );
};
