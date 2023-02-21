import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'lib'
  },
  esm: {
    alias: {
      'antd/es': 'antd/lib'
    },
    output: 'es'
  }
})