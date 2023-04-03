<template>
  <span class="vi-input-fix">
    <vi-select v-if="isArray" datas="data" v-model="modelValue"></vi-select>
    <p v-else>{{data}}</p>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { SetupContext } from 'vue'

export default defineComponent({
  name: 'ViInput',
  emits: ['change', 'input', 'update:modelValue'],
  props: {
    modelValue: {
      default: ''
    },
    data: {
      default: ''
    }
  },
  setup (props: any, context: SetupContext) {
    const isArray = ref(Array.isArray(props.data))
    return {
    }
  }
})
</script>

<style lang="less">
  @import './css/fix.less';
</style>
