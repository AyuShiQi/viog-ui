<template>
  <span
  class="vi-checkbox-appreance"
  :class="[
  `is-${size}`,
  `vi-checkbox-${color}`,
  `is-${type}`,
  {
    'is-disabled': disabled,
    'is-dark': dark,
    'be-checked': value === pickValue
  }
  ]">
    <input
    ref="checkbox"
    class="vi-checkbox"
    :value="value"
    :name="name"
    v-model="nowPick"
    @change="handleChange"
    type="checkbox">
    <span class="vi-checkbox-box" @click="toPick">
      <svg class="vi-checkbox-gougou" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path class="vi-gougou-path" stroke="#fff" stroke-width="2" fill="none" d="M2.6 8.5l7 8 7.6-13"/>
      </svg>
    </span>
    <span class="vi-checkbox-text" @click="toPick">
        <slot>{{value}}</slot>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, ComponentInternalInstance, inject, computed } from 'vue'
import type { Ref } from 'vue'

import props from './props'

import { VueContext, RadioDOM } from '@/types/vue-types'
import { RadioProps } from '@/types/radio-types'

export default defineComponent({
  name: 'ViCheckbox',
  emits: ['change', 'update:modelValue'],
  inject: {
    'checkbox-group-value': {
      default: undefined
    }
  },
  props,
  setup (props: RadioProps, context: VueContext) {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance

    const hasGroup = (function (): boolean {
      return inject('checkbox-group-value', undefined) !== undefined
    })()

    const nowPick: Ref = inject('checkbox-group-value', ref())

    function handleChange (): void {
      hasGroup ? (nowPick.value = props.value) : context.emit('update:modelValue', props.value)
      context.emit('change')
    }

    function toPick (): void {
      (proxy?.$refs.checkbox as RadioDOM).click()
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
  @import './css/checkbox.less';
</style>
