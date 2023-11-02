<template>
  <div class="vi-cascader-group">
    <vi-cascader-item
    v-for="(option, index) of (options as any[])"
    :key="option"
    :index="index"
    :value="option.value"
    @click="handleItemPick(index)">
      {{ option.label }}
    </vi-cascader-item>
    <div class="vi-cascader-group__next-group">
      <vi-cascader-group
      v-if="choose.target?.children"
      :options="choose.target?.children"
      :nextValue="(choose.targetValue as any)"></vi-cascader-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/cascader-group'
// 组件引用components
import cascaderGroupState from './hooks/cascader-group-state'

export default defineComponent({
  name: 'ViCascaderGroup',
  props,
  setup (props: any, ctx: SetupContext) {
    const cascader = cascaderGroupState(props)
    return cascader
  }
})
</script>

<style lang="less">
@import './css/cascader-group.less';
</style>
