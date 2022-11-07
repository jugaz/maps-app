import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoianVnYXoiLCJhIjoiY2xhNnlqeHd6MWtlZjN3bW42OGdsODJhaCJ9.70uyrUiypL35uceDOKD4aQ';

if( !navigator.geolocation ) {
  alert('Tu navegador no soporta el Geolocation')
  throw new Error('Tu navegador no soporta el Geolocation')
}

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
