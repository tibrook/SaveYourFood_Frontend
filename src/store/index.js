import {createStore} from "vuex";
import recipeStore from "./recipe.js";
import inventoryStore from "./inventory.js";
import user from "./user.js";
const store = createStore({
    modules: {
        recipes: recipeStore,
        users: user,
        inventoryStore
    }
});
export default store;
