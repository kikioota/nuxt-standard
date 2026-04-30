<script setup>
const props = defineProps({
  className: {
    type: String,
    default: "",
  },
})

const clickOpen = () => {
  const hamburgerMenu = document.querySelector('.l-hamburger')
  if ( !hamburgerMenu.classList.contains('is-open') ) {
    hamburgerMenu.classList.add('is-open')
  } else {
    hamburgerMenu.classList.remove('is-open')
  }
}

</script>

<template>
  <button type="button" @click="clickOpen" :class="`l-hamburger ${className}`" aria-label="ドロワーメニューを開く">
    <span class="l-hamburger__line"></span>
    <span class="l-hamburger__line"></span>
    <span class="l-hamburger__line"></span>
    <span class="l-hamburger__label">メニュー</span>
  </button>
</template>