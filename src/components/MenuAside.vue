<template>
    
    <div id="kt_aside" class="aside" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="auto" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle">
        <div class="aside-logo flex-column-auto pt-10 pt-lg-20" id="kt_aside_logo">
            <a href="index.html">
                <chiefHatVue :color="'#2C294B'" :className="'h-90px'"/>
            </a>
        </div>
        <div class="d-flex flex-column text-gray-900 fw-bold my-1 align-items-center">
            Save Your Food
        </div>
        <div class="aside-menu flex-column-fluid pt-0 pb-7 py-lg-10" id="kt_aside_menu">
            <!--begin::Aside menu-->
            <div id="kt_aside_menu_wrapper" class="w-100 hover-scroll-y scroll-lg-ms d-flex" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: trur}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu" data-kt-scroll-offset="0">
                <div id="kt_aside_menu" class="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-icon-gray-500 menu-arrow-gray-500 fw-semibold fs-6 my-auto" data-kt-menu="true">
                    <!--begin:Menu item-->
                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item here show py-2" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-title='Home'>
                        <!--begin:Menu link-->
                        <span class="menu-link menu-center">
                            <span class="menu-icon me-0">
                                <router-link id="menuAside_home" :to="{name: 'default'}" >
                                    <i class="ki-duotone ki-home-2 fs-2x">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i>
                                </router-link>
                              
                            </span>
                        </span>
                    </div>
                    <!--end:Menu item-->
                    <!--begin:Menu item-->
                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-title='inventory'>
                        <!--begin:Menu link-->
                        <span class="menu-link menu-center">
                            <span class="menu-icon me-0">
                                <router-link id="menuAside_inventory" :to="{name: 'Inventory'}" >
                                    <i class="ki-duotone ki-basket fs-2x">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i>
                                </router-link>
                               
                            </span>
                        </span>
                    </div>
                    <!--end:Menu item-->
                    <!--begin:Menu item-->
                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-title='recipe'>
                        <!--begin:Menu link-->
                        <span class="menu-link menu-center">
                            <span class="menu-icon me-0">
                                <router-link id="menuAside_recipe" :to="{name: 'Recipes'}" >
                                    <i class="ki-duotone ki-scroll fs-2x">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i>
                                </router-link>
                            </span>
                        </span>
                    </div>
                    <!--begin:Menu item-->
                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-title='weekly meals'>
                        <!--begin:Menu link-->
                        <span class="menu-link menu-center">
                            <span class="menu-icon me-0">
                                <router-link id="menuAside_weeklymeals" :to="{name: 'WeeklyMeals'}" class="text-decoration-none" >
                                    <i class="ki-duotone ki-calendar fs-2x">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i>
                                </router-link>
                            </span>
                        </span>
                    </div>
                    <!--begin:Menu item-->
                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-title='shopping list'>
                        <!--begin:Menu link-->
                        <span class="menu-link menu-center">
                            <span class="menu-icon me-0">
                                <router-link id="menuAside_shoppinglist" :to="{name: 'ShoppingList'}" >
                                    <i class="ki-duotone ki-handcart fs-2x">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i>
                                </router-link>
                               
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <!--end::Aside menu-->
        </div>
    </div>
</template>

<script>
import chiefHatVue from './icons/chiefHat.vue';
export default {
    name: 'MenuAside',
    components: {
        chiefHatVue
    },
}

</script>