export interface ModelValueDate {
  year?: number,
  month?: number,
  date?: number,
  hour?: number,
  minute?: number,
  second?: number,
  endYear?: number,
  endMonth?: number,
  endDate?: number
  endHour?: number,
  endMinute?: number,
  endSecond?: number
}

export interface DateSelectProps {
  modelValue: ModelValueDate,
  size: string,
  type: string,
  disabled: boolean,
  placeholder: string,
  name: string | undefined,
  range: boolean,
  unit: string,
  timeUnit: string,
  format: string,
  defaultUnit: ModelValueDate,
  separate: string
}