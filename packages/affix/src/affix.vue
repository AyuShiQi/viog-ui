<template>
  <div class="vi-affix"
  :style="{
    height: `${defaultHeight}px`
  }"
  ref="affix">
    <div
    class="vi-affix-fixed"
    :class="{
      'to-fixed': needFixed
    }"
    :style="{
      [type]: `${position}px`
    }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

import affixState from './hooks/affix-state'

export default defineComponent({
  name: 'ViAffix',
  props,
  setup (props: any, ctx: SetupContext) {
    const affix = affixState(props.type, props.position)

    return {
      ...affix
    }
  }
})
</script>

<style lang="less">
@import './css/affix.less';
</style>
