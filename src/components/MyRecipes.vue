<template>
    <div class="card-header cursor-pointer">
        <div class="card-title m-0">
            <h3 class="fw-bold m-0">{{$t('my_recipes')}}</h3>
        </div>
        <!--end::Heading-->
        <!--begin::Actions-->
        <a href="account/settings.html" class="btn btn-sm btn-primary align-self-center">{{$t('add_recipe')}}</a>

    </div>
    <div class="card-body p-9">

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
    </div>
</template>
<script>
export default {
    name: 'AccountSettings',
}
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
  </style>
