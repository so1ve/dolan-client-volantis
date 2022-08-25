<script setup lang="ts">
// const props = defineProps<{
//   name: string
// }>();

const parallaxImgs = [
  "https://unpkg.com/volantis-static@0.0.1660614606622/media/wallpaper/minimalist/2020/035.webp",
  "https://unpkg.com/volantis-static@0.0.1660614606622/media/wallpaper/minimalist/2020/056.webp",
];
</script>

<template>
  <div
    un-min="h-16"
  >
    <div
      un-relative
      un-items-center
      un-content-center
      un-self-center
      un-h="[calc(100vh_+_100px)]"
      un-p="b-25 x-4"
      un-m="b--25"
      un-max="w-full"
      un-flex="~ nowrap col"
      un-text="site-inner"
      un-select="none"
      un-overflow="hidden"
    >
      <ClientOnly>
        <CoverParallax :images="parallaxImgs" />
      </ClientOnly>
      <CoverBody />
      <CoverScrollDown />
    </div>
  </div>
</template>
