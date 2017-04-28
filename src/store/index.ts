declare let process: any;

import Vue from 'vue';
import Vuex from 'vuex';

import { store, State } from './products';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store<State>({
  modules: {
    store
  },
  strict: debug
});
