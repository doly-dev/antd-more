const pkg = require('./package.json');
const version = process.env.BUIDL_DOC_VERSION ? `refs/heads/v${pkg.version.split('.')[0]}` : 'latest';

const serverRootDirect = process.env.NODE_ENV === 'production' ? 'https://doly-dev.github.io/antd-more/' : '/';
const logo = 'https://www.caijinfeng.com/assets/images/logo-doly@3x.png';
const favicon = 'https://www.caijinfeng.com/assets/images/doly-touch-icon_48x48.png';

const outputPath = 'site';
const publicPath = serverRootDirect + version + '/';

const umiConfig = {
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'antd-more',
        libraryDirectory: 'es',
        style: true,
      },
      'antd-more'
    ]
  ],
  mode: 'doc',
  history: {
    type: 'hash'
  },
  title: pkg.name,
  logo,
  favicon,
  publicPath,
  outputPath,
  hash: true,
  locales: [['zh-CN', '中文'], ['en-US', 'English']],
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
};

if (process.env.NODE_ENV === 'production') {
  umiConfig.chunks = ['vendors', 'umi'];
  umiConfig.chainWebpack = function (config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: "all",
              name: "vendors",
              priority: -10,
              enforce: true
            }
          }
        }
      }
    });
  }
}

export default umiConfig;