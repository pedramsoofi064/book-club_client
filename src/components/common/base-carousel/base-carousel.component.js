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

    return { currentItemValue, carouselRef };
  },
};
