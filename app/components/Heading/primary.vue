<script setup>

const { defaultSlot } = useCleanSlot()

const props = defineProps({
  className: {
    type: String,
    default: null,
  },
  enLabel: {
    type: String,
    default: null,
  },
  tag: {
    type: String,
    default: 'header',   // デフォルトは header
  },
  titleTag: {
    type: String,
    default: 'h2',       // デフォルトは h2
  },
})
</script>


<template>
  <component :is="tag" :class="`c-heading-primary ${className}`">
    <component :is="titleTag" class="c-heading-primary__title">
      <slot />
    </component>
    <span class="c-heading-primary__en" lang="en" v-html="enLabel"></span>
  </component>
</template>