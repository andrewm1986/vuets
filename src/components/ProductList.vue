<template>
  <table class="table table-hover">
     <thead>
      <tr>
        <th>Product Id</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" track-by="id">
        <td>{{product.id}}</td>
        <td>{{product.name}}</td>
        <td>{{product.description}}</td>
        <td>{{product.price}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">

import Vue, { ComponentOptions } from 'vue'
import Vuex from 'vuex';

import * as types from '../store/products/messages';

export default {
  computed: Vuex.mapGetters({
    products: types.GET_PRODUCTS
  })
}  as ComponentOptions<Vue>;

</script>