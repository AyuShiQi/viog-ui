import { computed, type SetupContext } from 'vue'

import type { DialogProps } from '@/types/dialog-types'

export default function (props: DialogProps, context: SetupContext) {
  const arrClass = computed(() => {
    console.log(props.class)
    if (props.class instanceof Array) {
      return props.class
    } else return []
  })

  const objClass = computed(() => {
    if (props.class instanceof Array) {
      return {}
    } else if (typeof props.class === 'string') {
      return props.class
    }
    return props.class
  })
  function beSure (): void {
    context.emit('sure')
    if (props.toSure()) {
      context.emit('update:modelValue', false)
    }
  }

  function beUnsure (): void {
    context.emit('unSure')
    if (props.toUnSure()) {
      context.emit('update:modelValue', false)
    }
  }

  function shutDown (): void {
    context.emit('shutDown')
    if (props.toShutDown()) {
      context.emit('update:modelValue', false)
    }
  }

  function open (time: number | undefined): void {
    if (typeof time === 'number') {
      setTimeout(() => {
        context.emit('update:modelValue', true)
      }, time)
    } else {
      context.emit('update:modelValue', true)
    }
  }

  function close (time: number | undefined) : void {
    if (typeof time === 'number') {
      setTimeout(() => {
        context.emit('update:modelValue', false)
      }, time)
    } else {
      context.emit('update:modelValue', false)
    }
  }

  return {
    beSure,
    beUnsure,
    shutDown,
    open,
    close,
    arrClass,
    objClass
  }
}
