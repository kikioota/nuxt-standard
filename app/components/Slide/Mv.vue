<script setup>
  // スライダーオプション
  const mvSlideOptions = {
    arrows: false,
    pagination: false,
    type: "fade",
    rewind: true,
    perPage: 1,
    speed: 1000,
    autoplay: true,
    interval: 5000,
    padding: "0rem",
    gap: "0rem",
  }

  const mvList = [
    {
      id: 1,
      text: 'MV01',
    },
    {
      id: 2,
      text: 'MV02',
    },
    {
      id: 3,
      text: 'MV03',
    },
  ]

</script>

<template>
  <div class="c-mv">
    <Splide :options="mvSlideOptions">
      <SplideSlide v-for="slide in mvList" :key="slide.id">
        <div class="w-full h-full bg-gray flex items-center justify-center text-[2rem] font-bold">
          {{ slide.text }}
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>
