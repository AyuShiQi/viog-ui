import { ModelValueDate } from './date-select-types'

export type { ModelValueDate } from './date-select-types'

export interface TimeSelectProps {
  modelValue: ModelValueDate,
  size: string,
  type: string,
  disabled: boolean,
  placeholder: string,
  range: boolean,
  unit: string,
  format: string,
  name: string | undefined
}
