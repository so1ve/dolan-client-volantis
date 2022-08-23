<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  post: Post
}>();
</script>

<template>
  <div
    un-shadow="~ hover:lg"
    un-transition="duration-0.28s"
    un-m="b-4"
    un-p="6"
    un-rounded="2"
    un-text="justify"
    un-bg="card-bg"
  >
    {{ JSON.stringify(props.post) }}
  </div>
</template>
