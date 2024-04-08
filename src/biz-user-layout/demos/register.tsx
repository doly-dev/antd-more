import React from 'react';
import { Card, Row, Col, Space } from 'antd';
import { BizUserLayout } from 'antd-more';
import RegisterBox from './RegisterBox';
import styles from './register.module.less';

const Register = () => {
  return (
    <BizUserLayout
      hideHeader
      footer={{
        copyright: `©️ 2020-${new Date().getFullYear()} doly-dev`
      }}
      className={styles.wrapper}
    >
      <Card className={styles.registerWrapper} bordered={false}>
        <Row align="middle" justify="space-between" style={{ padding: '0 24px' }}>
          <Col>
            <Space>
              <img src="https://doly-dev.github.io/logo.png" alt="logo" style={{ width: 40 }} />
              <div style={{ fontSize: 24, fontWeight: 500 }}>antd-more</div>
            </Space>
          </Col>
          <Col>
            已有账号，<a>立即登录</a>
          </Col>
        </Row>
        <RegisterBox />
      </Card>
    </BizUserLayout>
  );
};

export default Register;
