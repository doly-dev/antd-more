const pkg = require('./package.json');
const isDev = process.env.NODE_ENV === 'development';

const MajorVersionNumber = Number(pkg.version.split('.')[0]);
const versionSiteRoot = `refs/heads/v${MajorVersionNumber}`;

const preMajorVersionNumber = MajorVersionNumber - 1;
const preVersionSiteRoot = `refs/heads/v${preMajorVersionNumber}`;

const version = process.env.BUIDL_DOC_VERSION ? versionSiteRoot : 'latest';

const serverRootDirect = !isDev ? `https://doly-dev.github.io/${pkg.name}/` : '/';
const logo = 'https://doly-dev.github.io/logo.png';
const favicon = 'https://doly-dev.github.io/favicon.png';

const outputPath = 'site';
const publicPath = serverRootDirect + version + '/';

const addFileLoader = (config) => {
  config.module
    .rule('assets')
    .test(/\.(mp3|mp4|pdf|doc|docx|xls|xlsx|zip)$/)
    .use('file-loader')
    .loader('file-loader');
};

const umiConfig = {
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ],
  mode: 'site',
  history: {
    type: 'hash'
  },
  logo,
  favicon,
  publicPath,
  outputPath,
  hash: true,
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English']
  ],
  nodeModulesTransform: {
    type: 'none',
    exclude: []
  },
  theme: {
    '@s-site-menu-width': '258px'
  },
  chainWebpack(config) {
    addFileLoader(config);
  },

  // esbuild: isDev,
  nodeModulesTransform: {
    type: isDev ? 'none' : 'all'
  },
  targets: {
    ie: 11
  },
  polyfill: {
    imports: ['element-remove', 'core-js']
  },
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '文档',
      path: '/docs'
    },
    {
      title: '组件',
      path: '/components'
    },
    {
      title: '更多场景',
      path: '/scenes'
    },
    {
      title: `v${preMajorVersionNumber}.x`,
      path: `https://doly-dev.github.io/${pkg.name}/${preVersionSiteRoot}/index.html`
    },
    {
      title: 'GitHub',
      path: `https://github.com/doly-dev/${pkg.name}`
    },
    {
      title: '更新日志',
      path: `https://github.com/doly-dev/${pkg.name}/releases`
    }
  ],
  menus: {
    '/components': [
      {
        title: '数据展示',
        children: ['biz-field', 'biz-descriptions', 'biz-table/index', 'biz-table']
      },
      {
        title: '数据录入',
        children: [
          'biz-form',
          'biz-form/docs/item',
          'biz-form/docs/list',
          'biz-form/docs/modalForm',
          'biz-form/docs/queryForm',
          'biz-form/docs/stepsForm'
        ]
      },
      {
        title: '布局',
        children: ['biz-user-layout']
      },
      {
        title: '通用',
        children: [
          'captcha-button',
          'color',
          'dictionary',
          'file-viewer',
          'input-icon',
          'tree-table'
        ]
      }
    ]
  }
};

if (!isDev) {
  umiConfig.headScripts = [
    { src: 'https://www.googletagmanager.com/gtag/js?id=G-N328Y9JJTL' },
    {
      content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-N328Y9JJTL');
    `
    }
  ];
  umiConfig.chunks = ['vendors', 'umi'];
  umiConfig.chainWebpack = function (config, { webpack }) {
    addFileLoader(config);

    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: -10,
              enforce: true
            }
          }
        }
      }
    });
  };
}

export default umiConfig;
