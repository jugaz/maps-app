import { defineComponent, ref, onMounted, watch} from 'vue';
import Mapboxgl from 'mapbox-gl';
import { usePlacesStore, useMapStore } from '@/composables';

export default defineComponent({
name: 'MapView',
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const {userLocation, isUserlocationReady} = usePlacesStore();
    const { setMap } = useMapStore();


    const initMap  =  async() => {
      if(!mapElement.value) throw new Error('Elemento no existe');
      if(!userLocation.value) throw new Error('User location no existe');
      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: userLocation.value,
        zoom: 15,
        // projection: 'globe'
        });

        const myLocationPoup = new Mapboxgl.Popup({ offset: [0, -25 ]})
          .setLngLat(userLocation.value)
          .setHTML(
            `<h4>Aquí estoy</h4>
            <p>Actualmente en el trabajo</p>
            `)

        const myLocationMarker = new Mapboxgl.Marker()
          .setLngLat(userLocation.value)
          .setPopup( myLocationPoup )
          .addTo( map );

        setMap(map);
    }

    onMounted(() => {
      if( isUserlocationReady.value )
        return initMap();
      console.log('No tengo localización aún');
    });

    watch( isUserlocationReady, (newVal) => {
        if(isUserlocationReady.value) initMap();
    })

  return {
    userLocation,
    isUserlocationReady,
    mapElement

    }
  }
});
