<template>
  <div class='product'>
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
    <router-link :to="{ name: 'New Product' }">Add Product</router-link>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Vuex from 'vuex';
import Component from 'vue-class-component';

import * as types from '../../store/products/messages';
import { State } from '../../store/products';

@Component(
  {
    computed: {
      ...Vuex.mapGetters({
        products: types.GET_PRODUCTS
      })
    }
  }
)
export default class List extends Vue {
  get products2() {
    
    return (this.$store as Vuex.Store<State>).state;
  }
};

</script>