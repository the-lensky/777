import { createApp } from 'vue'
import router from './router'
import './assets/main.css'

import { store } from '../src/stores/index'

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import App from './views/App.vue'

const app = createApp(App)

app.component('PulseLoader', PulseLoader)
app.use(store);
app.use(router)
app.mount('#app')
