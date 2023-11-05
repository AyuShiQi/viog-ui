<template>
  <div class="vi-cascader" ref="cascader"
  :style="{
    width: choose.width[0],
    height: choose.height[0]
  }"
  :class="[
    `vi-cascader-type-${type}`
  ]">
    <vi-cascader-group
    v-if="choose.options"
    :options="choose.options"
    :pick="choose.pick"
    :width="choose.width"
    :height="choose.height"
    :min-height="choose.minHeight"
    :max-height="choose.maxHeight"
    :min-width="choose.minWidth"
    :max-width="choose.maxWidth"
    ></vi-cascader-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/cascader'
// 组件引用components
import ViCascaderGroup from './cascader-group.vue'
import cascaderState from './hooks/cascader-state'

export default defineComponent({
  name: 'ViCascader',
  props,
  // emits: ['pick'],
  components: {
    ViCascaderGroup
  },
  setup (props: any, ctx: SetupContext) {
    const cascader = cascaderState(props, ctx)
    return cascader
  }
})
</script>

<style lang="less">
@import './css/cascader.less';
</style>
