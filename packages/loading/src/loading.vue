<template>
  <ViDiamondLoad v-if="type==='diamond'" :color="color"/>
  <ViCircleLoad v-else-if="type==='circle'" :color="color"/>
  <ViBallLoad v-else-if="type==='ball'" :color="color"/>
  <ViDiskLoad v-else-if="type==='disk'" :color="color"/>
  <ViStarLoad v-else-if="type==='star'" :color="color"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ViDiamondLoad from './components/diamond.vue'
import ViCircleLoad from './components/circle.vue'
import ViBallLoad from './components/ball.vue'
import ViDiskLoad from './components/disk.vue'
import ViStarLoad from './components/star.vue'

export default defineComponent({
  name: 'ViLoading',
  components: {
    ViDiamondLoad,
    ViCircleLoad,
    ViBallLoad,
    ViDiskLoad,
    ViStarLoad
  },
  props: {
    type: {
      type: String,
      default: 'circle'
    },
    color: {
      type: String
    }
  }
})
</script>

<style>
</style>
