/**
 * compact: true
 */
import * as React from 'react';
import { BizUserLayout } from 'antd-more';
import ForgetPasswordBox from './ForgetPasswordBox';

function Demo() {
  return (
    <BizUserLayout
      logo={<img src="https://doly-dev.github.io/logo.png" alt="LOGO" />}
      title="antd-more"
      footer={{
        copyright: `©️ ${new Date().getFullYear()} doly-dev`
      }}
    >
      <ForgetPasswordBox />
    </BizUserLayout>
  );
}

export default Demo;
