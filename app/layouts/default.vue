<template>
  <div class="l-body" id="body">
    <LayoutHeader />

    <main class="l-main">

      <LayoutHero />

      <div class="l-main__wrap">
        <slot/>
      </div>
    </main>

    <LayoutFooter />
  </div>
</template>
