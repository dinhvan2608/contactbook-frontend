import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import router from './router';

createApp(App).use(router).mount('#app');
