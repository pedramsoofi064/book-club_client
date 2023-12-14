<template>
  <div class="groups">
    <div class="groups__list-container">
      <div class="groups__list container">
        <div class="group-item groups__title">
          <h3>
            گروه های بوک کلاب‌
            {{ bookClub.title }}
          </h3>
        </div>
        <div
          class="group-item"
          v-for="(item, index) in chunkedList[0]"
          :key="index"
        >
          <h3 class="group-item__title">{{ item }}</h3>
          <span class="group-item__icon">
            <icon-loader name="arrow-left" />
          </span>
        </div>
      </div>
    </div>
    <template v-if="chunkedList.length > 1">
      <div
        class="groups__list-container"
        v-for="(list, index) in chunkedList.slice(1)"
        :key="index"
      >
        <div class="groups__list container">
          <div class="group-item" v-for="(item, index) in list" :key="index">
            <h3 class="group-item__title">{{ item }}</h3>
            <span class="group-item__icon">
              <icon-loader name="arrow-left" />
            </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  setup() {
    const bookClub = {
      title: "ریحان",
      groups: [
        "سوگ",
        "‌خودشناسی",
        " روابط عاطفی",
        "سوگ",
        "‌خودشناسی",
        " روابط عاطفی",
        "سوگ",
      
      ],
    };

    const chunkArray = (arr, chunkSize) => {
      const result = [];

      for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
      }

      return result;
    };

    const chunkedList = chunkArray(bookClub.groups, 4);

    return {
      bookClub,
      chunkedList,
    };
  },
};
</script>

<style lang="scss" scoped>
.groups {
  margin-bottom: 60px;

  &__list-container {
    border-bottom: 1px solid var(--color-palette-blush-500);
  }
  &__list {
    // display: grid;
    // grid-template-columns: repeat(5, 1fr);
    @include flex($justify: center);
  }

  .group-item {
    height: 240px;
    @include flex($dir: column, $justify: center, $align: center);
    &:first-child {
      border-right: 1px solid var(--color-palette-blush-500);
    }
    width: 20%;
    padding: 20px;
    border-left: 1px solid var(--color-palette-blush-500);
    cursor: pointer;
    transition: all 0.5s;

    &__title {
      @include typography(headline-sm);
      color: var(--color-palette-green-500);
    }

    &__icon {
      width: 70px;
      height: 0;
      background-color: var(--color-palette-darkBeige);
      @include flex($justify: center, $align: center);
      border-radius: 100px;
      margin-top: 16px;
      overflow: hidden;
      transition: all 0.5s;
    }

    &:hover {
      background-color: var(--color-palette-lightBeige);

      .group-item__title {
        color: var(--color-text-dark1);
      }
      .group-item__icon {
        height: 57px;
      }
    }
  }

  &__title {
    color: var(--color-palette-blush-600);
    @include typography(headline-lg);
    cursor: pointer;
    pointer-events: none;
  }
}
</style>
