<template>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent, computed, provide } from 'vue'

import props from './props/group'

import { VueContext, RadioDOM } from '@/types/vue-types'
import { RadioProps } from '@/types/radio-types'

export default defineComponent({
  name: 'ViRadioGroup',
  props,
  setup (props: any, context: VueContext) {
    const groupValue = computed({
      get: (): number | string | boolean => {
        return props.modelValue
      },
      set: (newPick: number | string | boolean) => {
        context.emit('update:modelValue', newPick)
      }
    })

    provide('radio-group', groupValue)
  }
})
</script>

<style lang="less">
  @import './css/radio.less';
</style>
