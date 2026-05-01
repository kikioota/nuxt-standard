<script setup>
const route = useRoute()
const isFront = computed(() => route.name === 'index')



</script>

<template>
  <header class="l-header" id="header">

    <LayoutHeaderMain />

    <LayoutHamburgerMenu className="lg:hidden" />

  </header>
</template>
