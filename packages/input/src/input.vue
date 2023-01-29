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
    v-model="value"
    @input="handleInput"
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

import { VueContext } from '@/types/vue-types'
import { ViInputProps } from '@/types/input-types'
export default defineComponent({
  name: 'ViInput',
  emit: ['change'],
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

    const value = ref('')
    function handleInput () {
      context.emit('change', value.value)
    }

    return {
      value,
      handleInput,
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
