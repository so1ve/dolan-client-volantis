<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  post: Post
}>();
</script>

<template>
  <div class="post-card-heading-image">
    <NuxtLink
      class="post-card-heading-image-a"
      :to="getPostLink(props.post.slug)"
    >
      <img
        class="post-card-heading-image-img"
        :alt="props.post.title"
        :src="props.post.metas.headingImage"
      >
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.post-card-heading-image {
  width: calc(100% + 3 * 16px);
  margin-top: -24px;
  margin-bottom: 20px;
  margin-left: -24px;

  &-a {
    display: block;
    overflow: hidden;
    height: 280px;
  }

  &-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 3s ease-out, opacity 0.5s ease-out;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
