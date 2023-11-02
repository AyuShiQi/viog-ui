<template>
  <div class="vi-cascader-select"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
// 组件引用components
import cascaderSelectState from './hooks/cascader-select-state'

export default defineComponent({
  name: 'ViCascaderSelect',
  setup (props: any, ctx: SetupContext) {
    const cascaderSelect = cascaderSelectState()
    return cascaderSelect
  }
})
</script>

<style lang="less">
@import './css/cascader-select.less';
</style>
