<script setup lang="ts">
import type { CSSProperties } from "vue";

const props = defineProps<{
  images: string[]
}>();

const windowSize = useWindowSize();

const imageRef = $ref<HTMLImageElement | null>(null);

const imageRealSize = reactive({ width: 0, height: 0 });

watch(() => imageRef?.naturalHeight, () => {
  imageRealSize.height = imageRef?.naturalHeight as number;
  imageRealSize.width = imageRef?.naturalWidth as number;
});

const currentIndex = $ref(0);
const currentImage = $computed(() => props.images[currentIndex]);

const zoomSize = $computed(() => windowSize.height.value / (imageRealSize.height || windowSize.height.value));
const zoomedWidth = $computed(() => imageRealSize.width * zoomSize < windowSize.width.value ? windowSize.width.value : imageRealSize.width * zoomSize);
const zoomedWidthWithPx = $computed(() => `${zoomedWidth}px`);
const offset = $computed(() => (zoomedWidth - windowSize.width.value) / 2);
const currentScrollY = $(useWindowScroll({ window }).y);
const transformMirror = $computed(() => -currentScrollY);
const transformImage = $computed(() => -transformMirror * 0.75);

const mirrorCSS: CSSProperties = $computed(() => ({
  transform: `translate3d(0px, ${transformMirror}px, 0px)`,
}));

const imageCSS: CSSProperties = $computed(() => ({
  transform: `translate3d(-${offset}px, ${transformImage}px, 0px)`,
  width: zoomedWidth,
}));
</script>

<template>
  <div class="cover-parallax">
    <div
      class="cover-parallax-mirror"
      :style="mirrorCSS"
    >
      <!-- TODO: Get real height -->
      <img
        ref="imageRef"
        :style="imageCSS"
        :src="currentImage"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.cover-parallax {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 0 0;

  &-mirror,
  &-mirror-new {
    position: fixed;
    overflow: hidden;
    width: 100vw;
    height: calc(100vh + 100px);
    animation-name: fadeIn;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-fill-mode: forwards;

    & img {
      position: absolute;
      max-width: none;
      height: 100vh;
      width: v-bind(zoomedWidthWithPx);
    }
  }
}
</style>