import {createRouter, createWebHistory} from "vue-router";
import UserLogin from "@/components/login/UserLogin.vue";
import HomePage from "@/components/homepage/HomePage.vue";
import RegisterUser from "@/components/register/RegisterUser.vue";
import newIngredientModalVue from "@/components/header/newIngredientModal.vue";
import store from "@/store";
const routes = [
    {
        path: "/",
        name: "default",
        component: UserLogin,
        meta: { header: true }

    },
    {
        path: "/login",
        name: "Login",
        component: UserLogin,
        meta: { header: false }
    },
    {
        path: "/addIngredient",
        name: "addIngredient",
        component: newIngredientModalVue,
        meta: {title: 'Ajouter Ingrédient', header: true }

    },
    {
        path: "/home",
        name: "Home",
        component: HomePage,
        meta: {title: 'Accueil',requiresAuth: true},
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterUser,
        meta: { header: false }
    },
    {
        path: "/inventory",
        name: "Inventory",
        meta: { title: 'Inventory Page', header:true },
        component: () => import("@/components/inventory/Inventory.vue")
    },
    {
        path: "/recipes",
        name: "Recipes",
        meta: { title: 'Recettes', header:true },
        component: () => import("@/components/recipes/Recipes.vue")
    },
    {
        path: "/recipe/:id",
        name: "EditRecipe",
        meta: { title: 'Modifier recette', header:true },
        component: () => import("@/components/recipes/Recipes.vue")
    },
    {
        path: "/weekly-meals",
        name: "WeeklyMeals",
        meta: { title: 'Repas de la semaine', header:true },
        component: () => import("@/components/weaklyMeals/WeeklyMeals.vue")
    },
    {
        path: "/account/preferences",
        name: "accountPreferences",
        component: () => import("@/components/account/Account.vue")
    },
    {
        path: "/account/settings",
        name: "accountSettings",
        component: () => import("@/components/account/AccountSettings.vue")
    },
    {
        path: "/shopping-list",
        name: "ShoppingList",
        component: () => import("@/components/shoppingList/ShoppingList.vue")
    }
];

const router = createRouter({
    history: createWebHistory("/"),
    routes
});
router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters.isAuthenticated;

    if (isAuthenticated && (to.path === "/" || to.name === "Login")) {
        next({path: "/home"});
    } else if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
        next({name: "Login"});
    } else {
        next();
    }
});

export default router;
