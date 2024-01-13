export default {
    state() {
        return {
            language: localStorage.getItem("language") || "en"
        };
    },
    getters: {
        currentLanguage: (state) => state.language,
        isAuthenticated: (state) => {
            return !!state.token;
        }
    },
    mutations: {
        SET_LANGUAGE(state, newLanguage) {
            state.language = newLanguage;
            localStorage.setItem("language", newLanguage);
        },
        SET_TOKEN(state, token) {
            state.token = token;
        },
        CLEAR_TOKEN(state) {
            state.token = null;
        }
    },
    actions: {
        setLanguage({commit}, newLanguage) {
            commit("SET_LANGUAGE", newLanguage);
        },
        changeLanguage(lang) {
            localStorage.setItem("language", lang);
        }
    }
};
