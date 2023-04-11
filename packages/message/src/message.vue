<template>
  <div class="vi-message" v-show="show">
    <ViMessageCard
    v-for="item,i in message"
    :style="{
      top:`${i*46}px`
    }"
    :key="item.info+item.time"
    :message="item.info"
    :duration="item.duration"
    @shutdown="handle(i)"></ViMessageCard>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue'

import ViMessageCard from './message-card.vue'

import props from './props'

export default {
  name: 'ViMessage',
  components: {
    ViMessageCard
  },
  props,
  setup (props: any) {
    const mes = ref(props.message)
    const show = computed((): boolean => {
      return props.message.length !== 0
    })

    function handle (i: number) {
      mes.value.splice(i, 1)
    }

    return {
      show,
      handle
    }
  }
}
</script>

<style lang="less">
@import './css/message.less';
</style>
