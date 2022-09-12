<script setup lang="ts">
import type { NavItem } from "@/types";

const props = defineProps<{
  item: NavItem
}>();
</script>

<template>
  <li class="nav-list-item">
    <NuxtLink
      class="nav-list-item-a"
      :to="props.item.href"
      :title="props.item.name"
    >
      <!-- TODO: Icon -->
      <!-- <i class="fa-duotone fa-book faa-tada fa-fw" /> -->
      {{ props.item.name }}
    </NuxtLink>
  </li>
</template>

<style scoped lang="scss">
.nav-list-item {
  position: relative;
  justify-content: center;
  height: 100%;
  border-radius: 4px;
  color: var(--color-list);
  line-height: 64px;
  line-height: 2.4;

  &-a {
    display: block;
    overflow: hidden;
    max-height: 64px;
    padding: 0 8px;
    border-bottom: 2px solid transparent;
    color: inherit;
    font-weight: 600;
  }
}
</style>
