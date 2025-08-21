// frontend is vue
import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import indexRoutes from './web/routes/indexRoutesWeb';


//import app from 'express';
const app = createApp(App);

app.use(createPinia());
app.use(indexRoutes);

app.mount('#app');
