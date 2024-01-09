 <template>
		<!--begin::Theme mode setup on page load-->
		<!--end::Theme mode setup on page load-->
		<!--begin::Main-->
		<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">
				<!--begin::Aside-->
				<div id="kt_aside" class="aside" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="auto" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle">
					<!--begin::Logo-->
					<div class="aside-logo flex-column-auto pt-10 pt-lg-20" id="kt_aside_logo">
						<a href="index.html">
							<chiefHatVue :color="'#2C294B'" :className="'h-90px'"/>
						</a>
					</div>
					<div class="d-flex flex-column text-gray-900 fw-bold my-1 align-items-center">
						Save Your Food
					</div>

					<!--end::Logo-->
					<!--begin::Nav-->
					<div class="aside-menu flex-column-fluid pt-0 pb-7 py-lg-10" id="kt_aside_menu">
						<!--begin::Aside menu-->
						<div id="kt_aside_menu_wrapper" class="w-100 hover-scroll-y scroll-lg-ms d-flex" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: trur}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu" data-kt-scroll-offset="0">
							<div id="kt_aside_menu" class="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-icon-gray-500 menu-arrow-gray-500 fw-semibold fs-6 my-auto" data-kt-menu="true">
								<!--begin:Menu item-->
								<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item here show py-2" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-title='inventory'>
									<!--begin:Menu link-->
									<span class="menu-link menu-center">
										<span class="menu-icon me-0">
											<i class="ki-duotone ki-home-2 fs-2x">
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
										</span>
									</span>
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2">
									<!--begin:Menu link-->
									<span class="menu-link menu-center">
										<span class="menu-icon me-0">
											<i class="ki-duotone ki-basket fs-2x">
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
										</span>
									</span>
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2">
									<!--begin:Menu link-->
									<span class="menu-link menu-center">
										<span class="menu-icon me-0">
											<i class="ki-duotone ki-scroll fs-2x">
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
										</span>
									</span>
								</div>
								<!--begin:Menu item-->
								<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2">
									<!--begin:Menu link-->
									<span class="menu-link menu-center">
										<span class="menu-icon me-0">
											<i class="ki-duotone ki-calendar fs-2x">
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
										</span>
									</span>
								</div>
								<!--begin:Menu item-->
								<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2">
									<!--begin:Menu link-->
									<span class="menu-link menu-center">
										<span class="menu-icon me-0">
											<i class="ki-duotone ki-handcart fs-2x">
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
										</span>
									</span>
								</div>
							</div>
						</div>
						<!--end::Aside menu-->
					</div>
					<!--end::Nav-->
				</div>
				<!--end::Aside-->
				<!--begin::Wrapper-->
				<div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
					<!--begin::Header tablet and mobile-->
					<div class="header-mobile py-3">
						<!--begin::Container-->
						<div class="container d-flex flex-stack">
							<!--begin::Mobile logo-->
							<div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
								<a href="index.html">
									<img alt="Logo" src="assets/media/logos/demo9.svg" class="h-35px" />
								</a>
							</div>
							<!--end::Mobile logo-->
							<!--begin::Aside toggle-->
							<button class="btn btn-icon btn-active-color-primary me-n4" id="kt_aside_toggle">
								<i class="ki-duotone ki-abstract-14 fs-2x">
									<span class="path1"></span>
									<span class="path2"></span>
								</i>
							</button>
							<!--end::Aside toggle-->
						</div>
						<!--end::Container-->
					</div>
					<!--end::Header tablet and mobile-->
					<!--begin::Header-->
					<HeaderApp />
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<div class=" container-xxl " id="kt_content_container">
							<!--begin::Row-->
							<div class="row g-5 g-xl-10 mb-5 mb-xl-10">
								<!--begin::Col-->
								<div class="col-xxl-12">
									<!--begin::Misc Widget 1-->
									<div class="row mb-5 mb-xl-8 g-5 g-xl-8">
										<!--begin::Col-->
										<div class="col-3">
											<!--begin::Card-->
											<a class="card flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10" href="/metronic8/demo9/../demo9/account/overview.html">
												<i class="ki-duotone ki-basket fs-2tx mb-5 ms-n1 text-gray-500"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>												<span class="fs-4 fw-bold">
													{{$t('inventory')}}                </span>
											</a>
											<!--end::Card-->
										</div>
										<!--end::Col-->
											
										<!--begin::Col-->
										<div class="col-3">
											<!--begin::Card-->
											<a class="card flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10" href="/metronic8/demo9/../demo9/account/statements.html">
												<i class="ki-duotone ki-scroll fs-2tx mb-5 ms-n1 text-gray-500"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>												<span class="fs-4 fw-bold">
													{{$t('recipes')}}                </span>
											</a>
											<!--end::Card-->
										</div>
										<!--end::Col-->
											
										<!--begin::Col-->
										<div class="col-3">
											<!--begin::Card-->
											<a class="card flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10" href="/metronic8/demo9/../demo9/account/referrals.html">
												<i class="ki-duotone ki-calendar fs-2tx mb-5 ms-n1 text-gray-500"><span class="path1"></span><span class="path2"></span></i>												<span class="fs-4 fw-bold">
													{{$t('weekly_meals')}}                  </span>
											</a>
											<!--end::Card-->
										</div>
										<!--end::Col-->
											
										<!--begin::Col-->
										<div class="col-3">
											<!--begin::Card-->
											<a class="card flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10" href="/metronic8/demo9/../demo9/apps/customers/view.html">
												<i class="ki-duotone ki-handcart  fs-2tx mb-5 ms-n1 text-gray-500"></i><span class="fs-4 fw-bold">
													{{$t('shopping_list')}}                </span>
											</a>
											<!--end::Card-->
										</div>
										<!--end::Col-->
									</div>
							<!--end::Misc Widget 1-->
									<!--begin::List Widget 5-->
							<div class="card mb-5 mb-xl-8">
								<!--begin::Header-->
								<div class="card-header align-items-center border-0 mt-4">
									<h3 class="card-title align-items-start flex-column">
										<span class="fw-bold mb-2 text-gray-900">{{$t('ingredients_consume_quickly')}}</span>            
										<span class="text-muted fw-semibold fs-7">3 {{ $t('ingredients_consume_week') }}</span>
									</h3>
								</div>
								<!--end::Header-->

								<!--begin::Body-->
								<div class="card-body pt-5">
									<!--begin::Timeline-->
									<div class="timeline-label">
										<!--begin::Item-->
										<div class="timeline-item">
											<!--begin::Label-->
											<div class="timeline-label fw-bold text-gray-800 fs-6 ">1 day</div>
											<!--end::Label-->

											<!--begin::Badge-->
											<div class="timeline-badge">
												<i class="fa fa-genderless text-danger fs-1"></i>
											</div>
											<!--end::Badge-->

											<!--begin::Text-->
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
											<!--end::Text-->
										</div>
										<!--end::Item-->

										<!--begin::Item-->
										<div class="timeline-item">
											<!--begin::Label-->
											<div class="timeline-label fw-bold text-gray-800 fs-6">1 day</div>
											<!--end::Label-->

											<!--begin::Badge-->
											<div class="timeline-badge">
												<i class="fa fa-genderless text-danger fs-1"></i>
											</div>
											<!--end::Badge-->

											<!--begin::Content-->
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
											<!--end::Content-->
										</div>
										<!--end::Item-->

										<!--begin::Item-->
										<div class="timeline-item">
											<!--begin::Label-->
											<div class="timeline-label fw-bold text-gray-800 fs-6">2 days </div>
											<!--end::Label-->

											<!--begin::Badge-->
											<div class="timeline-badge">
												<i class="fa fa-genderless text-danger fs-1"></i>
											</div>
											<!--end::Badge-->

											<!--begin::Desc-->
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
											<!--end::Desc-->
										</div>
										<!--end::Item-->

										<!--begin::Item-->
										<div class="timeline-item">
											<!--begin::Label-->
											<div class="timeline-label fw-bold text-gray-800 fs-6">4 days</div>
											<!--end::Label-->

											<!--begin::Badge-->
											<div class="timeline-badge">
												<i class="fa fa-genderless text-warning fs-1"></i>
											</div>
											<!--end::Badge-->

											<!--begin::Text-->
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
											<!--end::Text-->
										</div>
										<!--end::Item-->

										<!--begin::Item-->
										<div class="timeline-item">
											<!--begin::Label-->
											<div class="timeline-label fw-bold text-gray-800 fs-6">5 days</div>
											<!--end::Label-->

											<!--begin::Badge-->
											<div class="timeline-badge">
												<i class="fa fa-genderless text-warning fs-1"></i>
											</div>
											<!--end::Badge-->

											<!--begin::Desc-->
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
											<!--end::Desc-->
										</div>
										<!--end::Item-->

										<!--begin::Item-->
										<div class="timeline-item">
											<!--begin::Label-->
											<div class="timeline-label fw-bold text-gray-800 fs-6">5 days</div>
											<!--end::Label-->

											<!--begin::Badge-->
											<div class="timeline-badge">
												<i class="fa fa-genderless text-warning fs-1"></i>
											</div>
											<!--end::Badge-->

											<!--begin::Text-->
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
											<!--end::Text-->
										</div>
										<!--end::Item-->

										<!--begin::Item-->
										<div class="timeline-item">
											<!--begin::Label-->
											<div class="timeline-label fw-bold text-gray-800 fs-6">5 days</div>
											<!--end::Label-->

											<!--begin::Badge-->
											<div class="timeline-badge">
												<i class="fa fa-genderless text-warning fs-1"></i>
											</div>
											<!--end::Badge-->

											<!--begin::Desc-->
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
											<!--end::Desc-->
										</div>
										<!--end::Item-->

										<!--begin::Item-->
										<div class="timeline-item">
											<!--begin::Label-->
											<div class="timeline-label fw-bold text-gray-800 fs-6">1 week</div>
											<!--end::Label-->

											<!--begin::Badge-->
											<div class="timeline-badge">
												<i class="fa fa-genderless text-success fs-1"></i>
											</div>
											<!--end::Badge-->

											<!--begin::Text-->
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
											<!--end::Text-->
										</div>
											<!--end::Item-->
									</div>
									<!--end::Timeline-->
								</div>
								<!--end: Card Body-->
							</div>
							<!--end: List Widget 5-->
							<!--begin::List Widget 4-->
							<div class="card   mb-xl-8">
								<!--begin::Header-->
								<div class="card-header border-0 pt-5">
									<h3 class="card-title align-items-start flex-column">
										<span class="card-label fw-bold text-gray-900">Preferences</span>
									</h3>
								</div>
								<!--end::Header-->
								<!--begin::Body-->
								<div class="card-body pt-5">
									<!--begin::Item-->
									<div class="d-flex align-items-sm-center mb-7">
										<!--begin::Symbol-->
										<div class="symbol symbol-50px me-5">
											<span class="symbol-label">
												<i class="fa-solid fa-plate-wheat fs-2qx"></i>
											</span>
										</div>
										<!--end::Symbol-->

										<!--begin::Section-->
										<div class="d-flex align-items-center flex-row-fluid flex-wrap">                    
											<div class="flex-grow-1 me-2">
												<a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold">Top food</a>
												
												<span class="text-muted fw-semibold d-block fs-7">Rice</span>
											</div>                     

											<span class="badge badge-light fw-bold my-2">19 meals</span>
										</div>
										<!--end::Section-->                
									</div>
									<!--end::Item-->
											
									<!--begin::Item-->
									<div class="d-flex align-items-sm-center mb-7">
										<!--begin::Symbol-->
										<div class="symbol symbol-50px me-5">
											<span class="symbol-label">
												<i class="fa-solid fa-carrot fs-2qx"></i>
											</span>
										</div>
										<!--end::Symbol-->

										<!--begin::Section-->
										<div class="d-flex align-items-center flex-row-fluid flex-wrap">                    
											<div class="flex-grow-1 me-2">
												<a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold">Top Vegetable</a>
												
												<span class="text-muted fw-semibold d-block fs-7">Zucchini</span>
											</div>                     

											<span class="badge badge-light fw-bold my-2">6 meals</span>
										</div>
										<!--end::Section-->                
									</div>
									<!--end::Item-->
											
									<!--begin::Item-->
									<div class="d-flex align-items-sm-center mb-7">
										<!--begin::Symbol-->
										<div class="symbol symbol-50px me-5">
											<span class="symbol-label">
												<i class="fa-solid fa-utensils fs-2qx"></i>
											</span>
										</div>
										<!--end::Symbol-->

										<!--begin::Section-->
										<div class="d-flex align-items-center flex-row-fluid flex-wrap">                    
											<div class="flex-grow-1 me-2">
												<a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold">Favorise cuisine</a>
												
												<span class="text-muted fw-semibold d-block fs-7">Indian</span>
											</div>                     

											<span class="badge badge-light fw-bold my-2">3 meals</span>
										</div>
										<!--end::Section-->                
									</div>
									<!--end::Item-->
											
									<!--begin::Item-->
									<div class="d-flex align-items-sm-center mb-7">
										<!--begin::Symbol-->
										<div class="symbol symbol-50px me-5">
											<span class="symbol-label">
												<i class="fa-solid fa-cake-candles fs-2qx"></i>
											</span>
										</div>
										<!--end::Symbol-->

										<!--begin::Section-->
										<div class="d-flex align-items-center flex-row-fluid flex-wrap">                    
											<div class="flex-grow-1 me-2">
												<a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold">Favorite dessert</a>
												
												<span class="text-muted fw-semibold d-block fs-7">Fondant au chocolat</span>
											</div>                     

											<span class="badge badge-light fw-bold my-2">3 meals</span>
										</div>
										<!--end::Section-->                
									</div>
									<!--end::Item-->
											
									<!--begin::Item-->
									<div class="d-flex align-items-sm-center mb-7">
										<!--begin::Symbol-->
										<div class="symbol symbol-50px me-5">
											<span class="symbol-label">
												<i class="fa-solid fa-champagne-glasses fs-2qx"></i>
											</span>
										</div>
										<!--end::Symbol-->

										<!--begin::Section-->
										<div class="d-flex align-items-center flex-row-fluid flex-wrap">                    
											<div class="flex-grow-1 me-2">
												<a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold">Favorite appetizer</a>
												
												<span class="text-muted fw-semibold d-block fs-7">Wraps Saumon</span>
											</div>                     

											<span class="badge badge-light fw-bold my-2">5 meals</span>
										</div>
										<!--end::Section-->                
									</div>
									<!--end::Item-->
								</div>
								<!--end::Body-->
							</div>
						<!--end::List Widget 4-->
						</div>
						<!--end::Col-->
						<!--begin::Col-->
						<div class="col-xl-8 ps-xl-12">
							<!-- <div class="card bgi-position-y-bottom bgi-position-x-end bgi-no-repeat bgi-size-cover min-h-250px bg-primary mb-5 mb-xl-8 border-0 card-background"  dir="ltr">
								<div class="card-body d-flex flex-column justify-content-center ps-lg-12">  
									<h3 class="text-white fs-2qx fw-bold mb-7">
										{{$t('generate_recipe')}} <br>
										{{$t('preferences_based')}}
									</h3>
									<div class="m-0">
										<a href="#" class="btn btn-success fw-semibold px-6 py-3" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Generate</a> 
									</div>
								</div>
							</div> -->
							<div class="row g-5 g-xl-8">
								<div class="col-xl-6">
									<div class="card card-xl-stretch mb-xl-8">
										<div class="card-header border-0 py-5">
											<h3 class="card-title align-items-start flex-column">
												<span class="card-label fw-bold fs-3 mb-1">{{$t('recipes')}}</span>

												<span class="text-muted fw-semibold fs-7">{{$t('next_recipes')}}</span>
											</h3>
										</div>
										<div class="card-body d-flex flex-column">
											<div class="">
												<div class="d-flex flex-stack mb-5">
													<div class="d-flex align-items-center me-2 full-width">
														<!--begin::Symbol-->
														<div class="symbol symbol-50px me-3 full-width">
															<div class="symbol-label bg-light full-width">
																<img src="@/assets/pouletprovencale.jpg" alt="" class="full-height-img">
															</div>
														</div>
														<!--end::Symbol-->

														<!--begin::Title-->
														<div class="full-width">
															<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Cuisse de poulet à la provençale</a>
															<div class="fs-7 text-muted fw-semibold mt-1">Sortir les cuisses du congélateur</div>
														</div>
														<!--end::Title-->
													</div>
													<!--end::Section-->

													<!--begin::Label-->
													<div class="badge badge-light fw-semibold py-4 px-3">aujourd'hui</div>
													<!--end::Label-->
												</div>
												<!--end::Item-->

												<!--begin::Item-->
												<div class="d-flex flex-stack mb-5">
													<!--begin::Section-->
													<div class="d-flex align-items-center me-2">
														<!--begin::Symbol-->
														<div class="symbol symbol-50px me-3">
															<div class="symbol-label bg-light">
																<img src="@/assets/magretsoja.jpg" alt="" class="full-height-img">
															</div>
														</div>
														<!--end::Symbol-->

														<!--begin::Title-->
														<div>
															<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Magret à la sauce soja</a>
															<div class="fs-7 text-muted fw-semibold mt-1">Faire mariner le magret</div>
														</div>
														<!--end::Title-->
													</div>
													<!--end::Section-->

													<!--begin::Label-->
													<div class="badge badge-light fw-semibold py-4 px-3">demain midi</div>
													<!--end::Label-->
												</div>
												<!--end::Item-->

												<!--begin::Item-->
												<div class="d-flex flex-stack mb-5">
													<!--begin::Section-->
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
													<!--end::Section-->

													<!--begin::Label-->
													<div class="badge badge-light fw-semibold py-4 px-3">demain soir</div>
													<!--end::Label-->
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
														<!--end::Symbol-->

														<!--begin::Title-->
														<div class="py-1">
															<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Lasagnes</a>
														</div>
														<!--end::Title-->
													</div>
													<!--end::Section-->

													<!--begin::Label-->
													<div class="badge badge-light fw-semibold py-4 px-3">jeudi soir</div>
													<!--end::Label-->
												</div>
												<!--end::Item-->
												<!--begin::Item-->
												<div class="d-flex flex-stack mb-5">
													<!--begin::Section-->
													<div class="d-flex align-items-center me-2">
														<!--begin::Symbol-->
														<div class="symbol symbol-50px me-3">
															<div class="symbol-label bg-light">
																<img src="@/assets/patessaumon.jpg" alt="" class="full-height-img">
															</div>
														</div>
														<!--end::Symbol-->

														<!--begin::Title-->
														<div class="py-1">
															<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Pâtes au saumon</a>
														</div>
														<!--end::Title-->
													</div>
													<!--end::Section-->

													<!--begin::Label-->
													<div class="badge badge-light fw-semibold py-4 px-3">vendredi soir</div>
													<!--end::Label-->
												</div>
												<!--end::Item-->
												<!--begin::Item-->
												<div class="d-flex flex-stack mb-5">
													<!--begin::Section-->
													<div class="d-flex align-items-center me-2">
														<!--begin::Symbol-->
														<div class="symbol symbol-50px me-3">
															<div class="symbol-label bg-light">
																<img src="@/assets/burger.jpg" alt="" class="full-height-img">
															</div>
														</div>
														<!--end::Symbol-->

														<!--begin::Title-->
														<div class="py-1">
															<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Burgers</a>
														</div>
														<!--end::Title-->
													</div>
													<!--end::Section-->

													<!--begin::Label-->
													<div class="badge badge-light fw-semibold py-4 px-3">samedi midi</div>
													<!--end::Label-->
												</div>
												<!--end::Item-->
												
											</div>
											<!--end::Items-->
										</div>
										<!--end::Body-->
									</div>
									<!--end::Mixed Widget 5-->
								</div>
								<!--end::Col-->

								<!--begin::Col-->
								<div class="col-xl-6">
									<div class="card card-xl-stretch mb-5 mb-xl-8">
										<!--begin::Header-->
										<div class="card-header border-0">
											<h3 class="card-title fw-bold text-gray-900">{{$t('shopping_list')}}</h3>
										</div>
										<!--begin::Body-->
										<div class="card-body pt-2">
											<!--begin::Item-->
											<div class="d-flex align-items-center mb-8">
												<!--begin::Bullet-->
												<span class="bullet bullet-vertical h-40px bg-danger"></span>
												<!--end::Bullet-->

												<!--begin::Checkbox-->
												<div class="form-check form-check-custom form-check-solid mx-5">
													<input class="form-check-input" type="checkbox" value="">
												</div>
												<!--end::Checkbox-->

												<!--begin::Description-->
												<div class="flex-grow-1">
													<a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">Magrêt de canard</a>

													<span class="text-muted fw-semibold d-block">1 magret (300g)</span>
												</div>
												<!--end::Description-->

												<span class="badge badge-light-warning fs-8 fw-bold">Boucher</span>
											</div>
											<div class="d-flex align-items-center mb-8">
												<!--begin::Bullet-->
												<span class="bullet bullet-vertical h-40px bg-danger"></span>
												<!--end::Bullet-->

												<!--begin::Checkbox-->
												<div class="form-check form-check-custom form-check-solid mx-5">
													<input class="form-check-input" type="checkbox" value="">
												</div>
												<!--end::Checkbox-->

												<!--begin::Description-->
												<div class="flex-grow-1">
													<a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">Pâtes</a>

													<span class="text-muted fw-semibold d-block">500g</span>
												</div>
												<!--end::Description-->

												<span class="badge badge-light-primary fs-8 fw-bold">Supermarché</span>
											</div>
												<!--end:Item-->
														<!--begin::Item-->
											<div class="d-flex align-items-center mb-8">
												<!--begin::Bullet-->
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
												<!--begin::Bullet-->
												<span class="bullet bullet-vertical h-40px bg-warning"></span>
												<!--end::Bullet-->

												<!--begin::Checkbox-->
												<div class="form-check form-check-custom form-check-solid mx-5">
													<input class="form-check-input" type="checkbox" value="">
												</div>
												<!--end::Checkbox-->

												<!--begin::Description-->
												<div class="flex-grow-1">
													<a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">Pâte à pizza</a>

													<span class="text-muted fw-semibold d-block">For 3 pizza</span>
												</div>
												<!--end::Description-->

												<span class="badge badge-light-danger fs-8 fw-bold">Boulangerie</span>
											</div>
											<div class="d-flex align-items-center ">
												<!--begin::Bullet-->
												<span class="bullet bullet-vertical h-40px bg-success"></span>
												<!--end::Bullet-->

												<!--begin::Checkbox-->
												<div class="form-check form-check-custom form-check-solid mx-5">
													<input class="form-check-input" type="checkbox" value="">
												</div>
												<!--end::Checkbox-->

												<!--begin::Description-->
												<div class="flex-grow-1">
													<a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">Pommes</a>

													<span class="text-muted fw-semibold d-block">400g</span>
												</div>
												<!--end::Description-->

												<span class="badge badge-light-success fs-8 fw-bold">Producteur</span>
											</div>
										</div>
										<!--end::Body-->
									</div>
								</div>
							</div>
					
					<!--end::Tables Widget 5-->
							<!--begin::Row-->
				
					<!--end::Row-->
				</div>
			<!--end::Col-->
			</div>
					<!--end::Row-->
		</div>
	</div>
				<!--end::Header-->
			</div>
				<!--end::Wrapper-->
			<!--end::Page-->
		</div>
</div>
  

</template>
<script>
import { defineComponent } from 'vue';
import HeaderApp from "./header.vue"
import chiefHatVue from './icons/chiefHat.vue';
export default defineComponent({
  watch: {
  },
  name: 'HomePage',
  components: {
	HeaderApp,chiefHatVue
  },
  data() {
    return {
      headerHeight: 0, 
      items: [
        {
          id: 'inventory',
          page: 'inventory',
          icon: 'fa-solid fa-boxes',
          path: '/inventory',
          imgSrc: require('@/assets/pantry.png'),
          altText: 'inventory',
          title: 'inventory',
          message: 'inventory_message',
          actions: [
            '- ' +  this.$t('import_food'),
            '- '+ this.$t('manage_inventory')
          ],
          buttonText: 'explore'
        },
        {
          id: 'recipes',
          page: 'recipes',
          icon: 'fa-solid fa-utensils',
          imgSrc: require('../assets/grandmother.png'),
          altText: 'recipes',
          path: '/Recipes',
          title: 'recipes',
          message: 'recipes_message',
          actions: [
            '- '+this.$t('get_recipes'),
            '- '+this.$t('add_recipes')
          ],
          buttonText: 'view_recipes'
        },
        {
          id: 'weeklyMeals',
          page: 'weeklyMeals',
          icon: 'fa-solid fa-calendar-week',
          path: '/weeklyMeals',
          imgSrc: require('../assets/weelkymenu.png'),
          altText: 'weekly_meals',
          title: 'weekly_meals',
          message: 'weekly_meals_message',
          actions: [
            '- '+this.$t('manage_meals'), 
            '- '+this.$t('statistics_weeks')
          ],
          buttonText: 'plan_meals'
        },
        {
          id: 'shoppingList',
          page: 'shoppingList',
          path: '/shoppingList',
          icon: 'fa-solid fa-shopping-cart',
          imgSrc: require('../assets/shoppinglist.png'),
          altText: 'shopping_list',
          title: 'shopping_list',
          message: 'shopping_list_message',
          actions: [
            '- '+this.$t('manage_shopping_list'),
            '- '+this.$t('manage_inventory'),
          ],
          buttonText: 'make_a_list'
        },
        {
          id: 'userSettings',
          page: 'userSettings',
          path: '/userSettings',
          icon: 'fa-solid fa-user-cog',
          imgSrc: require('../assets/thinkingmen.png'),
          altText: this.$t('user_settings'),
          title: this.$t('user_settings'),
          message: 'shopping_list_message',
          actions: [
            '-'+this.$t('user_preferences'),
            '-'+this.$t('user_settings'),
          ],
          buttonText: 'manage_user_settings'
        }
      ],
      
    }
  },
  mounted(){

  },
 

  methods:{
    
    goToPage(page) {
      this.$router.push(`/${page}`);
    }
   
  }
})
</script>
<style>
  .full-width {
    flex-grow: 1!important; /* Permet à l'élément de remplir l'espace disponible */
  }

  .full-height-img {
    height: 100%!important; /* Définit la hauteur de l'image à 100% de son parent */
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
  .card-background {
	background-image: url('@/assets/fridge.png');
	background-position: 100% -80px;
	background-size: 375px auto;
	background-repeat: no-repeat;
	}
</style>