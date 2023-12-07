<template>
  <header class="header">
    <div class="header__main">
      <div class="header__items">
        <img
          class="header__logo"
          src="@/assets/images/rayhan-logo.png"
          alt=""
        />
        <ul class="header__list">
          <li class="list-item" v-for="(item, index) in navItems" :key="index">
            <span>
              {{ item.title }}
            </span>
            <icon-loader
              v-if="item.children"
              class="list-item__icon"
              name="arrow-down"
            ></icon-loader>
          </li>
        </ul>
        <text-field
          name="جستجو"
          placeholder="جستجو"
          prependIcon="search"
          v-model="searchKey"
        />
      </div>
      <div class="header__items header__action">
        <base-button variant="outline">ورود</base-button>
        <base-button>ثبت‌نام</base-button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import textField from "../text-field/text-field.vue";
import BaseButton from "../base-button/base-button.vue";
export default {
  components: { textField, BaseButton },
  setup() {
    const navItems = [
      {
        title: "بوک‌کلاب‌ها",
        to: "",
        children: [],
      },
      {
        title: "مشاوره انتخاب گروه",
        to: "",
      },
      {
        title: "وبلاگ",
        to: "",
      },
      {
        title: "فروشگاه",
        to: "",
      },
      {
        title: "درباره ما",
        to: "",
      },
    ];
    const searchKey = ref("");

    return {
      navItems,
      searchKey,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  height: 72px;
  left: 0;
  right: 0;
  z-index: $header;

  &__main {
    margin-top: 12px;
    margin-inline: 10%;

    position: relative;
    height: 72px;
    max-width: 1750px;
    border: 1px solid var(--color-palette-blush-500);
    border-radius: 100px;
    background-color: var(--color-background-light);
    padding: 12px 44px 12px 12px;
    @include flex($justify: space-between);
  }

  &__logo {
    height: 48px;
    width: 110px;
    object-fit: cover;
    margin-left: 20px;
  }

  &__items {
    @include flex($align: center);
  }

  &__list {
    @include flex();
    gap: 40px;
    @include typography(label-lg);
    margin-left: 20px;
    .list-item {
      cursor: pointer;

      &__icon {
        margin-right: 8px;
      }
    }
  }

  &__action {
    gap: 10px;
  }
  
}
</style>
