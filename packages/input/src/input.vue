<template>
  <input
  class="vi-input"
  :placeholder="placeholder"
  :type="password? 'password' : 'text'"
  :name="name"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
      defualt: false
    },
    disabled: {
      type: Boolean,
      defualt: false
    },
    name: {
      type: String,
      defualt: ''
    }
  },
  setup (props: ViInputProps, context: VueContext) {
    const placeholder = context.slots?.default !== undefined ? context.slots?.default()[0].children : ''

    return {
      placeholder
    }
  }
})
</script>

<style lang="less">
@import './css/input.less';
</style>
