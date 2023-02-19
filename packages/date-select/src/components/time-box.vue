<template>
  <div
  class="vi-time-select-part">
    <time-scroll :choosed="choosed" :need="24" target="hour" info="时"></time-scroll>
    <time-scroll :choosed="choosed" target="minute" info="分"></time-scroll>
    <time-scroll :choosed="choosed" target="second" info="秒"></time-scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TimeScroll from '@/components/time-scroll.vue'

export default defineComponent({
  name: 'ViTimeBox',
  emits: ['update', 'yearBack', 'yearForward', 'monthBack', 'monthForward'],
  components: { TimeScroll },
  props: {
    unit: {
      type: String,
      default: 'second'
    },
    choosed: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
})
</script>

<style lang="less">
  @import './css/time-box.less';
</style>
