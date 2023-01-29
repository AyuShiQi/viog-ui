<template>
  <span
  class="vi-input-apperance"
  :class="[
  `is-${color}`,
  `vi-input-${type}`,
  {
    'is-focus': isFocus,
    'is-dark': dark,
    'info-right': right,
    'info-error': error,
    'info-warn': warn
  }]">
    <input
    :value="value"
    @input="handleInput"
    @change="handleChange"
    class="vi-input"
    :class="[
    `is-${size}`
    ]"
    :style="{
      width
    }"
    :placeholder="placeholder"
    :type="password? 'password' : 'text'"
    :name="name"
    @focus="focus"
    @blur="blur"/>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import props from './props'

import { VueContext, Event } from '@/types/vue-types'
import { ViInputProps } from '@/types/input-types'
export default defineComponent({
  name: 'ViInput',
  emit: ['changeValue', 'inputValue'],
  props,
  setup (props: ViInputProps, context: VueContext) {
    const placeholder = context.slots?.default !== undefined ? context.slots?.default()[0].children : ''
    const isFocus = ref(false)

    function focus () {
      isFocus.value = true
    }
    function blur () {
      isFocus.value = false
    }

    // change与input与数字区
    const value = ref('')
    function toUpdateValue (newValue: string) {
      if (props.number) {
        const nowValue = Number.parseInt(newValue)
        if (!Number.isNaN(nowValue)) {
          value.value = nowValue.toString()
        }
      } else {
        value.value = newValue
      }
    }
    function handleInput (e: Event): void {
      toUpdateValue(e.target.value)
      context.emit('inputValue', value.value)
    }
    function handleChange (e: Event): void {
      toUpdateValue(e.target.value)
      context.emit('changeValue', value.value)
    }

    return {
      value,
      handleInput,
      handleChange,
      placeholder,
      isFocus,
      focus,
      blur
    }
  }
})
</script>

<style lang="less">
@import './css/input.less';
</style>
