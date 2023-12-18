<template>
  <div class="custom-carousel">
    <Carousel
      ref="carouselRef"
      :items-to-show="itemsToShow"
      v-model="currentItemValue"
      dir="rtl"
    >
      <Slide v-for="(item, index) in items" :key="index">
        <div class="carousel__item">
          <slot name="item" :item="item" :index="index" />
        </div>
      </Slide>
    </Carousel>
    <div v-if="!hideButton" class="carousel__actions">
      <div class="custom-carousel__btn icon-right">
        <icon-loader @click="prevClicked" name="arrow-right"></icon-loader>
      </div>
      <div class="custom-carousel__btn icon-left">
        <icon-loader @click="nextClicked" name="arrow-left"></icon-loader>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";

import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: 1,
    },
    itemsToShow: {
      type: Number,
      required: false,
      default: 1,
    },
    items: {
      type: Array,
      required: true,
    },
    hideButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Carousel,
    Slide,
  },
  setup(props, { emit }) {
    const carouselRef = ref(null);
    const currentItemValue = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });

    watch(currentItemValue, () => {
      //fIXME: it may not work! The bug did not appear for testing (issue -> iBank -> backlog -> #113)
      carouselRef.value.data.config.itemsToShow = props.itemsToShow;
      carouselRef.value.updateSlideWidth();
    });

    const prevClicked = () => {
      carouselRef.value.prev();
    };
    const nextClicked = () => {
      carouselRef.value.next();
    };

    return { currentItemValue, carouselRef, prevClicked, nextClicked };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  &__item {
    // width: 100%;
    direction: ltr;

    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    &:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
  }

  &__slide {
    padding: 0 0 0 space(16);
  }
}

.custom-carousel {
  position: relative;

  &__btn {
    width: 72px;
    height: 57px;
    background-color: var(--color-palette-darkBeige);
    @include flex($justify: center, $align: center);
    border-radius: 100px;
    cursor: pointer;
    position: absolute;
  }

  .icon-right {
    right: -50px;
    top: 42%;
    transform: translateX(-50%, -50%);
  }
  .icon-left {
    left: -20px;
    top: 42%;
    transform: translateX(-50%, -50%) rotate(50deg);
  }
}
</style>
