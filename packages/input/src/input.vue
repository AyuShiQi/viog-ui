<template>
  <span
  class="vi-input-apperance"
  :class="[
  `is-${color}`,
  {
    'is-focus': isFocus,
    'is-dark': dark,
    'info-right': right,
    'info-error': error,
    'info-warn': warn
  }]">
    <input
    class="vi-input"
    :class="[
    `is-${size}`
    ]"
    :placeholder="placeholder"
    :type="password? 'password' : 'text'"
    :name="name"
    @focus="focus"
    @blur="blur"/>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { VueContext } from '@/types/vue-types'
import { ViInputProps } from '@/types/input-types'
export default defineComponent({
  name: 'ViInput',
  props: {
    password: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showClear: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'middle'
    },
    dark: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    warn: {
      type: Boolean,
      default: false
    }
  },
  setup (props: ViInputProps, context: VueContext) {
    const placeholder = context.slots?.default !== undefined ? context.slots?.default()[0].children : ''
    const isFocus = ref(false)

    function focus () {
      isFocus.value = true
    }
    function blur () {
      isFocus.value = false
    }

    return {
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
