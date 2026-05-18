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
    default: "svg"
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
  <img :src="`${resolvedSrc}.${type}`" :width="props.width" :height="props.height" decoding="async" :loading="props.lazy ? 'lazy' : undefined" :alt="props.alt" :class="props.className">
</template>
