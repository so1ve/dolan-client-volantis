<script lang="ts" setup>
import type { Feature } from "@/types";

const { feature } = defineProps<{
  feature: Feature
}>();

const a = $ref("");
</script>

<template>
  <a
    :key="feature.url"
    un-backdrop="filter-none"
    :un-bg="`hover:card-bg ${feature.active ? 'card-bg' : ''}`"
    un-flex="col grow shrink-0"
    un-font="semibold"
    un-items="center"
    un-p="3"
    un-leading="[24px]"
    un-rounded="1"
    un-text="center 6 card-text"
    un-content="end"
    :href="feature.url"
    :rel="feature.rel"
    :target="feature.target"
  >
    <img
      v-if="feature.img"
      un-block
      un-rounded="0.5"
      un-m="1"
      un-min="w-10"
      un-max="w-11"
      :src="feature.img"
    >
    <p un-text="3.5 text">
      {{ feature.name }}
    </p>
  </a>
</template>
