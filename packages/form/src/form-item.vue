<template>
  <div
  class="vi-form-item"
  :class="[
    `vi-form-item-type-${type}`,
    `vi-form-item-size-${size}`,
    `vi-form-item-align-${align}`,
    {
      'vi-form-item-invalid': !isValid
    }
  ]">
    <div
    class="vi-form-label">
      {{label}}
    </div>
    <div class="vi-form-input">
      <slot></slot>
      <transition name="vi-form-bottom">
        <span class="vi-form-attention" v-show="!isValid">{{ showInfo }}</span>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

import props from './props/form-item'

import formItemState from './hooks/form-item-state'

export default defineComponent({
  name: 'ViFormItem',
  props,
  setup (props: any) {
    return formItemState(props)
  }
})
</script>

<style lang="less">
  @import './css/form-item.less';
  @import '../../normal/animation/fade-in-out-animation.css';
</style>
