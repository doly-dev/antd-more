import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    output: 'es'
  },
  cjs: {
    output: 'lib',
    alias: {
      'antd/es': 'antd/lib'
    }
  }
  // umd: {
  //   name: 'antdMore',
  //   externals: {
  //     "react": "React",
  //     "react-dom": "ReactDom",
  //     "antd": "antd",
  //     "@ant-design/icons": "icons"
  //   },
  //   sourcemap: true
  // }
});
