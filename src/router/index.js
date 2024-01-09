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
        redirect: '/login',
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
        // Si l'utilisateur n'est pas authentifié et essaie d'accéder à une route nécessitant une authentification, rediriger vers la page de connexion
        next({ name: 'Login' })
    } else {
        // Dans tous les autres cas, continuer normalement
        next()
    }
})

export default router
