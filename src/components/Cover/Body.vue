<script setup lang="ts">
import type { Feature } from "@/types";

const features: Feature[] = [
  {
    name: "1",
    rel: "1",
    url: "11",
    img: "https://unpkg.com/volantis-static@0.0.1654736714924/media/twemoji/assets/svg/1f4f0.svg",
    active: true,
  },
  {
    name: "1",
    rel: "1",
    url: "11",
    img: "https://unpkg.com/volantis-static@0.0.1654736714924/media/twemoji/assets/svg/1f4f0.svg",
  },
  {
    name: "1",
    rel: "1",
    url: "11",
    img: "https://unpkg.com/volantis-static@0.0.1654736714924/media/twemoji/assets/svg/1f4f0.svg",
  },
];
</script>

<template>
  <div
    un-relative
    un-cover
    un-m="t-16 b-25"
    un-w="full"
    un-h="full"
  >
    <!-- Hello {{ props.name }} -->
    <div
      un-cover
      un-m="b-12"
    >
      <!-- TODO: Font Family -->
      <p
        un-text="12.5"
        un-leading="[1.2]"
        un-text-shadow="cover"
      >
        Volantis
      </p>
      <p un-text="size-5">
        中文创作者社区
      </p>
    </div>
    <div
      un-cover
      un-m="t-8"
    >
      <CoverDock :features="features" />
    </div>
  </div>
</template>
