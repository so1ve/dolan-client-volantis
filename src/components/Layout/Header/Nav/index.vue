<script setup lang="ts">
import type { NavItem } from "@/types";

const props = defineProps<{
  items: NavItem[]
}>();
</script>

<template>
  <ul class="nav-list">
    <LayoutHeaderNavItem v-for="item in props.items" :key="item.name" :item="item" />
  </ul>
</template>

<style scoped lang="scss">
.nav-list {
  display: flex;
  align-items: stretch;
}
</style>
