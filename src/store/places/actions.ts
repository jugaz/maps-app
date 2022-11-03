import { ActionTree } from 'vuex';
import { PlaceState } from './state'
import { StateInterface } from '../index'

const actions: ActionTree<PlaceState, StateInterface> = {
  someAction (/* { commit }, payload  */) {
    // a line to prevent linter errors
  }
}

export default actions
