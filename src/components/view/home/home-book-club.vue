<template>
  <div class="home-bc">
    <div class="home-bc__desc">
      <h1 class="desc__title">بوک کلاب‌های ما را بشناسید</h1>
      <p class="desc__text">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است
      </p>
    </div>
    <div class="home-bc__items">
      <div class="home-bc__item main-item"></div>
      <div class="item-container">
        <div class="home-bc__item right-item"></div>
        <div class="home-bc__item left-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home-bc {
  margin-top: 140px;
  margin-right: 15%;

  &__desc {
    margin-right: 24px;
    
    .desc__title {
      color: var(--color-palette-blush-600);
      @include typography(headline-lg);
    }
    .desc__text {
      color: var(--color-text-dark2);
      @include typography(text-lg);
      max-width: 500px;
      margin-top: 16px;
    }
  }

  &__items {
    margin-top: 20px;
    padding-left: 20%;
    border-top: 1px solid var(--color-palette-blush-500);

  }

  &__item {
    border-radius: 1000px;
    height: 390px;
    flex: 1;
    background-color: var(--color-palette-darkBeige);
  }

  border-right: 1px solid var(--color-palette-blush-500);
  .main-item {
    background-color: var(--color-palette-linenMist);
    margin-bottom: 32px;

  }

  .left-item {
    border-radius: 1000px 0 0 1000px;
  }

  .right-item {
    border-radius: 0 1000px 1000px 0;
  }

  .item-container {
    @include flex();
    gap: 32px;
  }
}
</style>
