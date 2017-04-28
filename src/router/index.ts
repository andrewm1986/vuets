import Vue from 'vue';
import Router from 'vue-router';

import ProductList from '@/pages/products/List';
import ProductAdd from '@/pages/products/Add';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/products',
      name: 'Product List',
      component: ProductList,
    },
    {
      path: '/products/new',
      name: 'New Product',
      component: ProductAdd,
    },
    {
      path: '/',
      redirect: '/products'
    }
  ],
  mode: 'history',
});
