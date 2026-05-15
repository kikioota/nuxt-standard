<script setup>
  const route = useRoute()
  const breadcrumbs = computed(() => route.meta.breadcrumbs ?? [])
</script>

<template>
  <nav v-if="breadcrumbs.length" class="l-breadcrumb">
    <ol class="l-breadcrumb__list">
      <li class="l-breadcrumb__item">
        <a href="/" class="l-breadcrumb__link">TOP</a>
      </li>
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="l-breadcrumb__item"
      >
        <a :href="crumb.path" v-if="crumb.path" class="l-breadcrumb__link">
          {{ crumb.label }}
        </a>
        <span v-else class="l-breadcrumb__current">{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>
