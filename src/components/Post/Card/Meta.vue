<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  post: Post
}>();

const formattedCreatedDate = useDateFormat(props.post.created, "YYYY-MM-DD");
</script>

<template>
  <div class="post-card-meta">
    <div class="post-card-meta-start">
      <!-- TODO: Author avatar -->
      <!-- Author message isn't supported by Dolan Server yet -->
      <!-- <a
        class="post-card-meta-inner-avatar"
        target="_blank"
        rel="external nofollow noopener noreferrer" href="https://coolchong.cn"
      >
        <img
          class="post-card-meta-inner-avatar-img"
          src="https://pic.imgdb.cn/item/60969280d1a9ae528f4f0270.jpg"
        >
      </a> -->
      <time
        itemprop="dateCreated datePublished"
        :datetime="props.post.created"
      >
        {{ formattedCreatedDate }}
      </time>
      <Dot v-if="props.post.categories.length" />
    </div>
    <div class="post-card-meta-end">
      <a
        class="post-card-meta-end-readmore"
        itemprop="url"
        rel="external nofollow noopener noreferrer" :href="getPostLink(props.post.slug)"
      >
        阅读更多
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post-card-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgb(68 68 68 / 10%);
  color: var(--color-meta);

  &-start,
  &-end {
    display: flex;
    align-items: center;
    user-select: none;
  }

  &-start {
    &-avatar {
      margin-right: 0.75em;
      line-height: 0;

      &-img {
        display: block;
        object-fit: cover;
        width: 24px;
        height: 24px;
        border-radius: 12px;
      }
    }

    & time {
      font-size: 0.875rem;
    }
  }

  &-end {
    &-readmore {
      font-weight: 700;
    }
  }
}
</style>
