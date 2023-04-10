<template>
  <transition name="vi-toast">
    <div class="vi-toast" v-show="show">
      <span class="vi-toast-card">{{message}}</span>
    </div>
  </transition>
</template>

<script lang="ts">

import props from './props'

export default {
  name: 'ViToast',
  props
}
</script>

<style lang="less">
@import './css/toast.less';
</style>
