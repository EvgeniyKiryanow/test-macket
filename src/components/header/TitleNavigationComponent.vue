<template>
  <nav class="nav">
    <ul class="nav__items">
      <li class="nav__item"><a href="#">Нагро-Удобрение</a></li>
      <li class="nav__item"><a href="#">Биодизель</a></li>
      <li class="nav__item"><a href="#">Силко</a></li>
      <li class="nav__item"><a href="#">Интеренет-магазин</a></li>
      <li class="nav__item"><a href="#">Вопросы-ответы</a></li>
      <li class="nav__item"><a href="#">Контакты</a></li>
    </ul>
    <button class="nav__button">Корзина</button>
  </nav>
</template>

<script>
export default {
  name: "TitleNavBar",
};
</script>

<style lang="scss" scoped>
.nav {
  align-items: center;
  display: flex;
  &__items {
    box-shadow: $shadow;
    width: 80%;
    display: inherit;
    align-items: inherit;
    justify-content: space-evenly;
    background: $white;
    padding: 20px;
  }
  &__item {
    a {
      position: relative;
      color: black;
      @include NavFont($grey);
      &:after {
        content: "";
        position: absolute;
        right: -15px;
        top: 0;
        background-image: url("../../../src/assets/arrow.svg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 15px;
        height: 15px;
      }
    }
  }
  &__button {
    position: relative;
    background: linear-gradient($gradient);
    padding: 22px;
    width: 20%;
    border: unset;
    box-shadow: $shadow;
    @include NavFont($white);
    &:before {
      position: absolute;
      content: "";
      left: 15%;
      top: 27%;
      background-image: url("../../../src/assets/basket.svg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 25px;
      height: 25px;
    }
  }
}
</style>
