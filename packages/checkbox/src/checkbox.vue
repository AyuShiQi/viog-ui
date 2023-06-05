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
    'be-checked': containsValue,
    'is-mutate': mutate
  }
  ]">
    <input
    ref="checkbox"
    class="vi-checkbox"
    :value="value"
    :name="name"
    :checked="containsValue"
    :disabled="disabled"
    @change="handleChange"
    type="checkbox">
    <span v-if="type==='default'" class="vi-checkbox-box" @click="toPick">
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
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

import type { CheckboxProps } from '@/types/checkbox-types'

import { checkboxState } from './hooks'
export default defineComponent({
  name: 'ViCheckbox',
  emits: ['change', 'update:modelValue'] as string[],
  inject: {
    'checkbox-group-value': {
      default: []
    }
  },
  props,
  setup (props: CheckboxProps, context: SetupContext) {
    const checkbox = checkboxState(props, context)
    return {
      ...checkbox
    }
  }
})
</script>

<style lang="less">
  @import './css/checkbox.less';
</style>
