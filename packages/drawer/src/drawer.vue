<template>
    <div class="vi-drawer">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

export default defineComponent({
  name: 'ViDrawer',
  setup (props: any, ctx: SetupContext) {
    console.log('drawer')
  }
})
</script>

<style lang="less">
</style>
