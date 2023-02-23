<template>
  <div class="main">
    <h1 class="main__title">Привет!</h1>
    <h2 class="main__descr">Данное приложение было создано на фреймворке Vue</h2>
    <p class="main__about">Использовались кастомные UI компоненты, кастомые директивы, миксины, vue-router. <br> Здесь представлено несколько реализаций страницы с постами:
      <ul class="main__links">
        <li><router-link class="main__link" to="/posts">Optinal API</router-link></li>
        <li><router-link class="main__link" to="/store">Optional API + VueX Store</router-link></li>
        <li><router-link class="main__link" to="/compositionAPI">Composition API (hooks)</router-link></li>
      </ul>
    </p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .main__title,
  .main__descr,
  .main__about {
    margin-bottom: 30px;
  }
  .main__links {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
    list-style: none;
  }

  .main__link {
    text-decoration: none;
  }

</style>
