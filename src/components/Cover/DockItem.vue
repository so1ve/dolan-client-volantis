<script lang="ts" setup>
import type { Feature } from "@/types";

const { feature } = defineProps<{
  feature: Feature
}>();
</script>

<template>
  <a
    :key="feature.url"
    backdrop-filter="none"
    :bg="`hover:card-bg ${feature.active ? 'card-bg' : ''}`"
    flex="col grow shrink-0"
    font="semibold"
    items="center"
    p="3"
    leading="24px"
    rounded="1"
    un-text="center 6 card-text"
    content="end"
    :href="feature.url"
    :rel="feature.rel"
    :target="feature.target"
  >
    <img
      v-if="feature.img"
      block
      rounded="0.5"
      m="1"
      min-w="10"
      max-w="11"
      :src="feature.img"
    >
    <p un-text="3.5 text">
      {{ feature.name }}
    </p>
  </a>
</template>
