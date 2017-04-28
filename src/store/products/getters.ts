import { GET_PRODUCTS } from './messages'
import { State } from './index'

export const getters = {
  [GET_PRODUCTS] (state: State) {
    return state.products;
  }
}
