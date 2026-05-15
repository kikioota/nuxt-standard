<script setup>
  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "base",
    },
    tag: {
      type: String,
      default: "div",
    }
  })

</script>


<template>
  <component :is="props.tag" :class="['c-container', props.className, size === 'lg' ? 'c-container--lg' : size === 'md' ? 'c-container--md' : size === 'sm' ? 'c-container--sm' : size === 'xs' ? 'c-container--xs' : '']">
    <slot />
  </component>
</template>
