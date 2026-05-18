<script setup>

const { root } = useBasePath()


const props = defineProps({
  className: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: '/',
  },
})


</script>


<template>
  <a :href="root(props.href)" :class="['c-btn-primary', props.className]">
    <span class="c-btn-primary__label">
      <slot />
    </span>
  </a>
</template>
