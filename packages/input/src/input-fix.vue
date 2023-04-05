<template>
  <span class="vi-input-fix">
    <vi-select v-if="isArray" :datas="data" v-model="value" :size="size"></vi-select>
    <p v-else>{{data}}</p>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import type { SetupContext } from 'vue'

import { select } from '../../select'

export default defineComponent({
  name: 'ViInputFix',
  components: { ViSelect: select },
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    data: {
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'middle'
    },
    color: {
      type: String,
      default: 'default'
    }
  },
  setup (props: any, context: SetupContext) {
    const isArray = ref(Array.isArray(props.data))
    const value = ref(props.modelValue)

    if (!isArray.value) context.emit('update:modelValue', props.data)

    watch(value, () => {
      context.emit('update:modelValue', value.value)
    })
    return {
      isArray,
      value
    }
  }
})
</script>

<style lang="less">
  @import './css/fix.less';
</style>
