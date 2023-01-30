<template>
  <ViCircleLoad v-if="type==='circle'" :color="color"/>
  <ViBallLoad v-else-if="type==='ball'" :color="color"/>
  <ViDiskLoad v-else-if="type==='disk'" :color="color"/>
  <ViStarLoad v-else-if="type==='star'" :color="color"/>
  <ViDiamondLoad v-else-if="type==='diamond'" :color="color"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props'

import ViCircleLoad from './components/circle.vue'
import ViBallLoad from './components/ball.vue'
import ViDiskLoad from './components/disk.vue'
import ViStarLoad from './components/star.vue'
import ViDiamondLoad from './components/diamond.vue'

export default defineComponent({
  name: 'ViLoading',
  components: {
    ViCircleLoad,
    ViBallLoad,
    ViDiskLoad,
    ViStarLoad,
    ViDiamondLoad
  },
  props
})
</script>

<style>
</style>
