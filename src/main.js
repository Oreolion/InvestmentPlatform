import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vue3-toastify/dist/index.css';
import router from "../src/routes";


const app = createApp(App)
app.use(router)
app.mount('#app')

