
import type { Dayjs } from 'dayjs';

// 兼容 v4 日期写法
import type { PickerDateProps, RangePickerProps as BaseRangePickerProps, RangePickerDateProps as BaseRangePickerDateProps } from 'antd/es/date-picker/generatePicker';

export type DatePickerProps = PickerDateProps<Dayjs>;
export type MonthPickerProps = Omit<PickerDateProps<Dayjs>, 'picker'>;
export type WeekPickerProps = Omit<PickerDateProps<Dayjs>, 'picker'>;
export type RangePickerProps = BaseRangePickerProps<Dayjs>;
export type RangePickerDateProps = BaseRangePickerDateProps<Dayjs>;

export type { TimePickerProps } from './form/TimePicker';
export type { TimeRangePickerProps } from './form/TimeRangePicker';

export type {
  CheckboxProps,
  CheckboxOptionType,
  // DatePickerProps,
  // TimePickerProps,
  RadioProps,
  RadioGroupProps,
  SelectProps,
  SliderSingleProps,
  SwitchProps,
  // TimeRangePickerProps,
  ModalProps,
  ButtonProps,
  FormInstance,
  InputNumberProps,
  InputProps,
  UploadProps,
  StepProps,
  StepsProps,
  FormProps,
  FormItemProps,
  DrawerProps,
  ColProps,
  CascaderProps,
  TooltipProps,
  UploadFile
} from 'antd';

export type { CheckboxGroupProps } from 'antd/es/checkbox';
export type { PasswordProps, TextAreaProps } from 'antd/es/input';
export type { SliderRangeProps } from 'antd/es/slider';
export type { FormListProps } from 'antd/es/form';
export type { UploadChangeParam, RcFile } from 'antd/es/upload/interface';