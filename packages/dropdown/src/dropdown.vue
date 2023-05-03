<template>
    <span class="vi-dropdown">dropdown</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

export default defineComponent({
  name: 'ViDropdown',
  setup (props: any, ctx: SetupContext) {
    console.log('1')
  }
})
</script>

<style lang="less">
@import './css/dropdown.less';
</style>
