<template>
  <div
  class="vi-avater"
  :class="[
    `vi-avater-size-${size}`,
    `vi-avater-fit-${fit}`
  ]">
    <img
    class="vi-avater__img"
    v-if="src"
    :src="src" :alt="alt" :src-set="srcSet">
    <span
    v-else
    class="vi-avater__default">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props'
// 组件引用components
import avaterState from './hooks/avater-state'

export default defineComponent({
  name: 'ViAvater',
  props,
  setup (props: any, ctx: SetupContext) {
    const avater = avaterState()

    return avater
  }
})
</script>

<style lang="less">
@import './css/avater.less';
</style>
