export interface SelectDOM {
  contains: (don: any) => boolean
}

export interface SelectProps {
  modelValue: any,
  size: string,
  type: string,
  dark: boolean,
  disabled: boolean,
  multi: boolean,
  width: string,
  placeholder: string,
  filter: boolean,
  datas: any[] | undefined,
  itemHeight: number
}

export interface ViSelectType {
  toClear: () => void,
}