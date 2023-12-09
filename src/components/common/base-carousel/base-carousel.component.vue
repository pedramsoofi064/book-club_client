<template>
  <Carousel ref="carouselRef" :items-to-show="itemsToShow" v-model="currentItemValue" dir="rtl">
    <Slide v-for="(item, index) in items" :key="index">
      <div class="carousel__item">
        <slot name="item" :item="item" :index="index" />
      </div>
    </Slide>
  </Carousel>
</template>

<script src="./base-carousel.component.js"></script>

<style lang="scss" scoped src="./base-carousel.component.scss"></style>
