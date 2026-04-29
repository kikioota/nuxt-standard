// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule, setGlobalHead } from '@nuxt/kit'
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({

  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['./app/assets/css/main.css'],  // ← CSSファイルを読み込む
  vite: {
    plugins: [
      tailwindcss()   // ← Viteプラグインとして追加
    ]
  },
  postcss: {
    plugins: {
      'postcss-custom-media': {},
      'postcss-nesting': {}, // preset-envのネストの代わり
      'autoprefixer': {},
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        { src: 'https://example.com/script.js' }
      ]
    }
  }
})
