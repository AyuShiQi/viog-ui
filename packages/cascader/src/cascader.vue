<template>
  <div class="vi-cascader"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
// 组件引用components
import cascaderState from './hooks/cascader-state'

export default defineComponent({
  name: 'ViCascader',
  setup (props: any, ctx: SetupContext) {
    const cascader = cascaderState()
    return cascader
  }
})
</script>

<style lang="less">
@import './css/cascader.less';
</style>
