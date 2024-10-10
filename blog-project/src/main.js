import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import createRouter from './router'


createApp(App).use(createRouter).mount('#app')
