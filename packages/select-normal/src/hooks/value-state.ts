import type { Ref, SetupContext } from 'vue'

export default function (multi: boolean, selectedMulti: Ref, context: SetupContext) {
  function toUpdate (item: any): void {
    if (multi) {
      if (selectedMulti.value.includes(item)) {
        const index = selectedMulti.value.indexOf(item)
        selectedMulti.value.splice(index, 1)
      } else {
        selectedMulti.value.push(item)
      }
    } else {
      context.emit('update:modelValue', item)
    }
  }

  function toDelete (item: any): void {
    const index = selectedMulti.value.indexOf(item)
    selectedMulti.value.splice(index, 1)
  }

  function toClear (): void {
    if (multi) {
      selectedMulti.value.length = 0
    } else {
      context.emit('update:modelValue', '')
    }
  }

  return {
    toUpdate,
    toDelete,
    toClear
  }
}
