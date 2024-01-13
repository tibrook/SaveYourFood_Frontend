export default {
    state() {
        return {
            recipes: [],
            categories: []
        };
    },
    getters: {
        allRecipes: (state) => {
            return state.recipes;
        },
        getRecipeById: (state) => (id) => {
            return state.recipes.find((recipe) => recipe.id === id);
        },
        categories: (state) => {
            return state.categories;
        }
    },
    mutations: {
        ADD_RECIPE(state, recipe) {
            state.recipes.push(recipe);
        },
        SET_RECIPES(state, recipes) {
            state.recipes = recipes;
        },
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        EDIT_RECIPE(state, updatedRecipe) {
            const index = state.recipes.findIndex((recipe) => recipe.id === updatedRecipe.id);
            if (index !== -1) {
                state.recipes.splice(index, 1, updatedRecipe);
            }
        },
        DELETE_RECIPE(state, recipeId) {
            const index = state.recipes.findIndex((recipe) => recipe.id === recipeId);
            if (index !== -1) {
                state.recipes.splice(index, 1);
            }
        }
    },
    actions: {
        fetchRecipes({commit}) {
            const mockRecipes = [
                {
                    name: "Bouillabaisse",
                    image: require("@/assets/bouillabaise.jpg"),
                    category: "Plât",
                    preparationTime: 25,
                    cookingTime: 40,
                    tips: "Servir avec du riz basmati pour un repas complet.",
                    complementaryDishes: "Un Pinot Noir léger.",
                    preparationSteps: ["Faire revenir les oignons et l'ail, ajouter les poissons et les fruits de mer.", "Ajouter un bouillon de poisson et des herbes, laisser mijoter.", "Servir avec de la rouille et du pain grillé."],
                    description: "Soupe de poissons provençale riche et robuste, garnie de fruits de mer et servie avec de la rouille.",
                    portions: 6
                },
                {
                    name: "Quiche aux Légumes",
                    image: require("@/assets/saladeCesar.jpg"),
                    category: "Entrée",
                    preparationTime: 15,
                    cookingTime: 35,
                    complementaryDishes: "Un Pinot Noir léger.",
                    preparationSteps: ["Faire revenir les oignons et l'ail, ajouter les poissons et les fruits de mer.", "Ajouter un bouillon de poisson et des herbes, laisser mijoter.", "Servir avec de la rouille et du pain grillé."],
                    tips: "Servir avec du riz basmati pour un repas complet.",

                    description: "Quiche riche et savoureuse, remplie de légumes de saison et d'un mélange d'œufs crémeux.",
                    portions: 6
                },
                {
                    name: "Poulet Rôti aux Herbes",
                    image: require("@/assets/viandes.png"),
                    category: "Plât",
                    preparationTime: 20,
                    cookingTime: 90,
                    complementaryDishes: "Un Pinot Noir léger.",
                    preparationSteps: ["Faire revenir les oignons et l'ail, ajouter les poissons et les fruits de mer.", "Ajouter un bouillon de poisson et des herbes, laisser mijoter.", "Servir avec de la rouille et du pain grillé."],
                    tips: "Servir avec du riz basmati pour un repas complet.",
                    description: "Poulet rôti juteux assaisonné avec un mélange d'herbes aromatiques, accompagné de légumes rôtis.",
                    portions: 4
                },
                {
                    name: "Curry de Poulet Thaï",
                    image: require("@/assets/curryPoulet.jpg"),
                    category: "Plât",
                    preparationTime: 15,
                    cookingTime: 30,
                    description: "Curry thaï épicé et aromatique avec du poulet tendre, lait de coco et un mélange de fines herbes thaïlandaises.",
                    preparationSteps: ["Faire mariner le poulet dans des épices.", "Faire sauter le poulet, puis ajouter le lait de coco et les herbes.", "Laisser mijoter jusqu'à cuisson complète."],
                    tips: "Servir avec du riz basmati pour un repas complet.",
                    complementaryDishes: "Un Riesling frais ou une bière légère.",
                    portions: 4
                },
                {
                    name: "Tarte aux Pommes",
                    image: require("@/assets/tartepommes.jpg"),
                    category: "Dessert",
                    preparationTime: 30,
                    cookingTime: 60,
                    description: "Tarte aux pommes croustillante avec une garniture de pommes sucrées et une pointe de cannelle, parfaite comme dessert réconfortant.",
                    preparationSteps: ["Préparer la pâte et la disposer dans un moule à tarte.", "Couper les pommes et les mélanger avec de la cannelle et du sucre.", "Cuire au four jusqu'à ce que la pâte soit dorée."],
                    tips: "Utiliser des pommes Granny Smith pour un équilibre parfait entre sucré et acidulé.",
                    complementaryDishes: "Un vin de dessert comme le Sauternes.",
                    portions: 8
                },
                {
                    name: "Bouillabaisse",
                    image: require("@/assets/bouillabaise.jpg"),
                    category: "Plât",
                    preparationTime: 25,
                    cookingTime: 40,
                    description: "Soupe de poissons provençale riche et robuste, garnie de fruits de mer et servie avec de la rouille.",
                    preparationSteps: ["Faire revenir les oignons et l'ail, ajouter les poissons et les fruits de mer.", "Ajouter un bouillon de poisson et des herbes, laisser mijoter.", "Servir avec de la rouille et du pain grillé."],
                    tips: "Utiliser un assortiment de poissons pour plus de saveur.",
                    complementaryDishes: "Un vin blanc de Provence ou une Rosé frais.",
                    portions: 6
                }
            ];
            commit("SET_RECIPES", mockRecipes);
            return mockRecipes;
        },
        fetchCategories({commit}) {
            const mockCategories = [
                {name: "Aperitif", type: "fruits", image: require("@/assets/aperitif.png"), options: 8},
                {name: "Entrées", type: "meats", image: require("@/assets/entree.jpg"), options: 8},
                {name: "Plât", type: "cereals", image: require("@/assets/plat.jpg"), options: 8},
                {name: "Dessert", type: "dairy", image: require("@/assets/dessert.jpg"), options: 8}
            ];
            commit("SET_CATEGORIES", mockCategories);
            return mockCategories;
        }
        // addRecipe({commit}, recipe) {},
        // editRecipe({commit}, recipe) {},
        // deleteRecipe({commit}, recipeId) {}
    }
};
