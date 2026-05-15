<script setup>

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 0
}

const pagetopAnime = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <button
    type="button"
    class="c-pagetop"
    :class="{ 'is-show': isVisible }"
    aria-label="ページの先頭へ戻る"
    @click="pagetopAnime"
  >
    <span class="c-pagetop__label">TOP</span>
  </button>
</template>
