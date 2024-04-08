import React, { lazy, Suspense, useState } from 'react';
import { Card, Layout, Menu, Spin, theme } from 'antd';
import styles from './index.module.less';

const { Sider, Content, Header } = Layout;

const pages = [
  {
    key: 'profile',
    label: '个人信息',
    component: () => import('./Profile')
  },
  {
    key: 'change-password',
    label: '修改密码',
    component: () => import('./ChangePassword')
  }
];

const Settings = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState(pages[0].key);
  const currentPage = pages.find((item) => item.key === selectedKey)!;

  // 如果要支持跳转某个菜单页
  // const search = parse(history.location.search.substring(1)) || {};
  // const searchKey = (search.tab || pages[0].key) as string;
  // const currentPage = pages.find(item => item.key === searchKey)!;

  const Comp = lazy(currentPage.component);

  return (
    <div className={styles.page}>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{ background: colorBgContainer }}
          width={200}
        >
          <Menu
            items={pages}
            style={{ height: '100%' }}
            selectedKeys={[selectedKey]}
            onSelect={(item) => {
              setSelectedKey(item.key);

              // 如果要支持跳转某个菜单页
              // history.push({
              //   pathname: '/settings',
              //   search: stringify({
              //     tab: item.key
              //   })
              // });
            }}
          />
        </Sider>
        <Content>
          <Header style={{ background: colorBgContainer }}>{currentPage.label}</Header>
          <Card bordered={false} style={{ boxShadow: 'none' }}>
            <Suspense
              fallback={
                <div className={styles.lazyload}>
                  <Spin />
                </div>
              }
            >
              <Comp />
            </Suspense>
          </Card>
        </Content>
      </Layout>
    </div>
  );
};

export default Settings;
