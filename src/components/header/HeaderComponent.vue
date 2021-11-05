<template>
  <header class="header">
    <VueSlickCarousel class="header__carousel" :autoplay="false">
      <div class="header__carousel--item">
        <img
          class="header__carousel-slider-img"
          src="../../../src/assets/title.jpeg"
          alt=""
        />
        <div class="header__carousel--wrapper">
          <h2 class="header__carousel--title">
            <p>Органическое</p>
            <p>нано-удобние</p>
            <p>добриво</p>
          </h2>
        </div>
      </div>
      <div class="header__carousel--item">
        <img
          class="header__carousel-slider-img"
          src="../../../src/assets/title.jpeg"
          alt=""
        />
        <h2 class="header__carousel--title">
          Органическое нано-удобние добриво
        </h2>
      </div>
      <div class="header__carousel--item">
        <img
          class="header__carousel-slider-img"
          src="../../../src/assets/title.jpeg"
          alt=""
        />
        <h2 class="header__carousel--title">
          Органическое нано-удобние добриво
        </h2>
      </div>
      <div class="header__carousel--item">
        <img
          class="header__carousel-slider-img"
          src="../../../src/assets/title.jpeg"
          alt=""
        />
        <h2 class="header__carousel--title">
          Органическое нано-удобние добриво
        </h2>
      </div>
    </VueSlickCarousel>
    <div class="header__navigations">
      <div class="header__navigations--wrapper">
        <NavBar />
        <TitleNavBar />
      </div>
    </div>
  </header>
</template>

<script>
import NavBar from "./NavigationComponent.vue";
import TitleNavBar from "./TitleNavigationComponent.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Header",
  components: { NavBar, TitleNavBar, VueSlickCarousel },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  margin: 0 auto;
  position: relative;
  &__navigations {
    position: absolute;
    top: 0;
    width: 100%;
    padding-top: 50px;
  }
  &__navigations--wrapper {
    @include wrapper;
  }
  &__carousel-slider-img {
    width: 100%;
    height: 650px;
  }
  &__carousel--wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    @include wrapper;
  }
  &__carousel--item {
    position: relative;
  }
  &__carousel--title {
    position: absolute;
    bottom: 0;
    left: 10%;
    word-wrap: break-word;
    @include TitleSlider;
    p {
      @include paddings;
    }
  }
  &__carousel {
    position: absolute;
    height: 650px;
  }
}
</style>
