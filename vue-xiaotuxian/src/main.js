// import './assets/main.css'
import router from '@/router/index';
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/common.scss'
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
