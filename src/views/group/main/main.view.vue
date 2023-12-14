<template>
  <div class="book-club">
    <main-hero />
    <how-started />
    <main-groups />
    <div class="gallery_container container">
      <img class="star-1" src="@/assets/images/star2.png" alt="" />
      <img class="star-2" src="@/assets/images/star3.png" alt="" />

      <gallery-section />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.gallery_container {
  position: relative;
  .star-1 {
    position: absolute;
    right: -5%;
    top: 25%;
  }
  .star-2 {
    position: absolute;
    left: -5%;
    bottom: 10%;
  }
}
</style>
