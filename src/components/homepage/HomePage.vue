<template>
	<div class="d-flex flex-column flex-root">
		<div class="page d-flex flex-row flex-column-fluid">
			<MenuAside />
			<div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
				<div class="header-mobile py-3">
					<div class="container d-flex flex-stack">
						<div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
							<a href="index.html">
								<img alt="Logo" src="assets/chiefHat.svg" class="h-35px" />
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
				<HeaderApp />
				<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
					<div class=" container-xxl " id="kt_content_container">
						<div class="row g-5 g-xl-10 mb-5 mb-xl-12">
							<div class="col-xxl-12">
								<div class="row mb-5 mb-xl-8 g-5 g-xl-8">
									<div class="col-3">
										<a class="card flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10" href="/inventory">
											<i class="ki-duotone ki-basket fs-2tx mb-5 ms-n1 text-gray-500"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>												<span class="fs-4 fw-bold">
												{{$t('inventory')}}                </span>
										</a>
									</div>
									<div class="col-3">
										<a class="card flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10" href="/recipes">
											<i class="ki-duotone ki-scroll fs-2tx mb-5 ms-n1 text-gray-500"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>												<span class="fs-4 fw-bold">
												{{$t('recipes')}}                </span>
										</a>
									</div>
									<div class="col-3">
										<a class="card flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10" href="weeklyMeals">
											<i class="ki-duotone ki-calendar fs-2tx mb-5 ms-n1 text-gray-500"><span class="path1"></span><span class="path2"></span></i>												<span class="fs-4 fw-bold">
												{{$t('Meals_Weekly')}}                  </span>
										</a>
									</div>
									<div class="col-3">
										<a class="card flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10" href="/shoppingList">
											<i class="ki-duotone ki-handcart  fs-2tx mb-5 ms-n1 text-gray-500"></i><span class="fs-4 fw-bold">
												{{$t('ShoppingList_Main')}}                </span>
										</a>
									</div>
								</div>
							</div>
							<div class="col-xl-12 ps-xl-12">
								<div class="row mb-5 mb-xl-8 g-5 g-xl-12">
									<div class="card mb-5 mb-xl-8 col-3 me-8 ">
										<div class="card-header align-items-center border-0 mt-4">
											<h3 class="card-title align-items-start flex-column">
												<span class="fw-bold mb-2 text-gray-900">{{$t('Inventory_QuickConsume')}}</span>            
												<span class="text-muted fw-semibold fs-7">3 {{ $t('Inventory_ThisWeekConsume') }}</span>
											</h3>
										</div>
										<div class="card-body pt-5">
											<div class="timeline-label">
												<div class="timeline-item">
													<div class="timeline-label fw-bold text-gray-800 fs-6 ">1 day</div>
													<div class="timeline-badge">
														<i class="fa fa-genderless text-danger fs-1"></i>
													</div>
													<div class="fw-mormal timeline-content text-muted ps-3">
														Saint-Nectaire
														<a href="#">
															<i class="ki-duotone ki-note fs-3 text-danger " 
																data-bs-toggle="tooltip" 
																data-bs-custom-class="tooltip-inverse" 
																data-bs-title='Choose a recipe'>
																<span class="path1"></span><span class="path2"></span>
															</i>
														</a>
													</div>
												</div>
												<div class="timeline-item">
													<div class="timeline-label fw-bold text-gray-800 fs-6">1 day</div>
													<div class="timeline-badge">
														<i class="fa fa-genderless text-danger fs-1"></i>
													</div>
													<div class="timeline-content d-flex">
														<span class="fw-mormal text-muted ps-3">
															Cuisses de poulet
															<a href="#">
																<i class="ki-duotone ki-note-2 text-success fs-3"
																	data-bs-toggle="tooltip" 
																	data-bs-custom-class="tooltip-inverse" 
																	data-bs-title='View Recipe'>
																	<span class="path1"></span>
																	<span class="path2"></span>
																	<span class="path3"></span>
																	<span class="path4"></span>
																</i>
															</a>
														</span>
													</div>
												</div>
												<div class="timeline-item">
													<div class="timeline-label fw-bold text-gray-800 fs-6">2 days </div>
													<div class="timeline-badge">
														<i class="fa fa-genderless text-danger fs-1"></i>
													</div>
													<div class="timeline-content fw-mormal text-muted ps-3">
														Cabillaud
														<a href="#">
															<i class="ki-duotone ki-note fs-3 text-danger " 
																data-bs-toggle="tooltip" 
																data-bs-custom-class="tooltip-inverse" 
																data-bs-title='Choose a recipe'>
																<span class="path1"></span><span class="path2"></span>
															</i>
														</a>
													</div>
												</div>
												<div class="timeline-item">
													<div class="timeline-label fw-bold text-gray-800 fs-6">4 days</div>
													<div class="timeline-badge">
														<i class="fa fa-genderless text-warning fs-1"></i>
													</div>
													<div class="timeline-content fw-mormal text-muted ps-3">
														Pate à tartiner
														<a href="#">
															<i class="ki-duotone ki-note fs-3 text-danger " 
																data-bs-toggle="tooltip" 
																data-bs-custom-class="tooltip-inverse" 
																data-bs-title='Choose a recipe'>
																<span class="path1"></span><span class="path2"></span>
															</i>
														</a>
													</div>
												</div>
												<div class="timeline-item">
													<div class="timeline-label fw-bold text-gray-800 fs-6">5 days</div>
													<div class="timeline-badge">
														<i class="fa fa-genderless text-warning fs-1"></i>
													</div>
													<div class="timeline-content fw-mormal text-muted ps-3">
														Steak 
														<a href="#">
																<i class="ki-duotone ki-note-2 text-success fs-3"
																	data-bs-toggle="tooltip" 
																	data-bs-custom-class="tooltip-inverse" 
																	data-bs-title='View Recipe'>
																	<span class="path1"></span>
																	<span class="path2"></span>
																	<span class="path3"></span>
																	<span class="path4"></span>
																</i>
															</a>
													</div>
												</div>
												<div class="timeline-item">
													<div class="timeline-label fw-bold text-gray-800 fs-6">5 days</div>
													<div class="timeline-badge">
														<i class="fa fa-genderless text-warning fs-1"></i>
													</div>
													<div class="timeline-content fw-mormal text-muted ps-3">
														Sauce soja
														<a href="#">
																<i class="ki-duotone ki-note-2 text-success fs-3"
																	data-bs-toggle="tooltip" 
																	data-bs-custom-class="tooltip-inverse" 
																	data-bs-title='View Recipe'>
																	<span class="path1"></span>
																	<span class="path2"></span>
																	<span class="path3"></span>
																	<span class="path4"></span>
																</i>
															</a>
													</div>
												</div>
												<div class="timeline-item">
													<div class="timeline-label fw-bold text-gray-800 fs-6">5 days</div>
													<div class="timeline-badge">
														<i class="fa fa-genderless text-warning fs-1"></i>
													</div>
													<div class="timeline-content fw-mormal text-muted ps-3">
														Lait
														<a href="#">
																<i class="ki-duotone ki-note-2 text-success fs-3"
																	data-bs-toggle="tooltip" 
																	data-bs-custom-class="tooltip-inverse" 
																	data-bs-title='View Recipe'>
																	<span class="path1"></span>
																	<span class="path2"></span>
																	<span class="path3"></span>
																	<span class="path4"></span>
																</i>
															</a>
													</div>
												</div>
												<div class="timeline-item">
													<div class="timeline-label fw-bold text-gray-800 fs-6">1 week</div>
													<div class="timeline-badge">
														<i class="fa fa-genderless text-success fs-1"></i>
													</div>
													<div class="timeline-content fw-mormal text-muted ps-3">
														Cidre
														<a href="#">
														<i class="ki-duotone ki-note fs-3 text-danger " 
															data-bs-toggle="tooltip" 
															data-bs-custom-class="tooltip-inverse" 
															data-bs-title='Choose a recipe'>
															<span class="path1"></span><span class="path2"></span>
														</i>
													</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="card card-xl-stretch mb-xl-8 col-4 me-8">
										<div class="card-header border-0 py-5">
											<h3 class="card-title align-items-start flex-column">
												<span class="card-label fw-bold fs-3 mb-1">{{$t('recipes')}}</span>

												<span class="text-muted fw-semibold fs-7">{{$t('Recipes_Next')}}</span>
											</h3>
										</div>
										<div class="card-body d-flex flex-column">
											<div class="">
												<div class="d-flex flex-stack mb-5">
													<div class="d-flex align-items-center me-2 full-width">
														<div class="symbol symbol-50px me-3 full-width">
															<div class="symbol-label bg-light full-width">
																<img src="@/assets/pouletprovencale.jpg" alt="" class="full-height-img">
															</div>
														</div>
														<div class="full-width">
															<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Cuisse de poulet à la provençale</a>
															<div class="fs-7 text-muted fw-semibold mt-1">Sortir les cuisses du congélateur</div>
														</div>
													</div>
													<div class="badge badge-light fw-semibold py-4 px-3">aujourd'hui</div>
												</div>
												<div class="d-flex flex-stack mb-5">
													<div class="d-flex align-items-center me-2">
														<div class="symbol symbol-50px me-3">
															<div class="symbol-label bg-light">
																<img src="@/assets/magretsoja.jpg" alt="" class="full-height-img">
															</div>
														</div>
														<div>
															<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Magret à la sauce soja</a>
															<div class="fs-7 text-muted fw-semibold mt-1">Faire mariner le magret</div>
														</div>
													</div>
													<div class="badge badge-light fw-semibold py-4 px-3">demain midi</div>
												</div>
												<div class="d-flex flex-stack mb-5">
													<div class="d-flex align-items-center me-2">
														<!--begin::Symbol-->
														<div class="symbol symbol-50px me-3">
															<div class="symbol-label bg-light">
																<img src="@/assets/steakharicot.jpg" alt="" class="full-height-img">
															</div>
														</div>
														<!--end::Symbol-->

														<!--begin::Title-->
														<div class="py-1">
															<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Steak haricots verts</a>
														</div>
														<!--end::Title-->
													</div>
													<div class="badge badge-light fw-semibold py-4 px-3">demain soir</div>
												</div>
												<!--end::Item-->
												<!--begin::Item-->
												<div class="d-flex flex-stack mb-5">
													<!--begin::Section-->
													<div class="d-flex align-items-center me-2">
														<!--begin::Symbol-->
														<div class="symbol symbol-50px me-3">
															<div class="symbol-label bg-light">
																<img src="@/assets/lasagna.jpg" alt="" class="full-height-img">
															</div>
														</div>
														<div class="py-1">
															<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Lasagnes</a>
														</div>
													</div>
													<div class="badge badge-light fw-semibold py-4 px-3">jeudi soir</div>
												</div>
												<div class="d-flex flex-stack mb-5">
													<div class="d-flex align-items-center me-2">
														<div class="symbol symbol-50px me-3">
															<div class="symbol-label bg-light">
																<img src="@/assets/patessaumon.jpg" alt="" class="full-height-img">
															</div>
														</div>
														<div class="py-1">
															<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Pâtes au saumon</a>
														</div>
													</div>
													<div class="badge badge-light fw-semibold py-4 px-3">vendredi soir</div>
												</div>
												<div class="d-flex flex-stack mb-5">
													<div class="d-flex align-items-center me-2">
														<div class="symbol symbol-50px me-3">
															<div class="symbol-label bg-light">
																<img src="@/assets/burger.jpg" alt="" class="full-height-img">
															</div>
														</div>
														<div class="py-1">
															<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Burgers</a>
														</div>
													</div>
													<div class="badge badge-light fw-semibold py-4 px-3">samedi midi</div>
												</div>
											</div>
										</div>
									</div>
									<div class="card card-xl-stretch mb-5 mb-xl-8 col-4">
										<div class="card-header border-0">
											<h3 class="card-title fw-bold text-gray-900">{{$t('ShoppingList_Main')}}</h3>
										</div>
										<div class="card-body pt-2">
											<div class="d-flex align-items-center mb-8">
												<span class="bullet bullet-vertical h-40px bg-danger"></span>
												<div class="form-check form-check-custom form-check-solid mx-5">
													<input class="form-check-input" type="checkbox" value="">
												</div>
												<div class="flex-grow-1">
													<a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">Magrêt de canard</a>

													<span class="text-muted fw-semibold d-block">1 magret (300g)</span>
												</div>
												<span class="badge badge-light-warning fs-8 fw-bold">Boucher</span>
											</div>
											<div class="d-flex align-items-center mb-8">
												<span class="bullet bullet-vertical h-40px bg-danger"></span>
												<div class="form-check form-check-custom form-check-solid mx-5">
													<input class="form-check-input" type="checkbox" value="">
												</div>
												<div class="flex-grow-1">
													<a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">Pâtes</a>

													<span class="text-muted fw-semibold d-block">500g</span>
												</div>
												<span class="badge badge-light-primary fs-8 fw-bold">Supermarché</span>
											</div>
											<div class="d-flex align-items-center mb-8">
												<span class="bullet bullet-vertical h-40px bg-warning"></span>
												<div class="form-check form-check-custom form-check-solid mx-5">
													<input class="form-check-input" type="checkbox" value="">
												</div>
												<div class="flex-grow-1">
													<a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">Pommes de terre</a>
													<span class="text-muted fw-semibold d-block">3 Kgs</span>
												</div>
												<span class="badge badge-light-success fs-8 fw-bold">Producteur</span>
											</div>
											<div class="d-flex align-items-center mb-8">
												<span class="bullet bullet-vertical h-40px bg-success"></span>
												<div class="form-check form-check-custom form-check-solid mx-5">
													<input class="form-check-input" type="checkbox" value="">
												</div>
												<div class="flex-grow-1">
													<a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">Haricots verts</a>
													<span class="text-muted fw-semibold d-block">500g</span>
												</div>
												<span class="badge badge-light-success fs-8 fw-bold">Producteur</span>
											</div>
											<div class="d-flex align-items-center mb-8">
												<span class="bullet bullet-vertical h-40px bg-warning"></span>
												<div class="form-check form-check-custom form-check-solid mx-5">
													<input class="form-check-input" type="checkbox" value="">
												</div>
												<div class="flex-grow-1">
													<a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">Pâte à pizza</a>

													<span class="text-muted fw-semibold d-block">For 3 pizza</span>
												</div>
												<span class="badge badge-light-danger fs-8 fw-bold">Boulangerie</span>
											</div>
											<div class="d-flex align-items-center ">
												<span class="bullet bullet-vertical h-40px bg-success"></span>
												<div class="form-check form-check-custom form-check-solid mx-5">
													<input class="form-check-input" type="checkbox" value="">
												</div>
												<div class="flex-grow-1">
													<a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">Pommes</a>

													<span class="text-muted fw-semibold d-block">400g</span>
												</div>
												<span class="badge badge-light-success fs-8 fw-bold">Producteur</span>
											</div>
										</div>
									</div>
								</div>
								<div class="card   mb-xl-8">
									<div class="card-header border-0 pt-5">
										<h3 class="card-title align-items-start flex-column">
											<span class="card-label fw-bold text-gray-900">Preferences</span>
										</h3>
									</div>
									<div class="card-body pt-5">
										<div class="d-flex align-items-sm-center mb-7">
											<div class="symbol symbol-50px me-5">
												<span class="symbol-label">
													<i class="fa-solid fa-plate-wheat fs-2qx"></i>
												</span>
											</div>
											<div class="d-flex align-items-center flex-row-fluid flex-wrap">                    
												<div class="flex-grow-1 me-2">
													<a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold">Top food</a>
													
													<span class="text-muted fw-semibold d-block fs-7">Rice</span>
												</div>                     

												<span class="badge badge-light fw-bold my-2">19 meals</span>
											</div>
										</div>
										<div class="d-flex align-items-sm-center mb-7">
											<div class="symbol symbol-50px me-5">
												<span class="symbol-label">
													<i class="fa-solid fa-carrot fs-2qx"></i>
												</span>
											</div>
											<div class="d-flex align-items-center flex-row-fluid flex-wrap">                    
												<div class="flex-grow-1 me-2">
													<a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold">Top Vegetable</a>
													
													<span class="text-muted fw-semibold d-block fs-7">Zucchini</span>
												</div>                     

												<span class="badge badge-light fw-bold my-2">6 meals</span>
											</div>
										</div>
										<div class="d-flex align-items-sm-center mb-7">
											<div class="symbol symbol-50px me-5">
												<span class="symbol-label">
													<i class="fa-solid fa-utensils fs-2qx"></i>
												</span>
											</div>
											<div class="d-flex align-items-center flex-row-fluid flex-wrap">                    
												<div class="flex-grow-1 me-2">
													<a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold">Favorise cuisine</a>
													
													<span class="text-muted fw-semibold d-block fs-7">Indian</span>
												</div>                     

												<span class="badge badge-light fw-bold my-2">3 meals</span>
											</div>
										</div>
										<div class="d-flex align-items-sm-center mb-7">
											<div class="symbol symbol-50px me-5">
												<span class="symbol-label">
													<i class="fa-solid fa-cake-candles fs-2qx"></i>
												</span>
											</div>
											<div class="d-flex align-items-center flex-row-fluid flex-wrap">                    
												<div class="flex-grow-1 me-2">
													<a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold">Favorite dessert</a>
													
													<span class="text-muted fw-semibold d-block fs-7">Fondant au chocolat</span>
												</div>                     

												<span class="badge badge-light fw-bold my-2">3 meals</span>
											</div>
										</div>
										<div class="d-flex align-items-sm-center mb-7">
											<div class="symbol symbol-50px me-5">
												<span class="symbol-label">
													<i class="fa-solid fa-champagne-glasses fs-2qx"></i>
												</span>
											</div>
											<div class="d-flex align-items-center flex-row-fluid flex-wrap">                    
												<div class="flex-grow-1 me-2">
													<a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold">Favorite appetizer</a>
													
													<span class="text-muted fw-semibold d-block fs-7">Wraps Saumon</span>
												</div>                     

												<span class="badge badge-light fw-bold my-2">5 meals</span>
											</div>
										</div>
									</div>
								</div>
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
import HeaderApp from "@/components/header/header.vue";
import MenuAside from '@/components/menu/MenuAside.vue';
export default defineComponent({
  
  name: 'HomePage',
  components: {
	HeaderApp,MenuAside
  },

 
})
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

</style>