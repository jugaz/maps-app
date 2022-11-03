export interface PlaceState {
    isLoading: boolean;
    userLocation?: [number, number] //log, lat
}

function state (): PlaceState {
  return {
    isLoading: true,
    userLocation: undefined
  }
}

export default state
