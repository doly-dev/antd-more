import React from 'react';
import { Divider } from 'antd';
import { Dictionary } from 'antd-more';
import { ApproveStatusOptions } from './constants';

export default () => {
  return (
    <>
      <Divider orientation="left">empty or notMatch</Divider>
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
      <Dictionary valueEnum={ApproveStatusOptions} value="3" propsName="custom" />
      <br />
      <Dictionary valueEnum={ApproveStatusOptions} value="3" type="tag" propsName="custom" />
      <br />
      <Dictionary valueEnum={ApproveStatusOptions} value="3" type="badge" propsName="custom" />
    </>
  );
};
