export default {
  esm: {
    type: 'babel',
    importLibToEs: true
  },
  cjs: 'babel',
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
