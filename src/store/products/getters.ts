import { GET_PRODUCTS } from './messages'

export const getters = {
  [GET_PRODUCTS] (state: any) {
    return state.products;
  }
}
