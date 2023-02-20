<template>
  <transition name="vi-select-box">
    <span
    class="vi-select-box">
        <Scroll maxHeight="maxHeight" hidden>
            <ul class="vi-select-ul">
              <li
              class="vi-select-li"
              :class="{
                'be-choosed': isChoose(item)
              }"
              v-for="item in datas"
              :key="item"
              @click="toChoose(item)">
                {{item}}
              </li>
            </ul>
        </Scroll>
    </span>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import { scroll } from '../../../scroll'

export default defineComponent({
  name: 'ViSelectBox',
  emits: ['update'],
  components: { Scroll: scroll },
  props: {
    datas: Array,
    multi: Boolean,
    selected: {
      default: ''
    },
    selectedMulti: {
      default: []
    },
    maxHeight: {
      type: String,
      default: '100px'
    }
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
