<template>
  <transition name="vi-select-box">
    <span
    class="vi-select-box">
        <Scroll height="100%">
            <ul class="vi-select-ul">
              <li class="vi-select-li" v-for="item in datas" :key="item">
                {{item}}
              </li>
            </ul>
        </Scroll>
    </span>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { SetupContext } from 'vue'

import { scroll } from '../../../scroll'

export default defineComponent({
  name: 'ViSelectBox',
  emits: ['update:modelValue'],
  components: { Scroll: scroll },
  props: {
    datas: Array
  },
  setup (props: any, context: SetupContext) {
    const open = ref(false)
  }
})
</script>

<style lang="less">
  @import './css/select-box.less';
</style>
