<script setup>
const config = useRuntimeConfig()
const base = config.app.baseURL

const props = defineProps({
  src: { type: String, default: null },
  spSrc: { type: String, default: null },
  breakpoint: { type: String, default: "767px" },
  width: { type: String, default: null },
  height: { type: String, default: null },
  alt: { type: String, default: "" },
  className: { type: String, default: "" },
  type: { type: String, default: "jpg" },
  lazy: { type: Boolean, default: true }
})

const resolvedSrc = computed(() => {
  return `${base}${props.src.replace(/^\//, '')}`
})

// モバイル用パスもbaseURLを付与
const resolvedMobileSrc = computed(() => {
  const mobile = props.spSrc || props.src
  return `${base}${mobile.replace(/^\//, '')}`
})
</script>

<template>
  <picture>
    <source
      :media="`(max-width: ${breakpoint})`"
      :srcset="`${resolvedMobileSrc}.webp 1x, ${resolvedMobileSrc}@2x.webp 2x`"
      type="image/webp"
    >
    <source
      :media="`(max-width: ${breakpoint})`"
      :srcset="`${resolvedMobileSrc}.${type} 1x, ${resolvedMobileSrc}@2x.${type} 2x`"
    >
    <source
      :srcset="`${resolvedSrc}.webp 1x, ${resolvedSrc}@2x.webp 2x`"
      type="image/webp"
    >
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
  </picture>
</template>