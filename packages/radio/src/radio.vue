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
    'be-checked': isChecked
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
    <span class="vi-radio-circle" @click="toPick"></span>
    <span class="vi-radio-text" @click="toPick">
        <slot>{{value}}</slot>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, ComponentInternalInstance, inject, computed } from 'vue'

import props from './props'

import { VueContext, RadioDOM } from '@/types/vue-types'
import { RadioProps, ViRadioInject } from '@/types/radio-types'

export default defineComponent({
  name: 'ViRadio',
  emits: ['change', 'update:modelValue'],
  inject: {
    'radio-group': {
      default: undefined
    }
  },
  props,
  setup (props: RadioProps, context: VueContext) {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance

    const hasGroup = (function (): boolean {
      return inject('radio-group', undefined) !== undefined
    })()

    let nowPick = hasGroup ? inject('radio-group') : ref(props.modelValue)

    function handleChange (): void {
      hasGroup ? (nowPick = props.value) : context.emit('update:modelValue', props.value)
      context.emit('change')
    }

    function toPick (): void {
      (proxy?.$refs.radio as RadioDOM).click()
    }

    const pickValue = computed((): string | number | boolean | undefined => {
      return hasGroup ? inject('radio-group') : props.modelValue
    })

    const isChecked = computed<boolean>((): boolean => {
      return props.value === pickValue.value
    })

    return {
      isChecked,
      pickValue,
      nowPick,
      handleChange,
      toPick
    }
  }
})
</script>

<style lang="less">
  @import './css/radio.less';
</style>
