<script setup lang="ts">
import type { Feature } from "@/types";

const { logo, title, subtitle, features } = defineProps<{
  logo?: string
  title?: string
  subtitle?: string
  features?: Feature[]
}>();
</script>

<template>
  <div
    un-absolute
    un-bottom="0"
    un-max="h-200vh"
    un-rounded="1.5"
    un-bg="white/50"
    un-backdrop="saturate-200 blur-20"
  >
    <div
      un-flex="~ nowrap row gap-1"
      un-items="stretch"
      un-rounded="1"
      un-select="none"
      un-m="1"
    >
      <CoverDockItem
        v-for="feature in features"
        :key="feature.url"
        :feature="feature"
      />
    </div>
  </div>
</template>
