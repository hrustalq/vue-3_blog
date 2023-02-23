<template>
  <div v-if="posts.length > 0">
    <h3>Страница с постами</h3>
    <transition-group name="post" tag="div" appear>
      <Postitem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red">Список постов пуст</h2>
</template>

<script>
import Postitem from '@/components/PostItem.vue'
export default {
  components: {
    Postitem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="css">
.post-move, /* apply transition to moving elements */
.post-enter-active,
.post-leave-active {
  transition: all 0.5s ease;
}

.post-enter-from,
.post-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-leave-active {
  position: absolute;
}

</style>
