<template>
  <div class="future-plan">
    <div class="shape"></div>
    <img  class="star5" src="@/assets/images/star5.png" alt="">
    <div class="future-plan__main container">
      <div class="future-plan__content">
        <h1 class="future-plan__title">ماه آینده برناممون چیه؟</h1>
        <h1 class="future-plan__desc">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </h1>
      </div>
      <div class="future-plan__slider">
      <base-carousel
        class="future-plan__carousel"
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
.future-plan {
  height: 400px;
  position: relative;
  border-bottom: 1px solid var(--color-palette-blush-500);

  .shape {
    position: absolute;
    width: 30%;
    height: 100%;
    background: var(--color-palette-darkBeige);
    border-radius: 0 1000px 1000px 0;
    z-index: 1;
  }

  .star5 {
    position: absolute;
    z-index: 2;
    top: 15%;
    right: 10%  ;
  }

  &__main {
    position: relative;
    z-index: 3;
 
    @include flex($align: center , $justify:space-between);
    height: 100%;
    gap: 80px;
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
