import { ActionTree } from 'vuex';
import { PlaceState } from './state'
import { StateInterface } from '../index'

const actions: ActionTree<PlaceState, StateInterface> = {
  getInitialLocation ( { commit }  ) {
      //todo: colocar loading
      navigator.geolocation.getCurrentPosition(
        ( { coords } ) => commit('setLngLat', {lng: coords.longitude, lat:coords.latitude}),
        ( err ) => {
          console.error(err);
          throw new Error('No geolocation :(')
        }
      )
  }
}

export default actions
