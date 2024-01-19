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
                            <div class="d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0" :class="{'full-width-when-no-ingredient': !selectedIngredient}" >
                                <div class="card card-flush card-p-0 bg-transparent border-0 w-100">
                                    <div class="card-body">
                                        <div class="tab-content">
                                            <div class="tab-pane fade show active" id="kt_pos_food_content_1">
                                                <div class="row" v-if="filteredItems">
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
                                                                    <tr v-for="(item, index) in filteredItems"  :key="index" @click="selectItem(item)">
                                                                        <td class="ps-9">
                                                                            <div class="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                                <input class="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td class="w-150px w-md-175px">
                                                                            <div class="text-gray-900 gap-1 pt-2">
                                                                                <span class="fw-bold me-4">{{item.name}}</span>
                                                                                <div v-if="shoppingList &&categoriesShoppingList &&  getCategory(item)" 	class="badge" :class="getCategory(item).color">{{getCategory(item).name}}</div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="text-gray-900 gap-1 pt-2">
                                                                                <a href="apps/inbox/reply.html" class="text-gray-900">
                                                                                    <span class="fw-semibold">{{item.recipeName}}</span>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="text-gray-900 gap-1 pt-2">
                                                                                <a href="apps/inbox/reply.html" class="text-gray-900">
                                                                                    <span class="fw-semibold">{{item.expirationDate}}</span>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="text-gray-900 gap-1 pt-2">
                                                                                <span class="fw-semibold">{{item.bestBeforeDate}}</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="text-gray-900 gap-1 pt-2">
                                                                                <a href="apps/inbox/reply.html" class="text-gray-900">
                                                                                    <span class="fw-semibold">{{item.type}}</span>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="text-gray-900 gap-1 pt-2">
                                                                                <a href="apps/inbox/reply.html" class="text-gray-900">
                                                                                    <span class="fw-bold">{{item.quantity}}</span>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                        <td class="w-130px text-end fs-7 pe-9">
                                                                            <span class="fw-semibold">{{item.location}}</span>
                                                                        </td>
                                                                        
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <!-- <InventoryCard class="col-md-2" v-for="(item, index) in filteredItems"  :selectedIngredient="selectedIngredient" :item="item" :key="index" @click="selectItem(item)"/> -->
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
// import InventoryCard from '@/components/inventory/InventoryCard.vue'
import { mapGetters,mapActions } from 'vuex';

  export default defineComponent({
    name: 'InventoryList', 
    components: {
        MenuAside,
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
        getCategory(item){
			return this.inventoryCategories.find(category => category.id === item.category);
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
    flex-grow: 1!important; 
  }
  .full-height-img {
    height: 100%; 
    width: 100%; 
    object-fit: cover; 
    border-radius: inherit;
  }
  .full-width-when-no-ingredient {
    flex-grow: 1; 
}
  </style>
  