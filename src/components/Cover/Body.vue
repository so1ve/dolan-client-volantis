<script setup lang="ts">
import type { Feature } from "@/types";

const TITLE = "Volantis";
const SUBTITLE = "中文创作者社区";

const features: Feature[] = [
  {
    name: "博客",
    url: "11",
    img: "https://unpkg.com/volantis-static@0.0.1654736714924/media/twemoji/assets/svg/1f4f0.svg",
    active: true,
  },
  {
    name: "文档",
    url: "11",
    img: "https://unpkg.com/volantis-static@0.0.1660614606622/media/twemoji/assets/svg/1f516.svg",
  },
];
</script>

<template>
  <div class="cover-body">
    <CoverTitle :title="TITLE" :subtitle="SUBTITLE" />
    <CoverDock :features="features" />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/mixins/cover";

.cover-body {
  @include cover;

  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin-top: 64px;
  margin-bottom: 100px;
}
</style>
