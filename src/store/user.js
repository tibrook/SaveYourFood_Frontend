import axios from "axios";

const API_AUTH_URL = "http://127.0.0.1:3000/auth/login";
const API_REGISTER_URL = "http://127.0.0.1:3000/users";

export default {
    state() {
        return {
            token: localStorage.getItem("token") || null,
            language: localStorage.getItem("language") || "en",
            userSettings: JSON.parse(localStorage.getItem("userSettings")) || {}
        };
    },
    getters: {
        currentLanguage: (state) => state.language,
        isAuthenticated: (state) => {
            return !!state.token;
        },
        userSettings: (state) => state.userSettings
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
                const response = await axios.post(API_AUTH_URL, credentials);
                if (response && response.status === 201) {
                    const token = response.data.access_token;
                    const userSettings = {
                        // name: response.data.name,
                        // email: response.data.email,

                        //Mockups to removed
                        name: "Alexandre",
                        email: "Alexandre.guillouet@gmail.com"
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
        }
    }
};
