<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>

<template>
  <span class="valaxy-footnote-ref" v-bind="$attrs">
    <slot />
  </span>
</template>

