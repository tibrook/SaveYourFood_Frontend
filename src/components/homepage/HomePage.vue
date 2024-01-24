<template>
	<div class="d-flex flex-column flex-root">
		<div class="page d-flex flex-row flex-column-fluid">
			<MenuAside />
			<div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
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
				<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
					<div class=" container-xxl " id="kt_content_container">
						<div class="row g-5 g-xl-10 mb-5 mb-xl-12">
							<div class="col-xxl-12">
								<div class="row mb-5 mb-xl-8 g-5 g-xl-8">
									<div class="col-3 rounded-3 " >
										<a class="card customCard flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10 bg-white  bgi-no-repeat" href="/inventory" style="background-position: right top; background-size: 30%; background-image: url(/assets/11.svg);">
											<i class="ki-duotone ki-basket fs-2tx mb-5 ms-n1 text-gray-500">
												<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
											</i>	
											<span class="fs-6 fw-semibold top-right-info">19 éléments</span>

											<span class="fs-4 fw-bold">
												{{$t('Inventory_Main')}}                
											</span>

										</a>
									</div>
									<div class="col-3">
										<a class="card customCard flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10 bg-white  bgi-no-repeat" href="/inventory" style="background-position: right top; background-size: 30%; background-image: url(/assets/abstract-2.svg);">
											<i class="ki-duotone ki-scroll fs-2tx mb-5 ms-n1 text-gray-500"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>												
											<span class="fs-6 fw-semibold top-right-info">12 {{$t('Common_Recipes')}}</span>
											<span class="fs-4 fw-bold">
												{{$t('Recipes_List')}}                
											</span>
												
										</a>
									</div>
									<div class="col-3">
										<a class="card customCard flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10 bg-white  bgi-no-repeat" href="/inventory" style="background-position: right top; background-size: 30%; background-image: url(/assets/abstract-3.svg);">
											<i class="ki-duotone ki-calendar fs-2tx mb-5 ms-n1 text-gray-500"><span class="path1"></span><span class="path2"></span>
											</i>				
											<span class="fs-6 fw-semibold top-right-info">4 {{$t('Common_Meal')}}</span>
											<span class="fs-4 fw-bold">
												{{$t('Meals_Weekly')}}                  
											</span>
											</a>
									</div>
									<div class="col-3">
										<a class="card customCard flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10 bg-white  bgi-no-repeat" href="/inventory" style="background-position: right top; background-size: 30%; background-image: url(/assets/abstract-4.svg);">
											<i class="ki-duotone ki-handcart  fs-2tx mb-5 ms-n1 text-gray-500"></i>
											<span class="fs-6 fw-semibold top-right-info">12 {{$t('Common_Elements')}}</span>
											<span class="fs-4 fw-bold">
												{{$t('ShoppingList_Main')}}                
											</span>
										</a>
									</div>
								</div>
							</div>
							<div class="col-xl-12 ps-xl-12 mt-0">
								<div class="row mb-5 mb-xl-8 g-5 g-xl-12">
									<ConsumeQuicklyWidget class="h-500px overflow-scroll" :items="quickConsumeItems"/>
									<NextRecipeWidget class="h-500px overflow-scroll" :recipes="plannedRecipes"/>
									<ShoppingListWidget class="h-500px overflow-scroll" :shoppingList="shoppingList"/>
								</div>
								<UserPreferencesWidget :preferences="userPreferencesStatistics" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MenuAside from '@/components/menu/MenuAside.vue';
import { mapGetters,mapActions } from 'vuex';
import ConsumeQuicklyWidget from "./ConsumeQuicklyWidget.vue"
import NextRecipeWidget from "./NextRecipeWidget.vue"
import ShoppingListWidget from "./ShoppingListWidget.vue"
import UserPreferencesWidget from './UserPreferencesWidget.vue';
export default {
  
	name: 'HomePage',
	components: {
		MenuAside,ConsumeQuicklyWidget, NextRecipeWidget,ShoppingListWidget,UserPreferencesWidget
	},
	data(){
        return{
            imageUrl: '@/assets/media/svg/brand-logos/abstract-1.svg'
        }
    },
	mounted(){
		this.onExecuteQueries()
	},
	computed: {
			...mapGetters(['quickConsumeItems', 'plannedRecipes', 'shoppingList', 'userPreferencesStatistics']),

	},
	methods: {
		...mapActions(['fetchQuickConsumeItems', 'fetchPlannedRecipes', 'fetchShoppingList', 'fetchUserPreferencesStatistics']),
		onExecuteQueries(){
			this.fetchQuickConsumeItems()
			this.fetchPlannedRecipes()
			this.fetchShoppingList()
			this.fetchUserPreferencesStatistics()
		}
	}
}
</script>
<style>
  .full-width {
    flex-grow: 1!important; /* Permet à l'élément de remplir l'espace disponible */
  }

  .symbol-label {
    overflow: hidden; /* Empêche le débordement de contenu */
    border-radius: inherit; /* Hérite le border-radius de la classe symbol si défini */
  }
  
  .full-height-img {
    height: 100%; /* Ajuste la hauteur de l'image pour remplir le conteneur */
    width: 100%; /* Ajuste la largeur de l'image pour remplir le conteneur */
    object-fit: cover; /* S'assure que l'image couvre toute la zone sans déformer son ratio */
    border-radius: inherit; /* Hérite le border-radius de son parent direct */
  }

.top-right-info {
    position: absolute;
    bottom: 10px; /* Ajustez ces valeurs selon vos besoins */
    right: 10px;
}
.customCard{
	position:relative
}
</style>