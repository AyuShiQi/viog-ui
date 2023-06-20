<template>
  <teleport to='body'>
    <transition name="vi-dialog">
      <div class="vi-dialog"
      :class="[
        {
          'vi-dialog-dark': dark,
          [`vi-dialog-mask-${maskColor}`]: !noMask,
          'is-blur': blur
        }
      ]"
      v-show="modelValue">
        <div class="vi-dialog__content">
          <div class="vi-dialog__content__top">
              <h3 class="content__top__title">
                  {{ title }}
              </h3>
              <span class="content__top__delete-point" @click="shutDown">
                  <slot name="shutdown" v-if="!noShutdown">
                    <svg class="vi-dialog__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M842.947458 778.116917 576.847937 512.013303 842.946434 245.883083c8.67559-8.674567 13.447267-20.208251 13.43908-32.477692-0.008186-12.232602-4.7727-23.715121-13.414521-32.332383-8.655124-8.677637-20.149922-13.450337-32.384571-13.4575-12.286838 0-23.808242 4.771677-32.474622 13.434987L512.019443 447.143876 245.88206 181.050496c-8.66331-8.66331-20.175505-13.434987-32.416294-13.434987-12.239765 0-23.75196 4.770653-32.414247 13.43294-8.66024 8.636704-13.428847 20.12434-13.437034 32.356942-0.008186 12.269441 4.76349 23.803125 13.437034 32.476669l266.135336 266.13022L181.050496 778.11794c-8.664334 8.66331-13.43601 20.173458-13.43601 32.41527 0 12.239765 4.7727 23.752983 13.437034 32.417317 8.662287 8.66331 20.173458 13.43294 32.413224 13.43294 12.240789 0 23.754007-4.770653 32.416294-13.43294l266.134313-266.100544 266.101567 266.100544c8.66331 8.66331 20.185738 13.43294 32.4429 13.43294 12.265348-0.008186 23.74889-4.771677 32.369222-13.412474C860.81643 825.081555 860.821547 795.991006 842.947458 778.116917z"/>
                    </svg>
                  </slot>
              </span>
          </div>
          <p class="vi-dialog__content__content">
              <slot>
                  <!-- there is content -->
              </slot>
          </p>
          <div class="vi-dialog__content__bottom">
              <span class="content__bottom__home">
                <span v-if="!noUnsure" class="unsure" @click="beUnsure">
                  <slot name="unsure">
                    {{ unsureTitle }}
                  </slot>
                </span>
                <span v-if="!noSure" class="sure"
                @click="beSure">
                  <slot name="sure">
                    {{ sureTitle }}
                  </slot>
                </span>
              </span>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

import { DialogProps } from '@/types/dialog-types'

import { dialogState } from './hooks'

export default defineComponent({
  name: 'ViDialog',
  emits: ['sure', 'unSure', 'shutDown', 'update:modelValue'] as string[],
  props,
  setup (props: DialogProps, context: SetupContext) {
    const mainDialog = dialogState(props, context)

    return {
      ...mainDialog
    }
  }
})
</script>

<style lang="less">
  @import './css/dialog.less';
</style>
