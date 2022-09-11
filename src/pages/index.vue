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
.home {
  width: calc(100% - 1 * 240px);
  padding-right: 16px;

  @media screen and (max-width: 768px) and (max-width: 500px) {
    width: 100%;
    padding-right: 0;
  }
}
</style>
