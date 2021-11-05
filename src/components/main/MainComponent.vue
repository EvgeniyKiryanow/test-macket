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
  background-size: 45%;
  background-position-x: 100%;
  &__wrapper {
    display: flex;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
  &__benefit {
    width: 57%;
  }
  &__calculate-form {
    width: 43%;
    position: relative;
  }
}
</style>
