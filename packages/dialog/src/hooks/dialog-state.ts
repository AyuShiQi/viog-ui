import { ref } from 'vue'
import type { SetupContext } from 'vue'

import type { DialogProps, DialogOpen } from '@/types/dialog-types'

export default function (props: DialogProps, context: SetupContext) {
  const isOpen: DialogOpen = ref(props.defaultOpen)

  function beSure (): void {
    context.emit('sure')
    if (props.toSure()) {
      isOpen.value = false
    }
  }

  function beUnsure (): void {
    context.emit('unSure')
    if (props.toUnSure()) {
      isOpen.value = false
    }
  }

  function shutDown (): void {
    context.emit('shutDown')
    if (props.toShutDown()) {
      isOpen.value = false
    }
  }

  function open (time: number | undefined): void {
    if (typeof time === 'number') {
      setTimeout(() => {
        isOpen.value = true
      }, time)
    } else {
      isOpen.value = true
    }
  }

  function close (time: number | undefined) : void {
    if (typeof time === 'number') {
      setTimeout(() => {
        isOpen.value = false
      }, time)
    } else {
      isOpen.value = false
    }
  }

  return {
    isOpen,
    beSure,
    beUnsure,
    shutDown,
    open,
    close
  }
}
