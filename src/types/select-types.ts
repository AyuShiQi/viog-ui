export interface SelectDOM {
  contains: (don: any) => boolean
}

export interface SelectProps {
  modelValue: any,
  once: boolean,
  size: string,
  type: string,
  disabled: boolean,
  multi: boolean,
  placeholder: string,
  datas: any[] | undefined,
  name: string | undefined
}

export interface ViSelectType {
  toClear: () => void,
}