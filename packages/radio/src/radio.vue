<template>
  <span
  class="vi-radio"
  :class="[
  `vi-radio-size-${size}`,
  `vi-radio-${color}`,
  `vi-radio-type-${type}`,
  {
    'vi-radio-mutate': mutate,
    'is-disabled': disabled,
    'be-checked': value === pickValue
  }
  ]">
    <input
    ref="radio"
    class="vi-radio__origin"
    :value="value"
    :name="groupName"
    v-model="nowPick"
    :disabled="disabled"
    @click="handleChange"
    type="radio">
    <span class="vi-radio-circle" @click="toPick"><span class="vi-radio-ball"></span></span>
    <span class="vi-radio-text" @click="toPick">
        <slot>{{ value }}</slot>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

import type { RadioProps } from '@/types/radio-types'

import radioState from './hooks/radio-state'

export default defineComponent({
  name: 'ViRadio',
  emits: ['change', 'update:modelValue'] as string[],
  inject: {
    'radio-group-value': {
      default: undefined
    }
  },
  props,
  setup (props: RadioProps, context: SetupContext) {
    const mainRadio = radioState(props, context)

    return {
      ...mainRadio
    }
  }
})
</script>

<style lang="less">
  @import './css/radio.less';
</style>
