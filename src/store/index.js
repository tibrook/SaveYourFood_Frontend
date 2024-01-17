import {createStore} from "vuex";
import recipeStore from "./recipe.js";
import inventoryStore from "./inventory.js";
import user from "./user.js";
import shoppingList from "./shoppingList.js";
import weeklyMealsStore from "./weeklyMeals.js";


const store = createStore({
    modules: {
        recipes: recipeStore,
        users: user,
        inventoryStore,
        shoppingList,weeklyMealsStore
    }
});
export default store;
