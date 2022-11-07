import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoianVnYXoiLCJhIjoiY2xhNnlubDJ0MXBubTNwbWg0d3hxZGg1dSJ9.BS2clT_hzrBd4Z1706gDUw';

if( !navigator.geolocation ) {
  alert('Tu navegador no soporta el Geolocation')
  throw new Error('Tu navegador no soporta el Geolocation')
}

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
