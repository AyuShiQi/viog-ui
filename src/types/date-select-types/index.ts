export interface ModelValueDate {
  year?: number,
  month?: number,
  date?: number,
  hour?: number,
  minute?: number,
  second?: number,
  endHour?: number,
  endMinute?: number,
  endSecond?: number
}

export interface DateSelectProps {
  modelValue: ModelValueDate,
  size: string,
  type: string,
  dark: boolean,
  disabled: boolean,
  placeholder: string,
  filter: boolean,
  range: boolean,
  unit: string,
  timeUnit: string,
  format: string,
  defaultUnit: ModelValueDate
}