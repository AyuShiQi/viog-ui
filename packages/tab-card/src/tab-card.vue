<template>
  <div
  class="vi-tab-card"
  :class="[
    {
      'is-choosed': isChoosed
    }
  ]"
  @click="handleClick">
    <div class="vi-tab-card__icon">
      <slot name="icon"></slot>
    </div>
    <div class="vi-tab-card__text">
      <slot>{{ value }}</slot>
    </div>
    <svg class="vi-tab-card__del" viewBox="0 0 20 20" @click="handleDelete">
      <path d="M6 6 L14 14 M14 6 L6 14"/>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/tab-card'
// 组件引用components
import tabCardState from './hooks/tab-card-state'

export default defineComponent({
  name: 'ViTabCard',
  props,
  setup (props: any, ctx: SetupContext) {
    const tabCard = tabCardState(props, ctx)
    return tabCard
  }
})
</script>

<style lang="less">
@import './css/tab-card.less';
</style>
