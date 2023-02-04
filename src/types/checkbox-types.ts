export interface CheckboxProps {
  modelValue: unknown[],
  value: string | number | boolean | undefined,
  name: string,
  size: string,
  type: string,
  dark: boolean,
  color: string,
  disabled: boolean
}

export interface ViCheckboxType {
  toPick: () => void,
}

export interface ViCheckboxInject {
  groupModelValue: {
    default: any,
    type: any
  }
}


export interface GroupValueProps {
  modelValue: unknown[]
}