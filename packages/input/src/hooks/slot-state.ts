import { useSlots } from 'vue'
import type { SetupContext } from 'vue'
import type { InputProps } from '../type'

export default function () {
  const prefixSlot = !!useSlots().prefix
  const suffixSlot = !!useSlots().suffix

  return {
    prefixSlot,
    suffixSlot
  }
}
