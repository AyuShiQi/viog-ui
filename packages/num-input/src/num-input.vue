<template>
  <div
  class="vi-num-input"
  :class="[
    `vi-num-input-${type}`
  ]">
    <div class="vi-num-input__del" @click="delNum">
      <svg viewBox="0 0 20 20" class="vi-num-input__icon">
        <path d="M3 10 L17 10"/>
      </svg>
    </div>
    <input type="text" class="vi-num-input__input" v-model="value"/>
    <div class="vi-num-input__add" @click="addNum">
      <svg viewBox="0 0 20 20" class="vi-num-input__icon">
        <path d="M3 10 L17 10 M10 3 L10 17"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props'
// 组件引用components
import numInputState from './hooks/num-input-state'

export default defineComponent({
  name: 'ViNumInput',
  props,
  setup (props: any, ctx: SetupContext) {
    const numInput = numInputState(props, ctx)

    return numInput
  }
})
</script>

<style lang="less">
@import './css/num-input.less';
</style>
