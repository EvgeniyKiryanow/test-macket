<template>
  <main class="main">
    <div class="main__wrapper">
      <section class="main__benefit">
        <Benefits />
      </section>
      <section class="main__calculate-form">
        <From />
      </section>
    </div>
  </main>
</template>

<script>
import Benefits from "./BenefitsComponent.vue";
import From from "./FormComponent.vue";

export default {
  name: "Main",
  components: { Benefits, From },
};
</script>

<style lang="scss" scoped>
.main {
  background-image: url("../../../src/assets/main-img.jpeg");
  background-repeat: no-repeat;
  background-size: 40%;
  background-position-x: 100%;
  &__wrapper {
    display: flex;
    @include wrapper;
  }
  &__benefit {
    width: 68%;
  }
  &__calculate-form {
    width: 43%;
    position: relative;
  }
}
</style>
