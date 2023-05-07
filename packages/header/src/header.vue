<template>
    <header class="vi-header">
        <div class="vi-header-content">
            <slot></slot>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

export default defineComponent({
  name: 'ViHeader',
  setup (props: any, ctx: SetupContext) {
    console.log('header')
  }
})
</script>

<style lang="less">
@import './css/header.less';
</style>
