<template>
  <div class="navbar">
    <div class="navbar__btns">
      <my-button @click="$router.push('/')">Главная</my-button>
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/store')">Store</my-button>
      <my-button @click="$router.push('/compositionAPI')">Composition API</my-button>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  display: flex;
  gap: 20px;
  margin-left: auto;
}

</style>
