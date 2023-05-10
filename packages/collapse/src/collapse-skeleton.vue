<template>
  <div class="vi-collapse-title"></div>
  <ul class="collapse-title-content"></ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/collapse-skeleton'

export default defineComponent({
  name: 'ViCollapseSkeleton',
  props,
  setup (props: any, ctx: SetupContext) {
    console.log('new component')
  }
})
</script>

<style lang="less">
@import './css/collapse-skeleton.less';
</style>
