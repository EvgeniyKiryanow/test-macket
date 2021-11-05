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
body {
  margin: 0;
  padding: 0;
}
html {
  font-size: 10px;
  box-sizing: border-box;
}
#app {
  overflow-x: hidden;
}
</style>
