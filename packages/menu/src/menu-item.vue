<template>
  <li class="vi-menu-item"></li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/menu-item'

export default defineComponent({
  name: 'ViMenuItem',
  props,
  setup (props: any, ctx: SetupContext) {
    console.log('new component')
  }
})
</script>

<style lang="less">
@import './css/menu-item.less';
</style>
