<script setup>

const { root } = useBasePath()

const props = defineProps({
  className: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: 'div',
  },
})
</script>

<template>
  <component :is="props.tag" :class="`c-logo ${className}`">
    <a :href="root('/')" class="c-logo__link">
      <ImgNormal type="svg" src="/images/common/logo" width="200" height="56" alt="ロゴ" className="c-logo__img" />
      <span class="sr-only">ロゴ</span>
    </a>
  </component>
</template>
