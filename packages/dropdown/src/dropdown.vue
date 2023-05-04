<template>
    <span class="vi-dropdown" ref="select">
      <div class="vi-dropdown-nav" @click="toSelect">dropdown</div>
      <div class="vi-dropdown-content">
        <transition name="vi-fade-in-out">
          <scroll class="vi-dropdown-list" v-show="open">
            1111111111111111111
          </scroll>
        </transition>
      </div>
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import { scroll } from '../../scroll'

import openState from '@/hooks/open-state'

export default defineComponent({
  name: 'ViDropdown',
  components: {
    scroll
  },
  setup (props: any, ctx: SetupContext) {
    const open = openState()

    return {
      ...open
    }
  }
})
</script>

<style lang="less">
@import './css/dropdown.less';
</style>
