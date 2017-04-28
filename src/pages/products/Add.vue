<template>
  <div class='product --new'>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Vuex from 'vuex';
import Component from 'vue-class-component';

import * as types from '../../store/products/messages';

@Component(
  {
    computed: {
      ...Vuex.mapGetters({
        products: types.GET_PRODUCTS
      })
    }
  }
)
export default class Add extends Vue {
};

</script>