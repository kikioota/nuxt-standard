<script setup>
const props = defineProps({
  src: {
    type: String,
    default: null,
  },
  width: {
    type: String,
    default: null,
  },
  height: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "jpg"
  },
  lazy: {
    type: Boolean,
    default: true
  }

})

</script>

<template>
  <img
    :src="`${src}.${type}`"
    :srcset="`${src}@2x.${type} 2x`"
    :width="width"
    :height="height"
    :alt="alt"
    decoding="async"
    :loading="lazy ? 'lazy' : undefined"
    :class="className"
  >
</template>