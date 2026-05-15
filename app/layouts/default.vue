<script setup>
  const route = useRoute()
  const isFront = computed(() => route.name === 'index')
  const sub = computed(() => route.meta.sub ?? true)
</script>


<template>
  <div class="l-body" id="body">
    <LayoutHeader className="" />

    <main class="l-main">

      <LayoutHero v-if="!isFront" />

      <LayoutBreadcrumbs v-if="!isFront" />

      <div class="l-main__wrap">
        <div class="l-main__content">
          <slot/>
        </div>

        <LayoutSidebar v-if="sub" className="l-main__sidebar" />
      </div>
    </main>

    <LayoutFooter />

    <!-- 不要な場合削除 -->
    <!-- <LayoutHeaderMain className="l-header-main--fixed" /> -->
  </div>
</template>
