<template>
  <div class="vi-loading">
    <ViDiamondLoad v-if="type==='diamond'" :color="color"/>
    <ViCircleLoad v-if="type==='circle'" :color="color"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ViDiamondLoad from './components/diamond.vue'
import ViCircleLoad from './components/circle.vue'

export default defineComponent({
  name: 'ViLoading',
  components: {
    ViDiamondLoad,
    ViCircleLoad
  },
  props: {
    type: {
      type: String,
      default: 'diamond'
    },
    color: {
      type: String
    }
  }
})
</script>

<style>
</style>
