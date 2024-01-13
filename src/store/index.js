import {createStore} from "vuex";
import recipeStore from "./recipe.js";
import userSettings from "./userSettings.js";
const store = createStore({
    modules: {
        recipes: recipeStore,
        users: userSettings
    }
});
export default store;
