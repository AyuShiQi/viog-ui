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
          <template
          v-if="!multi || modelValue.length === 0">
            {{isPlaceholder? placeholder : modelValue}}
          </template>
          <span
          class="vi-select-multi"
          v-else>
            <ViSelectItem
            v-for="item in selectedMulti"
            :key="item"
            :data="item"
            @delete="toDelete">
              {{item}}
            </ViSelectItem>
          </span>
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
        <ViSelectBox
        v-show="open"
        :datas="datas"
        :selected="modelValue"
        :selectedMulti="modelValue"
        :multi="multi"
        @update="toUpdate"></ViSelectBox>
    </span>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

import { SelectDOM } from '@/types/select-types'

import ViSelectBox from './components/select-box.vue'
import ViSelectItem from './components/select-item.vue'

export default defineComponent({
  name: 'ViSelect',
  emits: ['update:modelValue'],
  components: {
    ViSelectBox,
    ViSelectItem
  },
  props,
  setup (props: any, context: SetupContext) {
    let listener: any
    const selected = ref(props.placeholder)
    const selectedMulti = ref(props.modelValue)
    const open = ref(false)

    function toSelect () {
      open.value = !open.value
    }

    function toUpdate (item: any) {
      if (props.multi) {
        if (selectedMulti.value.includes(item)) {
          const index = selectedMulti.value.indexOf(item)
          selectedMulti.value.splice(index, 1)
        } else {
          selectedMulti.value.push(item)
        }
      } else {
        context.emit('update:modelValue', item)
        selected.value = item
      }
    }

    function toDelete (item: any) {
      const index = selectedMulti.value.indexOf(item)
      selectedMulti.value.splice(index, 1)
    }

    const isPlaceholder = computed((): boolean => {
      if (props.multi) {
        if (props.modelValue.length === 0) return true
      } else {
        if (props.modelValue === '') return true
      }
      return false
    })

    return {
      listener,
      open,
      toSelect,
      selected,
      selectedMulti,
      toUpdate,
      isPlaceholder,
      toDelete
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
