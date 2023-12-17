<template>
  <div class="single-hero container">
    <div class="single-hero__main">
      <img class="star" src="@/assets/images/star3.png" alt="" />
      <div class="single-hero__book">
        <div class="single-hero__shape">کتاب ماه آینده</div>
        <book-item />
      </div>
      <div class="single-hero__content">
        <h1 class="single-hero__heading">بوک کلاب سوگ</h1>
        <p class="single-hero__desc">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <base-button>ثبت‌نام برای ماه آینده</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.single-hero {
  padding-top: 150px;
  border-right: 1px solid var(--color-palette-blush-500);

  &__main {
    position: relative;
    width: 100%;
    background-color: var(--color-palette-darkBeige);
    padding: 50px 15%;
    border-radius: 1000px;
    @include flex($align: stretch);
    gap: 100px;

    .star {
      position: absolute;
      bottom: 15%;
      right: 8%;
    }
  }

  &__book {
    position: relative;
  }

  &__shape {
    position: absolute;
    width: 100px;
    height: 100px;
    z-index: 100;
    background-image: url("@/assets/images/star-shape.png");
    @include typography(label-lg);
    @include flex($justify: center, $align: center);
    padding: 20px;
    text-align: center;
    transform: rotate(-20deg);
    left: -50px;
    top: 15%;
  }
  &__content {
    flex: 1;
    @include flex($dir: column, $justify: center);
  }

  &__heading {
    color: var(--color-text-dark1);
    @include typography(display-lg);
    margin-bottom: 12px;
  }

  &__desc {
    color: var(--color-text-dark2);
    @include typography(title-lg);
    margin-bottom: 36px;
  }
}
</style>
