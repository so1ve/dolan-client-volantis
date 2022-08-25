<script setup lang="ts">
import type { CSSProperties } from "vue";
import { useIntervalFn } from "@vueuse/core";

const props = defineProps<{
  images: string[]
}>();

const DURATION = 5000;

let currentIndex = $ref(0);
const currentImage = $computed(() => props.images[currentIndex]);

useIntervalFn(() => {
  if (currentIndex + 1 >= props.images.length) { currentIndex = 0; } else { currentIndex++; }
}, DURATION);

let currentScrollY = $ref(window.scrollY);
document.addEventListener("scroll", () => {
  currentScrollY = window.scrollY;
});

const transformMirror = $computed(() => -currentScrollY);
const transformImage = $computed(() => -transformMirror * 0.75);

const mirrorCSS: CSSProperties = $computed(() => ({
  transform: `translate3d(0px, ${transformMirror}px, 0px)`,
}));

const imageCSS: CSSProperties = $computed(() => ({
  transform: `translate3d(0px, ${transformImage}px, 0px)`,
}));
</script>

<template>
  <div
    un-absolute
    un-w="full"
    un-h="full"
    un-z="-100"
  >
    <div
      un-fixed
      un-overflow="hidden"
      :style="mirrorCSS"
    >
      <Transition name="fade" mode="in-out">
        <!-- TODO: Get real height -->
        <img
          un-w="screen"
          un-h="[calc(100vh_+_100px)]"
          :style="imageCSS"
          :src="currentImage"
        >
      </Transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
