<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/header/HeaderComponent.vue";
import Main from "./components/main/MainComponent.vue";

export default {
  name: "App",
  components: { Header, Main },
};
</script>

<style lang="scss">
  #app {
    overflow-x: hidden;
  }
</style>
