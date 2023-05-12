<template>
  <div class="vi-option-group">
    <div class="vi-option-group__title">{{ title }}</div>
    <div class="vi-option-group__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/option-group'
// 组件引用components
import optionGroupState from './hooks/option-group-state'

export default defineComponent({
  name: 'ViOptionGroup',
  props,
  setup (props: any, ctx: SetupContext) {
    const optionGroup = optionGroupState()

    return optionGroup
  }
})
</script>

<style lang="less">
@import './css/option-group.less';
</style>
