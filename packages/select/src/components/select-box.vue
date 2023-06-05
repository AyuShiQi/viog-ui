<template>
  <transition name="vi-select-box">
    <span
    class="vi-select-box">
        <Scroll
        class="vi-select-scroll"
        hidden
        :datas="datas"
        :itemHeight="itemHeight">
            <template v-slot="vi">
              <div
              class="vi-select-li"
              :class="{
                'be-choosed': isChoose(vi.data)
              }"
              @click="toChoose(vi.data)">
                {{vi.data}}
              </div>
            </template>
        </Scroll>
    </span>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import { scroll, virtualScroll } from '../../../scroll'

export default defineComponent({
  name: 'ViSelectBox',
  emits: ['update'] as string[],
  components: { Scroll: virtualScroll },
  props: {
    datas: Array,
    multi: Boolean,
    selected: {
      default: ''
    },
    selectedMulti: {
      default: []
    },
    itemHeight: Number
  },
  setup (props: any, context: SetupContext) {
    function isChoose (item: any) {
      if (props.multi) {
        return props.selectedMulti.includes(item)
      } else {
        return props.selected === item
      }
    }

    function toChoose (item: any) {
      context.emit('update', item)
    }

    return {
      isChoose,
      toChoose
    }
  }
})
</script>

<style lang="less">
  @import './css/select-box.less';
</style>
