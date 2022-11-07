import { MutationTree } from 'vuex'
import { PlaceState } from './state'

const mutation: MutationTree<PlaceState> = {
  setLngLat (state: PlaceState, { lng, lat}: { lng: number, lat:number} ) {
    // a line to prevent linter errors

    state.userLocation = [ lng, lat] ;
    state.isLoading = false;
  }
}

export default mutation
