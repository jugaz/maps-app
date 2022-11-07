import { createStore } from 'vuex';

// My custom modules
import placesModules from './places';
import { PlaceState } from './places/state';

import mapModule from './map';
import { MapState } from './map/state';

export interface StateInterface {
  places: PlaceState,
  map: MapState,
}

export default createStore<StateInterface>({
  modules: {
    places: placesModules,
    map: mapModule
  }
})
