import { reactive } from 'vue'

export const userSettings = reactive({
    language: localStorage.getItem('language') || 'en',
})

export function changeLanguage(lang) {
    userSettings.language = lang
    localStorage.setItem('language', lang)
}
