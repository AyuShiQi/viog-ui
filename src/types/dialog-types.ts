export type ViDialogType = {
  open: (time?: number) => void,
  close: (time?: number) => void
}

export interface DialogProps {
  modelValue: boolean,
  mask: boolean,
  maskColor: string,
  maskFilter: boolean,
  background: string,
  color: string,
  filter: boolean,
  shadow: boolean,
  top: string,
  contentTextAlign: string,
  optionTextAlign: string,
  shutdown: boolean,
  unsure: boolean,
  unsureTitle: string,
  sure: boolean,
  sureTitle: string,
  title: string,
  toSure: Function,
  toUnSure: Function,
  toShutDown: Function
}

export interface DialogColor {
  black: string,
  white: string,
  golden: string,
  purple: string
}

export type DialogOpen = {
  value: boolean
}