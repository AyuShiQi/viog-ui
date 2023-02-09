export interface RadioProps {
  modelValue: string | number | boolean | undefined,
  value: string | number | boolean | undefined,
  name: string,
  size: string,
  type: string,
  dark: boolean,
  color: string,
  disabled: boolean
}

export interface ViRadioType {
  toPick: () => void,
}

export interface ViRadioGroupType {
}

export interface ViRadioInject {
  groupModelValue: {
    default: any,
    type: any
  }
}

export interface GroupValueProps {
  modelValue: string | number | boolean | undefined
}