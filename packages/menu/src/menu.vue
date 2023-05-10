<template>
  <card class="vi-menu"></card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import { card } from '../../card'

import props from './props'

export default defineComponent({
  name: 'ViMenu',
  props,
  components: {
    card
  },
  setup (props: any, ctx: SetupContext) {
    console.log('new component')
  }
})
</script>

<style lang="less">
@import './css/menu.less';
</style>
