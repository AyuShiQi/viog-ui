export interface dialogProps {
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
  sure: boolean,
  title: string,
  toSure: Function,
  toUnSure: Function,
  toShutDown: Function 
}

export interface dialogColor {
  black: string,
  white: string,
  golden: string,
}

export interface dialogOpen {
  value: boolean
}