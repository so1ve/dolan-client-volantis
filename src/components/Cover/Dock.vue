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
  <div>
    <div
      absolute
      bottom="0"
      max-w="full"
      rounded="1.5"
      bg="white/50"
      backdrop="saturate-200 blur-20"
    >
      <div
        flex="~ nowrap row gap-1"
        items="stretch"
        rounded="1"
        select="none"
        m="1"
      >
        <CoverDockItem
          v-for="feature in features"
          :key="feature.url"
          :feature="feature"
        />
      </div>
    </div>
  </div>
</template>
