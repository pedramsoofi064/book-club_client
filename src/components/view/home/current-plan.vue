<template>
  <div class="current-plan">
    <div class="current-plan__main container">
      <div class="current-plan__slider">
        <base-carousel
          class="current-plan__carousel"
          :items-to-show="itemsToShow"
          :items="courses"
        >
          <template #item="{ item }">
            <div class="slide-item">
              {{ item.id }}
            </div>
          </template>
        </base-carousel>
      </div>
      <div class="current-plan__content">
        <h1 class="current-plan__title">این ماه با هم چی می‌خونیم؟</h1>
        <h1 class="current-plan__desc">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const itemsToShow = 3;
    const currentItem = ref(0);
    const courses = [
      {
        id: 0,
        title: "test",
        bookClub: "test",
        facilitator: "test",
        holdingType: "online",
      },
      {
        id: 1,
        title: "test",
        bookClub: "test",
        facilitator: "test",
        holdingType: "online",
      },
      {
        id: 2,
        title: "test",
        bookClub: "test",
        facilitator: "test",
        holdingType: "online",
      },
      {
        id: 4,
        title: "test",
        bookClub: "test",
        facilitator: "test",
        holdingType: "online",
      },
      {
        id: 8,
        title: "test",
        bookClub: "test",
        facilitator: "test",
        holdingType: "online",
      },
    ];

    return {
      itemsToShow,
      courses,
      currentItem,
    };
  },
};
</script>

<style lang="scss" scoped>
.current-plan {
  padding-bottom: 140px;
  border-bottom: 1px solid var(--color-palette-blush-500);

  &__main {
    @include flex($align: center);
    z-index: 5;
    gap: 60px;
  }

  &__content {
    margin-bottom: 30px;
  }

  &__slider {
    position: relative;
    top: -50px;
    z-index: 5;
  }
  &__title {
    @include typography(headline-lg);
    color: var(--color-palette-blush-500);
  }

  &__desc {
    @include typography(text-lg);
    color: var(--color-text-dark2);
    max-width: 360px;
    margin-top: 16px;
  }

  &__carousel {
    // width: 60%;
    // width: 900px;
    max-width: 1000px;
    .slide-item {
      width: 300px;
      height: 400px;
      border-radius: 40px;
      background-color: white;
      position: relative;
      overflow: hidden;
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.15) 0%,
          rgba(0, 0, 0, 0.7) 100%
        );
      }
    }
  }
}
</style>
