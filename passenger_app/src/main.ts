import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { EventItem } from '@/types'

const app = createApp(App)
const passengers = ref<EventItem[]>([])
app.use(createPinia())
app.use(router)

app.mount('#app')

const x = 'helxysx'
console.log(x)
