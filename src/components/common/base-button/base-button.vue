<template>
  <button
    :disabled="isDisabled || isLoading"
    :type="type"
    @click="onClickHandler"
    :class="['button', ...buttonClassModifiers]"
  >
    <div class="button__loading loading" v-if="isLoading">
      <span class="loading__wave" v-for="number in 5" :key="number" />
    </div>

    <div class="button__content" v-else>
      <!-- <icon-loader
        :fill="iconColor"
        :name="prependInnerIcon"
        v-if="prependInnerIcon"
        width="24"
        height="24"
      /> -->
      <div class="button__icon prepend-icon" v-if="leadingIcon">
        <icon-loader :name="leadingIcon"></icon-loader>
      </div>
      <p class="button__text">
        <slot />
      </p>
      <div class="button__icon append-icon" v-if="appendInnerIcon">
        <icon-loader :name="appendInnerIcon"></icon-loader>
      </div>
      <!-- <icon-loader :fill="iconColor" :name="appendInnerIcon" v-if="appendInnerIcon" width="24" height="24" /> -->
    </div>
  </button>
</template>

<script>
import { computed } from "vue";
import { useClassModifier } from "@/composables/useClassModifier.composable.js";
import iconLoader from "../icon-loader/icon-loader.vue";

export default {
  components: { iconLoader },
  props: {
    variant: {
      type: String,
      required: false,
      default: "filled",
      validator(value) {
        return ["filled", "outline", "text"].includes(value);
      },
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    textColor: {
      type: String,
      required: false,
      default: "#FFF",
    },
    leadingIcon: {
      type: String,
      required: false,
    },
    appendInnerIcon: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
  },

  emits: ["clicked"],

  setup(props, { emit }) {
    const buttonClassConditionMapper = computed(() => [
      { condition: props.isDisabled, modifier: "--disabled" },
      { condition: props.variant, modifier: `--${props.variant}` },
    ]);
    const buttonClassModifiers = useClassModifier(
      "button",
      buttonClassConditionMapper
    );

    const iconColor = computed(() => {
      const disabledColor = {
        filled: "#788391",
        outline: "#193142",
        transparent: "#2A6F81",
      };
      if (props.isDisabled) {
        return disabledColor[props.variant];
      }
      return props.textColor;
    });

    const onClickHandler = () => {
      if (props.isDisabled || props.isLoading) return;
      emit("clicked");
    };
    return { buttonClassModifiers, iconColor, onClickHandler, props };
  },
};
</script>

<style lang="scss" scoped>
.button {
  @include flex(row, nowrap, center, center);
  @include typography(label-lg);
  padding: 14px 24px;
  border-radius: var(--btn-radius, radius(50));
  height: var(--btn-height, 48px);
  // width: 100%;
  
  cursor: pointer;
  transition: $transition-3;
  position: relative;
  border: 1px solid transparent;

  &--filled {
    background-color: var(--color-palette-primary-500);
    color: white;
    &.button--disabled {
      //TODO:colors  should be added from design system
      background-color: lightgrey;
      color: gray;
    }
  }

  &--outline {
    background-color: transparent;
    border: var(--color-palette-primary-500) 1px solid;
    color: var(--color-palette-primary-500);
    &.button--disabled {
      //TODO:colors  should be added from design system
      background-color: lightgrey;
      color: gray;
    }
  }

  &--text {
    background-color: transparent;
    color: var(--color-text-type-4);
    @include typography(regular-14);

    &:hover {
      box-shadow: none;
    }
    &:active {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        display: block;
        background-color: v-bind("props.textColor");
        opacity: 0.1;
      }
    }
  }

  &__icon {
    @include flex();
  }

  &--disabled {
    cursor: default;
  }

  &:active,
  &:hover {
    transform: scale(1.02);
    &.button--disabled {
      box-shadow: none;
    }
  }

  &__content {
    @include flex(row, nowrap, center, center);
    padding: 0;
  }

  &__text {
    color: inherit;
    // margin: var(--base-btn-label-margin, 0 0.4rem);
  }
}

.loading {
  @include flex(row, nowrap, center, center);
  height: 2rem;

  &__wave {
    width: 0.3rem;
    height: 2px;
    border-radius: 4.8rem;
    margin-right: space(1);

    background-color: v-bind("iconColor");
    animation: loading 2s linear infinite;

    @for $number from 1 to 5 {
      &:nth-child(#{$number}) {
        animation-delay: calc($number / 10 * 1s);
      }
    }
  }
}

@keyframes loading {
  0% {
    height: 2px;
  }
  25% {
    height: 0.4rem;
  }
  50% {
    height: 1.6rem;
  }
  100% {
    height: 0;
  }
}
</style>
