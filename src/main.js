import './styles/common.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import Dome from './components/Dome.vue';

const app = createApp(App);

app.component('Dome', Dome);
app.use(createPinia());
app.use(router);

app.mount('#app');
