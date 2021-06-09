export default {
  esm: {
    type: 'babel',
    importLibToEs: true
  },
  cjs: {
    type: 'babel',
    lazy: true
  },
  runtimeHelpers: true,
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
};
