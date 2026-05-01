<script setup>
const route = useRoute()
const isFront = computed(() => route.name === 'index')

const props = defineProps({
  className: {
    type: String,
    default: "",
  },
})

</script>

<template>
  <div :class="['l-header-main', props.className]">
    <div class="l-header-logo">
      <LayoutLogo :tag="isFront ? 'h1' : 'div'" className="" />
    </div>

    <div class="l-header-nav">
      <LayoutGlobalNav idName="header-nav" />
    </div>
  </div>
</template>
