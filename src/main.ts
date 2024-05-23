import App from './App.vue'
import { createApp } from '@bedard/vue-forward'

createApp(App, {
  onHooray() {
    console.log('It works! 🎉')
  }
}).mount('#app')
