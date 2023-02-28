<template>
  <div class="vi-scroll"
  :class="[
  `scroll-${color}`,{
    'is-hidden': hidden,
    'is-smooth': smooth
  }]"
  ref="content">
    <slot></slot>
    <div v-if="lazy!==null&&wait!=='none'" v-show="!finish" class="lazy-loading">
      <div class="loading-animation">
        <ViLoading :type="wait" color="grey" size="35px"></ViLoading>
      </div>
      <span class="text">{{waitText}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props/scroll'

import { loading } from '../../loading'

import { ScrollProps } from '@/types/scroll-types'

import { scrollState, lazyState } from './hooks'

export default defineComponent({
  name: 'ViScroll',
  components: {
    ViLoading: loading
  },
  props,
  setup (props: ScrollProps) {
    lazyState(props)
    const mainScroll = scrollState()

    return {
      ...mainScroll
    }
  }
})
</script>

<style lang="less">
  @import './css/scroll.less';
</style>
