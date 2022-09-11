<script setup lang="ts">
import type { Feature } from "@/types";

const { logo, title, subtitle, features } = defineProps<{
  logo?: string
  title?: string
  subtitle?: string
  features?: Feature[]
}>();
</script>

<template>
  <div class="cover-dock">
    <div class="cover-dock-menu">
      <div class="cover-dock-menu-list">
        <CoverDockItem
          v-for="feature in features"
          :key="feature.url"
          :feature="feature"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/mixins/cover";

.cover-dock {
  @include cover;

  margin-top: 32px;

  &-menu {
    position: absolute;
    bottom: 0;
    max-width: 100%;
    border-radius: 6px;
    background: rgb(255 255 255 / 50%);

    @supports (backdrop-filter: blur(20px)) {
      backdrop-filter: saturate(200%) blur(20px);
    }

    &-list {
      display: flex;
      flex-flow: nowrap row;
      align-items: stretch;
      margin: 4px;
      border-radius: 4px;
      user-select: none;

      @media screen and (max-width: 500px) {
        overflow-x: scroll;

        &::-webkit-scrollbar {
          height: 0;
        }
      }
    }
  }
}
</style>
