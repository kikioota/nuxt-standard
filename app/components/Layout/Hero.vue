<script setup>
  const route = useRoute()
  const title = computed(() => route.meta.heroTitle ?? '')
  const subTitle = computed(() => route.meta.heroSubTitle ?? '')
  const image = computed(() => route.meta.heroImage ?? '')
</script>

<template>
  <div class="l-hero">
    <div class="l-hero__wrap">
      <h1 v-if="title" class="l-hero__title" v-html="title"></h1>
      <span v-if="subTitle" class="l-hero__sub" v-html="subTitle"></span>
    </div>

    <DImage v-if="image" type="jpg" :src="`/_nuxt/assets/images/hero/${image}`" width="1400" height="200" alt="" :lazy="false" className="l-hero__bg" />
  </div>
</template>
