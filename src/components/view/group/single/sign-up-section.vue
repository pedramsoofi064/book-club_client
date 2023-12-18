<template>
  <div class="signup-section">
    <div class="signup-section__main container">
      <img class="star-1" src="@/assets/images/star6.png" alt="" />
      <div class="signup-section__content">
        <h1 class="signup-section__title">ثبت نام در بوک کلاب سوگ</h1>
        <p class="signup-section__desc">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
      </div>
      <div class="signup-section__action">
        <img class="star-2" src="@/assets/images/star3.png" alt="" />

        <base-button class="signup-btn">ثبت‌نام برای ماه آینده</base-button>
        <base-button class="advise-btn" variant="outline"
          >دریافت مشاوره رایگان</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.signup-section {
  padding-block: 40px;
  background: var(--color-palette-green-500);
  margin-bottom: 48px;
  &__main {
    position: relative;
    @include flex($align: center, $justify: space-between);
    color: var(--color-text-light);

    .star-1 {
      position: absolute;
      right: -5%;
    }
  }

  &__title {
    @include typography(headline-lg);
    margin-bottom: 16px;
  }

  &__desc {
    @include typography(title-md);
    max-width: 500px;
  }

  &__action {
    @include flex($align: center);
    gap: 16px;
    position: relative;
    .star-2 {
      position: absolute;
      right: -60px;
      top: -30px;
    }
    .signup-btn {
      background: white;
      color: var(--color-text-dark1);
    }

    .advise-btn {
      color: white;
      border-color: #767680;
    }
  }
}
</style>
