import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/BaseButton';
import BaseAlert from './components/BaseAlert';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-alert', BaseAlert);

app.mount('#app')
