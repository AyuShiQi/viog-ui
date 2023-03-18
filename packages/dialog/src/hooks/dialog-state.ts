import type { SetupContext } from 'vue'

import type { DialogProps, DialogOpen } from '@/types/dialog-types'

export default function (props: DialogProps, context: SetupContext) {
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
    close
  }
}
