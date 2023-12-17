<template>
  <div class="next-course">
    <div class="vert-line"></div>
    <div class="next-course__main container">
      <div class="hor-line"></div>

      <div class="next-course__facilitator">
        <h1 class="next-course__facilitator-title">
          تسهیل‌گر دوره بعد بوک‌کلاب سوگ
        </h1>
        <div class="next-course__facilitator-main">
          <div class="next-course__facilitator-img">
            <img src="@/assets/images/rayhan.png" alt="" />
          </div>
          <div class="next-course__facilitator-content">
            <h3 class="next-course__facilitator-name">نام تسهیلگر</h3>
            <p class="next-course__facilitator-desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
      </div>
      <div class="next-course__content">
        <div class="course">
          <h4 class="course__title">نام کتاب دوره بعد</h4>
          <p class="course__desc">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <div class="course__sec">
            <div class="course__field">
              <div class="course__field-title">
                <icon-loader name="clock" />
                <span class="course__field-text">زمان برگزاری</span>
              </div>
              <div class="course__field-value">هر سه‌شنبه، ساعت ۱۷:۳۰</div>
            </div>
          </div>
          <div class="course__sec">
            <div class="course__field">
              <div class="course__field-title">
                <icon-loader name="book-house" />
                <span class="course__field-text">نحوه برگزاری</span>
              </div>
              <div class="course__field-value">
                <span class="course__field-badge">حضوری</span>
              </div>
            </div>
            <base-button>ثبت نام دوره بعد</base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.next-course {
  border-top: 1px solid var(--color-palette-blush-500);
  position: relative;

  .vert-line {
    height: 1px;
    background-color: var(--color-palette-blush-500);
    position: absolute;
    left: 0;
    right: 10%;
    bottom: 0;
  }
  // border-bottom: 1px s olid var(--color-palette-blush-500);
  &__main {
    @include flex($align: stretch);
    padding-top: 50px;
    position: relative;
    .hor-line {
      width: 1px;
      background-color: var(--color-palette-blush-500);
      position: absolute;
      top: 0;
      right: 0;
      bottom: -30px;
    }
  }

  &__facilitator {
    padding: 40px 50px;
    background-color: var(--color-palette-lightBeige);
    border-radius: 213px 0px 0px 213px;
    // flex: 60%;
    width: 55%;
  }

  &__facilitator-title {
    @include typography(headline-md);
    color: var(--color-palette-blush-600);
    margin-bottom: 27px;
  }
  &__facilitator-main {
    @include flex();
    gap: 36px;
  }
  &__facilitator-img {
    min-width: 270px;
    height: 270px;
    border-radius: $circle;
    overflow: hidden;
    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &__facilitator-content {
    margin-block: auto;
  }
  &__facilitator-name {
    color: var(--color-text-dark1);
    @include typography(title-lg);
    margin-bottom: 12px;
  }
  &__facilitator-desc {
    color: var(--color-text-dark2);
    @include typography(text-lg);
    // margin-bottom: 12px;
    max-width: 380px;
  }

  &__content {
    padding: 40px 50px;
    background-color: var(--color-background-light);
    border: 1px solid var(--color-palette-darkBeige);
    border-radius: 48px;
    flex: 1;
  }

  .course {
    margin-block: auto;

    &__title {
      color: var(--color-text-dark1);
      @include typography(title-lg);
      margin-bottom: 12px;
    }
    &__desc {
      color: var(--color-text-dark2);
      @include typography(text-lg);
      margin-bottom: 25px;
    }
    &__sec {
      @include flex($justify: space-between);
      margin-bottom: 25px;
    }
    &__field {
    }
    &__field-title {
      @include flex($align: center);
      gap: 5px;
      color: var(--color-text-dark1);
      @include typography(title-md);
      margin-bottom: 8px;
    }

    &__field-value {
      color: var(--color-text-dark2);
      @include typography(text-lg);
    }
    &__field-badge {
      color: var(--color-text-dark1);
      @include typography(title-md);
      padding: 5px 10px;
      background-color: var(--color-palette-darkBeige);
      border-radius: 100px;
    }
  }
}
</style>
