import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000";
const API_AUTH_URL = "/auth/login";
const API_REGISTER_URL = "/users";
// const API_USER_PREFERENCES_URL = "/user/preferences";

export default {
    state() {
        return {
            token: localStorage.getItem("token") || null,
            language: localStorage.getItem("language") || "en",
            userSettings: JSON.parse(localStorage.getItem("userSettings")) || {},
            userPreferences: null
        };
    },
    getters: {
        currentLanguage: (state) => state.language,
        isAuthenticated: (state) => {
            return !!state.token;
        },
        userSettings: (state) => state.userSettings,
        userPreferences: (state) => state.userPreferences
    },
    mutations: {
        SET_LANGUAGE(state, newLanguage) {
            state.language = newLanguage;
            localStorage.setItem("language", newLanguage);
        },
        SET_TOKEN(state, token) {
            localStorage.setItem("token", token);
            state.token = token;
        },
        CLEAR_TOKEN(state) {
            state.token = null;
            localStorage.removeItem("token");
        },
        SET_USER_SETTINGS(state, settings) {
            state.userSettings = settings;
            localStorage.setItem("userSettings", JSON.stringify(settings));
        },
        SET_USER_PREFERENCES(state, preferences) {
            state.userPreferences = preferences;
            console.log(state.userPreferences);
        }
    },
    actions: {
        setLanguage({commit}, newLanguage) {
            commit("SET_LANGUAGE", newLanguage);
        },
        changeLanguage(lang) {
            localStorage.setItem("language", lang);
        },
        async login({commit}, credentials) {
            try {
                const response = await axios.post(BASE_URL + API_AUTH_URL, credentials);
                if (response && response.status === 201) {
                    const token = response.data.access_token;
                    const userSettings = {
                        // name: response.data.name,
                        // email: response.data.email,

                        //Mockups to removed
                        name: "Alexandre",
                        email: "Alexandre.guillouet@gmail.com",
                        firstName: "Guillouet",
                        lastName: "Alexandre"
                    };
                    commit("SET_TOKEN", token);
                    commit("SET_USER_SETTINGS", userSettings);
                    return token;
                }
                return response;
            } catch (error) {
                console.error("Error occurred:", error);
                return error.response ? error.response.data : {error: error.message};
            }
        },
        logout({commit}) {
            commit("CLEAR_TOKEN");
            commit("SET_USER_SETTINGS", {});
            // this.$router.push("/login");
            return Promise.resolve();
        },
        async register(_, userData) {
            try {
                const response = await axios.post(API_REGISTER_URL, userData);
                return response;
            } catch (error) {
                console.error("Error occurred:", error);
                return error.response ? error.response.data : {error: error.message};
            }
        },
        async fetchUserPreferences({commit}) {
            try {
                // const response = await axios.get(BASE_URL + API_USER_PREFERENCES_URL, {
                //     headers: {Authorization: `Bearer ${state.token}`}
                // });
                const response = {data: {}};

                // Mockup to removed
                response.data = {
                    cuisineFavorite: "Française", // Favorite Cuisine
                    favoriteFoods: ["Pasta", "Sushi", "Salmon"], // Favorite Foods
                    preferredOrigin: "Méditerranéenne", // Preferred Origin
                    allergies: ["Arachides", "Lactose"], // Allergies
                    dislikedFoods: ["Oignons", "Ail"], // Disliked Foods
                    dietaryRestrictions: ["Végétarien", "Sans gluten"], // Dietary Restrictions
                    mealTypePreference: ["Dîner", "Déjeuner"], // Meal Type Preference
                    cookingSkillLevel: "Intermédiaire", // Cooking Skill Level
                    favoriteIngredients: ["Tomates", "Basilic", "Mozzarella"], // Favorite Ingredients
                    healthFocus: ["Faible en calories", "Riche en protéines"], // Health Focus
                    mealPreparationTime: "30 minutes", // Meal Preparation Time
                    spiceTolerance: "Moyenne" // Spice Tolerance
                };
                if (response && response.data) {
                    commit("SET_USER_PREFERENCES", response.data);
                }
            } catch (error) {
                console.error("Error fetching user preferences:", error);
            }
        }
    }
};
