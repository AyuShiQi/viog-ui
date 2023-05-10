<template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/collapse'

export default defineComponent({
  name: 'ViCollapseLi',
  props,
  setup (props: any, ctx: SetupContext) {
    console.log('new component')
  }
})
</script>

<style lang="less">
@import './css/collapse.less';
</style>
