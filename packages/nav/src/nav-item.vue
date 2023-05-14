<template>
    <div class="vi-nav-item">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 组件type
// 组件props
import props from './props/nav-item'
// 组件引用components
// import _State from './hooks/_-state'

export default defineComponent({
  name: 'ViNavItem',
  props
})
</script>

<style lang="less">
@import './css/nav-item.less';
</style>
