<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  posts: Post[]
}>();

const demoPost: Partial<Post> = {
  title: "测试",
  excerpt: "Volantis 是一个功能丰富、高度模块化的 Hexo 博客主题。得益于其强大的模块化特性，您可以轻松搭建一个极简风格的博客，也可以仿照官网搭建一个多人协作的、包含文档模块的大体量综合型博客。",
  slug: "t",
  metas: {
    headingImage: "https://fastly.jsdelivr.net/npm/mhgoos@0.0.1655517110336/20220118205901.png",
  },
  created: "2022-09-03T08:10:42.009Z",
  categories: [],
};
</script>

<template>
  <section class="post-list">
    <PostCard :post="demoPost as any" />
    <PostCard :post="demoPost as any" />
  </section>
</template>

<style scoped lang="scss">
.post-list {
  margin-bottom: 16px;
  column-gap: 16px;
}
</style>
