export interface InputProps {
  modelValue: string,
  password: boolean,
  showPassword: boolean,
  showClear: boolean,
  disabled: boolean,
  name: string,
  type: string,
  color: string,
  size: string,
  dark: boolean,
  right: boolean,
  error: boolean,
  warn: boolean,
  number: boolean,
  maxLength: number | undefined,
  round: boolean,
  width: string,
  autofocus: boolean,
  suffix: any[] | string,
  postfix: any[] | string
}

export interface ViInputType {
  toClear: () => void,
  toFocus: () => void,
  toBlur: () => void
}