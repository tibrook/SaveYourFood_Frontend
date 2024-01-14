<template>
   <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <MenuAside  />
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
                <HeaderApp :page="$t('Inventory_Main')" />
                <div class="content d-flex flex-column flex-column-fluid" id="kt_content" >
                    <div class="container-xxl" id="kt_content_container">
                        <ul class="nav nav-pills d-flex justify-content-between nav-pills-custom gap-3 mb-6">
                            <li class="nav-item" v-for="(category, index) in inventoryCategories" :key="index">
                                <a class="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack page-bg" :class="selectedCategory === category.type ? 'active show' : ''" data-bs-toggle="pill" href="#kt_pos_food_content_1" style="width: 138px;height: 180px" @click="filterByCategory(category.type)">
                                    <div class="symbol-label symbol-label nav-icon mb-3 full-width">
                                        <img :src="category.image" class="w-80px h-80px" alt="" />
                                    </div>
                                    <div class="">
                                        <span class="text-gray-800 fw-bold fs-2 d-block">{{ category.name }}</span>
                                        <span class="text-gray-500 fw-semibold fs-7">{{ category.options }}</span>

                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="d-flex flex-column flex-xl-row">
                            <div class="d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0" >
                                <div class="card card-flush card-p-0 bg-transparent border-0">
                                    <div class="card-body">
                                        <div class="tab-content">
                                            <div class="tab-pane fade show active" id="kt_pos_food_content_1">
                                                <div class="row" v-if="filteredItems">
                                                    <InventoryCard class="col-md-2" v-for="(item, index) in filteredItems"  :item="item" :key="index" @click="selectItem(item)"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-row-auto w-xl-450px" v-if="selectedIngredient">

                               <InventoryForm v-if="selectedIngredient" :selectedIngredient="selectedIngredient" @submit="handleFormSubmit" @closeIngredientForm='handleCloseForm' />
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
import MenuAside from '@/components/menu/MenuAside.vue'
import InventoryForm from '@/components/inventory/InventoryForm.vue'
import InventoryCard from '@/components/inventory/InventoryCard.vue'
import { mapGetters,mapActions } from 'vuex';

  export default defineComponent({
    name: 'InventoryList', 
    components: {
        MenuAside,InventoryCard,
        HeaderApp,InventoryForm
    },
    data() {
        return {
            selectedCategory: 'fruits',
            isEditFormMode : false,
            formMode: 'add',
            selectedIngredient: null,
            filteredItems: [],
            defaultImage: '../assets/cereales.png',
            categories: [],
        };
    },
    computed: {
        ...mapGetters(['allInventory', 'inventoryCategories']),

    },
    mounted() {
        this.fetchInventoryData();
        this.fetchCategoriesData();
    },
 
    methods: {
        ...mapActions(['fetchInventory', 'fetchInventoryCategories']),
        filterByCategory(categoryType) {
            this.selectedCategory = categoryType
            this.filteredItems = this.inventory[categoryType];
        },
        async fetchCategoriesData() {
            await this.fetchInventoryCategories()
            console.log(this.inventoryCategories)
        },
        async fetchInventoryData() {
            await this.fetchInventory()
            this.inventory = this.allInventory
            this.filterByCategory(this.selectedCategory)
        },
         submitForm() {
            if (this.formMode === 'add') {
                this.addItem();
            } else if (this.formMode === 'edit') {
                this.updateItem();
            }
        },
        handleCloseForm(){
            this.selectedIngredient = null
        },
        selectItem(item) {
            this.selectedIngredient = item;
            console.log(item)
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
  