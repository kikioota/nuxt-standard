<script setup>
  const props = defineProps({
    wrapClass: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    tag: {
      type: String,
      default: "div",
    }
  })
</script>

<template>
  <div :class="['c-flex-wrap', props.wrapClass]" >
    <component :is="props.tag" :class="['c-flex', props.className]">
      <slot />
    </component>
  </div>
</template>
