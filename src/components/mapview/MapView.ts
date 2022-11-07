import { defineComponent, ref, onMounted } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';
import Mapboxgl from 'mapbox-gl';

export default defineComponent({
name: 'MapView',
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const {userLocation, isUserlocationReady} = usePlacesStore();

    onMounted(() =>{
      console.log(mapElement.value)
    })

    const initMap  = () => {
      if(!mapElement.value) throw new Error('Elemento no existe')
      if(!userLocation.value) throw new Error('User location no existe')
      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40],
        zoom: 15,
        });
    }

  return {
    userLocation,
    isUserlocationReady,
    mapElement

    }
  }
});
