<template>
  <transition name="vi-date-select-box">
    <span
    class="vi-date-select-box">
    </span>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

// import { scroll } from '../../../scroll'

export default defineComponent({
  name: 'ViDateSelectBox',
  emits: ['update'],
  // components: { Scroll: scroll },
  props: {
    datas: Array,
    multi: Boolean,
    selected: {
      default: ''
    },
    selectedMulti: {
      default: []
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
