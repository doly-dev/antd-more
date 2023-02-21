import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'lib'
  },
  esm: {
    alias: {
      'antd/lib': 'antd/es'
    },
    output: 'es'
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true
      }
    ]
  ]
})