<template>
  <div class="hero">
    <div class="hero__main container">
      <div class="hero__content">
        <div class="line"></div>
        <div class="hero__intro"></div>
      </div>
      <div class="hero__image">
        <img class="hero__img" src="@/assets/images/hero.png" alt="" />
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding-top: 130px;
  width: 100%;

  &__main {
    // padding: 50px;
    @include flex();
    height: 650px;
  }

  &__content {
    width: 40%;
    background: var(--color-background-light);
    height: inherit;
    border-top: 1px solid var(--color-palette-blush-500);
    border-bottom: 1px solid var(--color-palette-blush-500);
    position: relative;
    .line {
      width: 1px;
      position: absolute;
      background-color: var(--color-palette-blush-500);
      top: -130px;
      bottom: 0;
      left: 0;
    }
  }

  &__intro {
    width: 100%;
    height: 100%;
    border-radius: radius(500) 0 0 radius(500);
    background-color: var(--color-palette-green-500);
  }

  &__image {
    background-color: var(--color-palette-lightBeige);
    flex: 1;
    // padding: 60px;
    position: relative;
    @include flex();
    height: 100%;
    .circle {
      background-color: var(--color-palette-darkBeige);
      border-radius: 0 radius(500) radius(500) 0;
      //   position: absolute;
      //   left: 0;
      //   bottom: 0;
      //   top: 0;
      height: 100%;
      width: 380px;
      
    }
  }

  &__img {
    flex: 1;
    max-width: 500px;
    margin-right: auto;
  }
}
</style>
