<template>
  <div class="vi-cascader-group"
  :style="{
    width: nowWidth,
    height: nowHeight,
    minWidth: nowMinWidth,
    minHeight: nowMinHeight,
    maxWidth: nowMaxWidth,
    maxHeight: nowMaxHeight
  }">
    <div class="vi-cascader-group__item-list"
    :style="{
      width: nowWidth,
      height: nowHeight,
      minWidth: nowMinWidth,
      minHeight: nowMinHeight,
      maxWidth: nowMaxWidth,
      maxHeight: nowMaxHeight
    }">
      <vi-cascader-item
      v-for="(option, index) of (options as any[])"
      :key="option"
      :option="option"
      :targetValue="targetValue"
      @click="handleItemPick(index)">
        {{ option.label }}
      </vi-cascader-item>
    </div>
    <div class="vi-cascader-group__next-group">
      <vi-cascader-group
      v-if="choose.target?.children"
      :options="choose.target?.children"
      :pick="pick"
      :nextValue="targetValue"
      :step="step + 1"
      :width="width"
      :height="height"
      :min-height="minHeight"
      :max-height="maxHeight"
      :min-width="minWidth"
      :max-width="maxWidth"></vi-cascader-group>
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
import ViCascaderItem from './cascader-item.vue'
import cascaderGroupState from './hooks/cascader-group-state'

export default defineComponent({
  name: 'ViCascaderGroup',
  props,
  components: {
    ViCascaderItem
  },
  setup (props: any, ctx: SetupContext) {
    const cascader = cascaderGroupState(props)
    return cascader
  }
})
</script>

<style lang="less">
@import './css/cascader-group.less';
</style>
