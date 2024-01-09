import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import store from './store'
import router from './router' // Importez le routeur

import en from './locales/en.json'
import fr from './locales/fr.json'

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('language') || 'en',
    fallbackLocale: 'en',
    messages: { en, fr },
})

const app = createApp(App)
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')
