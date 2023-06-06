<template>
  <vi-row
  class="my-row"
  justify="flex-start">
    <slot></slot>
  </vi-row>
</template>

<script lang="ts" setup>
</script>

<style>
.my-row {
    margin: 16px 0;
    gap: 8px;
}
</style>