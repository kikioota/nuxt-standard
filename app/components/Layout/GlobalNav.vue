<script setup>
const props = defineProps({
  idName: {
    type: String,
    default: "",
  }
})

const isShow = ref(false)

const isDesktop = () => window.innerWidth >= 1024

const doropdownOpen = () => {
  if (!isDesktop()) return
  isShow.value = true
}

const dropdownClose = () => {
  if (!isDesktop()) return
  isShow.value = false
}

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

      <li class="l-nav-global__item" @mouseover="doropdownOpen" @mouseout="dropdownClose" @focusin="doropdownOpen" @focusout="dropdownClose">
        <button :class="['l-nav-global__link']">
          <span class="l-nav-global__link-label">ドロップダウン</span>
        </button>

        <div :class="['l-nav-dropdown', {'is-show' : isShow} ]">
          <ul class="l-nav-dropdown__list">
            <li class="l-nav-dropdown__item">
              <a href="/" class="l-nav-dropdown__link">メニュー01</a>
            </li>
            <li class="l-nav-dropdown__item">
              <a href="/" class="l-nav-dropdown__link">メニュー02</a>
            </li>
            <li class="l-nav-dropdown__item">
              <a href="/" class="l-nav-dropdown__link">メニュー03</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>
