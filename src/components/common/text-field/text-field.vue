<template>
  <div :class="['text-field', ...textFieldClassModifiers]">
    <slot name="label">
      <label class="text-field__label" v-if="label" :for="name">{{ label }}</label>
    </slot>

    <div
      class="text-field__input-area input-area"
      :class="['input-area', ...inputAreaClassModifiers]"
    >
      <slot name="prependIcon">
        <icon-loader
          class="input-area__icon"
          v-if="prependIcon"
          :name="prependIcon"
        />
      </slot>
      <input
        class="input-area__main-input"
        :id="name"
        :placeholder="placeholder"
        :type="fieldTypes[type]"
        v-model="fieldValue"
        :readonly="isReadOnly"
        :maxlength="maxLength"
        :min="min"
        :max="max"
      />
      <slot name="appendIcon">
        <div v-if="isLoading" class="text-field__loading"></div>

        <icon-loader
          class="input-area__icon input-area__icon_append"
          v-else-if="appendIcon && !isLoading"
          :name="appendIcon"
          @click="$emit('click:append')"
        />
      </slot>
      <slot name="appendLabel">
        <label class="input-area__append-label">{{ appendLabel }}</label>
      </slot>
    </div>
    <div
      class="text-field__message-container"
      v-if="showMessage && (errorMessage || hint)"
    >
      <slot name="message">
        <p class="text-field__message">{{ errorMessage || hint }}</p>
      </slot>
    </div>
  </div>
</template>

<script>
  import { useField } from "vee-validate";
  import { computed } from "vue";
  import { useClassModifier } from "@/composables/useClassModifier.composable.js";
  import { addCommas, removeCommas } from "@persian-tools/persian-tools";
  import { convertArabicNumToEnglishNum } from "@/utils/convertArabicNumToEnglishNum";

  export default {
    props: {
      modelValue: {
        type: [String, Number],
        required: false,
        default: "",
      },
      label: {
        type: String,
        required: false,
      },
      type: {
        type: String,
        required: false,
        default: "text",
      },
      size: {
        type: String,
        required: false,
        default: "medium",
        validator: (value) => ["small", "medium"].includes(value),
      },
      name: {
        type: String,
        required: false,
        default: (props) => props.label,
      },
      rules: {
        type: [String, Object],
        required: false,
      },
      prependIcon: {
        type: String,
        required: false,
      },
      appendIcon: {
        type: String,
        required: false,
      },
      appendLabel: {
        type: String,
        required: false,
      },
      hint: {
        type: String,
        required: false,
      },
      isReadOnly: {
        type: Boolean,
        required: false,
        default: false,
      },
      isLoading: {
        type: Boolean,
        required: false,
        default: false,
      },
      placeholder: {
        type: String,
        required: false,
      },
      maskRegex: {
        type: String,
        required: false,
      },
      maxLength: {
        type: Number,
        required: false,
      },
      min: {
        type: [Number, String],
        required: false,
      },
      max: {
        type: [Number, String],
        required: false,
      },
      isUpperCase: {
        type: Boolean,
        required: false,
        default: false,
      },
      showMessage: {
        type: Boolean,
        required: false,
        default: true,
      },
      appendIconCursor: {
        type: String,
        default: 'default'
        //TODO: implement validator
      }
    },

    emits: ["update:modelValue", "click:append"],

    setup(props, { emit }) {
      const fieldOptions = { initialValue: props.modelValue };
      const {
        value: inputValue,
        setValue: setInputValue,
        errorMessage,
      } = useField(props.name, props.rules, fieldOptions);

      const fieldTypes = {
        [props.type]: props.type,
        price: "tel",
      };

      const inputAreaClassConditionMapper = computed(() => [
        {
          condition: fieldValue.value,
          modifier: "--has-value",
        },
        {
          condition: props.prependIcon,
          modifier: "--has-prepend-icon",
        },
        {
          condition: props.isReadOnly,
          modifier: "--has-readonly",
        },
        {
          condition: props.isUpperCase,
          modifier: "--is-upper-case",
        },
      ]);

      const textFieldClassConditionMapper = computed(() => [
        {
          condition: errorMessage.value,
          modifier: "--has-error",
        },
      ]);

      const inputAreaClassModifiers = useClassModifier(
        "input-area",
        inputAreaClassConditionMapper,
      );
      const textFieldClassModifiers = useClassModifier(
        "text-field",
        textFieldClassConditionMapper,
      );

      const fieldsStrategy = {
        price: {
          getValue(modelValue) {
            return addCommas(modelValue);
          },
          getModifiedValue(newValue, modelValue) {
            let value = removeCommas(newValue);
            if (!value && value !== "" && value !== 0) value = modelValue;
            if (value === "" || value === 0) value = "";
            return value;
          },
        },
        default: {
          getValue(modelValue) {
            return modelValue;
          },
          // eslint-disable-next-line no-unused-vars
          getModifiedValue(newValue, modelValue) {
            return newValue;
          },
        },
      };

      const fieldStrategy =
        fieldsStrategy[props.type] || fieldsStrategy.default;

      const fieldValue = computed({
        get: () => {
          const value = convertArabicNumToEnglishNum(
            fieldStrategy.getValue(props.modelValue),
          );

          const hasModelValue = value !== undefined;
          const hasValueChanged = inputValue.value !== value;
          if (hasModelValue && hasValueChanged) setInputValue(value);

          return props.isLoading ? "" : value;
        },
        set: (newValue) => {
          const value = convertArabicNumToEnglishNum(
            fieldStrategy.getModifiedValue(newValue, props.modelValue),
          );
          setInputValue(value);

          emit("update:modelValue", value);
        },
      });

      const height = computed(() => {
        const computedHights = {
          small: "36px",
          medium: "48px",
        };

        return computedHights[props.size];
      });

      return {
        fieldValue,
        inputAreaClassModifiers,
        textFieldClassModifiers,
        errorMessage,
        fieldTypes,
        height,
      };
    },
  };
</script>

<style scoped lang="scss">
  $root: "text-field";
  $input-area: "input-area";

  .#{$root} {
    @include flex(column, nowrap, unset);
    &__message {
      @extend .message;
    }

    &--has-error {
      .#{$root}__message {
        color: var(--color-palette-error-500);
      }
    }
    &__label {
      @extend .label;
    }

    &__loading {
      @extend .spinner-loading;
    }
  }

  .#{$input-area} {
    @include flex(row, nowrap, center);
    @extend .input;

    gap: space(2);
    position: relative;
    width: 100%;
    border-radius: radius(50);
    padding: 0 space(5);
    background-color: var(--text-field-bg-color, var(--color-background-main));
    border: 1px solid var(--color-palette-blush-500);
    height: v-bind(height);

    &__icon {
      --base-icon-size: 2.4rem;
      color: var(--color-text-gray-default);
    }

    &__icon_append {
      cursor: v-bind(appendIconCursor);
    }

    &__append-label {
      color: var(--color-text-gray-default);
    }

    // &--has-prepend-icon {
    //   right: space(12);
    // }

    &--has-readonly {
      @extend .readonly;
    }

    &--is-upper-case {
      .#{$input-area}__main-input {
        text-transform: uppercase;
      }
    }

    &__main-input {
      color: var(--text-title, #3c4351);
      background-color: transparent;
      width: 100%;
      height: 90%;
      border: none;
      outline: none;

      &::placeholder {
        color: var(
          --text-field-placeholder-color,
          var(--color-text-type-4-light)
        );
      }
    }
  }
</style>
