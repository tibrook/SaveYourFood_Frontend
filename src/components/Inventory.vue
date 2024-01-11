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
                <HeaderApp />
                <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                    <div class="container-xxl" id="kt_content_container">
                        <ul class="nav nav-pills d-flex justify-content-between nav-pills-custom gap-3 mb-6">
                            <li class="nav-item" v-for="(category, index) in categories" :key="index">
                                <a class="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack page-bg" :class="selectedCategory === category.type ? 'active show' : ''" data-bs-toggle="pill" href="#kt_pos_food_content_1" style="width: 138px;height: 180px" @click="filterByCategory(category.type)">
                                    <div class="symbol-label symbol-label nav-icon mb-3 full-width">
                                        <img :src="category.image" class="w-80px h-80px" alt="" />
                                    </div>
                                    <div class="">
                                        <!-- Tous les fruits et légumes frais, congelés ou préparés. -->
                                        <span class="text-gray-800 fw-bold fs-2 d-block">{{ category.name }}</span>
                                        <span class="text-gray-500 fw-semibold fs-7">{{ category.options }}</span>

                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="d-flex flex-column flex-xl-row">
                            <!--begin::Content-->
                            <div class="d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0" >
                                <!--begin::Pos food-->
                                <div class="card card-flush card-p-0 bg-transparent border-0">
                                    <!--begin::Body-->
                                    <div class="card-body">
                                        <!--begin::Nav-->
                                      
                                        <!--end::Nav-->
                                        <!--begin::Tab Content-->
                                        <div class="tab-content">
                                            <!--begin::Tap pane-->
                                            <div class="tab-pane fade show active" id="kt_pos_food_content_1">
                                                <!--begin::Row for grid system-->
                                                <div class="row">
                                                    <!-- Use v-for to iterate over filteredItems -->
                                                    <div class="col-md-3" v-for="(item, index) in filteredItems" :key="index" @click="selectItem(item)">
                                                        <!--begin::Card-->
                                                        <div class="card card-flush mb-4" :class="selectedIngredient === item ? 'border-primary border-4px' : ''" >
                                                            <!--begin::Body-->
                                                            <div class="card-body text-center">
                                                                <!--begin::Food img-->
                                                                <img :src="item.image" class="rounded-3 mb-2 mt-2" alt="" style="width: 100px; height: 100px;" />
                                                                <!--end::Food img-->
                                                                <!--begin::Info-->
                                                                <div class="mb-2">
                                                                    <!--begin::Title-->
                                                                    <div class="text-center">
                                                                        <span class="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6">{{ item.name }}</span>
                                                                        <span class="text-gray-500 fw-semibold d-block fs-7">Quantité : {{ item.quantity }}</span>
                                                                        <span class="text-gray-500 fw-semibold d-block fs-7">{{ item.location }}</span>
                                                                    </div>
                                                                    <!--end::Title-->
                                                                </div>
                                                            </div>
                                                            <!--end::Body-->
                                                        </div>
                                                        <!--end::Card-->
                                                    </div>
                                                </div>
                                                <!--end::Row-->
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
                                <div class="card card-flush bg-body " id="kt_pos_form"> 
                                    <!--begin::Header-->
                                    <div class="card-header pt-5">
                                        <h3 class="card-title fw-bold text-gray-800 fs-2qx">{{ selectedIngredient ? selectedIngredient?.name : 'Ajouter aliment' }}</h3>
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
                                                    <div class="image-input image-input-outline" data-kt-image-input="true" :style="'background-image:url('+  selectedIngredient ? selectedIngredient?.image : 'blank' + ')'">
                                                        <!--begin::Preview existing avatar-->
                                                        <div class="image-input-wrapper w-125px h-125px" :style="'background-image: url(' + selectedIngredient ? selectedIngredient?.image : 'blank'+ ')'"></div>
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
                                            <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">{{ formMode === 'add' ? 'Ajouter' : 'Mettre à jour' }}</button>
                                        </div>
                                        <!--end::Actions-->
                                        </form>
                                    </div>
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
import snacksImage from '@/assets/snackproduitssec.png';
import preservesImage from '@/assets/conserves.png';
import beveragesImage from '@/assets/boissons.png';

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
                { name: 'Fruits & Légumes', type: 'fruits', image: fruitVegetablesImage, options: 8 },
                { name: 'Viandes, Poissons', type: 'meats', image: dairyImage, options: 8 },
                { name: 'Produits Laitiers', type: 'dairy', image: cerealsImage, options: 8 },
                { name: 'Céréales & Féculents', type: 'cereals', image: condimentsImage, options: 8 },
                { name: 'Epices & Condiments', type: 'condiments', image: snacksImage, options: 8 },
                { name: 'Produits Secs', type: 'condiments', image: preservesImage, options: 8 },
                { name: 'Conserves & Bocaux', type: 'condiments', image: preservesImage, options: 8 },
                { name: 'Boissons', type: 'condiments', image: beveragesImage, options: 8 }
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
  