<template>
  <Navbar></Navbar>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

  export default {
    components: {
      Navbar
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat';
  }
  .app {
    padding: 20px;
  }

</style>
