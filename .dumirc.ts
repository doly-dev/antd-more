import { defineConfig } from 'dumi';
import pkg from './package.json';

const { name, version } = pkg;
const baseUrl = 'https://doly-dev.github.io';

const isDev = process.env.NODE_ENV === 'development';

const MajorVersionNumber = Number(version.split('.')[0]);
const versionSiteRoot = `refs/heads/v${MajorVersionNumber}`;

const preMajorVersionNumber = MajorVersionNumber - 1;
const preVersionSiteRoot = `refs/heads/v${preMajorVersionNumber}`;

const versionPath = process.env.BUILD_DOC_VERSION ? versionSiteRoot : 'latest';

const logo = `${baseUrl}/logo.png`;
const favicons = [`${baseUrl}/favicon.ico`];
const outputPath = 'site';
const base = isDev ? '/' : `/${name}/${versionPath}/`;
const publicPath = isDev ? '/' : `${baseUrl}${base}/`;

export default defineConfig({
  hash: true,
  base,
  publicPath,
  outputPath,
  legacy: {
    buildOnly: true,
    nodeModulesTransform: true
  },
  // fastRefresh: false,
  // mfsu: false,
  targets: isDev
    ? undefined
    : {
        ie: 11,
        chrome: 80
      },
  polyfill: isDev
    ? undefined
    : {
        imports: ['element-remove', 'core-js']
      },
  favicons,
  styles: [`body .dumi-default-sidebar{ width: 238px; padding-inline-end: 16px; }`],
  themeConfig: {
    name,
    logo,
    footer: 'Open-source MIT Licensed | Copyright © 2020-present',
    nav: [
      {
        title: '文档',
        link: '/docs'
      },
      {
        title: '组件',
        link: '/components'
      },
      {
        title: '更多场景',
        link: '/scenes'
      },
      {
        title: `v${preMajorVersionNumber}.x`,
        link: `${baseUrl}/${name}/${preVersionSiteRoot}/index.html`
      },
      {
        title: 'GitHub',
        link: `https://github.com/doly-dev/${name}`
      },
      {
        title: '更新日志',
        link: `https://github.com/doly-dev/${name}/releases`
      }
    ]
  },
  analytics: {
    ga_v2: 'G-N328Y9JJTL'
  }
});
