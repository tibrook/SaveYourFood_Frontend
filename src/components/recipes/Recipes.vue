<template>
    <div class="d-flex flex-column flex-root">
         <div class="page d-flex flex-row flex-column-fluid">
             <MenuAside />
             <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                 <div class="header-mobile py-3">
                     <div class="container d-flex flex-stack">
                         <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                             <a href="index.html">
                                 <img alt="Logo" src="@/assets/chiefHat.svg" class="h-35px" />
                             </a>
                         </div>
                         <button class="btn btn-icon btn-active-color-primary me-n4" id="kt_aside_toggle">
                             <i class="ki-duotone ki-abstract-14 fs-2x">
                                 <span class="path1"></span>
                                 <span class="path2"></span>
                             </i>
                         </button>
                     </div>
                 </div>
                 <HeaderApp :page="$t('recipes')"/>
                 <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<div class="container-xxl" id="kt_content_container">
							<div class="d-flex flex-column flex-xl-row">
								<div class="d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0">
									<div class="card card-flush card-p-0 bg-transparent border-0">
										<div class="card-body">
											<ul class="nav nav-pills d-flex justify-content-between nav-pills-custom gap-3 mb-2" >
												<li class="nav-item mb-3 me-0" v-for="category in categories" :key="category.name" >
													<a class="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg " :class="selectedCategory === category.name ? 'active' : undefined" data-bs-toggle="pill" href="#kt_pos_food_content_1" style="width: 138px;height: 180px">
														<div class="nav-icon mb-3">
															<img :src="category.image" class="w-50px" alt="" />
														</div>
														<div class="">
															<span class="text-gray-800 fw-bold fs-2 d-block">{{category.name}}</span>
															<span class="text-gray-500 fw-semibold fs-7">8 apéritifs</span>
														</div>
													</a>
                                                </li>
											</ul>
                                            <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold mb-6">
                                                <li class="nav-item mt-2">
                                                    <a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="#">
                                                        Recettes générées                    
                                                    </a>
                                                </li>
                                        
                                                <li class="nav-item mt-2">
                                                    <a class="nav-link text-active-primary ms-0 me-10 py-5 " href="#">
                                                        Mes recettes                    
                                                    </a>
                                                </li>
                                            </ul>
											<div class="row g-6 g-xl-9">
                                                <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe"  @recipe-clicked="handleRecipeClick" />
                                            </div>
										</div>
									</div>
								</div>
								<div class="flex-row-auto w-xl-450px">
                                    <RecipeForm v-if="isFormVisible" :isEditing="isEditFormMode" :selectedRecipe="selectedRecipe" @submit="handleFormSubmit" />
								</div>
							</div>
						</div>
					</div>
             </div>
         </div>
     </div>
 </template>
   <script>
 import { defineComponent } from 'vue';
 import HeaderApp from "@/components/header.vue";
 import MenuAside from '@/components/menu/MenuAside.vue'
 import RecipeForm from "@/components/recipes/RecipeForm.vue"
 import RecipeCard from "@/components/recipes/RecipeCard.vue"

 
   // ... your existing script
   export default defineComponent({
     name: 'InventoryList', 
     components: {
         MenuAside,RecipeForm,
         HeaderApp, RecipeCard
     },
     data() {
         return {
             selectedCategory: 'Plât',
             isFormVisible: true,
             activeCategory : false,
             isEditFormMode: false,
             categories: [
                 { name: 'Aperitif', type: 'fruits', image: require('@/assets/aperitif.png'), options: 8 },
                 { name: 'Entrées', type: 'meats', image: require("@/assets/entree.jpg"), options: 8 },
                 { name: 'Plât', type: 'cereals', image: require("@/assets/plat.jpg"), options: 8 },
                 { name: 'Dessert', type: 'dairy', image: require("@/assets/dessert.jpg"), options: 8 }
             ],
             formMode: 'add',
             inventory:{
                 fruits:[
                     { "name": "Apple","image": require('@/assets/apple.png'), "description": "Crisp and juicy fruit", "type": "fruit", "quantity": 5, "location": "fridge", "favorite": true },
                     { "name": "Carrot","image": require('@/assets/carrot.png'), "description": "Orange root vegetable rich in beta-carotene", "type": "vegetable", "quantity": 10, "location": "fridge", "favorite": false },
                     { "name": "Banana","image": require('@/assets/banana.jpg'), "description": "Sweet fruit rich in potassium", "type": "fruit", "quantity": 7, "location": "fruit basket", "favorite": true },
                     { "name": "Spinach","image": require('@/assets/spinach.jpg'), "description": "Green leafy vegetable rich in iron", "type": "vegetable", "quantity": 2, "location": "fridge", "favorite": false },
                     { "name": "Tomato","image": require('@/assets/tomato.jpg'), "description": "Versatile red fruit", "type": "fruit", "quantity": 8, "location": "fridge", "favorite": true },
                     { "name": "Broccoli","image": require('@/assets/broccoli.jpg'), "description": "Green vegetable rich in vitamins", "type": "vegetable", "quantity": 3, "location": "fridge", "favorite": false },
                     { "name": "Strawberry","image": require('@/assets/strawberry.jpg'), "description": "Sweet red summer fruit", "type": "fruit", "quantity": 6, "location": "fridge", "favorite": true },
                     { "name": "Bell Pepper","image": require('@/assets/bellpaper.jpg'), "description": "Colorful and crunchy vegetable", "type": "vegetable", "quantity": 5, "location": "fridge", "favorite": false },
                     { "name": "Orange","image": require('@/assets/orange.jpg'), "description": "Citrus fruit rich in Vitamin C", "type": "fruit", "quantity": 9, "location": "fruit basket", "favorite": false },
                     { "name": "Zucchini","image": require('@/assets/zucchini.jpg'), "description": "Mild green vegetable", "type": "vegetable", "quantity": 4, "location": "fridge", "favorite": true }
                 ],
                 meats:[
                     { "name": "Chicken", "description": "Versatile white meat", "type": "meat", "quantity": 2, "location": "fridge", "favorite": true },
                     { "name": "Salmon", "description": "Fish rich in omega-3 fatty acids", "type": "fish", "quantity": 4, "location": "fridge", "favorite": true },
                     { "name": "Tofu", "description": "Plant-based protein source", "type": "vegetarian protein", "quantity": 1, "location": "fridge", "favorite": false },
                     { "name": "Ground Beef", "description": "Red meat for burgers and sauces", "type": "meat", "quantity": 3, "location": "freezer", "favorite": false },
                     { "name": "Shrimp", "description": "Versatile seafood", "type": "seafood", "quantity": 2, "location": "freezer", "favorite": true },
                     { "name": "Steak", "description": "Juicy beef ribeye", "type": "meat", "quantity": 2, "location": "fridge", "favorite": true },
                     { "name": "Lentils", "description": "Protein-rich legumes", "type": "vegetarian protein", "quantity": "1 kg", "location": "pantry", "favorite": false },
                     { "name": "Trout", "description": "Delicate freshwater fish", "type": "fish", "quantity": 2, "location": "fridge", "favorite": false },
                     { "name": "Bacon", "description": "Smoked pork slices", "type": "meat", "quantity": 12, "location": "fridge", "favorite": true },
                     { "name": "Chickpeas", "description": "Nutty legumes great for salads and hummus", "type": "vegetarian protein", "quantity": "800 grams", "location": "pantry", "favorite": false }
                 ],
                 dairy:[
                     { "name": "Lait", "description": "Produit laitier de base, riche en calcium", "type": "produit laitier", "quantity": 2, "location": "frigo", "favorite": true },
                     { "name": "Fromage Cheddar", "description": "Fromage affiné au goût prononcé", "type": "produit laitier", "quantity": 1, "location": "frigo", "favorite": true },
                     { "name": "Yaourt Grec", "description": "Épais et crémeux avec cultures vivantes", "type": "produit laitier", "quantity": 5, "location": "frigo", "favorite": false },
                     { "name": "Beurre", "description": "Non salé, parfait pour la pâtisserie", "type": "produit laitier", "quantity": 250, "location": "frigo", "favorite": true },
                     { "name": "Crème Fraîche", "description": "Idéale pour les sauces et les desserts", "type": "produit laitier", "quantity": 1, "location": "frigo", "favorite": false },
                     { "name": "Œufs", "description": "Œufs de poules élevées en plein air", "type": "produit laitier", "quantity": 12, "location": "frigo", "favorite": true },
                     { "name": "Parmesan", "description": "Fromage dur et granuleux", "type": "produit laitier", "quantity": 0.5, "location": "frigo", "favorite": true },
                     { "name": "Mozzarella", "description": "Fromage doux pour pizza", "type": "produit laitier", "quantity": 2, "location": "frigo", "favorite": false },
                     { "name": "Cottage Cheese", "description": "Fromage frais en grains", "type": "produit laitier", "quantity": 1, "location": "frigo", "favorite": false },
                     { "name": "Crème Aigre", "description": "Crème fermentée pour garniture", "type": "produit laitier", "quantity": 1, "location": "frigo", "favorite": true }
                 ],
                 cereals:[
                     { "name": "Pain Complet", "description": "Pain riche en fibres", "type": "féculent", "quantity": 1, "location": "placard", "favorite": true },
                     { "name": "Pâtes", "description": "Pâtes de blé dur, idéales pour de nombreux plats", "type": "féculent", "quantity": 500, "location": "placard", "favorite": true },
                     { "name": "Riz Basmati", "description": "Riz à grain long parfumé", "type": "féculent", "quantity": "1 kg", "location": "placard", "favorite": false },
                     { "name": "Céréales de petit-déjeuner", "description": "Céréales enrichies en vitamines", "type": "féculent", "quantity": 1, "location": "placard", "favorite": true },
                     { "name": "Farine de Blé", "description": "Indispensable pour la pâtisserie et la panification", "type": "féculent", "quantity": "2 kg", "location": "placard", "favorite": false },
                     { "name": "Lentilles Vertes", "description": "Légumineuses riches en protéines", "type": "féculent", "quantity": 500, "location": "placard", "favorite": true },
                     { "name": "Quinoa", "description": "Graine riche en protéines complètes", "type": "féculent", "quantity": 500, "location": "placard", "favorite": false },
                     { "name": "Biscottes", "description": "Pain grillé léger", "type": "féculent", "quantity": 1, "location": "placard", "favorite": true },
                     { "name": "Chapelure", "description": "Pour paner ou lier des préparations", "type": "féculent", "quantity": 200, "location": "placard", "favorite": false },
                     { "name": "Flocons d'Avoine", "description": "Pour un petit-déjeuner nutritif", "type": "féculent", "quantity": 500, "location": "placard", "favorite": true }
                 ],
                 condiments:[
                     { "name": "Huile d'Olive", "description": "Huile extra vierge, idéale pour assaisonnement", "type": "condiment", "quantity": 1, "location": "placard", "favorite": true },
                     { "name": "Vinaigre Balsamique", "description": "Vinaigre doux pour salades et marinades", "type": "condiment", "quantity": 1, "location": "placard", "favorite": true },
                     { "name": "Basilic Séché", "description": "Herbe aromatique pour la cuisine méditerranéenne", "type": "épice", "quantity": 50, "location": "placard", "favorite": false },
                     { "name": "Paprika", "description": "Épice rouge douce ou fumée", "type": "épice", "quantity": 100, "location": "placard", "favorite": true },
                     { "name": "Sauce Tomate", "description": "Base pour pâtes et pizzas", "type": "sauce", "quantity": 1, "location": "placard", "favorite": true },
                     { "name": "Moutarde", "description": "Condiment piquant pour viandes et vinaigrettes", "type": "condiment", "quantity": 1, "location": "frigo", "favorite": false },
                     { "name": "Cumin en Poudre", "description": "Épice chaude pour plats orientaux et tex-mex", "type": "épice", "quantity": 100, "location": "placard", "favorite": true },
                     { "name": "Sauce Soja", "description": "Assaisonnement pour plats asiatiques", "type": "sauce", "quantity": 1, "location": "placard", "favorite": false },
                     { "name": "Thym", "description": "Herbe pour ragoûts et grillades", "type": "épice", "quantity": 50, "location": "placard", "favorite": true },
                     { "name": "Curry en Poudre", "description": "Mélange d'épices pour plats indiens", "type": "épice", "quantity": 100, "location": "placard", "favorite": false }
                 ]
             },
             selectedRecipe: null,
             filteredItems: [],
             defaultImage: '../assets/cereales.png',
             recipes : [
                {
                    name: "Bouillabaisse",
                    image: require('@/assets/bouillabaise.jpg'),
                    category: "Plât",
                    preparationTime: 25,
                    cookingTime: 40,
                    tips: "Servir avec du riz basmati pour un repas complet.",
                    complementaryDishes: "Un Pinot Noir léger.",
                    preparationSteps: [
                        "Faire revenir les oignons et l'ail, ajouter les poissons et les fruits de mer.",
                        "Ajouter un bouillon de poisson et des herbes, laisser mijoter.",
                        "Servir avec de la rouille et du pain grillé."
                    ],
                    description: "Soupe de poissons provençale riche et robuste, garnie de fruits de mer et servie avec de la rouille.",
                    portions: 6
                },
                {
                    name: "Quiche aux Légumes",
                    image: require('@/assets/saladeCesar.jpg'),
                    category: "Entrée",
                    preparationTime: 15,
                    cookingTime: 35,
                    complementaryDishes: "Un Pinot Noir léger.",
                    preparationSteps: [
                        "Faire revenir les oignons et l'ail, ajouter les poissons et les fruits de mer.",
                        "Ajouter un bouillon de poisson et des herbes, laisser mijoter.",
                        "Servir avec de la rouille et du pain grillé."
                    ],
                    tips: "Servir avec du riz basmati pour un repas complet.",

                    description: "Quiche riche et savoureuse, remplie de légumes de saison et d'un mélange d'œufs crémeux.",
                    portions: 6
                },
                {
                    name: "Poulet Rôti aux Herbes",
                    image: require('@/assets/viandes.png'),
                    category: "Plât",
                    preparationTime: 20,
                    cookingTime: 90,
                    complementaryDishes: "Un Pinot Noir léger.",
                    preparationSteps: [
                        "Faire revenir les oignons et l'ail, ajouter les poissons et les fruits de mer.",
                        "Ajouter un bouillon de poisson et des herbes, laisser mijoter.",
                        "Servir avec de la rouille et du pain grillé."
                    ],
                    tips: "Servir avec du riz basmati pour un repas complet.",
                    description: "Poulet rôti juteux assaisonné avec un mélange d'herbes aromatiques, accompagné de légumes rôtis.",
                    portions: 4
                },
                {
                    name: "Curry de Poulet Thaï",
                    image: require('@/assets/curryPoulet.jpg'),
                    category: "Plât",
                    preparationTime: 15,
                    cookingTime: 30,
                    description: "Curry thaï épicé et aromatique avec du poulet tendre, lait de coco et un mélange de fines herbes thaïlandaises.",
                    preparationSteps: [
                        "Faire mariner le poulet dans des épices.",
                        "Faire sauter le poulet, puis ajouter le lait de coco et les herbes.",
                        "Laisser mijoter jusqu'à cuisson complète."
                    ],
                    tips: "Servir avec du riz basmati pour un repas complet.",
                    complementaryDishes: "Un Riesling frais ou une bière légère.",
                    portions: 4
                    },
                    {
                        name: "Tarte aux Pommes",
                        image: require('@/assets/tartepommes.jpg'),
                        category: "Dessert",
                        preparationTime: 30,
                        cookingTime: 60,
                        description: "Tarte aux pommes croustillante avec une garniture de pommes sucrées et une pointe de cannelle, parfaite comme dessert réconfortant.",
                        preparationSteps: [
                            "Préparer la pâte et la disposer dans un moule à tarte.",
                            "Couper les pommes et les mélanger avec de la cannelle et du sucre.",
                            "Cuire au four jusqu'à ce que la pâte soit dorée."
                        ],
                        tips: "Utiliser des pommes Granny Smith pour un équilibre parfait entre sucré et acidulé.",
                        complementaryDishes: "Un vin de dessert comme le Sauternes.",
                        portions: 8
                    },
                    {
                    name: "Bouillabaisse",
                    image: require('@/assets/bouillabaise.jpg'),
                    category: "Plât",
                    preparationTime: 25,
                    cookingTime: 40,
                    description: "Soupe de poissons provençale riche et robuste, garnie de fruits de mer et servie avec de la rouille.",
                    preparationSteps: [
                        "Faire revenir les oignons et l'ail, ajouter les poissons et les fruits de mer.",
                        "Ajouter un bouillon de poisson et des herbes, laisser mijoter.",
                        "Servir avec de la rouille et du pain grillé."
                    ],
                    tips: "Utiliser un assortiment de poissons pour plus de saveur.",
                    complementaryDishes: "Un vin blanc de Provence ou une Rosé frais.",
                    portions: 6
                    },
                  

            ]
         };
     },
     computed: {
        filteredRecipes() {
            return this.recipes.filter(recipe => recipe.category === this.selectedCategory);
        }
    },
     mounted() {
         if(document.querySelector("#kt_tagify_1")){
            const ingredientsInput = document.querySelector("#kt_tagify_1");
            //eslint-disable-next-line
            new Tagify(ingredientsInput);
         }
     },
  
     methods: {
         filterByCategory(categoryType) {
            this.selectedCategory = categoryType;
         },
         handleRecipeClick(clickedRecipe) {
            console.log('Recette cliquée :', clickedRecipe);
                this.isEditFormMode = !this.isEditFormMode
                this.selectedRecipe = clickedRecipe;
            },
          submitForm() {
             if (this.formMode === 'add') {
                 this.addItem();
             } else if (this.formMode === 'edit') {
                 this.updateItem();
             }
         },
         selectItem(item) {
             this.selectedRecipe = item;
         },
         addItem() {
             this.newItem.id = Date.now().toString();
             this.inventoryItems.push({ ...this.newItem });
             this.newItem = {
                 id: '',
                 image: '',
                 name: '',
                 quantity: 0,
                 location: '',
                 type: '',
                 urgency: 1
             };
         },
         selectIngredient(ingredient) {
             this.selectedRecipe = ingredient;
         }
     }
   });
   </script>
   
 
   