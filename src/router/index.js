// router/index.js
import {createRouter, createWebHistory} from "vue-router";
import UserLogin from "@/components/UserLogin.vue";
import HomePage from "@/components/HomePage.vue";
import RegisterUser from "@/components/RegisterUser.vue";
import auth from "@/api/auth";
import newIngredientModalVue from "@/components/newIngredientModal.vue";

const routes = [
    {
        path: "/",
        name: "default",
        component: UserLogin
    },
    {
        path: "/login",
        name: "Login",
        component: UserLogin
    },
    {
        path: "/addIngredient",
        name: "addIngredient",
        component: newIngredientModalVue
    },
    {
        path: "/home",
        name: "Home",
        component: HomePage,
        meta: {requiresAuth: true}
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterUser
    },
    {
        path: "/inventory",
        name: "Inventory",
        component: () => import("@/components/inventory/Inventory.vue")
    },
    {
        path: "/recipes",
        name: "Recipes",
        component: () => import("@/components/recipes/Recipes.vue")
    },
    {
        path: "/weekly-meals",
        name: "WeeklyMeals",
        component: () => import("@/components/WeeklyMeals.vue")
    },
    {
        path: "/account/preferences",
        name: "accountPreferences",
        component: () => import("@/components/account/Account.vue")
    },
    {
        path: "/account/settings",
        name: "accountSettings",
        component: () => import("@/components/AccountSettings.vue")
    },
    {
        path: "/shopping-list",
        name: "ShoppingList",
        component: () => import("@/components/ShoppingList.vue")
    }
];

const router = createRouter({
    history: createWebHistory("/"),
    routes
});
router.beforeEach((to, from, next) => {
    const isAuthenticated = auth.isAuthenticated();

    if (isAuthenticated && (to.path === "/" || to.name === "Login")) {
        // Si l'utilisateur est authentifié et essaie d'accéder à la racine ou à la page de connexion, rediriger vers "/home"
        next({path: "/home"});
    } else if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
        next({name: "Login"});
    } else {
        next();
    }
});

export default router;
