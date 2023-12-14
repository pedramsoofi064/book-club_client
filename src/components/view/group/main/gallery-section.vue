<template>
  <div class="gallery">
    <h1 class="gallery__title">
      <slot name="title">گالری تصاویر </slot>
    </h1>
    <div class="gallery__images">
      <div class="main-img img"></div>
      <div class="img"></div>
      <div class="secondary-img img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="last-img img"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gallery {
  margin-top: 80px;
  position: relative;
  margin-bottom: 140px;
  &__title {
    text-align: center;
    margin-bottom: 32px;
    color: var(--color-palette-blush-600);
    @include typography(headline-lg);
  }

  &__images {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 246px);
    gap: 12px;
    direction: ltr;

    .main-img {
      grid-row: 1 / 3;
      grid-column: 1 / 3;
      border-radius: 80px 0px 0px 80px;
    }
    .secondary-img {
      grid-row: 1;
      grid-column: 4/ 6;
      border-radius: 0px 80px 0px 0px;

    }
    .last-img {
      border-radius: 0px 0px 80px 0px;
    }
    .img {
      width: 100%;
      background-color: grey;
    }
  }
}
</style>
