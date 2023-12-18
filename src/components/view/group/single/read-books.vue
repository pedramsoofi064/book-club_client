<template>
  <div class="read-book">
    <div class="container">
      <div class="read-book__header">
        <h1 class="read-book__title">کتاب‌های خوانده شده در بوک کلاب سوگ</h1>
        <div class="read-book__action">
          <div class="read-book__btn">
            <icon-loader @click="prevClicked" name="arrow-right"></icon-loader>
          </div>
          <div class="read-book__btn">
            <icon-loader @click="nextClicked" name="arrow-left"></icon-loader>
          </div>
        </div>
      </div>
      <div class="read-book__books">
        <base-carousel
          class="read-book__carousel"
          :items-to-show="itemsToShow"
          :items="courses"
          ref="carousel"
          hide-button
        >
          <template #item="{}">
            <book-item />
          </template>
        </base-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useWindowDimensions } from "@/composables";
export default {
  setup() {
    const { width } = useWindowDimensions();

    const itemsToShow =
      width > 1300 ? 4 : width > 900 ? 3 : width > 700 ? 2 : 1;
    const currentItem = ref(0);
    const carousel = ref(null);
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

    const prevClicked = () => {
      carousel.value.carouselRef.prev();
    };
    const nextClicked = () => {
      carousel.value.carouselRef.next();
    };

    return {
      itemsToShow,
      courses,
      currentItem,
      carousel,
      nextClicked,
      prevClicked,
    };
  },
};
</script>

<style lang="scss" scoped>
.read-book {
  padding-top: 80px;
  border-bottom: 1px solid var(--color-palette-blush-500);

  &__header {
    @include flex($justify: space-between);
    margin-bottom: 20px;
  }

  &__title {
    @include typography(headline-lg);
    max-width: 300px;
    color: var(--color-palette-blush-600);
  }

  &__carousel {
  }

  &__action {
    @include flex();
    gap: 24px;
  }
  &__btn {
    width: 72px;
    height: 57px;
    background-color: var(--color-palette-darkBeige);
    @include flex($justify: center, $align: center);
    border-radius: 100px;
    cursor: pointer;
  }
}
</style>
