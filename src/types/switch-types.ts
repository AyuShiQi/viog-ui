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
  dark: boolean,
  disabled: boolean,
  filter: boolean,
  name: string
}