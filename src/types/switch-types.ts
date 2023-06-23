export interface ViSwitchType {
  toOn: () => void,
  toOff: () => void,
  toChange: () => void
}

export interface SwitchProps {
  modelValue: boolean,
  size: string,
  type: string,
  rightColor: string,
  leftColor: string,
  disabled: boolean,
  filter: boolean,
  name: string
}