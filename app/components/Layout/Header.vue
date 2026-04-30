<script setup>
const route = useRoute()
const isFront = computed(() => route.name === 'index')
</script>

<template>
  <header class="l-header" id="header">
    <div class="l-header-main">
      <div class="l-header-logo">
        <LayoutLogo :tag="isFront ? 'h1' : 'div'" className="" />
      </div>

      <div class="l-header-nav">
        <nav class="l-header-nav__wrap" id="header-nav">
          <ul class="l-nav-global">
            <li class="l-nav-global__item">
              <a href="/" class="l-nav-global__link">
                <span class="l-nav-global__link-label">ホーム</span>
              </a>
            </li>

            <li class="l-nav-global__item">
              <a href="/sample/" class="l-nav-global__link">
                <span class="l-nav-global__link-label">サンプル</span>
              </a>
            </li>

            <li class="l-nav-global__item">
              <a href="/" class="l-nav-global__link">
                <span class="l-nav-global__link-label">お知らせ</span>
              </a>
            </li>

            <li class="l-nav-global__item">
              <a href="/" class="l-nav-global__link">
                <span class="l-nav-global__link-label">お問い合わせ</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
