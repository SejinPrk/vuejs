import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import store from './store.js'

let emitter = mitt(); // mitt 라이브러리에서 제공하는 함수
let app = createApp(App);
app.config.globalProperties.emitter =emitter; // 글로벌한 변수 보관함

app.use(store).mount('#app')
