<template>
    <div class="d-flex flex-column flex-root">
         <div class="page d-flex flex-row flex-column-fluid">
             <MenuAside />
             <!--end::Aside-->
             <!--begin::Wrapper-->
             <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                 <!--begin::Header tablet and mobile-->
                 <div class="header-mobile py-3">
                     <!--begin::Container-->
                     <div class="container d-flex flex-stack">
                         <!--begin::Mobile logo-->
                         <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                             <a href="index.html">
                                 <img alt="Logo" src="@/assets/chiefHat.svg" class="h-35px" />
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
                 <HeaderApp :page="$t('recipes')"/>
                 <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<!--begin::Container-->
						<div class="container-xxl" id="kt_content_container">
							<!--begin::Layout-->
							<div class="d-flex flex-column flex-xl-row">
								<!--begin::Content-->
								<div class="d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0">
									<!--begin::Pos food-->
									<div class="card card-flush card-p-0 bg-transparent border-0">
										<!--begin::Body-->
										<div class="card-body">
											<!--begin::Nav-->
											<ul class="nav nav-pills d-flex justify-content-between nav-pills-custom gap-3 mb-2">
												<!--begin::Item-->
												<li class="nav-item mb-3 me-0">
													<!--begin::Nav link-->
													<a class="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg show active" data-bs-toggle="pill" href="#kt_pos_food_content_1" style="width: 138px;height: 180px">
														<!--begin::Icon-->
														<div class="nav-icon mb-3">
															<!--begin::Food icon-->
															<img src="assets/media/svg/food-icons/spaghetti.svg" class="w-50px" alt="" />
															<!--end::Food icon-->
														</div>
														<!--end::Icon-->
														<!--begin::Info-->
														<div class="">
															<span class="text-gray-800 fw-bold fs-2 d-block">Apéritifs</span>
															<span class="text-gray-500 fw-semibold fs-7">8 apéritifs</span>
														</div>
														<!--end::Info-->
													</a>
													<!--end::Nav link-->
												</li>
												<!--end::Item-->
												<!--begin::Item-->
												<li class="nav-item mb-3 me-0">
													<!--begin::Nav link-->
													<a class="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg" data-bs-toggle="pill" href="#kt_pos_food_content_3" style="width: 138px;height: 180px">
														<!--begin::Icon-->
														<div class="nav-icon mb-3">
															<!--begin::Food icon-->
															<img src="assets/media/svg/food-icons/cheeseburger.svg" class="w-50px" alt="" />
															<!--end::Food icon-->
														</div>
														<!--end::Icon-->
														<!--begin::Info-->
														<div class="">
															<span class="text-gray-800 fw-bold fs-2 d-block">Entrées</span>
															<span class="text-gray-500 fw-semibold fs-7">5 entrées</span>
														</div>
														<!--end::Info-->
													</a>
													<!--end::Nav link-->
												</li>
												<!--end::Item-->
												<!--begin::Item-->
												<li class="nav-item mb-3 me-0">
													<!--begin::Nav link-->
													<a class="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg" data-bs-toggle="pill" href="#kt_pos_food_content_4" style="width: 138px;height: 180px">
														<!--begin::Icon-->
														<div class="nav-icon mb-3">
															<!--begin::Food icon-->
															<img src="assets/media/svg/food-icons/coffee.svg" class="w-50px" alt="" />
															<!--end::Food icon-->
														</div>
														<!--end::Icon-->
														<!--begin::Info-->
														<div class="">
															<span class="text-gray-800 fw-bold fs-2 d-block">Plâts</span>
															<span class="text-gray-500 fw-semibold fs-7">7 plâts</span>
														</div>
														<!--end::Info-->
													</a>
													<!--end::Nav link-->
												</li>
												<!--end::Item-->
												<!--begin::Item-->
												<li class="nav-item mb-3 me-0">
													<!--begin::Nav link-->
													<a class="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg" data-bs-toggle="pill" href="#kt_pos_food_content_5" style="width: 138px;height: 180px">
														<!--begin::Icon-->
														<div class="nav-icon mb-3">
															<!--begin::Food icon-->
															<img src="assets/media/svg/food-icons/cheesecake.svg" class="w-50px" alt="" />
															<!--end::Food icon-->
														</div>
														<!--end::Icon-->
														<!--begin::Info-->
														<div class="">
															<span class="text-gray-800 fw-bold fs-2 d-block">Dessert</span>
															<span class="text-gray-500 fw-semibold fs-7">8 Desserts</span>
														</div>
														<!--end::Info-->
													</a>
													<!--end::Nav link-->
												</li>
												<!--end::Item-->
											</ul>
                                            <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold mb-6">
                                                <li class="nav-item mt-2">
                                                    <a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="/metronic8/demo9/../demo9/account/overview.html">
                                                        Recettes générées                    </a>
                                                </li>
                                                <!--end::Nav item-->
                                                            <!--begin::Nav item-->
                                                <li class="nav-item mt-2">
                                                    <a class="nav-link text-active-primary ms-0 me-10 py-5 " href="/metronic8/demo9/../demo9/account/settings.html">
                                                        Mes recettes                    </a>
                                                </li>
                                                <!--end::Nav item-->
                                            </ul>
											<div class="row g-6 g-xl-9">
                                                <div class="col-md-6 col-xl-4">
                                                    <a href="/recipes" class="card border-hover-primary">
                                                        <!--begin::Card header-->
                                                        <div class="card-header border-0 pt-9">
                                                            <!--begin::Card Title-->
                                                            <div class="card-title m-0 ">
                                                                <!--begin::Avatar-->
                                                                <div class="symbol symbol-50px  bg-light full-width">
                                                                    <div class="symbol-label bg-light">
                                                                    <img src="@/assets/saladeCesar.jpg" alt="image" class="full-height-img" />
                                                                    </div>
                                                                </div>
                                                                <!--end::Avatar-->
                                                            </div>
                                                            <!--end::Car Title-->
                                                            <!--begin::Card toolbar-->
                                                            <div class="card-toolbar">
                                                                <span class="badge badge-light-primary fw-bold me-auto px-4 py-3">Plat principal</span>
                                                            </div>
                                                            <!--end::Card toolbar-->
                                                        </div>
                                                        <!--end:: Card header-->
                                                        <!--begin:: Card body-->
                                                        <div class="card-body p-9">
                                                            <!--begin::Name-->
                                                            <div class="fs-3 fw-bold text-gray-900">Salade César Classique</div>
                                                            <!--end::Name-->
                                                            <!--begin::Description-->
                                                            <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">Une salade verte traditionnelle de la cuisine italo-américaine avec une sauce César crémeuse, des croûtons croquants et du parmesan.</p>
                                                            <!--end::Description-->
                                                            <!--begin::Info-->
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Due-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">15 mars 2024</div>
                                                                    <div class="fw-semibold text-gray-500">Date de publication</div>
                                                                </div>
                                                                <!--end::Due-->
                                                                <!--begin::Budget-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">20 min</div>
                                                                    <div class="fw-semibold text-gray-500">Préparation</div>
                                                                </div>
                                                                <!--end::Budget-->
                                                            </div>
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Due-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">4</div>
                                                                    <div class="fw-semibold text-gray-500">Nombre de portions</div>
                                                                </div>
                                                                <!--end::Due-->
                                                                <!--begin::Budget-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">0 min</div>
                                                                    <div class="fw-semibold text-gray-500">Temps de cuisson</div>
                                                                </div>
                                                                <!--end::Budget-->
                                                            </div>
                                                        </div>
                                                        <!--end:: Card body-->
                                                    </a>
                                                </div>
                                                <div class="col-md-6 col-xl-4">
                                                    <!--begin::Card-->
                                                    <a href="/recipes" class="card border-hover-primary">
                                                        <!--begin::Card header-->
                                                        <div class="card-header border-0 pt-9">
                                                            <!--begin::Card Title-->
                                                            <div class="card-title m-0 ">
                                                                <!--begin::Avatar-->
                                                                <div class="symbol symbol-50px bg-light full-width">
                                                                    <div class="symbol-label bg-light">
                                                                        <img src="@/assets/rissotoChampignons.jpg" alt="Risotto aux Champignons" class="full-height-img" />
                                                                    </div>
                                                                </div>
                                                                <!--end::Avatar-->
                                                            </div>
                                                            <!--end::Card Title-->
                                                            <!--begin::Card toolbar-->
                                                            <div class="card-toolbar">
                                                                <span class="badge badge-light-primary fw-bold me-auto px-4 py-3">Plat principal</span>
                                                            </div>
                                                            <!--end::Card toolbar-->
                                                        </div>
                                                        <!--end::Card header-->
                                                        <!--begin::Card body-->
                                                        <div class="card-body p-9">
                                                            <!--begin::Name-->
                                                            <div class="fs-3 fw-bold text-gray-900">Risotto aux Champignons</div>
                                                            <!--end::Name-->
                                                            <!--begin::Description-->
                                                            <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">Risotto crémeux et riche, agrémenté de champignons sauvages et parfumé à l'ail et au vin blanc.</p>
                                                            <!--end::Description-->
                                                            <!--begin::Info-->
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Date de publication-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">20 mars 2024</div>
                                                                    <div class="fw-semibold text-gray-500">Date de publication</div>
                                                                </div>
                                                                <!--end::Date de publication-->
                                                                <!--begin::Temps de préparation-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">10 min</div>
                                                                    <div class="fw-semibold text-gray-500">Préparation</div>
                                                                </div>
                                                                <!--end::Temps de préparation-->
                                                            </div>
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Nombre de portions-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">4</div>
                                                                    <div class="fw-semibold text-gray-500">Nombre de portions</div>
                                                                </div>
                                                                <!--end::Nombre de portions-->
                                                                <!--begin::Temps de cuisson-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">45 min</div>
                                                                    <div class="fw-semibold text-gray-500">Temps de cuisson</div>
                                                                </div>
                                                                <!--end::Temps de cuisson-->
                                                            </div>
                                                        </div>
                                                        <!--end::Card body-->
                                                    </a>
                                                    <!--end::Card-->
                                                </div>
                                                <div class="col-md-6 col-xl-4">
                                                    <!--begin::Card-->
                                                    <a href="/recipes" class="card border-hover-primary">
                                                        <!--begin::Card header-->
                                                        <div class="card-header border-0 pt-9">
                                                            <!--begin::Card Title-->
                                                            <div class="card-title m-0">
                                                                <!--begin::Avatar-->
                                                                <div class="symbol symbol-50px bg-light">
                                                                    <div class="symbol-label">
                                                                        <img src="@/assets/curryPoulet.jpg" alt="Curry de Poulet Thaï" class="full-height-img" />
                                                                    </div>
                                                                </div>
                                                                <!--end::Avatar-->
                                                            </div>
                                                            <!--end::Card Title-->
                                                            <!--begin::Card toolbar-->
                                                            <div class="card-toolbar">
                                                                <span class="badge badge-light-primary fw-bold me-auto px-4 py-3">Plat principal</span>
                                                            </div>
                                                            <!--end::Card toolbar-->
                                                        </div>
                                                        <!--end::Card header-->
                                                        <!--begin::Card body-->
                                                        <div class="card-body p-9">
                                                            <!--begin::Name-->
                                                            <div class="fs-3 fw-bold text-gray-900">Curry de Poulet Thaï</div>
                                                            <!--end::Name-->
                                                            <!--begin::Description-->
                                                            <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">Curry thaï épicé et aromatique avec du poulet tendre, lait de coco et un mélange de fines herbes thaïlandaises.</p>
                                                            <!--end::Description-->
                                                            <!--begin::Info-->
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Date de publication-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">25 mars 2024</div>
                                                                    <div class="fw-semibold text-gray-500">Date de publication</div>
                                                                </div>
                                                                <!--end::Date de publication-->
                                                                <!--begin::Temps de préparation-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">15 min</div>
                                                                    <div class="fw-semibold text-gray-500">Préparation</div>
                                                                </div>
                                                                <!--end::Temps de préparation-->
                                                            </div>
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Nombre de portions-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">4</div>
                                                                    <div class="fw-semibold text-gray-500">Nombre de portions</div>
                                                                </div>
                                                                <!--end::Nombre de portions-->
                                                                <!--begin::Temps de cuisson-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">30 min</div>
                                                                    <div class="fw-semibold text-gray-500">Temps de cuisson</div>
                                                                </div>
                                                                <!--end::Temps de cuisson-->
                                                            </div>
                                                        </div>
                                                        <!--end::Card body-->
                                                    </a>
                                                    <!--end::Card-->
                                                </div>
                                                <div class="col-md-6 col-xl-4">
                                                    <!--begin::Card-->
                                                    <a href="/recipes/tarte-aux-pommes" class="card border-hover-primary">
                                                        <!--begin::Card header-->
                                                        <div class="card-header border-0 pt-9">
                                                            <!--begin::Card Title-->
                                                            <div class="card-title m-0">
                                                                <!--begin::Avatar-->
                                                                <div class="symbol symbol-50px bg-light">
                                                                    <div class="symbol-label">
                                                                        <img src="@/assets/tartepommes.jpg" alt="Tarte aux Pommes" class="full-height-img" />
                                                                    </div>
                                                                </div>
                                                                <!--end::Avatar-->
                                                            </div>
                                                            <!--end::Card Title-->
                                                            <!--begin::Card toolbar-->
                                                            <div class="card-toolbar">
                                                                <span class="badge badge-light-success fw-bold me-auto px-4 py-3">Dessert</span>
                                                            </div>
                                                            <!--end::Card toolbar-->
                                                        </div>
                                                        <!--end::Card header-->
                                                        <!--begin::Card body-->
                                                        <div class="card-body p-9">
                                                            <!--begin::Name-->
                                                            <div class="fs-3 fw-bold text-gray-900">Tarte aux Pommes</div>
                                                            <!--end::Name-->
                                                            <!--begin::Description-->
                                                            <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">Tarte aux pommes croustillante avec une garniture de pommes sucrées et une pointe de cannelle, parfaite comme dessert réconfortant.</p>
                                                            <!--end::Description-->
                                                            <!--begin::Info-->
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Date de publication-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">30 mars 2024</div>
                                                                    <div class="fw-semibold text-gray-500">Date de publication</div>
                                                                </div>
                                                                <!--end::Date de publication-->
                                                                <!--begin::Temps de préparation-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">30 min</div>
                                                                    <div class="fw-semibold text-gray-500">Préparation</div>
                                                                </div>
                                                                <!--end::Temps de préparation-->
                                                            </div>
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Nombre de portions-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">8</div>
                                                                    <div class="fw-semibold text-gray-500">Nombre de portions</div>
                                                                </div>
                                                                <!--end::Nombre de portions-->
                                                                <!--begin::Temps de cuisson-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">1 h</div>
                                                                    <div class="fw-semibold text-gray-500">Temps de cuisson</div>
                                                                </div>
                                                                <!--end::Temps de cuisson-->
                                                            </div>
                                                        </div>
                                                        <!--end::Card body-->
                                                    </a>
                                                    <!--end::Card-->
                                                </div>
                                                <div class="col-md-6 col-xl-4">
                                                    <!--begin::Card-->
                                                    <a href="/recipes/bouillabaisse" class="card border-hover-primary">
                                                        <!--begin::Card header-->
                                                        <div class="card-header border-0 pt-9">
                                                            <!--begin::Card Title-->
                                                            <div class="card-title m-0">
                                                                <!--begin::Avatar-->
                                                                <div class="symbol symbol-50px bg-light">
                                                                    <div class="symbol-label">
                                                                        <img src="@/assets/bouillabaise.jpg" alt="Bouillabaisse" class="full-height-img" />
                                                                    </div>
                                                                </div>
                                                                <!--end::Avatar-->
                                                            </div>
                                                            <!--end::Card Title-->
                                                            <!--begin::Card toolbar-->
                                                            <div class="card-toolbar">
                                                                <span class="badge badge-light-primary fw-bold me-auto px-4 py-3">Plat principal</span>
                                                            </div>
                                                            <!--end::Card toolbar-->
                                                        </div>
                                                        <!--end::Card header-->
                                                        <!--begin::Card body-->
                                                        <div class="card-body p-9">
                                                            <!--begin::Name-->
                                                            <div class="fs-3 fw-bold text-gray-900">Bouillabaisse</div>
                                                            <!--end::Name-->
                                                            <!--begin::Description-->
                                                            <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">Soupe de poissons provençale riche et robuste, garnie de fruits de mer et servie avec de la rouille.</p>
                                                            <!--end::Description-->
                                                            <!--begin::Info-->
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Date de publication-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">5 avril 2024</div>
                                                                    <div class="fw-semibold text-gray-500">Date de publication</div>
                                                                </div>
                                                                <!--end::Date de publication-->
                                                                <!--begin::Temps de préparation-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">25 min</div>
                                                                    <div class="fw-semibold text-gray-500">Préparation</div>
                                                                </div>
                                                                <!--end::Temps de préparation-->
                                                            </div>
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Nombre de portions-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">6</div>
                                                                    <div class="fw-semibold text-gray-500">Nombre de portions</div>
                                                                </div>
                                                                <!--end::Nombre de portions-->
                                                                <!--begin::Temps de cuisson-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">40 min</div>
                                                                    <div class="fw-semibold text-gray-500">Temps de cuisson</div>
                                                                </div>
                                                                <!--end::Temps de cuisson-->
                                                            </div>
                                                        </div>
                                                        <!--end::Card body-->
                                                    </a>
                                                    <!--end::Card-->
                                                </div>
                                                <div class="col-md-6 col-xl-4">
                                                    <!--begin::Card-->
                                                    <a href="/recipes/burger-maison-gourmet" class="card border-hover-primary">
                                                        <!--begin::Card header-->
                                                        <div class="card-header border-0 pt-9">
                                                            <!--begin::Card Title-->
                                                            <div class="card-title m-0">
                                                                <!--begin::Avatar-->
                                                                <div class="symbol symbol-50px bg-light">
                                                                    <div class="symbol-label">
                                                                        <img src="@/assets/burger.jpg" alt="Burger Maison Gourmet" class="full-height-img" />
                                                                    </div>
                                                                </div>
                                                                <!--end::Avatar-->
                                                            </div>
                                                            <!--end::Card Title-->
                                                            <!--begin::Card toolbar-->
                                                            <div class="card-toolbar">
                                                                <span class="badge badge-light-primary fw-bold me-auto px-4 py-3">Plat principal</span>
                                                            </div>
                                                            <!--end::Card toolbar-->
                                                        </div>
                                                        <!--end::Card header-->
                                                        <!--begin::Card body-->
                                                        <div class="card-body p-9">
                                                            <!--begin::Name-->
                                                            <div class="fs-3 fw-bold text-gray-900">Burger Maison Gourmet</div>
                                                            <!--end::Name-->
                                                            <!--begin::Description-->
                                                            <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">Un burger juteux avec un steak haché de qualité, garni de fromage affiné, de laitue croquante, de tomate fraîche et de sauce maison, le tout dans un pain brioché artisanal.</p>
                                                            <!--end::Description-->
                                                            <!--begin::Info-->
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Date de publication-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">15 avril 2024</div>
                                                                    <div class="fw-semibold text-gray-500">Date de publication</div>
                                                                </div>
                                                                <!--end::Date de publication-->
                                                                <!--begin::Temps de préparation-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">20 min</div>
                                                                    <div class="fw-semibold text-gray-500">Préparation</div>
                                                                </div>
                                                                <!--end::Temps de préparation-->
                                                            </div>
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Nombre de portions-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">4</div>
                                                                    <div class="fw-semibold text-gray-500">Nombre de portions</div>
                                                                </div>
                                                                <!--end::Nombre de portions-->
                                                                <!--begin::Temps de cuisson-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">10 min</div>
                                                                    <div class="fw-semibold text-gray-500">Temps de cuisson</div>
                                                                </div>
                                                                <!--end::Temps de cuisson-->
                                                            </div>
                                                        </div>
                                                        <!--end::Card body-->
                                                    </a>
                                                    <!--end::Card-->
                                                </div>
                                                <div class="col-md-6 col-xl-4">
                                                    <!--begin::Card-->
                                                    <a href="/recipes/paella-valenciana" class="card border-hover-primary">
                                                        <!--begin::Card header-->
                                                        <div class="card-header border-0 pt-9">
                                                            <!--begin::Card Title-->
                                                            <div class="card-title m-0">
                                                                <!--begin::Avatar-->
                                                                <div class="symbol symbol-50px bg-light">
                                                                    <div class="symbol-label">
                                                                        <img src="@/assets/pouletvalenciana.jpg" alt="Paella Valenciana" class="full-height-img" />
                                                                    </div>
                                                                </div>
                                                                <!--end::Avatar-->
                                                            </div>
                                                            <!--end::Card Title-->
                                                            <!--begin::Card toolbar-->
                                                            <div class="card-toolbar">
                                                                <span class="badge badge-light-primary fw-bold me-auto px-4 py-3">Plat principal</span>
                                                            </div>
                                                            <!--end::Card toolbar-->
                                                        </div>
                                                        <!--end::Card header-->
                                                        <!--begin::Card body-->
                                                        <div class="card-body p-9">
                                                            <!--begin::Name-->
                                                            <div class="fs-3 fw-bold text-gray-900">Paella Valenciana</div>
                                                            <!--end::Name-->
                                                            <!--begin::Description-->
                                                            <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">Paella espagnole authentique avec un mélange de viandes et fruits de mer, du riz safrané et une variété de légumes frais.</p>
                                                            <!--end::Description-->
                                                            <!--begin::Info-->
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Date de publication-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">10 avril 2024</div>
                                                                    <div class="fw-semibold text-gray-500">Date de publication</div>
                                                                </div>
                                                                <!--end::Date de publication-->
                                                                <!--begin::Temps de préparation-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">15 min</div>
                                                                    <div class="fw-semibold text-gray-500">Préparation</div>
                                                                </div>
                                                                <!--end::Temps de préparation-->
                                                            </div>
                                                            <div class="d-flex flex-wrap mb-5">
                                                                <!--begin::Nombre de portions-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">6</div>
                                                                    <div class="fw-semibold text-gray-500">Nombre de portions</div>
                                                                </div>
                                                                <!--end::Nombre de portions-->
                                                                <!--begin::Temps de cuisson-->
                                                                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                                    <div class="fs-6 text-gray-800 fw-bold">1 h</div>
                                                                    <div class="fw-semibold text-gray-500">Temps de cuisson</div>
                                                                </div>
                                                                <!--end::Temps de cuisson-->
                                                            </div>
                                                        </div>
                                                        <!--end::Card body-->
                                                    </a>
                                                    <!--end::Card-->
                                                </div>
                                            </div>
											<!--end::Tab Content-->
										</div>
										<!--end: Card Body-->
									</div>
									<!--end::Pos food-->
								</div>
								<!--end::Content-->
								<!--begin::Sidebar-->
								<div class="flex-row-auto w-xl-450px">
									<!--begin::Pos order-->
									<div class="card card-flush bg-body" id="kt_pos_form">
										<!--begin::Header-->
										<div class="card-header pt-5">
											<h3 class="card-title fw-bold text-gray-800 fs-2qx">Ajouter recette</h3>
										</div>
										<!--end::Header-->
										<!--begin::Body-->
                                        <form id="kt_account_profile_details_form" class="form">
                                        <!--begin::Card body-->
                                        <div class="card-body border-top p-9">
                                            <!--begin::Input group-->
                                            <div class="row mb-6">
                                                <!--begin::Label-->
                                                <label class="col-lg-4 col-form-label fw-semibold fs-6">Image</label>
                                                <!--end::Label-->
                                                <!--begin::Col-->
                                                <div class="col-lg-8">
                                                    <!--begin::Image input-->
                                                    <div  class="image-input image-input-outline image-input-empty" data-kt-image-input="true" :style="selectedIngredient ? 'background-image:url('+ selectedIngredient.image +')' : 'blank'">
                                                        <!--begin::Preview existing avatar-->
                                                        <div class="image-input-wrapper w-125px h-125px"></div>
                                                        <!--end::Preview existing avatar-->
                                                        <!--begin::Label-->
                                                        <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                            <i class="ki-duotone ki-pencil fs-7">
                                                                <span class="path1"></span>
                                                                <span class="path2"></span>
                                                            </i>
                                                            <!--begin::Inputs-->
                                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                            <input type="hidden" name="avatar_remove" />
                                                            <!--end::Inputs-->
                                                        </label>
                                                        <!--end::Label-->
                                                        <!--begin::Cancel-->
                                                        <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                            <i class="ki-duotone ki-cross fs-2">
                                                                <span class="path1"></span>
                                                                <span class="path2"></span>
                                                            </i>
                                                        </span>
                                                        <!--end::Cancel-->
                                                        <!--begin::Remove-->
                                                        <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                            <i class="ki-duotone ki-cross fs-2">
                                                                <span class="path1"></span>
                                                                <span class="path2"></span>
                                                            </i>
                                                        </span>
                                                        <!--end::Remove-->
                                                    </div>
                                                    <!--end::Image input-->
                                                    <!--begin::Hint-->
                                                    <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
                                                    <!--end::Hint-->
                                                </div>
                                                <!--end::Col-->
                                            </div>
                                            <!--end::Input group-->
                                            <!--begin::Input group-->
                                            <div class="row mb-6">
                                                <label class="col-lg-4 col-form-label required fw-semibold fs-6">Nom</label>
                                                <div class="col-lg-8">
                                                    <div class="row">
                                                        <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" :value="selectedIngredient ?selectedIngredient.name : 'nom' " />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-6">
                                                <!--begin::Label-->
                                                <label class="col-lg-4 col-form-label fw-semibold fs-6">Description</label>
                                                <!--end::Label-->
                                                <!--begin::Col-->
                                                <div class="col-lg-8 fv-row">
                                                    <!--begin::Input-->
                                                    <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" :value="selectedIngredient ?selectedIngredient.description : 'description'" />
                                                    <!--end::Hint-->
                                                </div>
                                                <!--end::Col-->
                                            </div>
                                            <div class="row mb-6">
                                                <!--begin::Label-->
                                                <label class="col-lg-4 col-form-label required fw-semibold fs-6">Emplacement</label>
                                                <!--end::Label-->
                                                <!--begin::Col-->
                                                <div class="col-lg-8 fv-row">
                                                    <!--begin::Input-->
                                                    <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" :value="selectedIngredient ?selectedIngredient.location : 'emplacement'" />
                                                    <!--end::Hint-->
                                                </div>
                                                <!--end::Col-->
                                            </div>
                                            <div class="row mb-6">
                                                <!--begin::Label-->
                                                <label class="col-lg-4 col-form-label required fw-semibold fs-6">Type</label>
                                                <!--end::Label-->
                                                <!--begin::Col-->
                                                <div class="col-lg-8 fv-row">
                                                    <!--begin::Input-->
                                                    <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" :value="selectedIngredient ?selectedIngredient.type : 'type'" />
                                                    <!--end::Hint-->
                                                </div>
                                                <!--end::Col-->
                                            </div>
                                        </div>
                                        <!--end::Card body-->
                                        <!--begin::Actions-->
                                        <div class="card-footer d-flex justify-content-end py-6 px-9">
                                            <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">{{  'Mettre à jour' }}</button>
                                        </div>
                                        <!--end::Actions-->
                                        </form>
										<!--end: Card Body-->
									</div>
									<!--end::Pos order-->
								</div>
								<!--end::Sidebar-->
							</div>
							<!--end::Layout-->
						</div>
						<!--end::Container-->
					</div>
             </div>
             <!--end::Wrapper-->
         </div>
         <!--end::Page-->
     </div>
 </template>
   <script>
 import { defineComponent } from 'vue';
 import HeaderApp from "./header.vue";
 import MenuAside from "@/components/MenuAside.vue";
 import fruitVegetablesImage  from "@/assets/fruitelegumes.png";
 import dairyImage from '@/assets/produitslaitiers.png';
 import cerealsImage from '@/assets/cerealesfeculents.png';
 import condimentsImage from '@/assets/epicerie.png';

 
   // ... your existing script
   export default defineComponent({
     name: 'InventoryList', 
     components: {
         MenuAside,
         HeaderApp
     },
     data() {
         return {
             selectedCategory: '',
             categories: [
                 { name: 'Aperitif', type: 'fruits', image: fruitVegetablesImage, options: 8 },
                 { name: 'Entrées', type: 'meats', image: dairyImage, options: 8 },
                 { name: 'Plât', type: 'cereals', image: condimentsImage, options: 8 },
                 { name: 'Dessert', type: 'dairy', image: cerealsImage, options: 8 }
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
             selectedIngredient: null,
             filteredItems: [],
             defaultImage: '../assets/cereales.png',
         };
     },
     mounted() {
         this.filterByCategory('fruits')
     },
  
     methods: {
         filterByCategory(categoryType) {
             this.selectedCategory = categoryType
             this.filteredItems = this.inventory[categoryType];
         },
          submitForm() {
             if (this.formMode === 'add') {
                 this.addItem();
             } else if (this.formMode === 'edit') {
                 this.updateItem();
             }
         },
         selectItem(item) {
             this.selectedIngredient = item;
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
             this.selectedIngredient = ingredient;
         }
     }
   });
   </script>
   
   <style scoped>
   .full-width {
     flex-grow: 1!important; /* Permet à l'élément de remplir l'espace disponible */
   }
   .full-height-img {
     height: 100%; /* Ajuste la hauteur de l'image pour remplir le conteneur */
     width: 100%; /* Ajuste la largeur de l'image pour remplir le conteneur */
     object-fit: cover; /* S'assure que l'image couvre toute la zone sans déformer son ratio */
     border-radius: inherit; /* Hérite le border-radius de son parent direct */
   }
   </style>
   