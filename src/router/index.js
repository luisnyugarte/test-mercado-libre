import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '@/views/Search/search.vue';
import Results from '@/views/Results/Results.vue';
import Item from '@/views/Item/Item.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search,
  },
  {
    path: '/items',
    name: 'Results',
    component: Results,
  },
  {
    path: '/items/:id',
    name: 'Item',
    component: Item,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
