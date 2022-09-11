<script lang="ts" setup>
import type { Feature } from "@/types";

const { feature } = defineProps<{
  feature: Feature
}>();

const a = $ref("");
</script>

<template>
  <NuxtLink
    :key="feature.url"
    class="cover-dock-item"
    :to="feature.url"
    :rel="feature.rel"
    :target="feature.target"
  >
    <img
      v-if="feature.img"
      class="cover-dock-item-img"
      :src="feature.img"
    >
    <p class="cover-dock-item-p">
      {{ feature.name }}
    </p>
  </NuxtLink>
</template>

<style scoped lang="scss">
.cover-dock-item {
  display: flex;
  flex: 1 0;
  flex-direction: column;
  align-content: flex-end;
  align-items: center;
  padding: 12px;
  border-bottom: none;
  border-radius: 4px;
  color: rgb(68 68 68 / 70%);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 24px;
  text-align: center;

  @media screen and (max-width: 500px) {
    padding: 12px 8px;
  }

  &:hover,
  &-active {
    background: var(--color-card);
  }

  &-img {
    display: block;
    min-width: 40px;
    max-width: 44px;
    margin: 4px;
    border-radius: 2px;

    @media screen and (max-width: 500px) {
      min-width: 32px;
      max-width: 36px;
      margin: 2px 4px;
    }

    @media screen and (max-width: 768px) {
      min-width: 36px;
      max-width: 40px;
    }
  }

  &-p {
    color: var(--color-text);
    font-size: 0.875rem;
  }
}
</style>
