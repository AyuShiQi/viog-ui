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

import { RadioDOM } from '@/types/vue-types'
import { RadioProps } from '@/types/radio-types'

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
    const { proxy } = getCurrentInstance() as ComponentInternalInstance

    const hasGroup = (function (): boolean {
      return inject('radio-group-value', undefined) !== undefined
    })()

    const nowPick: Ref = inject('radio-group-value', ref())

    function handleChange (): void {
      hasGroup ? (nowPick.value = props.value) : context.emit('update:modelValue', props.value)
      context.emit('change')
    }

    function toPick (): void {
      (proxy?.$refs.radio as RadioDOM).click()
    }

    const pickValue = computed((): string | number | boolean | undefined => {
      return hasGroup ? nowPick.value : props.modelValue
    })

    return {
      nowPick,
      pickValue,
      handleChange,
      toPick
    }
  }
})
</script>

<style lang="less">
  @import './css/radio.less';
</style>
