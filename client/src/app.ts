// frontend is vue
import './assets/css/main.css'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import indexRoutes from './routes/indexRoutesWeb';

const app = createApp(App);

app.use(createPinia());
app.use(indexRoutes);

app.mount('#app');
