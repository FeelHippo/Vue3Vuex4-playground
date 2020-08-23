import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/style.css';
import { Router, createRouter } from 'vue-router'
import { router } from './router/index';
import { store } from './store/index';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $router: Router
    }
}

const app = createApp(App)
    .use(router)
    .use(store)

// adding a property $router to every component instance, not available in "vue-router": "^4.0.0-beta.4"
app.config.globalProperties.$router = createRouter;
    
app.mount('#app')
