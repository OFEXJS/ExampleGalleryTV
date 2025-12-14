import { createApp } from 'vue'
import router from './router'
import './styles/variables.scss'
import './styles/global.scss'
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
