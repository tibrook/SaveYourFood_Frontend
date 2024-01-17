export default {
    state() {
        return {
            weeklyMeals: null,
            pastWeeklyMeals: null
        };
    },
    getters: {
        currentWeekMeals: (state) => {
            return state.weeklyMeals;
        },
        pastWeekMeals: (state) => {
            return state.pastWeeklyMeals;
        }
    },
    mutations: {
        SET_WEEKLY_MEALS(state, meals) {
            state.weeklyMeals = meals;
        },
        SET_PAST_WEEKLY_MEALS(state, meals) {
            state.pastWeeklyMeals = meals;
        },
        ADD_WEEKLY_MEAL(state, meal) {
            state.weeklyMeals.push(meal);
        },
        UPDATE_WEEKLY_MEAL(state, updatedMeal) {
            const index = state.weeklyMeals.findIndex((meal) => meal.id === updatedMeal.id);
            if (index !== -1) {
                state.weeklyMeals.splice(index, 1, updatedMeal);
            }
        },
        DELETE_WEEKLY_MEAL(state, mealId) {
            const index = state.weeklyMeals.findIndex((meal) => meal.id === mealId);
            if (index !== -1) {
                state.weeklyMeals.splice(index, 1);
            }
        }
    },
    actions: {
        fetchWeeklyMeals({commit}) {
            const mockWeeklyMeals = [
            ];
            commit("SET_WEEKLY_MEALS", mockWeeklyMeals);
            return mockWeeklyMeals;
        },
        fetchPastWeeklyMeals({commit}) {
            const mockPastWeeklyMeals = [
            ];
            commit("SET_PAST_WEEKLY_MEALS", mockPastWeeklyMeals);
            return mockPastWeeklyMeals;
        },
        addWeeklyMeal({commit}, meal) {
            commit("ADD_WEEKLY_MEAL", meal);
        },
        updateWeeklyMeal({commit}, meal) {
            commit("UPDATE_WEEKLY_MEAL", meal);
        },
        deleteWeeklyMeal({commit}, mealId) {
            commit("DELETE_WEEKLY_MEAL", mealId);
        }
    }
};
