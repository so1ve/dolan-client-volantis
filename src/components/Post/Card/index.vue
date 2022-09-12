<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  post: Post
}>();
</script>

<template>
  <div class="post-card">
    <PostCardHeadingImage v-if="props.post.metas.headingImage" :post="props.post" />
    <h2 class="post-card-title">
      <NuxtLink
        class="post-card-title-a"
        :to="getPostLink(props.post.slug)"
      >
        {{ props.post.title }}
      </NuxtLink>
    </h2>
    <div class="post-card-excerpt">
      {{ props.post.excerpt }}
    </div>
    <PostCardMeta :post="props.post" />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/mixins/cover.scss";
@import "@/styles/mixins/effects.scss";

.post-card {
  @include blur;

  overflow: hidden;
  margin-bottom: 16px;
  padding: 24px;
  border-radius: 8px;
  background: rgb(255 255 255 / 90%) !important;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  text-align: justify;
  visibility: visible;
  transition: all 0.28s ease 0s, opacity 0.8s ease-out 0s, transform 0.8s ease-out 0s;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

  &:hover {
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%), 0 4px 8px 0 rgb(0 0 0 / 10%), 0 8px 16px 0 rgb(0 0 0 / 10%);
  }

  &-title {
    margin-bottom: 12px;
    font-weight: 500;
    line-height: 1.4;

    &-a {
      color: var(--color-h1);
    }
  }

  &-excerpt {
    color: var(--color-p);
    word-break: break-word;
  }
}
</style>
