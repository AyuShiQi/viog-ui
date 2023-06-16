export interface CheckboxProps {
  modelValue: unknown[],
  value: string | number | boolean | undefined,
  name: string,
  size: string,
  type: string,
  color: string,
  disabled: boolean,
  checked: boolean
}

export interface ViCheckboxType {
  toPick: () => void,
}

export interface ViCheckboxGroupType {}

export interface ViCheckboxInject {
  groupModelValue: {
    default: any,
    type: any
  }
}


export interface GroupValueProps {
  modelValue: unknown[],
  name: string | undefined
}