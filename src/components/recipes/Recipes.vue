<template>
    <div class="d-flex flex-column flex-root">
         <div class="page d-flex flex-row flex-column-fluid">
             <MenuAside />
             <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                 <HeaderMobile />
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
                                                            <span class="text-gray-500 fw-semibold fs-7">{{currentTab === 'generatedRecipes' ?   generatedRecipeCountByCategory[category.name] || 0 : userRecipeCountByCategory[category.name]  || 0 }} recettes</span>
														</div>
													</a>
                                                </li>
											</ul>
                                            <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold mb-6">
                                                <li class="nav-item mt-2">
                                                    <a class="nav-link text-active-primary ms-0 me-10 py-5"
                                                    :class="{active: currentTab === 'generatedRecipes'}"
                                                    @click="changeTab('generatedRecipes')" role="button">
                                                        {{$t('Recipes_GeneratedRecipes')}}
                                                    </a>
                                                </li>

                                                <li class="nav-item mt-2">
                                                    <a class="nav-link text-active-primary ms-0 me-10 py-5"
                                                    :class="{active: currentTab === 'userRecipes'}" role="button"
                                                    @click="changeTab('userRecipes')">
                                                        {{$t('Recipes_MyRecipes')}}
                                                    </a>
                                                </li>
                                            </ul>
											<div class="row g-6 g-xl-9">
                                                <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" :myRecipe="currentTab === 'generatedRecipes' ? true : false"  @recipe-clicked="handleRecipeClick" />
                                            </div>
										</div>
									</div>
								</div>
								<div class="flex-row-auto w-xl-450px">
                                    <RecipeForm v-if="isFormVisible" :isEditing="isEditFormMode" :selectedRecipe="selectedRecipe" @closeRecipeForm='handleCloseRecipeForm' />
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
 import MenuAside from '@/components/menu/MenuAside.vue'
 import RecipeForm from "@/components/recipes/RecipeForm.vue"
 import HeaderMobile from "@/components/header/HeaderMobile.vue"
 import RecipeCard from "@/components/recipes/RecipeCard.vue"
 import { mapGetters,mapActions } from 'vuex';

   export default defineComponent({
     name: 'RecipesList', 
     components: {
         MenuAside,RecipeForm,
         RecipeCard,HeaderMobile
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
             currentTab :"generatedRecipes",
             recipes : []
         };
     },
     computed: {
        ...mapGetters(['generatedRecipes', 'categories', 'userRecipes']),
        filteredRecipes() {
            return this.currentTab === 'userRecipes' ? this.userRecipes : this.generatedRecipes;
        },
        generatedRecipeCountByCategory() {
            let count = {};
            console.log(this.generatedRecipes)
            this.generatedRecipes.forEach((recipe) => {
                count[recipe.category] = (count[recipe.category] || 0) + 1;
            });
            return count || 0;
        },
        userRecipeCountByCategory() {
            let count = {};
            this.userRecipes.forEach((recipe) => {
                count[recipe.category] = (count[recipe.category] || 0) + 1;
            });
            return count || 0;
        },
    },
     mounted() {
       
         if(document.querySelector("#kt_tagify_1")){
            const ingredientsInput = document.querySelector("#kt_tagify_1");
            //eslint-disable-next-line
            new Tagify(ingredientsInput);
         }
         this.fetchGeneratedRecipes(); 
         this.fetchCategories(); 
       
        
     },
  
     methods: {
        ...mapActions(['fetchGeneratedRecipes', 'fetchCategories', 'fetchUserRecipes']),

        async onExecuteQueries(){
            await this.fetchGeneratedRecipes()
            await this.fetchCategories()
            await this.fetchUserRecipes()
            const recipeId = parseInt(this.$route.params.id);
            if (recipeId) {
                const foundRecipe = this.generatedRecipes.find(recipe => recipe.id === recipeId);
                if (foundRecipe) {
                    this.selectedRecipe = foundRecipe;
                    this.isEditFormMode = true;
                }
            }
        },
        changeTab(tabName) {
            this.currentTab = tabName;
        },
        handleCloseRecipeForm(){
            this.selectedRecipe = null;
            this.isEditFormMode = false;
        },
         filterByCategory(categoryType) {
            this.selectedCategory = categoryType;
         },
         handleRecipeClick(clickedRecipe) {
            console.log('Recette cliquée :', clickedRecipe);
            this.selectedRecipe = clickedRecipe;
            this.isEditFormMode = true;
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
     },
     watch:{
        currentTab(newTab) {
            if (newTab === 'generatedRecipes') {
            this.fetchGeneratedRecipes();
            } else if (newTab === 'userRecipes') {
                this.fetchUserRecipes();
            }
        }
     }
   
   });
   </script>
   
 
   