<template>
  <span
  class="vi-select"
  :class="[
    `is-${size}`,
    `is-${type}`,
    {
      'is-dark': dark,
      'be-open': open
    }
  ]"
  ref="select">
    <span class="vi-select-input"
    :style="{
      width
    }">
        <span class="vi-select-choose">
          <template v-if="!multi || selectedMulti.length ==0">{{selected}}</template>
          <template v-else></template>
        </span>
        <svg
        class="vi-select-arrow"
        viewBox="0 0 40 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="toSelect">
            <path d="M17.4019 1.5C18.5566 -0.5 21.4434 -0.5 22.5981 1.5L39.0526 30C40.2073 32 38.7639 34.5 36.4545 34.5H3.54552C1.23612 34.5 -0.207259 32 0.947441 30L17.4019 1.5Z"/>
        </svg>
    </span>
    <span class="vi-select-list">
        <ViSelectBox v-show="open" :datas="datas"></ViSelectBox>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

import { SelectDOM } from '@/types/select-types'
import ViSelectBox from './components/select-box.vue'

export default defineComponent({
  name: 'ViSelect',
  emits: ['update:modelValue'],
  components: {
    ViSelectBox
  },
  props,
  setup (props: any, context: SetupContext) {
    let listener: any
    const selected = ref(props.placeholder)
    const selectedMulti = ref([])
    const open = ref(false)

    function toSelect () {
      open.value = !open.value
    }

    return {
      listener,
      open,
      toSelect,
      selected,
      selectedMulti
    }
  },
  mounted () {
    this.listener = document.addEventListener('click', (e: any) => {
      if (!(this.$refs.select as SelectDOM)?.contains(e.target)) this.open = false
    })
  },
  unmounted () {
    document.removeEventListener('click', this.listener)
  }
})
</script>

<style lang="less">
  @import './css/select.less';
</style>
