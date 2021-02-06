import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '@/components/Search/search.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
