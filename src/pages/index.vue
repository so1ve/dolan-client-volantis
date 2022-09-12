<script>
definePageMeta({
  layout: "home",
});
</script>

<template>
  <div class="home">
    <PostList />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/defines.scss";

.home {
  width: calc(100% - 1 * 240px);
  padding-right: 16px;

  @media screen and (max-width: $device-tablet) and (max-width: $device-mobile) {
    width: 100%;
  }

  @media screen and (max-width: $device-tablet) {
    width: 100%;
    padding-right: 0;
  }
}
</style>
