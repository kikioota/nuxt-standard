import { defineNuxtPlugin } from '#app'
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css' // 基本のスタイル（テーマによって変更可）

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide)
})
