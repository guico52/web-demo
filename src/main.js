import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'


const app = createApp(App)
app.use(createVuestic())
app.use(router)
app.mount('#app')
