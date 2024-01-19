export default {
    state() {
        return {
            shoppingList: [],
            categoriesShoppingList: []
        };
    },
    getters: {
        shoppingList: (state) => {
            return state.shoppingList;
        },
        getShoppingItemById: (state) => (id) => {
            return state.shoppingList.find((item) => item.id === id);
        },
        categoriesShoppingList: (state) => {
            return state.categoriesShoppingList;
        }
    },
    mutations: {
        ADD_SHOPPING_ITEM(state, item) {
            state.shoppingList.push(item);
        },
        ADD_CATEGORY_SHOPPING_LIST(state, item) {
            state.categoriesShoppingList.push(item);
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
        },
        SET_CATEGORIES_LIST(state, categoriesShoppingList) {
            state.categoriesShoppingList = categoriesShoppingList;
        }
    },
    actions: {
        fetchShoppingList({commit}) {
            const mockShoppingList = [
                {
                    id: 1,
                    category: "Fruits",
                    shoppingCategory: 2,
                    nextMenuDate: "2024-02-01",
                    recipeName: "Tarte aux pommes",
                    recipeId: "R1",
                    name: "Magrêt de canard",
                    quantity: "1 magret (300g)",
                    supplier: "Boucher",
                    bulletColor: "bg-danger",
                    badgeColor: "badge-light-warning",
                    checked: false
                },
                {
                    id: 2,
                    category: "Fruits",
                    shoppingCategory: 2,
                    nextMenuDate: "2024-02-01",
                    recipeName: "Tarte aux pommes",
                    recipeId: "R1",
                    name: "Pâtes",
                    quantity: "500g",
                    supplier: "Supermarché",
                    bulletColor: "bg-warning",
                    badgeColor: "badge-light-primary",
                    checked: false
                },
                {
                    id: 3,
                    category: "Fruits",
                    shoppingCategory: 2,
                    nextMenuDate: "2024-02-01",
                    recipeName: "Tarte aux pommes",
                    recipeId: "R1",
                    name: "Pommes de terre",
                    quantity: "3 Kgs",
                    supplier: "Producteur",
                    bulletColor: "bg-success",
                    badgeColor: "badge-light-success",
                    checked: false
                },
                {
                    id: 4,
                    category: "Fruits",
                    shoppingCategory: 2,
                    nextMenuDate: "2024-02-01",
                    recipeName: "Tarte aux pommes",
                    recipeId: "R1",
                    name: "Haricots verts",
                    quantity: "500g",
                    supplier: "Producteur",
                    bulletColor: "bg-success",
                    badgeColor: "badge-light-success",
                    checked: false
                },
                {
                    id: 5,
                    category: "Fruits",
                    shoppingCategory: 2,
                    nextMenuDate: "2024-02-01",
                    recipeName: "Tarte aux pommes",
                    recipeId: "R1",
                    name: "Pâte à pizza",
                    quantity: "Pour 3 pizzas",
                    supplier: "Boulangerie",
                    bulletColor: "bg-warning",
                    badgeColor: "badge-light-danger",
                    checked: false
                },
                {
                    id: 6,
                    category: "Fruits",
                    shoppingCategory: 2,
                    nextMenuDate: "2024-02-01",
                    recipeName: "Tarte aux pommes",
                    recipeId: "R1",
                    name: "Pommes",
                    quantity: "400g",
                    supplier: "Producteur",
                    bulletColor: "bg-success",
                    badgeColor: "badge-light-success",
                    checked: false
                },
                {
                    id: 7,
                    category: "Fruits",
                    shoppingCategory: 2,
                    nextMenuDate: "2024-02-01",
                    recipeName: "Tarte aux pommes",
                    recipeId: "R1",
                    name: "Fromage Brie",
                    quantity: "200g",
                    supplier: "Fromagerie",
                    bulletColor: "bg-danger",
                    badgeColor: "badge-light-warning",
                    checked: false
                },
                {
                    id: 8,
                    category: "Fruits",
                    shoppingCategory: 2,
                    nextMenuDate: "2024-02-01",
                    recipeName: "Tarte aux pommes",
                    recipeId: "R1",
                    name: "Lait entier",
                    quantity: "2 litres",
                    supplier: "Supermarché",
                    bulletColor: "bg-danger",
                    badgeColor: "badge-light-primary",
                    checked: false
                },
                {
                    id: 9,
                    category: "Fruits",
                    shoppingCategory: 2,
                    nextMenuDate: "2024-02-01",
                    recipeName: "Tarte aux pommes",
                    recipeId: "R1",
                    name: "Tomates cerises",
                    quantity: "250g",
                    supplier: "Marché local",
                    bulletColor: "bg-success",
                    badgeColor: "badge-light-success",
                    checked: false
                },
                {
                    id: 10,
                    category: "Fruits",
                    shoppingCategory: 2,
                    nextMenuDate: "2024-02-01",
                    recipeName: "Tarte aux pommes",
                    recipeId: "R1",
                    name: "Poulet entier",
                    quantity: "1,5 kg",
                    supplier: "Boucher",
                    bulletColor: "bg-danger",
                    badgeColor: "badge-light-warning",
                    checked: false
                },
                {id: 11, name: "Pommes", category: "Fruits", shoppingCategory: 2, nextMenuDate: "2024-02-01", quantity: "5 Kg", recipeName: "Tarte aux pommes", recipeId: "R1"},
                {id: 12, name: "Tomates", category: "Légumes", shoppingCategory: 2, nextMenuDate: "2024-02-02", quantity: "1 Kg", recipeName: "Salade de tomates", recipeId: "R2"},
                {id: 13, name: "Poulet", category: "Viande", shoppingCategory: 1, nextMenuDate: "2024-02-03", quantity: "1 Poulet (800g)", recipeName: "Poulet rôti", recipeId: "R3"},
                {id: 14, name: "Pâtes", category: "Féculents", shoppingCategory: 1, nextMenuDate: "2024-02-04", quantity: "2 Kg", recipeName: "Pâtes Carbonara", recipeId: "R4"},
                {id: 15, name: "Lait", category: "Produits laitiers", shoppingCategory: 1, nextMenuDate: "2024-02-05", quantity: "6 bouteilles", recipeName: "Quiche", recipeId: "R5"},
                {id: 16, name: "Œufs", category: "Produits laitiers", shoppingCategory: 1, nextMenuDate: "2024-02-06", quantity: "12 oeufs", recipeName: "Omelette", recipeId: "R6"},
                {id: 17, name: "Fromage", category: "Produits laitiers", shoppingCategory: 1, nextMenuDate: "2024-02-07", quantity: "500 g", recipeName: "Pizza", recipeId: "R7"},
                {id: 18, name: "Pain", category: "Boulangerie", shoppingCategory: 4, nextMenuDate: "2024-02-08", quantity: 2, recipeName: "Sandwich", recipeId: "R8"},
                {id: 9, name: "Poisson", category: "Poissonnerie", shoppingCategory: 1, nextMenuDate: "2024-02-09", quantity: 4, recipeName: "Poisson grillé", recipeId: "R9"},
                {id: 19, name: "Riz", category: "Féculents", shoppingCategory: 1, nextMenuDate: "2024-02-10", quantity: 500, recipeName: "Risotto", recipeId: "R10"},
                {id: 20, name: "Courgettes", category: "Légumes", shoppingCategory: 2, nextMenuDate: "2024-02-11", quantity: 6, recipeName: "Gratin de courgettes", recipeId: "R11"},
                {id: 21, name: "Poivrons", category: "Légumes", shoppingCategory: 2, nextMenuDate: "2024-02-12", quantity: 5, recipeName: "Poivrons farcis", recipeId: "R12"},
                {id: 22, name: "Boeuf", category: "Viande", shoppingCategory: 2, nextMenuDate: "2024-02-13", quantity: 500, recipeName: "Bœuf Bourguignon", recipeId: "R13"},
                {id: 23, name: "Carottes", category: "Légumes", shoppingCategory: 2, nextMenuDate: "2024-02-14", quantity: 7, recipeName: "Carottes Vichy", recipeId: "R14"},
                {id: 24, name: "Champignons", category: "Légumes", shoppingCategory: 2, nextMenuDate: "2024-02-15", quantity: 250, recipeName: "Champignons farcis", recipeId: "R15"},
                {id: 25, name: "Oignons", category: "Légumes", shoppingCategory: 2, nextMenuDate: "2024-02-16", quantity: 4, recipeName: "Soupe à l'oignon", recipeId: "R16"},
                {id: 26, name: "Ail", category: "Condiments", shoppingCategory: 2, nextMenuDate: "2024-02-17", quantity: 2, recipeName: "Aïoli", recipeId: "R17"},
                {id: 27, name: "Chocolat", category: "Confiserie", shoppingCategory: 2, nextMenuDate: "2024-02-18", quantity: 3, recipeName: "Moelleux au chocolat", recipeId: "R18"},
                {id: 28, name: "Citrons", category: "Fruits", shoppingCategory: 2, nextMenuDate: "2024-02-19", quantity: 4, recipeName: "Tarte au citron", recipeId: "R19"},
                {id: 29, name: "Noix", category: "Fruits secs", shoppingCategory: 2, nextMenuDate: "2024-02-20", quantity: 200, recipeName: "Gâteau aux noix", recipeId: "R20"}
            ];
            commit("SET_SHOPPING_LIST", mockShoppingList);
            return mockShoppingList;
        },
        addShoppingItem({commit}, item) {
            commit("ADD_SHOPPING_ITEM", item);
        },
        fetchCategoriesShoppingList({commit}) {
            const mockShoppingList = [
                {
                    id: 1,
                    name: "Intermarché",
                    color: "badge-light-danger"
                },
                {
                    id: 2,
                    name: "Producteurs fruits & légumes",
                    color: "badge-light-success"
                },
                {
                    id: 3,
                    name: "Boucherie",
                    color: "badge-light-info"
                },
                {
                    id: 4,
                    name: "Boulangerie",
                    color: "badge-light-warning"
                }
            ];
            commit("SET_CATEGORIES_LIST", mockShoppingList);
            return mockShoppingList;
        },
        addCategoryShoppingList({commit}, category) {
            commit("ADD_CATEGORY_SHOPPING_LIST", category);
        },
        editShoppingItem({commit}, item) {
            commit("EDIT_SHOPPING_ITEM", item);
        },
        removeShoppingItem({commit}, itemId) {
            commit("DELETE_SHOPPING_ITEM", itemId);
        }
    }
};
