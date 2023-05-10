<template>
  <li class="vi-menu-group"></li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/menu-group'

export default defineComponent({
  name: 'ViMenuGroup',
  props,
  setup (props: any, ctx: SetupContext) {
    console.log('new component')
  }
})
</script>

<style lang="less">
@import './css/menu-group.less';
</style>
