<template>
  <div class="l-body" id="body">
    <LayoutHeader className="" />

    <main class="l-main">

      <LayoutHero />

      <div class="l-main__wrap">
        <slot/>
      </div>
    </main>

    <LayoutFooter />

    <!-- 不要な場合削除 -->
    <LayoutHeaderMain className="l-header-main--fixed" />
  </div>
</template>
