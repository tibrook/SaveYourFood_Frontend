export default {
    state() {
        return {
            recipes: [],
            categories: [],
            userRecipes: {},
            plannedRecipes: []
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
        },
        userRecipes: (state) => {
            return state.userRecipes;
        },
        plannedRecipes: (state) => {
            return state.plannedRecipes;
        }
    },
    mutations: {
        ADD_RECIPE(state, recipe) {
            state.recipes.push(recipe);
        },
        SET_RECIPES(state, recipes) {
            state.recipes = recipes;
        },
        SET_USER_RECIPES(state, recipes) {
            state.userRecipes = recipes;
        },
        SET_PLANNED_RECIPES(state, plannedRecipes) {
            state.plannedRecipes = plannedRecipes;
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
        fetchGeneratedRecipes({commit}) {
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
        fetchUserRecipes({commit}) {
            const mockRecipes = {
                saladeCesar: {
                    name: "Salade César Classique",
                    image: require("@/assets/saladeCesar.jpg"),
                    description: "Une salade verte traditionnelle de la cuisine italo-américaine avec une sauce César crémeuse, des croûtons croquants et du parmesan.",
                    datePublication: "15 mars 2024",
                    preparationTime: "20 min",
                    portions: 4,
                    cookingTime: "0 min",
                    category: "Plat principal"
                },
                risottoChampignons: {
                    name: "Risotto aux Champignons",
                    image: require("@/assets/rissotoChampignons.jpg"),
                    description: "Risotto crémeux et riche, agrémenté de champignons sauvages et parfumé à l'ail et au vin blanc.",
                    datePublication: "20 mars 2024",
                    preparationTime: "10 min",
                    portions: 4,
                    cookingTime: "45 min",
                    category: "Plat principal"
                },
                curryPouletThai: {
                    name: "Curry de Poulet Thaï",
                    image: require("@/assets/curryPoulet.jpg"),
                    description: "Curry thaï épicé et aromatique avec du poulet tendre, lait de coco et un mélange de fines herbes thaïlandaises.",
                    datePublication: "25 mars 2024",
                    preparationTime: "15 min",
                    portions: 4,
                    cookingTime: "30 min",
                    category: "Plat principal"
                },
                tarteAuxPommes: {
                    name: "Tarte aux Pommes",
                    image: require("@/assets/tartepommes.jpg"),
                    description: "Tarte aux pommes croustillante avec une garniture de pommes sucrées et une pointe de cannelle, parfaite comme dessert réconfortant.",
                    datePublication: "30 mars 2024",
                    preparationTime: "30 min",
                    portions: 8,
                    cookingTime: "1 h",
                    category: "Dessert"
                },
                bouillabaisse: {
                    name: "Bouillabaisse",
                    image: require("@/assets/bouillabaise.jpg"),
                    description: "Soupe de poissons provençale riche et robuste, garnie de fruits de mer et servie avec de la rouille.",
                    datePublication: "5 avril 2024",
                    preparationTime: "25 min",
                    portions: 6,
                    cookingTime: "40 min",
                    category: "Plat principal"
                },
                burgerMaisonGourmet: {
                    name: "Burger Maison Gourmet",
                    image: require("@/assets/burger.jpg"),
                    description: "Un burger juteux avec un steak haché de qualité, garni de fromage affiné, de laitue croquante, de tomate fraîche et de sauce maison, le tout dans un pain brioché artisanal.",
                    datePublication: "15 avril 2024",
                    preparationTime: "20 min",
                    portions: 4,
                    cookingTime: "10 min",
                    category: "Plat principal"
                },
                paellaValenciana: {
                    name: "Paella Valenciana",
                    image: require("@/assets/burger.jpg"), // Remplacer par l'image appropriée
                    description: "Paella espagnole authentique avec un mélange de viandes et fruits de mer, du riz safrané et une variété de légumes frais.",
                    datePublication: "10 avril 2024",
                    preparationTime: "15 min",
                    portions: 6,
                    cookingTime: "1 h",
                    category: "Plat principal"
                }
            };
            commit("SET_USER_RECIPES", mockRecipes);
            return mockRecipes;
        },
        fetchPlannedRecipes({commit}) {
            const plannedRecipesMock = [
                {
                    name: "Cuisse de poulet à la provençale",
                    image: require("@/assets/pouletprovencale.jpg"),
                    description: "Sortir les cuisses du congélateur",
                    plannedDate: "aujourd'hui"
                },
                {
                    name: "Magret à la sauce soja",
                    image: require("@/assets/magretsoja.jpg"),
                    description: "Faire mariner le magret",
                    plannedDate: "demain midi"
                },
                {
                    name: "Steak haricots verts",
                    image: require("@/assets/steakharicot.jpg"),
                    description: "",
                    plannedDate: "demain soir"
                },
                {
                    name: "Lasagnes",
                    image: require("@/assets/lasagna.jpg"),
                    description: "",
                    plannedDate: "jeudi soir"
                },
                {
                    name: "Pâtes au saumon",
                    image: require("@/assets/patessaumon.jpg"),
                    description: "",
                    plannedDate: "vendredi soir"
                },
                {
                    name: "Burgers",
                    image: require("@/assets/burger.jpg"),
                    description: "",
                    plannedDate: "samedi midi"
                }
            ];

            commit("SET_PLANNED_RECIPES", plannedRecipesMock);
            return plannedRecipesMock;
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
