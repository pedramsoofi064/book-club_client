<template>
  <footer class="footer">
    <div class="footer__main container">
      <div class="footer__socials">
        <h3 class="footer__title">شبکه‌های اجتماعی ما</h3>
        <div class="footer__social-items">
          <div class="social">
            <icon-loader name="youtube" />
          </div>
          <div class="social">
            <icon-loader name="telegram" />
          </div>
          <div class="social">
            <icon-loader name="instagram" />
          </div>
        </div>
      </div>
      <div class="footer__hero hero">
        <h1 class="hero__headline">بوک‌کلاب ریحان</h1>
        <h1 class="hero__sub-headline">ما اینجا هستیم</h1>
        <div class="hero__actions">
          <base-button class="hero__btn">به جمع ما بپیوند</base-button>
          <base-button class="hero__btn" variant="outline"
            >مشاوره رایگان</base-button
          >
        </div>
      </div>
      <div class="footer__groups" v-for="(item, index) in items" :key="index">
        <div>
          <h3 class="footer__title">بوک کلاب‌ {{ item.title }}</h3>
          <div
            class="footer__group"
            v-for="(i, index) in item.groups"
            :key="index"
          >
            {{ i }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";
import iconLoader from "../icon-loader/icon-loader.vue";
export default {
  components: { iconLoader },
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

    return { items };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  height: 300px;
  background-color: var(--color-palette-primary);

  &__main {
    width: 100%;
    height: 100%;
    border-left: 1px solid var(--color-background-main);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    color: var(--color-text-light);
  }

  &__socials {
    padding-top: 80px;
  }

  &__title {
    @include typography(title-md);
  }

  &__social-items {
    @include flex();
    gap: 12px;
    margin-top: 24px;
    .social {
      width: 36px;
      height: 36px;
      @include flex($align: center, $justify: center);
      background-color: var(--color-palette-green-600);
      border-radius: 50%;
      cursor: pointer;
    }
  }

  &__hero {
    background-color: var(--color-palette-green-500);
    border-radius: 1000px;
    @include flex($dir: column, $justify: center);
  }

  .hero {
    padding-inline: 70px;
    &__headline {
      @include typography(display-sm);
    }
    &__sub-headline {
      @include typography(headline-sm);
    }
    &__actions {
      @include flex();
      gap: 16px;
      margin-top: 36px;
    }

    &__btn {
      min-width: 155px;
    }
  }

  &__groups {
    padding-top: 80px;
    > div {
      margin-right: auto;
      width: fit-content;
      margin-left: 16px;
    }
    .footer__title {
      border-bottom: 1px solid var(--color-palette-linenMist);
      padding-bottom: 8px;
    }
  }

  &__group {
    @include typography(text-lg);
    margin-top: 12px;
    cursor: pointer;
  }
}
</style>
