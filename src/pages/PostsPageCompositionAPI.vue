<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
      v-focus
      v-model="searchQuery"
      placeholder="Поиск..."
    >
    </my-input>
    <div class="app__btns">
      <my-button
        @click="showDialog"
      >
        Создать пост
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm
        @create="createPost"
      />
    </my-dialog>
    <PostList
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" ref="observer" class="observer"></div>
  </div>
</template>

<script>
import { ref } from 'vue';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import {usePosts} from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'
export default {
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
      ]
    }
  },
  setup(props) {
    const {posts, totalPages, isPageLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
    return {
      posts,
      totalPages,
      isPageLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
}
</script>

<style>
  .app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }
  .page__wrapper {
    margin-top: 15px;
    display: flex;
  }

  .page {
    border: 1px solid black;
    padding: 10px;
  }

  .current-page {
    border: 2px solid teal;
  }

  .observer {
    height: 30px;
    background: gray;
  }
</style>
