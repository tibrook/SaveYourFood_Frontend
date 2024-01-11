// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '@/components/UserLogin.vue'
import HomePage from '@/components/HomePage.vue'
import RegisterUser from '@/components/RegisterUser.vue'
import InventoryVue from '@/components/Inventory.vue'
import auth from '@/api/auth'

const routes = [
    {
        path: '/',
        name: 'default',
        component: UserLogin,
    },
    {
        path: '/login',
        name: 'Login',
        component: UserLogin,
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
        meta: { requiresAuth: true },
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterUser,
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: InventoryVue,
    },
    {
        path: '/account/preferences',
        name: 'accountPreferences',
        component: () => import("@/components/Account.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to, from, next) => {
    const isAuthenticated = auth.isAuthenticated()

    if (isAuthenticated && (to.path === '/' || to.name === 'Login')) {
        // Si l'utilisateur est authentifié et essaie d'accéder à la racine ou à la page de connexion, rediriger vers "/home"
        next({ path: '/home' })
    } else if (
        to.matched.some((record) => record.meta.requiresAuth) &&
        !isAuthenticated
    ) {
        next({ name: 'Login' })
    } else {
        next()
    }
})

export default router
