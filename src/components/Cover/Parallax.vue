<script setup lang="ts">
const props = defineProps<{
  images: string[]
}>();

const SPEED = 0.25;

const windowSize = useWindowSize();

const imageRef = $ref<HTMLImageElement | null>(null);

const imageRealSize = reactive({ width: 0, height: 0 });

const currentIndex = $ref(0);
const currentImage = $computed(() => props.images[currentIndex]);

const zoomSize = $computed(() => windowSize.height.value / (imageRealSize.height || windowSize.height.value));
const zoomedWidth = $computed(() => {
  const zoomed = imageRealSize.width * zoomSize;
  return (zoomed < windowSize.width.value ? windowSize.width.value : zoomed) | 0;
});
const zoomedWidthWithPx = $computed(() => `${zoomedWidth}px`);
const offset = $computed(() => (zoomedWidth - windowSize.width.value) / 2);
const currentScrollY = $(useWindowScroll({ window }).y);
const transformMirror = $computed(() => -currentScrollY);
const transformImage = $computed(() => -transformMirror * (1 - SPEED));

const mirrorTransformText = $computed(() => `translateY(${transformMirror}px)`);
const imageTransformText = $computed(() => `translate3d(-${offset}px, ${transformImage}px, 0px)`);

const imageRefListener = () => {
  imageRealSize.width = imageRef!.naturalWidth;
  imageRealSize.height = imageRef!.naturalHeight;
};

onMounted(() => {
  imageRef?.addEventListener("load", imageRefListener);
});

onBeforeUnmount(() => {
  imageRef?.removeEventListener("load", imageRefListener);
});
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
    transform: v-bind(mirrorTransformText);
    animation-name: fadeIn;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-fill-mode: forwards;

    & img {
      position: absolute;
      width: v-bind(zoomedWidthWithPx);
      max-width: none;
      height: 100vh;
      transform: v-bind(imageTransformText);
    }
  }
}
</style>
