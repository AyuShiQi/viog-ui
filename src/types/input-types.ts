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
  maxlength: number | undefined,
  minlength: number | undefined,
  round: boolean,
  width: string,
  autofocus: boolean,
  suffix: any[] | string,
  prefix: any[] | string,
  placeholder: string
}

export interface ViInputType {
  toClear: () => void,
  toFocus: () => void,
  toBlur: () => void
}