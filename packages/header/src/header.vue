<template>
    <header
    class="vi-header"
    :class="[
      {
        'vi-header_retract': needRetract
      }
    ]"
    ref="header">
        <div class="vi-header-content">
            <slot></slot>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

import headerState from './hooks/header-state'

export default defineComponent({
  name: 'ViHeader',
  props,
  setup (props: any, ctx: SetupContext) {
    const header = headerState(props.retract)
    return {
      ...header
    }
  }
})
</script>

<style lang="less">
@import './css/header.less';
</style>
