export enum ItemTypes {
  upload = 'ItemUpload',
  address = 'ItemAddress',
  captcha = 'ItemCaptcha',
  checkbox = 'ItemCheckbox',
  color = 'ItemColor',
  date = 'ItemDate',
  dateRange = 'ItemDateRange',
  input = 'ItemInput',
  textarea = 'ItemTextArea',
  number = 'ItemNumber',
  password = 'ItemPassword',
  radio = 'ItemRadio',
  select = 'ItemSelect',
  time = 'ItemTime',
  timeRange = 'ItemTimeRange',
  switch = 'ItemSwitch',
  slider = 'ItemSlider'
}

export enum ValueTypeToItemType {
  text = 'input',
  money = 'number',
  progress = 'number',
  percent = 'number',
  color = 'color',
  enum = 'select',
  enumTag = 'select',
  enumBadge = 'select',
  date = 'date',
  fromNow = 'date',
  dateWeek = 'date',
  dateMonth = 'date',
  dateQuarter = 'date',
  dateYear = 'date',
  dateRange = 'dateRange',
  dateTime = 'date',
  dateTimeRange = 'dateRange',
  time = 'time',
  timeRange = 'timeRange'
}

export enum DatePickerMap {
  dateWeek = 'week',
  dateMonth = 'month',
  dateQuarter = 'quarter',
  dateYear = 'year'
}
