<template>
  <div class="vi-loading">
    <ViDiamondLoad v-if="type==='diamond'"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ViDiamondLoad from './components/diamond.vue'

export default defineComponent({
  name: 'ViLoading',
  components: {
    ViDiamondLoad
  },
  props: {
    type: {
      type: String,
      default: 'diamond'
    }
  }
})
</script>

<style>
</style>
