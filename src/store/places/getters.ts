
import { GetterTree } from 'vuex'
import { PlaceState } from './state'
import { StateInterface } from '../index'

const getters: GetterTree<PlaceState, StateInterface> = {
  isUserlocationReady ( state ) {
    return !!state.userLocation
  }
}

export default getters
