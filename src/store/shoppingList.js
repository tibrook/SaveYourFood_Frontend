export default {
    state() {
        return {
            shoppingList: []
        };
    },
    getters: {
        shoppingList: (state) => {
            return state.shoppingList;
        },
        getShoppingItemById: (state) => (id) => {
            return state.shoppingList.find((item) => item.id === id);
        }
    },
    mutations: {
        ADD_SHOPPING_ITEM(state, item) {
            state.shoppingList.push(item);
        },
        EDIT_SHOPPING_ITEM(state, updatedItem) {
            const index = state.shoppingList.findIndex((item) => item.id === updatedItem.id);
            if (index !== -1) {
                state.shoppingList.splice(index, 1, updatedItem);
            }
        },
        DELETE_SHOPPING_ITEM(state, itemId) {
            state.shoppingList = state.shoppingList.filter((item) => item.id !== itemId);
        },
        SET_SHOPPING_LIST(state, shoppingList) {
            state.shoppingList = shoppingList;
        }
    },
    actions: {
        fetchShoppingList({commit}) {
            const mockShoppingList = [
                {
                    name: "Magrêt de canard",
                    quantity: "1 magret (300g)",
                    supplier: "Boucher",
                    bulletColor: "bg-danger",
                    badgeColor: "badge-light-warning",
                    checked: false
                },
                {
                    name: "Pâtes",
                    quantity: "500g",
                    supplier: "Supermarché",
                    bulletColor: "bg-warning",
                    badgeColor: "badge-light-primary",
                    checked: false
                },
                {
                    name: "Pommes de terre",
                    quantity: "3 Kgs",
                    supplier: "Producteur",
                    bulletColor: "bg-success",
                    badgeColor: "badge-light-success",
                    checked: false
                },
                {
                    name: "Haricots verts",
                    quantity: "500g",
                    supplier: "Producteur",
                    bulletColor: "bg-success",
                    badgeColor: "badge-light-success",
                    checked: false
                },
                {
                    name: "Pâte à pizza",
                    quantity: "Pour 3 pizzas",
                    supplier: "Boulangerie",
                    bulletColor: "bg-warning",
                    badgeColor: "badge-light-danger",
                    checked: false
                },
                {
                    name: "Pommes",
                    quantity: "400g",
                    supplier: "Producteur",
                    bulletColor: "bg-success",
                    badgeColor: "badge-light-success",
                    checked: false
                },
                {
                    name: "Fromage Brie",
                    quantity: "200g",
                    supplier: "Fromagerie",
                    bulletColor: "bg-danger",
                    badgeColor: "badge-light-warning",
                    checked: false
                },
                {
                    name: "Lait entier",
                    quantity: "2 litres",
                    supplier: "Supermarché",
                    bulletColor: "bg-danger",
                    badgeColor: "badge-light-primary",
                    checked: false
                },
                {
                    name: "Tomates cerises",
                    quantity: "250g",
                    supplier: "Marché local",
                    bulletColor: "bg-success",
                    badgeColor: "badge-light-success",
                    checked: false
                },
                {
                    name: "Poulet entier",
                    quantity: "1,5 kg",
                    supplier: "Boucher",
                    bulletColor: "bg-danger",
                    badgeColor: "badge-light-warning",
                    checked: false
                }
            ];
            commit("SET_SHOPPING_LIST", mockShoppingList);
            return mockShoppingList;
        },
        addShoppingItem({commit}, item) {
            commit("ADD_SHOPPING_ITEM", item);
        },
        editShoppingItem({commit}, item) {
            commit("EDIT_SHOPPING_ITEM", item);
        },
        removeShoppingItem({commit}, itemId) {
            commit("DELETE_SHOPPING_ITEM", itemId);
        }
    }
};
