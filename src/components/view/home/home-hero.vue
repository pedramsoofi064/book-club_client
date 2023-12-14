<template>
  <div class="hero">
    <div class="hero__main ">
      <div class="hero__content">
        <div class="line"></div>
        <div class="hero__intro">
          <div class="intro__content">
            <h1 class="hero__heading">ما اینجا هستیم</h1>
            <p class="hero__desc">
              که با هم به دنیای کتاب‌ها سفر کنیم و هر روز بیشتر بخوانیم و
              بیاموزیم.
            </p>
            <div class="hero__actions">
              <base-button>به جمع ما بپیوند</base-button>
              <base-button variant="outline">مشاوره رایگان</base-button>
            </div>
          </div>
        </div>
      </div>
      <div class="hero__image">
        <img class="hero__img" src="@/assets/images/hero.png" alt="" />
        <div class="circle"></div>
      </div>
    </div>
    <div class="hero__statics">
      <img class="star2" src="@/assets/images/star2.png" alt="">
      <img class="star3" src="@/assets/images/star3.png" alt="">
      <div
        v-for="(item, index) in statics"
        :key="index"
        class="hero__static-item static"
      >
        <div class="static__value">
          <count-to :end-val="item.value" />
          +
        </div>
        <div class="static__desc">
          <icon-loader class="static__icon" :name="item.icon" />
          <span class="static__title">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { CountTo } from "vue3-count-to";

export default {
  components: {
    CountTo
  },
  setup() {
    const statics = ref([
      {
        title: "سال فعالیت",
        value: 1,
        icon: "calendar",
      },
      {
        title: "عضو فعال",
        value: 100,
        icon: "single-user",
      },
      {
        title: "کتاب خوانده شده",
        value: 23,
        icon: "book-open",
      },
      {
        title: "گروه فعال",
        value: 8,
        icon: "user-messages",
      },
    ]);

    return { statics };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding-top: 130px;
  width: 100%;

  &__main {
    // padding: 50px;
    @include flex();
    height: 650px;
  }

  &__content {
    width: 35%;
    background: var(--color-background-light);
    height: inherit;
    border-top: 1px solid var(--color-palette-blush-500);
    border-bottom: 1px solid var(--color-palette-blush-500);
    position: relative;
    .line {
      width: 1px;
      position: absolute;
      background-color: var(--color-palette-blush-500);
      top: -130px;
      bottom: 0;
      left: 0;
    }
  }

  &__intro {
    width: 100%;
    height: 100%;
    border-radius: radius(500) 0 0 radius(500);
    background-color: var(--color-palette-green-500);
    @include flex($dir: column, $align: center, $justify: center);
    color: var(--color-text-light);

    .intro__content {
      max-width: 320px;
    }
  }

  &__image {
    background-color: var(--color-palette-lightBeige);
    flex: 1;
    // padding: 60px;
    border-top: 1px solid var(--color-palette-blush-500);
    border-bottom: 1px solid var(--color-palette-blush-500);
    position: relative;
    @include flex();
    height: 100%;
    .circle {
      background-color: var(--color-palette-darkBeige);
      border-radius: 0 radius(500) radius(500) 0;
      //   position: absolute;
      //   left: 0;
      //   bottom: 0;
      //   top: 0;
      height: 100%;
      width: 380px;
    }
  }

  &__img {
    flex: 1;
    max-width: 500px;
    margin-right: auto;
    margin-block: 50px;
  }

  &__heading {
    @include typography(display-lg);
    text-align: right;
  }
  &__desc {
    @include typography(title-lg);
    text-align: right;
  }

  &__actions {
    @include flex();
    gap: 16px;
    margin-top: 36px;
  }

  &__statics {
    @include flex($justify: center);
    position: relative;
    border-bottom: 1px solid var(--color-palette-blush-500);

    .static:last-child {
      border-left: none;
    }
    .star2 {
      position: absolute;
      left: 15%;
      top: 10px;
    }
    .star3 {
      position: absolute;
      right: 15%;
      bottom: 10px;
    }
  }

  .static {
    width: 300px;
    border-left: 1px solid var(--color-palette-blush-500);
    height: 248px;
    @include flex($dir: column, $align: center, $justify: center);
   
    &__desc {
      @include flex($align:center);
      margin-top: 12px
    }

    &__value {
      @include typography(display-md);
      color: var(--color-palette-primary);
    }
    &__icon {
      color: var(--color-palette-green-500);
    }
    &__title {
      color: var(--color-palette-blush-500);
      @include typography(headline-sm);
      margin-right: 8px;
    }

  
 

  }
}
</style>
