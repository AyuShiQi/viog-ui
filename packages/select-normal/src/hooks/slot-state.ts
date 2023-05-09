import { useSlots } from 'vue'

export default function () {
  const preSlot = !!useSlots().pre
  const sufSlot = !!useSlots().suf

  return {
    preSlot,
    sufSlot
  }
}
