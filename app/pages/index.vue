<script setup>

// head情報
useSeoMeta({
  title: 'TOPページ | Nuxtテンプレート',
  description: 'ここにディスクリプションが入ります。',
})


</script>

<template>
  <p class="pt-[3rem] md:pt-[8rem] bg-gray-dddddd text-white font-sans">vueテンプレート</p>
  <p class="">TOPページ</p>

  <HeadingPrimary enLabel="about" className="mb-[5rem] lg:mb-[10rem]">見出しメイン</HeadingPrimary>

  <HeadingPrimary tag="div" titleTag="h3" enLabel="about" className="mb-[5rem] lg:mb-[10rem]">見出しメイン</HeadingPrimary>

  <img src="/assets/images/sample/400_320_102400-0.jpg" width="247" height="320" alt="">

  <Image type="jpg" src="/_nuxt/assets/images/sample/img-about" width="500" height="300" alt="サンプル画像" :lazy="false" className="mx-auto" />

</template>
