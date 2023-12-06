const localeValues = {
  form: {
    common: {
      inputPlaceholder: '请输入',
      selectPlaceholder: '请选择',
      uploadPlaceholder: '请上传',
      inputRequired: '请输入${label}',
      selectRequired: '请选择${label}',
      uploadRequired: '请上传${label}',
      allLabel: '全部',
      allValue: '',
      search: '查询',
      reset: '重置',
      collapsed: '收起',
      expand: '展开',
      prev: '上一步',
      next: '下一步',
      submit: '提交',
      ok: '确认',
      cancel: '取消'
    },
    dateRange: {
      uint: {
        time: '小时',
        date: '天',
        week: '周',
        month: '个月',
        quarter: '季',
        year: '年'
      },
      maxRange: (max: number, unit: string) => `时间跨度不能超过${max}${unit}`
    },
    input: {
      userName: {
        mobile: '${label}不能为手机号码',
        email: '${label}不能包含@符号'
      },
      invalid: '请输入正确的${label}'
    },
    number: {
      lt: (num: number) => `\${label}必须小于${num}`,
      gt: (num: number) => `\${label}必须大于${num}`,
      lte: (num: number) => `\${label}必须小于或等于${num}`,
      gte: (num: number) => `\${label}必须大于或等于${num}`,
      maxPrecision: (precision: number) => `支持${precision}位小数`
    },
    password: {
      range: (min: number, max: number) => `\${label}为${min}～${max}位`,
      unallowable: '${label}包含无法识别的字符',
      level: (num: number) => `\${label}为大小写字母、数字或符号任意${num}种以上组成`
    },
    upload: {
      buttonText: '点击上传',
      fileTypeMessage: '只支持上传 %s 文件',
      fileSizeMessage: '必须小于 %s！',
      maxCountMessage: '最多上传%s个文件',
      unsupportPreviewTiptext: '当前文件不支持预览！',
      loading: '加载中',
      uploading: '上传中',
      dragTiptext: '单击或拖动文件到此区域进行上传'
    }
  },
  table: {
    toolbar: {
      reload: '刷新',
      density: '密度',
      densityDefault: '默认',
      densityLarger: '正常',
      densityMiddle: '中等',
      densitySmall: '紧凑',
      columnDisplay: '列展示',
      columnSetting: '列设置',
      checkAll: '全选',
      fullScreen: '全屏',
      exitFullScreen: '退出全屏',
      unsupportFullScreenTiptext: '当前页面不支持全屏功能'
    },
    pagination: {
      total: (num: number) => `总共 ${num} 条数据`
    }
  },
  captcha: {
    initText: '获取验证码',
    runText: '%s秒后重新获取',
    resetText: '重新获取验证码'
  }
};

export default localeValues;
