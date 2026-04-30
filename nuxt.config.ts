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
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap',
        },
      ],
      script: [
        { src: 'https://example.com/script.js' }
      ]
    }
  }
})
