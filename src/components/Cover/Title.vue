<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
}>();
</script>

<template>
  <div class="cover-title">
    <!-- TODO: Font Family -->
    <p class="cover-title-main">
      {{ props.title }}
    </p>
    <p class="cover-title-sub">
      {{ props.subtitle }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/mixins/cover.scss";

.cover-title {
  @include cover;

  margin-bottom: 48px;

  &-main {
    font-size: 3.125rem;
    line-height: 1.2;
    text-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  }

  &-sub {
    font-size: 20px;
  }
}
</style>
