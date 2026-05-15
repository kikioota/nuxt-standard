<script setup>
import { ref, watchEffect, onUnmounted } from 'vue'

const isOpen = ref(false)

const props = defineProps({
  className: {
    type: String,
    default: "",
  },
})

watchEffect(() => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen.value ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})

const clickOpen = () => {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <button type="button" @click="clickOpen" :class="['l-hamburger', className, {'is-open' : isOpen}]" :aria-label="isOpen ? 'ドロワーメニューを閉じる' : 'ドロワーメニューを開く' ">
    <span class="l-hamburger__line"></span>
    <span class="l-hamburger__line"></span>
    <span class="l-hamburger__line"></span>
    <span class="l-hamburger__label">{{ isOpen ? '閉じる' : 'メニュー' }}</span>
  </button>

  <div class="l-drawer" :class="{'is-open' : isOpen}">
    <div class="l-drawer__inner">
      <LayoutGlobalNav idName="drawer-nav" />
    </div>
  </div>
</template>
