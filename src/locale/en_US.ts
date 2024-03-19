import DatePicker from 'antd/es/date-picker/locale/en_US';

const localeValues = {
  DatePicker,
  form: {
    common: {
      inputPlaceholder: 'Please enter ',
      selectPlaceholder: 'Please select ',
      uploadPlaceholder: 'Please upload ',
      inputRequired: 'Please enter ${label}',
      selectRequired: 'Please select ${label}',
      uploadRequired: 'Please upload ${label}',
      allLabel: 'All',
      allValue: '',
      search: 'Search',
      reset: 'Reset',
      collapsed: 'Collapse',
      expand: 'Expand',
      prev: 'Previous',
      next: 'Next',
      submit: 'Submit',
      ok: 'OK',
      cancel: 'Cancel'
    },
    dateRange: {
      unit: {
        time: 'hours',
        date: 'days',
        week: 'weeks',
        month: 'months',
        quarter: 'quarters',
        year: 'year'
      },
      maxRange: (max: number, unit: string) => `The time span cannot exceed ${max}${unit}`
    },
    input: {
      userName: {
        mobile: "${label} can't be a cell phone number",
        email: "${label} can't contain the @ symbol"
      },
      invalid: 'Please enter correct ${label}'
    },
    number: {
      lt: (num: number) => `\${label} must be less than ${num}`,
      gt: (num: number) => `\${label} must be greater than ${num}`,
      lte: (num: number) => `\${label} must be less than or equal to ${num}`,
      gte: (num: number) => `\${label} must be greater than or equal to${num}`,
      maxPrecision: (precision: number) => `supports ${precision} decimal places`
    },
    password: {
      range: (min: number, max: number) => `\${label} are ${min}～${max} characters`,
      unallowable: '${label} contains unrecognized characters',
      level: (num: number) =>
        `\${label} is composed of either uppercase or lowercase letters, numbers or symbols at least ${num} species`
    },
    upload: {
      buttonText: 'Click upload',
      fileTypeMessage: 'Uploading only %s files is supported',
      fileSizeMessage: 'Must be less than %s！',
      maxCountMessage: 'A maximum of %s files can be uploaded',
      unsupportPreviewTiptext: 'Preview is not supported for this file!',
      loading: 'Loading',
      uploading: 'Uploading',
      dragTiptext: 'Click or drag files to this area for uploading'
    }
  },
  table: {
    toolbar: {
      reload: 'Refresh',
      density: 'Density',
      densityDefault: 'Default',
      densityLarger: 'Larger',
      densityMiddle: 'Middle',
      densitySmall: 'Compact',
      columnDisplay: 'Column Display',
      columnSetting: 'Table Settings',
      checkAll: 'Select all items',
      fullScreen: 'Full Screen',
      exitFullScreen: 'Exit Full Screen',
      unsupportFullScreenTiptext: 'This page does not support full screen functionality'
    },
    pagination: {
      total: (num: number) => `Total ${num} pieces of data`
    }
  },
  captcha: {
    initText: 'Get Verification Code',
    runText: 'Reacquired after %ss',
    resetText: 'Get Verification Code Again'
  }
};

export default localeValues;
