import { createStore } from 'vuex';

// My custom modules
import placesModules from './places';
import { PlaceState } from './places/state';

export interface StateInterface {
  places: PlaceState
}

export default createStore<StateInterface>({
  modules: {
    places: placesModules
  }
})
