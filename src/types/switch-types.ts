export interface ViSwitchType {
  toOn: () => void,
  toOff: () => void,
  toChange: () => void
}

export interface switchProps {
  size: string,
  type: string,
  rightColor: string,
  leftColor: string,
  dark: boolean,
  disabled: boolean
}