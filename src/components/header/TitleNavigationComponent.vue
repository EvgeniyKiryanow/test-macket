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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: white;
    padding: 20px;
    list-style: none;
  }
  &__item {
    a {
      text-decoration: unset;
      color: #6d6e71;
      font-size: 14px;
      font-family: "Roboto Condensed", sans-serif;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  &__button {
    background: linear-gradient(
      rgba(82, 168, 40, 1) 0%,
      rgba(117, 92, 30, 1) 100%
    );
    padding: 20px;
    width: 20%;
    border: unset;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    color: white;
    font-size: 14px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
  }
}
</style>
