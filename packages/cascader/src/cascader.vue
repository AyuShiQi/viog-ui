<template>
  <div class="vi-cascader">
    <vi-cascader-group v-if="choose.options" :options="choose.options"></vi-cascader-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/cascader'
// 组件引用components
import cascaderState from './hooks/cascader-state'

export default defineComponent({
  name: 'ViCascader',
  props,
  setup (props: any, ctx: SetupContext) {
    const cascader = cascaderState(props)
    return cascader
  }
})
</script>

<style lang="less">
@import './css/cascader.less';
</style>
