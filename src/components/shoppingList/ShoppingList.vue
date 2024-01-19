<template>
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <MenuAside />
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <HeaderApp :page="$t('ShoppingList_Main')"/>
                <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<div class="container-xxl" id="kt_content_container">
							<div class="d-flex flex-column flex-lg-row">
								<div class="d-none d-lg-flex flex-column flex-lg-row-auto w-100 w-lg-275px" data-kt-drawer="true" data-kt-drawer-name="inbox-aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_inbox_aside_toggle">
									<div class="card card-flush mb-0" data-kt-sticky="false" data-kt-sticky-name="inbox-aside-sticky" data-kt-sticky-offset="{default: false, xl: '100px'}" data-kt-sticky-width="{lg: '275px'}" data-kt-sticky-left="auto" data-kt-sticky-top="100px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
										<div class="card-body">
											<a href="apps/inbox/compose.html" class="btn btn-primary fw-bold w-100 mb-8">Nouvel élément</a>
											<div class="menu menu-column menu-rounded menu-state-bg menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary mb-10">
												<div class="menu-item mb-3">
													<span class="menu-link active">
														<span class="menu-icon">
															<i class="ki-duotone ki-sms fs-2 me-3">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</span>
														<span class="menu-title fw-bold">En cours</span>
														<span class="badge badge-light-success">20</span>
													</span>
												</div>
												<div class="menu-item mb-3">
													<span class="menu-link">
														<span class="menu-icon">
															<i class="ki-duotone ki-abstract-23 fs-2 me-3">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</span>
														<span class="menu-title fw-bold">Archivés</span>
													</span>
												</div>
											</div>
											<div class="menu menu-column menu-rounded menu-state-bg menu-state-title-primary">
												<div v-for="(category, index) in categories" :key="index"  class="menu-item mb-3">
													<span class="menu-link">
														<span class="menu-icon">
															<i class="ki-duotone ki-abstract-8 fs-5 me-3 lh-0" :class="category.color">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</span>
														<span class="menu-title fw-semibold">{{category.name}}</span>
														<span class="badge" :class="category.color">{{category.number}}</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="flex-lg-row-fluid ms-lg-7 ms-xl-10">
									<div class="card">
										<div class="card-header align-items-center py-5 gap-2 gap-md-5">
											<div class="d-flex flex-wrap gap-2">
												<div class="form-check form-check-sm form-check-custom form-check-solid me-4 me-lg-7">
													<input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_inbox_listing .form-check-input" value="1" />
												</div>
												<a href="#" class="btn btn-sm btn-icon btn-light btn-active-light-primary" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-placement="top" title="Delete">
													<i class="ki-duotone ki-trash fs-2">
														<span class="path1"></span>
														<span class="path2"></span>
														<span class="path3"></span>
														<span class="path4"></span>
														<span class="path5"></span>
													</i>
												</a>
												<div>
													<a href="#" class="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start">
														<i class="ki-duotone ki-down fs-2"></i>
													</a>
													
												</div>
											</div>
											<div class="d-flex align-items-center flex-wrap gap-2">
												<div class="d-flex align-items-center position-relative">
													<i class="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
														<span class="path1"></span>
														<span class="path2"></span>
													</i>
													<input type="text" data-kt-inbox-listing-filter="search" class="form-control form-control-sm form-control-solid mw-100 min-w-125px min-w-lg-150px min-w-xxl-200px ps-11" placeholder="Chercher dans la liste de courses" />
												</div>
												<a href="#" class="btn btn-sm btn-icon btn-color-primary btn-light btn-active-light-primary d-lg-none" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-placement="top" title="Toggle inbox menu" id="kt_inbox_aside_toggle">
													<i class="ki-duotone ki-burger-menu-2 fs-3 m-0">
														<span class="path1"></span>
														<span class="path2"></span>
														<span class="path3"></span>
														<span class="path4"></span>
														<span class="path5"></span>
														<span class="path6"></span>
														<span class="path7"></span>
														<span class="path8"></span>
														<span class="path9"></span>
														<span class="path10"></span>
													</i>
												</a>
											</div>
										</div>
										<div class="card-body p-0">
											<table class="table table-hover table-row-dashed fs-6 gy-5 my-0" id="kt_inbox_listing">
												<thead class="d-none">
													<tr>
														<th>Checkbox</th>
														<th>Actions</th>
														<th>Author</th>
														<th>Title</th>
														<th>Date</th>
													</tr>
												</thead>
												<tbody>
													<tr v-for="(item, index) in shoppingList"  :key="index">
														<td class="ps-9">
															<div class="form-check form-check-sm form-check-custom form-check-solid mt-3">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														<td class="w-150px w-md-175px">
															<a href="apps/inbox/reply.html" class="d-flex align-items-center text-gray-900">
																<div class="symbol symbol-35px me-3">
																	<div class="symbol-label bg-light-danger">
																	</div>
																</div>
																<span class="fw-semibold">{{item.name}}</span>
															</a>
														</td>
														<td>
															<div class="text-gray-900 gap-1 pt-2">
																<a href="apps/inbox/reply.html" class="text-gray-900">
																	<span class="fw-bold">{{item.recipeName}}</span>
																</a>
															</div>
															<div class="badge badge-light-primary">recipe</div>
														</td>
														<td>
															<div class="text-gray-900 gap-1 pt-2">
																<a href="apps/inbox/reply.html" class="text-gray-900">
																	<span class="fw-bold">{{item.quantity}}</span>
																</a>
															</div>
														</td>
														<td class="w-130px text-end fs-7 pe-9">
															<span class="fw-semibold">{{item.nextMenuDate}}</span>
														</td>
														
													</tr>
												</tbody>
											</table>
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
.
<script>
import MenuAside from '@/components/menu/MenuAside.vue'
import HeaderApp from "@/components/header/header.vue"

export default {
	data(){
		return{
			shoppingList : [
				{ id: 1, name: "Pommes", category: "Fruits", nextMenuDate: "2024-02-01", quantity: "5 Kg", recipeName: "Tarte aux pommes", recipeId: "R1" },
				{ id: 2, name: "Tomates", category: "Légumes", nextMenuDate: "2024-02-02", quantity: "1 Kg", recipeName: "Salade de tomates", recipeId: "R2" },
				{ id: 3, name: "Poulet", category: "Viande", nextMenuDate: "2024-02-03", quantity: "1 Poulet (800g)", recipeName: "Poulet rôti", recipeId: "R3" },
				{ id: 4, name: "Pâtes", category: "Féculents", nextMenuDate: "2024-02-04", quantity: "2 Kg", recipeName: "Pâtes Carbonara", recipeId: "R4" },
				{ id: 5, name: "Lait", category: "Produits laitiers", nextMenuDate: "2024-02-05", quantity: "6 bouteilles", recipeName: "Quiche", recipeId: "R5" },
				{ id: 6, name: "Œufs", category: "Produits laitiers", nextMenuDate: "2024-02-06", quantity: "12 oeufs", recipeName: "Omelette", recipeId: "R6" },
				{ id: 7, name: "Fromage", category: "Produits laitiers", nextMenuDate: "2024-02-07", quantity: "500 g", recipeName: "Pizza", recipeId: "R7" },
				{ id: 8, name: "Pain", category: "Boulangerie", nextMenuDate: "2024-02-08", quantity: 2, recipeName: "Sandwich", recipeId: "R8" },
				{ id: 9, name: "Poisson", category: "Poissonnerie", nextMenuDate: "2024-02-09", quantity: 4, recipeName: "Poisson grillé", recipeId: "R9" },
				{ id: 10, name: "Riz", category: "Féculents", nextMenuDate: "2024-02-10", quantity: 500, recipeName: "Risotto", recipeId: "R10" },
				{ id: 11, name: "Courgettes", category: "Légumes", nextMenuDate: "2024-02-11", quantity: 6, recipeName: "Gratin de courgettes", recipeId: "R11" },
				{ id: 12, name: "Poivrons", category: "Légumes", nextMenuDate: "2024-02-12", quantity: 5, recipeName: "Poivrons farcis", recipeId: "R12" },
				{ id: 13, name: "Boeuf", category: "Viande", nextMenuDate: "2024-02-13", quantity: 500, recipeName: "Bœuf Bourguignon", recipeId: "R13" },
				{ id: 14, name: "Carottes", category: "Légumes", nextMenuDate: "2024-02-14", quantity: 7, recipeName: "Carottes Vichy", recipeId: "R14" },
				{ id: 15, name: "Champignons", category: "Légumes", nextMenuDate: "2024-02-15", quantity: 250, recipeName: "Champignons farcis", recipeId: "R15" },
				{ id: 16, name: "Oignons", category: "Légumes", nextMenuDate: "2024-02-16", quantity: 4, recipeName: "Soupe à l'oignon", recipeId: "R16" },
				{ id: 17, name: "Ail", category: "Condiments", nextMenuDate: "2024-02-17", quantity: 2, recipeName: "Aïoli", recipeId: "R17" },
				{ id: 18, name: "Chocolat", category: "Confiserie", nextMenuDate: "2024-02-18", quantity: 3, recipeName: "Moelleux au chocolat", recipeId: "R18" },
				{ id: 19, name: "Citrons", category: "Fruits", nextMenuDate: "2024-02-19", quantity: 4, recipeName: "Tarte au citron", recipeId: "R19" },
				{ id: 20, name: "Noix", category: "Fruits secs", nextMenuDate: "2024-02-20", quantity: 200, recipeName: "Gâteau aux noix", recipeId: "R20" }
			],
			categories:[
				{
					id: 1, 
					name: 'Intermarché',
					color:'badge-light-danger'
				},
				{
					id: 2, 
					name: 'Producteurs fruits & légumes',
					color:'badge-light-success'
				},
				{
					id: 3, 
					name: 'Boucherie',
					color:'badge-light-info'
				},
				{
					id: 4, 
					name: 'Boulangerie',
					color:'badge-light-warning'
				}

			]
		}
	},
    components:{
        MenuAside, HeaderApp
    },
    mounted(){
    
    }
}
</script>
<style>

</style>
