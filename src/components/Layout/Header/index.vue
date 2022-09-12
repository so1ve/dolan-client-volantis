<script setup lang="ts">
import type { NavItem } from "@/types";

const props = defineProps<{
  title: string
  items: NavItem[]
}>();

const show = $ref(true);
</script>

<template>
  <header v-show="show" class="header">
    <div class="header-container">
      <div class="header-container-wrapper">
        <div class="header-container-wrapper-main">
          <NuxtLink class="header-container-wrapper-main-title" to="/">
            {{ props.title }}
          </NuxtLink>
          <div class="header-container-wrapper-main-menu">
            <LayoutHeaderNav :items="props.items" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/styles/mixins/effects.scss";
@import "@/styles/defines.scss";

.header {
  @include blur;

  position: fixed;
  top: 0;
  z-index: 1000;
  display: block;
  width: 100%;
  height: 64px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background: var(--color-card);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  transition: box-shadow 0.28s ease, opacity 0.4s ease;

  @media screen and (max-width: $device-2k) {
    left: calc((100% - $vw55) * 0.5);
    max-width: $vw55;
  }

  @media screen and (max-width: $vw55) {
    left: 0;
    max-width: 100%;
    border-radius: 0;
  }

  &:hover {
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%), 0 4px 8px 0 rgb(0 0 0 / 10%), 0 8px 16px 0 rgb(0 0 0 / 10%);
  }

  &-container {
    margin-right: 16px;
    margin-left: 16px;

    &-wrapper {
      max-width: 1080px;
      height: 100%;
      margin: auto;
      user-select: none;

      &-main {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        transition: all 0.28s ease;

        &-title {
          position: relative;
          flex-shrink: 0;
          overflow: hidden;
          max-height: 64px;
          padding: 0 24px;
          padding-left: 24px;
          color: var(--color-text);
          font-size: 1.25rem;
          font-family: Dosis, "PingFang SC", "Microsoft YaHei", Helvetica, Arial, monospace;
          line-height: 64px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        &-menu {
          flex: 1 1;
          margin: 0 16px 0 0;
        }
      }
    }
  }
}
</style>
