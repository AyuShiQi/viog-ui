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
    'be-checked': containsValue
  }
  ]">
    <input
    ref="checkbox"
    class="vi-checkbox"
    :value="value"
    :name="name"
    :checked="containsValue"
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
import { defineComponent, ref, getCurrentInstance, ComponentInternalInstance, inject, computed, reactive } from 'vue'
import type { Ref } from 'vue'

import props from './props'

import { VueContext, RadioDOM } from '@/types/vue-types'
import { CheckboxProps } from '@/types/checkbox-types'

export default defineComponent({
  name: 'ViCheckbox',
  emits: ['change', 'update:modelValue'],
  inject: {
    'checkbox-group-value': {
      default: []
    }
  },
  props,
  setup (props: CheckboxProps, context: VueContext) {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance

    const hasGroup = (function (): boolean {
      return inject('checkbox-group-value', undefined) !== undefined
    })()

    const nowPick: Ref = inject('checkbox-group-value', ref())

    const containsValue = computed((): boolean => {
      return hasGroup ? nowPick.value.includes(props.value) : props.modelValue.includes(props.value)
    })

    function handleChange (): void {
      if (!hasGroup) nowPick.value = props.modelValue
      // 存在就剔除，那么就从那个队列里把它剔除
      if (containsValue.value) {
        const index = nowPick.value.indexOf(props.value)
        nowPick.value.splice(index, 1)
      } else {
        // 没有就加进去
        nowPick.value.push(props.value)
      }
      if (!hasGroup) context.emit('update:modelValue', nowPick)
      context.emit('change')
    }

    function toPick (): void {
      (proxy?.$refs.checkbox as RadioDOM).click()
    }

    return {
      nowPick,
      handleChange,
      toPick,
      containsValue
    }
  }
})
</script>

<style lang="less">
  @import './css/checkbox.less';
</style>
