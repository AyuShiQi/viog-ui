<template>
  <span
  class="vi-radio-appreance"
  :class="[
  `is-${size}`,
  `vi-radio-${color}`,
  `is-${type}`,
  {
    'is-disabled': disabled,
    'is-dark': dark,
    'be-checked': value === pickValue
  }
  ]">
    <input
    ref="radio"
    class="vi-radio"
    :value="value"
    :name="name"
    v-model="nowPick"
    @change="handleChange"
    type="radio">
    <span class="vi-radio-circle" @click="toPick"><span class="vi-radio-ball"></span></span>
    <span class="vi-radio-text" @click="toPick">
        <slot>{{value}}</slot>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, inject, computed } from 'vue'
import type { Ref, SetupContext, ComponentInternalInstance } from 'vue'

import props from './props'

import type { RadioDOM } from '@/types/vue-types'
import type { RadioProps } from '@/types/radio-types'

import { radioState } from './hooks'

export default defineComponent({
  name: 'ViRadio',
  emits: ['change', 'update:modelValue'],
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
