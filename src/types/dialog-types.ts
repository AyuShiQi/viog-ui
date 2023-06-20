export type ViDialogType = {
  open: (time?: number) => void,
  close: (time?: number) => void
}

export interface DialogProps {
  modelValue: boolean,
  noMask: boolean,
  maskColor: string,
  blur: boolean,
  dark: boolean,
  // top: string,
  // contentTextAlign: string,
  // optionTextAlign: string,
  noShutdown: boolean,
  noUnsure: boolean,
  unsureTitle: string,
  noSure: boolean,
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