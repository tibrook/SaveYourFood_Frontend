export default {
    state() {
        return {
            inventory: {},
            inventoryCategories: []
        };
    },
    getters: {
        allInventory: (state) => {
            return state.inventory;
        },
        getInventoryById: (state) => (id) => {
            return state.inventory.find((inventory) => inventory.id === id);
        },
        inventoryCategories: (state) => {
            return state.inventoryCategories;
        }
    },
    mutations: {
        ADD_INVENTORY(state, {category, item}) {
            if (!state.inventory[category]) {
                state.inventory[category] = [];
            }
            state.inventory[category].push(item);
        },
        SET_INVENTORY(state, inventory) {
            state.inventory = inventory;
        },
        SET_CATEGORIES_INVENTORY(state, inventoryCategories) {
            state.inventoryCategories = inventoryCategories;
        },
        EDIT_INVENTORY(state, updatedInventory) {
            const index = state.inventory.findIndex((inventory) => inventory.id === updatedInventory.id);
            if (index !== -1) {
                state.inventory.splice(index, 1, updatedInventory);
            }
        },
        DELETE_INVENTORY(state, inventoryId) {
            const index = state.inventory.findIndex((inventory) => inventory.id === inventoryId);
            if (index !== -1) {
                state.inventory.splice(index, 1);
            }
        }
    },
    actions: {
        fetchInventory({commit}) {
            const mockInventory = {
                fruits: [
                    {name: "Apple", image: require("@/assets/apple.png"), description: "Crisp and juicy fruit", type: "fruit", quantity: 5, location: "fridge", favorite: true},
                    {name: "Carrot", image: require("@/assets/carrot.png"), description: "Orange root vegetable rich in beta-carotene", type: "vegetable", quantity: 10, location: "fridge", favorite: false},
                    {name: "Banana", image: require("@/assets/banana.jpg"), description: "Sweet fruit rich in potassium", type: "fruit", quantity: 7, location: "fruit basket", favorite: true},
                    {name: "Spinach", image: require("@/assets/spinach.jpg"), description: "Green leafy vegetable rich in iron", type: "vegetable", quantity: 2, location: "fridge", favorite: false},
                    {name: "Tomato", image: require("@/assets/tomato.jpg"), description: "Versatile red fruit", type: "fruit", quantity: 8, location: "fridge", favorite: true},
                    {name: "Broccoli", image: require("@/assets/broccoli.jpg"), description: "Green vegetable rich in vitamins", type: "vegetable", quantity: 3, location: "fridge", favorite: false},
                    {name: "Strawberry", image: require("@/assets/strawberry.jpg"), description: "Sweet red summer fruit", type: "fruit", quantity: 6, location: "fridge", favorite: true},
                    {name: "Bell Pepper", image: require("@/assets/bellpaper.jpg"), description: "Colorful and crunchy vegetable", type: "vegetable", quantity: 5, location: "fridge", favorite: false},
                    {name: "Orange", image: require("@/assets/orange.jpg"), description: "Citrus fruit rich in Vitamin C", type: "fruit", quantity: 9, location: "fruit basket", favorite: false},
                    {name: "Zucchini", image: require("@/assets/zucchini.jpg"), description: "Mild green vegetable", type: "vegetable", quantity: 4, location: "fridge", favorite: true}
                ],
                meats: [
                    {name: "Chicken", description: "Versatile white meat", type: "meat", quantity: 2, location: "fridge", favorite: true},
                    {name: "Salmon", description: "Fish rich in omega-3 fatty acids", type: "fish", quantity: 4, location: "fridge", favorite: true},
                    {name: "Tofu", description: "Plant-based protein source", type: "vegetarian protein", quantity: 1, location: "fridge", favorite: false},
                    {name: "Ground Beef", description: "Red meat for burgers and sauces", type: "meat", quantity: 3, location: "freezer", favorite: false},
                    {name: "Shrimp", description: "Versatile seafood", type: "seafood", quantity: 2, location: "freezer", favorite: true},
                    {name: "Steak", description: "Juicy beef ribeye", type: "meat", quantity: 2, location: "fridge", favorite: true},
                    {name: "Lentils", description: "Protein-rich legumes", type: "vegetarian protein", quantity: "1 kg", location: "pantry", favorite: false},
                    {name: "Trout", description: "Delicate freshwater fish", type: "fish", quantity: 2, location: "fridge", favorite: false},
                    {name: "Bacon", description: "Smoked pork slices", type: "meat", quantity: 12, location: "fridge", favorite: true},
                    {name: "Chickpeas", description: "Nutty legumes great for salads and hummus", type: "vegetarian protein", quantity: "800 grams", location: "pantry", favorite: false}
                ],
                dairy: [
                    {name: "Lait", description: "Produit laitier de base, riche en calcium", type: "produit laitier", quantity: 2, location: "frigo", favorite: true},
                    {name: "Fromage Cheddar", description: "Fromage affiné au goût prononcé", type: "produit laitier", quantity: 1, location: "frigo", favorite: true},
                    {name: "Yaourt Grec", description: "Épais et crémeux avec cultures vivantes", type: "produit laitier", quantity: 5, location: "frigo", favorite: false},
                    {name: "Beurre", description: "Non salé, parfait pour la pâtisserie", type: "produit laitier", quantity: 250, location: "frigo", favorite: true},
                    {name: "Crème Fraîche", description: "Idéale pour les sauces et les desserts", type: "produit laitier", quantity: 1, location: "frigo", favorite: false},
                    {name: "Œufs", description: "Œufs de poules élevées en plein air", type: "produit laitier", quantity: 12, location: "frigo", favorite: true},
                    {name: "Parmesan", description: "Fromage dur et granuleux", type: "produit laitier", quantity: 0.5, location: "frigo", favorite: true},
                    {name: "Mozzarella", description: "Fromage doux pour pizza", type: "produit laitier", quantity: 2, location: "frigo", favorite: false},
                    {name: "Cottage Cheese", description: "Fromage frais en grains", type: "produit laitier", quantity: 1, location: "frigo", favorite: false},
                    {name: "Crème Aigre", description: "Crème fermentée pour garniture", type: "produit laitier", quantity: 1, location: "frigo", favorite: true}
                ],
                cereals: [
                    {name: "Pain Complet", description: "Pain riche en fibres", type: "féculent", quantity: 1, location: "placard", favorite: true},
                    {name: "Pâtes", description: "Pâtes de blé dur, idéales pour de nombreux plats", type: "féculent", quantity: 500, location: "placard", favorite: true},
                    {name: "Riz Basmati", description: "Riz à grain long parfumé", type: "féculent", quantity: "1 kg", location: "placard", favorite: false},
                    {name: "Céréales de petit-déjeuner", description: "Céréales enrichies en vitamines", type: "féculent", quantity: 1, location: "placard", favorite: true},
                    {name: "Farine de Blé", description: "Indispensable pour la pâtisserie et la panification", type: "féculent", quantity: "2 kg", location: "placard", favorite: false},
                    {name: "Lentilles Vertes", description: "Légumineuses riches en protéines", type: "féculent", quantity: 500, location: "placard", favorite: true},
                    {name: "Quinoa", description: "Graine riche en protéines complètes", type: "féculent", quantity: 500, location: "placard", favorite: false},
                    {name: "Biscottes", description: "Pain grillé léger", type: "féculent", quantity: 1, location: "placard", favorite: true},
                    {name: "Chapelure", description: "Pour paner ou lier des préparations", type: "féculent", quantity: 200, location: "placard", favorite: false},
                    {name: "Flocons d'Avoine", description: "Pour un petit-déjeuner nutritif", type: "féculent", quantity: 500, location: "placard", favorite: true}
                ],
                condiments: [
                    {name: "Huile d'Olive", description: "Huile extra vierge, idéale pour assaisonnement", type: "condiment", quantity: 1, location: "placard", favorite: true},
                    {name: "Vinaigre Balsamique", description: "Vinaigre doux pour salades et marinades", type: "condiment", quantity: 1, location: "placard", favorite: true},
                    {name: "Basilic Séché", description: "Herbe aromatique pour la cuisine méditerranéenne", type: "épice", quantity: 50, location: "placard", favorite: false},
                    {name: "Paprika", description: "Épice rouge douce ou fumée", type: "épice", quantity: 100, location: "placard", favorite: true},
                    {name: "Sauce Tomate", description: "Base pour pâtes et pizzas", type: "sauce", quantity: 1, location: "placard", favorite: true},
                    {name: "Moutarde", description: "Condiment piquant pour viandes et vinaigrettes", type: "condiment", quantity: 1, location: "frigo", favorite: false},
                    {name: "Cumin en Poudre", description: "Épice chaude pour plats orientaux et tex-mex", type: "épice", quantity: 100, location: "placard", favorite: true},
                    {name: "Sauce Soja", description: "Assaisonnement pour plats asiatiques", type: "sauce", quantity: 1, location: "placard", favorite: false},
                    {name: "Thym", description: "Herbe pour ragoûts et grillades", type: "épice", quantity: 50, location: "placard", favorite: true},
                    {name: "Curry en Poudre", description: "Mélange d'épices pour plats indiens", type: "épice", quantity: 100, location: "placard", favorite: false}
                ]
            };
            commit("SET_INVENTORY", mockInventory);
            return mockInventory;
        },
        fetchInventoryCategories({commit}) {
            const mockCategories = [
                {name: "Fruits & Légumes", type: "fruits", image: require("@/assets/fruitlegumes.jpg"), options: 8},
                {name: "Viandes, Poissons", type: "meats", image: require("@/assets/viandespoissons.jpg"), options: 8},
                {name: "Produits Laitiers", type: "dairy", image: require("@/assets/produitslaitiers.png"), options: 8},
                {name: "Céréales & Féculents", type: "cereals", image: require("@/assets/cereales.png"), options: 8},
                {name: "Epices & Condiments", type: "condiments", image: require("@/assets/epicerie.jpg"), options: 8},
                {name: "Produits Secs", type: "condiments", image: require("@/assets/produitssec.jpg"), options: 8},
                {name: "Conserves & Bocaux", type: "condiments", image: require("@/assets/conserves.jpg"), options: 8},
                {name: "Boissons", type: "condiments", image: require("@/assets/boissons.png"), options: 8}
            ];
            commit("SET_CATEGORIES_INVENTORY", mockCategories);
            return mockCategories;
        }
        // addRecipe({commit}, recipe) {},
        // editRecipe({commit}, recipe) {},
        // deleteRecipe({commit}, recipeId) {}
    }
};
