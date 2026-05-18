<script setup>

const config = useRuntimeConfig()
const base = config.app.baseURL

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

const resolvedSrc = computed(() => {
  return `${base}${props.src.replace(/^\//, '')}`
})

</script>

<template>
  <img
    :src="`${resolvedSrc}.${type}`"
    :srcset="`${resolvedSrc}@2x.${type} 2x`"
    :width="width"
    :height="height"
    :alt="alt"
    decoding="async"
    :loading="lazy ? 'lazy' : undefined"
    :class="className"
  >
</template>