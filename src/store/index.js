import {createStore} from "vuex";
import recipeStore from "./recipe.js";
import user from "./user.js";
const store = createStore({
    modules: {
        recipes: recipeStore,
        users: user
    }
});
export default store;
