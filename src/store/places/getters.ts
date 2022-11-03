
import { GetterTree } from 'vuex'
import { PlaceState } from './state'
import { StateInterface } from '../index'

const getters: GetterTree<PlaceState, StateInterface> = {
  someGetter (/* state */) {
    // return true;
  }
}

export default getters
