<script setup lang="ts">
import type { Feature } from "../types";

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
  <div>
    Hello
    <CoverDock :features="features" />
    <div w="200px">
      <WidgetText name="test">
        22
      </WidgetText>
    </div>
  </div>
</template>
