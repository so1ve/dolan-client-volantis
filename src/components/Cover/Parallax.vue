<script setup lang="ts">
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

const mirrorTransformText = $computed(() => `translateY(${transformMirror}px)`);
const imageTransformText = $computed(() => `translate3d(-${offset}px, ${transformImage}px, 0px)`);
</script>

<template>
  <div class="cover-parallax">
    <div class="cover-parallax-mirror">
      <!-- TODO: Get real height -->
      <img
        ref="imageRef"
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
    transform: v-bind(mirrorTransformText);

    & img {
      position: absolute;
      max-width: none;
      height: 100vh;
      transform: v-bind(imageTransformText);
      width: v-bind(zoomedWidthWithPx);
    }
  }
}
</style>
