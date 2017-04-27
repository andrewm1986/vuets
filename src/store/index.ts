declare let process: any;

import Vue from 'vue';
import Vuex from 'vuex';

import products from './products';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    products
  },
  strict: debug
});
