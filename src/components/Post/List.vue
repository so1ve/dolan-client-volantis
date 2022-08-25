<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  posts: Post[]
}>();
</script>

<template>
  <section
    un-block
    un-m="b-4"
    un-flex="col-gap-4"
  >
    <PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard />
  </section>
</template>
