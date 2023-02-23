import Main from '@/pages/Main.vue';
import PostsPage from '@/pages/PostsPage.vue';
import DetailedPostPage from '@/pages/DetailedPostPage';
import PostsPageWithStore from '@/pages/PostsPageWithStore';
import PostsPageWithCompositionAPI from '@/pages/PostsPageCompositionAPI';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/posts/:id',
    component: DetailedPostPage
  },
  {
    path: '/store',
    component: PostsPageWithStore
  },
  {
    path: '/compositionAPI',
    component: PostsPageWithCompositionAPI,
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;
