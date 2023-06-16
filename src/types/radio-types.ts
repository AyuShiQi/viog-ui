export interface RadioProps {
  modelValue: string | number | boolean | undefined,
  value: string | number | boolean | undefined,
  name: string | undefined,
  size: string,
  type: string,
  color: string,
  disabled: boolean,
  mutate: boolean,
  checked: boolean
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
  modelValue: string | number | boolean | undefined,
  name: string | undefined
}