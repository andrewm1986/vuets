<template>
  <div class='product --new'>
    
  </div>
</template>

<script lang="ts">

import * as Vuex from 'vuex';

import * as types from '@/store/products/messages';

export default {
  computed: Vuex.mapGetters({
    products: types.GET_PRODUCTS
  })  
};

</script>