<script setup lang="ts">
import ZondiconsCheveronDown from "virtual:icons/zondicons/cheveron-down";

const mainElement = document.querySelector("#volantis-main");

// TODO: top += header.top
function onClick () {
  window.scrollTo({
    top: mainElement!.getBoundingClientRect().top + document.documentElement.scrollTop,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="cover-scroll-down">
    <ZondiconsCheveronDown
      class="cover-scroll-down-i"
      @click="onClick"
    />
  </div>
</template>

<style scoped lang="scss">
$icon-size: 36px;

@keyframes scroll-down {
  0% {
    top: 0;
    opacity: 1;
  }

  50% {
    top: -16px;
    opacity: 0.4;
  }

  100% {
    top: 0;
    opacity: 1;
  }
}

.cover-scroll-down {
  position: absolute;
  bottom: 100px;
  width: 100%;
  height: 64px;
  text-align: center;

  &-i {
    position: absolute;
    left: calc(50% - $icon-size / 2);
    width: $icon-size;
    padding-top: 10px;
    color: #fff;
    font-size: $icon-size;
    line-height: 64px;
    text-shadow: 0 1px 2px rgb(0 0 0 / 10%);
    cursor: pointer;
    animation: scroll-down 1.5s infinite;
  }
}
</style>
