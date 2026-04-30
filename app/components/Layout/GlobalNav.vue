<script setup>
const props = defineProps({
  idName: {
    type: String,
    default: "",
  }
})
</script>

<template>
  <nav class="l-header-nav__wrap" :id="props.idName">
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
        <a href="/news/" class="l-nav-global__link">
          <span class="l-nav-global__link-label">お知らせ</span>
        </a>
      </li>

      <li class="l-nav-global__item">
        <a href="/contact/" class="l-nav-global__link">
          <span class="l-nav-global__link-label">お問い合わせ</span>
        </a>
      </li>
    </ul>
  </nav>
</template>