<template>
  <nav class="nav">
    <h1 class="nav__title">ДОБРИВО</h1>
    <ul class="nav__items">
      <li class="nav__item"><a href="#">Оплата и доставка</a></li>
      <li class="nav__item"><a href="#">Новости</a></li>
      <li class="nav__item"><a href="#">Справочник</a></li>
      <li class="nav__item"><a href="">Сертификаты</a></li>
      <select class="nav__select" name="languages" id="languages">
        <option value="ua">ua</option>
        <option value="ru">ru</option>
      </select>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__select {
    background: transparent;
    border-color: $white;
    color: $white;
    outline: unset;
    padding: 1px;
   @include fontBold;
  }
  &__title {
    width: 50%;
    color: $white;
    font-size: 5em;
    @include fontBold;
    margin: 0;
  }
  &__items {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    a {
     @include hover;
      text-decoration: unset;
      color: $white;
      font-size: 1.2em;
      font-family: "Roboto Condensed", sans-serif;
      font-weight: 100;
      text-transform: uppercase;
    }
  }
}
</style>
