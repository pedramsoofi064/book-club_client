<template>
  <div class="started">
    <div class="started__main container">
      <div class="started__content">
        <h3 class="started__title">چی شد که شروع شد؟</h3>
        <p class="started__desc">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </div>
      <div class="started__image">
        <div class="image-container">
          <img src="@/assets/images/rayhan.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.started {
  height: 524px;
  border-top: 1px solid var(--color-palette-blush-500);
  border-bottom: 1px solid var(--color-palette-blush-500);
  &__main {
    // display: grid;
    // grid-template-columns: 3fr 1fr;
    height: 100%;
    gap: 30px;
    @include flex();
    gap: 30px;
  }

  &__content {
    flex: 1;
    height: 100%;
    @include flex($dir: column, $justify: center);
  }

  &__title {
    color: var(--color-palette-blush-600);
    margin-bottom: 16px;
    @include typography(headline-lg);
  }

  &__desc {
    color: var(--color-text-dark1);
    @include typography(text-lg);
    width: 75%;
  }

  &__image {
    width: 393px;
    height: 524px;
    flex-shrink: 0;
    border-left: 1px solid var(--color-palette-blush-500);
    border-right: 1px solid var(--color-palette-blush-500);
    .image-container {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
