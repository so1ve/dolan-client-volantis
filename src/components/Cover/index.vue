<script setup lang="ts">
// const props = defineProps<{
//   name: string
// }>();

const parallaxImgs = [
  "https://unpkg.com/volantis-static@0.0.1660614606622/media/wallpaper/minimalist/2020/006.webp",
  "https://fastly.jsdelivr.net/npm/mhgoos@0.0.1655517110336/20220118205901.png",
];
</script>

<template>
  <div class="cover">
    <div class="cover-wrapper">
      <ClientOnly>
        <CoverParallax :images="parallaxImgs" />
      </ClientOnly>
      <CoverBody />
      <ClientOnly>
        <CoverScrollDown />
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cover {
  min-height: 64px;

  &-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    align-self: center;
    overflow: hidden;
    max-width: 100%;
    height: calc(100vh + 100px);
    margin-bottom: -100px;
    padding: 0 16px;
    padding-bottom: 100px;
    color: var(--color-site-inner);
    user-select: none;
  }
}
</style>
