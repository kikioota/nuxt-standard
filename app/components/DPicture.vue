<script setup>
const props = defineProps({
  src: {
    type: String,
    default: null,
  },
  // モバイル用のパス（指定がない場合はPC用をそのまま使用）
  spSrc: {
    type: String,
    default: null,
  },
  // モバイルに切り替わるブレイクポイント（任意）
  breakpoint: {
    type: String,
    default: "767px"
  },
  width: { type: String, default: null },
  height: { type: String, default: null },
  alt: { type: String, default: "" },
  className: { type: String, default: "" },
  type: { type: String, default: "jpg" },
  lazy: { type: Boolean, default: true }
})

// モバイル用のパスが未指定ならPC用を使う
const mobileSrc = props.spSrc || props.src
</script>

<template>
  <picture>
    <source
      :media="`(max-width: ${breakpoint})`"
      :srcset="`${mobileSrc}.webp 1x, ${mobileSrc}@2x.webp 2x`"
      type="image/webp"
    >
    <source
      :media="`(max-width: ${breakpoint})`"
      :srcset="`${mobileSrc}.${type} 1x, ${mobileSrc}@2x.${type} 2x`"
    >

    <source
      :srcset="`${src}.webp 1x, ${src}@2x.webp 2x`"
      type="image/webp"
    >

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
  </picture>
</template>
