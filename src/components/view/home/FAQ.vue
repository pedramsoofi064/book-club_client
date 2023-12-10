<template>
  <div class="faq">
    <div class="questions">
      <div class="question" v-for="i in 5" :key="i">
        <div class="question__main" @click="collapsedIndex = i">
          <span class="question__circle"></span>
          <div class="question__main-text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است؟
          </div>
          <icon-loader name="arrow-down" />
        </div>
        <collapsible-container
          class="question__answer"
          :collapsed="i == collapsedIndex"
        >
          <div class="answer__text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
          </div>
        </collapsible-container>
      </div>
    </div>
    <div class="faq__content">
      <h1 class="faq__title">سوالات رایج</h1>
      <h1 class="faq__desc">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است
      </h1>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const collapsedIndex = ref(1);

    return { collapsedIndex };
  },
};
</script>

<style lang="scss" scoped>
.faq {
  padding-block: 140px;
  margin-right: 15%;
  margin-left: 15%;
  border-left: 1px solid var(--color-palette-blush-500);
  @include flex($justify: space-between);
  gap: 30px;

  &__content {
    margin-left: 16px;
  }
  &__title {
    @include typography(headline-lg);
    color: var(--color-palette-blush-500);
  }
  &__desc {
    @include typography(text-lg);
    color: var(--color-text-dark2);
    margin-top: 16px;
    max-width: 360px;
  }

  .questions {
    flex: 1;
  }

  .question {
    margin-bottom: 16px;
    &__main {
      height: 96px;
      // border-radius: 1000px;
      // border: 2px solid transparent;
      border-bottom: 1px solid var(--color-palette-blush-500);
      @include flex($align: center);
      padding-inline: 32px;
      cursor: pointer;
    }

    &__circle {
      min-width: 16px;
      min-height: 16px;
      border-radius: 50%;
      border: 1px solid var(--color-text-dark2);
    }
    &__main-text {
      color: var(--color-text-dark1);
      @include typography(titre-lg);

      margin-right: 16px;
    }

    &__answer {
      .answer__text {
        @include typography(text-lg);
        padding: 16px 35px;
      }
    }
  }
}
</style>
