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
 import { mapGetters,mapActions } from 'vuex';

   export default defineComponent({
     name: 'RecipesList', 
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
             formMode: 'add',
             selectedRecipe: null,
             filteredItems: [],
             defaultImage: '../assets/cereales.png',
             recipes : []
         };
     },
     computed: {
        ...mapGetters(['allRecipes', 'categories']),
        filteredRecipes() {
            return this.recipes.filter(recipe => recipe.category === this.selectedCategory);
        },
    },
     mounted() {
         if(document.querySelector("#kt_tagify_1")){
            const ingredientsInput = document.querySelector("#kt_tagify_1");
            //eslint-disable-next-line
            new Tagify(ingredientsInput);
         }
        this.fetchRecipes()
        this.fetchCategories()
        if(this.allRecipes && this.allRecipes.length){
            this.recipes = this.allRecipes
        }
     },
  
     methods: {
        ...mapActions(['fetchRecipes', 'fetchCategories']),

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
           
         },
         selectIngredient(ingredient) {
             this.selectedRecipe = ingredient;
         }
     }
   });
   </script>
   
 
   