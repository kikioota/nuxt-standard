<script setup>
const route = useRoute()
const isFront = computed(() => route.name === 'index')
</script>

<template>
  <header class="l-header" id="header">
    <div class="l-header-main">
      <div class="l-header-logo">
        <LayoutLogo :tag="isFront ? 'h1' : 'div'" className="" />
      </div>

      <div class="l-header-nav">
        <LayoutGlobalNav idName="header-nav" />
      </div>
    </div>

    <LayoutHamburgerMenu className="lg:hidden" />

  </header>
</template>
