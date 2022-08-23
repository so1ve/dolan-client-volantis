<script setup lang="ts">
// const props = defineProps<{
//   name: string
// }>();
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
      un-max="w-full"
      un-flex="~ nowrap col"
      un-text="site-inner"
      un-select="none"
      un-overflow="hidden"
    >
      <!-- <div id="parallax-window">
        <div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 0px, 0px); height: 1029px; width: 1351px;">
          <img src="https://unpkg.com/volantis-static@0.0.1660614606622/media/wallpaper/minimalist/2020/056.webp" alt="parallax" class="parallax-slider" style="opacity: 1; transform: translate3d(-172px, 0px, 0px); position: absolute; height: 954px; width: 1696px; max-width: none;">
        </div>
      </div> -->
      <CoverBody />
      <CoverScrollDown />
    </div>
  </div>
</template>
