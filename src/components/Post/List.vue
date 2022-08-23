<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  posts: Post[]
}>();
</script>

<template>
  <div
    un-flex="~ wrap"
    un-w="auto"
    un-max="w-[1080px]"
    un-m="x-auto"
    un-justify="between"
    un-items="stretch"
  >
    1
  </div>
</template>
