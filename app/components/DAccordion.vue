<script setup>
  const props = defineProps({
    className: {
      type: String,
      default: null,
    },
    summary: {
      type: String,
      default: null,
    },
  })

  const isOpen = ref(false)
  const contentRef = ref(null)
  const contentHeight = ref('0px') // 高さを文字列で管理

  const toggleAccordion = async () => {
    isOpen.value = !isOpen.value

    // nextTickでDOMの更新を待ってから計算する
    await nextTick()

    if (isOpen.value) {
      // 開く時：実寸を取得してセット
      contentHeight.value = contentRef.value ? `${contentRef.value.scrollHeight}px` : 'auto'
    } else {
      // 閉じる時：0にする
      contentHeight.value = '0px'
    }
  }

</script>

<template>
  <div :class="['c-accordion', className, {'is-open' : isOpen}]">
    <button type="button" class="c-accordion__summary" @click="toggleAccordion">
      <span class="c-accordion__sumary-label" v-html="summary"></span>
    </button>

    <div ref="contentRef" :style="{ height: contentHeight }" class="c-accordion__content">
      <slot />
    </div>
  </div>
</template>
