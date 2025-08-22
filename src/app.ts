// frontend is vue
import './web/assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import indexRoutes from './web/routes/indexRoutesWeb';

const app = createApp(App);

app.use(createPinia());
app.use(indexRoutes);

app.mount('#app');

