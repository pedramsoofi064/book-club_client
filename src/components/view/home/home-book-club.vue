
<template>
  <div class="home-bc">
    <div class="home-bc__desc">
      <div class="container desc-main">
        <h1 class="desc__title">بوک کلاب‌های ما را بشناسید</h1>
        <p class="desc__text">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
      </div>
    </div>
    <div class="home-bc__items container">
      <div class="line"></div>
      <div class="home-bc__item item main-item">
        <div class="item__content">
          <div class="item__title">
            <span class="item__title-text">{{ items[0].title }}</span>
            <span class="item__arrow">
              <icon-loader name="arrow-top-left" />
            </span>
          </div>
          <div class="item__groups">
            <div
              v-for="(group, index) in items[0].groups"
              :key="index"
              class="group-item"
            >
              {{ group }}
              <span v-if="index !== items[0].groups.length - 1">,</span>
            </div>
          </div>
        </div>
        <div class="item__img"></div>
      </div>
      <div class="item-container">
        <div
          v-for="(item, index) in restItems"
          :key="index"
          class="home-bc__item item"
        >
          <div class="item__content">
            <div class="item__title">
              <span class="item__title-text">{{ item.title }}</span>
              <span class="item__arrow">
                <icon-loader name="arrow-top-left" />
              </span>
            </div>
            <div class="item__groups">
              <div
                v-for="(group, index) in item.groups"
                :key="index"
                class="group-item"
              >
                {{ group }}
                <span v-if="index !== item.groups.length - 1">,</span>
              </div>
            </div>
          </div>
          <div class="item__img"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="home-bc__empty">
    <div class="container">
      <img class="star4" src="@/assets/images/star4.png" alt="" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const items = ref([
      {
        title: "ریحان",
        groups: ["سوگ", "‌خودشناسی", " روابط عاطفی"],
      },
      {
        title: "ریشه",
        groups: ["دانشجویان روانشناسی", "روانکاوی"],
      },
      {
        title: "نرجس",
        groups: ["والدین", " کودکان و نوجوانان"],
      },
    ]);

    const restItems = items.value.slice(1);

    return { items, restItems };
  },
};
</script>

<style lang="scss" scoped>
.home-bc {
  &__desc {
    
    border-bottom: 1px solid var(--color-palette-blush-500);
    .desc-main {
      padding-top: 140px;
      padding-right: 24px;
      padding-bottom: 20px;
      border-right: 1px solid var(--color-palette-blush-500);
    }
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
    border-left: 1px solid var(--color-palette-blush-500);
    border-right: 1px solid var(--color-palette-blush-500);
    position: relative;

    .line {
      position: absolute;
      width: 1px;
      background-color: var(--color-palette-blush-500);
      height: 190px;
      left: -1px;
      top: 100%;
    }
  }

  &__item {
    height: 390px;
    flex: 1;
    background-color: var(--color-palette-darkBeige);
    @include flex($align: center);
    padding: 10%;
  }

  // .left-item {
  //   border-radius: 1000px 0 0 1000px;
  // }

  // .right-item {
  //   border-radius: 0 1000px 1000px 0;
  // }

  .item-container {
    @include flex();
    gap: 32px;
  }

  .item {
    &:nth-child(2n) {
      border-radius: 1000px 0 0 1000px;
    }
    &:nth-child(2n + 1) {
      border-radius: 0 1000px 1000px 0;
    }
    &.main-item {
      background-color: var(--color-palette-linenMist);
      margin-bottom: 32px;
      border-radius: 1000px;
    }
    &__title {
      @include flex($align: center);
    }

    &__title-text {
      @include typography(headline-md);
    }

    &__arrow {
      width: 60px;
      height: 60px;
      background-color: var(--color-background-light);
      @include flex($align: center, $justify: center);
      margin-right: 12px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        transform: rotate(-50deg);
      }
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

  &__empty {
    height: 190px;
    border-bottom: 1px solid var(--color-palette-blush-500);
    border-top: 1px solid var(--color-palette-blush-500);
    position: relative;
    z-index: 1;
    .star4 {
      position: absolute;
      left: 30%;
      top: 30%;
    }
  }
}
</style>
