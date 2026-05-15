<script setup>
// head情報
useSeoMeta({
  title: 'お知らせ | Nuxtテンプレート',
  description: 'ここにディスクリプションが入ります。',
})

definePageMeta({
  sub: true,
  heroTitle: 'お知らせ',
  heroSubTitle: 'news',
  heroImage: 'hero-sample',
  breadcrumbs: [
      { label: 'お知らせ' }
    ]
})

// ページ情報
// const pageData = useState('pageData', () => ({
//   front: false,
// }))
</script>

<template>
  <div class="lg:pb-[15rem] md:pb-[10rem] pb-[6rem] lg:px-0 px-[2rem]">
    <p class="pt-[3rem] md:pt-[8rem] bg-gray-dddddd text-white font-sans">vueテンプレート</p>
    <p class="pb-[3rem]">お知らせです。</p>


    <HeadingPrimary enLabel="about" className="mb-[5rem] lg:mb-[10rem]">見出しメイン</HeadingPrimary>

    <HeadingPrimary tag="div" titleTag="h3" enLabel="about" className="mb-[5rem] lg:mb-[10rem]"
      >見出しメイン</HeadingPrimary
    >

    <Container size="md" tag="div" className="pb-[5rem] md:pb-[12rem]">
      <p class="text-[2rem]">コンテナー1170px</p>
    </Container>

    <Container
      size="sm"
      tag="section"
      className="pb-[8rem]"
    >
      <p class="text-[2rem]">コンテナー770px</p>

      <Flex tag="div" className="[--gap-x:1.5rem] [--gap-y:1.5rem]" wrapClass="pb-[7rem] pt-[8rem]">
        <div class="w-full md:w-1/2">
          <p class="">アイテム01</p>
        </div>

        <div class="w-full md:w-1/2">
          <p class="">アイテム02</p>
        </div>
      </Flex>

      <Flex tag="ul" className="[--gap-x:1.5rem] [--gap-y:1.5rem]" wrapClass="pb-[7rem] pt-[8rem]">
        <li class="w-full md:w-1/2">
          <p class="">アイテム01</p>
        </li>

        <li class="w-full md:w-1/2">
          <p class="">アイテム02</p>
        </li>
      </Flex>

    </Container>


    <DImage
      type="jpg"
      src="/_nuxt/assets/images/sample/img-about"
      width="500"
      height="300"
      alt="サンプル画像"
      :lazy="true"
      className="mx-auto"
    />

    <div class="mt-[8rem] pb-[16rem]">
      <BtnPrimary href="/sample/" className="w-[27rem] min-h-[6rem] mx-auto">サンプル</BtnPrimary>
    </div>
  </div>
</template>
