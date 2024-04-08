/**
 * compact: true
 */
import * as React from 'react';
import { Card, Row, Col, Space } from 'antd';
import { BizUserLayout } from 'antd-more';
import LoginBox from './LoginBox';
import styles from './login-side-bg.module.less';

function Demo() {
  return (
    <BizUserLayout
      className={styles.wrapper}
      hideHeader
      sideRowProps={{
        style: {
          flexDirection: 'row-reverse'
        }
      }}
      sideContent={
        <Card bordered={false} className={styles.loginWrapper}>
          <Row
            align="middle"
            justify="space-between"
            style={{ padding: '0 24px', marginBottom: 24 }}
          >
            <Col>
              <Space>
                <img src="https://doly-dev.github.io/logo.png" alt="logo" style={{ width: 40 }} />
                <div style={{ fontSize: 24, fontWeight: 500 }}>antd-more</div>
              </Space>
            </Col>
          </Row>
          <LoginBox showRegisterEnter />
        </Card>
      }
    />
  );
}

export default Demo;
