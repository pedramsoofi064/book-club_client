<template>
  <div class="main-hero container">
    <img class="star-1" src="@/assets/images/star5.png" alt="" />

    <div class="main-hero__container">
      <img class="star-2" src="@/assets/images/star3.png" alt="" />
      <div class="main-hero__content">
        <div class="main-hero__text">
          <h2 class="main-hero__heading">بوک کلاب‌ {{ bookClub.title }}</h2>
          <div class="main-hero__groups">
            <div
              v-for="(group, index) in bookClub.groups"
              :key="index"
              class="group-item"
            >
              {{ group }}
              <span v-if="index !== bookClub.groups.length - 1">,</span>
            </div>
          </div>
        </div>
        <div class="main-hero__img"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const bookClub = {
      title: "ریحان",
      groups: ["سوگ", "‌خودشناسی", " روابط عاطفی"],
    };

    return {
      bookClub,
    };
  },
};
</script>

<style lang="scss">
.main-hero {
  padding-bottom: 140px;
  padding-top: 150px;
  border-left: 1px solid var(--color-palette-blush-500);
  position: relative;
  .star-1 {
    position: absolute;
    left: 5%;
    bottom: 2rem;
  }
  &__container {
    height: 390px;
    border-radius: 1000px;
    background-color: var(--color-palette-linenMist);
    // overflow: hidden;
    padding-left: 100px;
    position: relative;
    .star-2 {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  &__content {
    width: 100%;
    height: inherit;
    border-radius: 1000px;
    padding-right: 80px;

    @include flex($align: center);
    background: #d2cbbb;
  }

  &__heading {
    @include typography(display-sm);
    color: var(--color-text-dark1);
  }

  &__groups {
    @include flex();
    margin-top: 10px;
    .group-item {
      @include typography(title-lg);
      color: var(--color-text-dark2);
    }
  }
}
</style>
