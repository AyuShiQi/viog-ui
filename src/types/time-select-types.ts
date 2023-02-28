import { ModelValueDate } from './date-select-types'

export type { ModelValueDate } from './date-select-types'

export interface TimeSelectProps {
  modelValue: ModelValueDate,
  size: string,
  type: string,
  dark: boolean,
  disabled: boolean,
  width: string,
  placeholder: string,
  filter: boolean,
  range: boolean,
  unit: string,
  format: string
}
