import { createApp } from "vue"
import { createPinia } from "pinia"
import Toast, { POSITION } from "vue-toastification"

import App from "./App.vue"
import router from "./router"

import "./assets/main.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, {
 position: POSITION.TOP_LEFT,
})

app.mount("#app")
