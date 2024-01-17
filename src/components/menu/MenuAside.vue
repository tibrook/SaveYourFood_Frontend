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
            <div id="kt_aside_menu_wrapper" class="w-100 hover-scroll-y scroll-lg-ms d-flex" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu" data-kt-scroll-offset="0">
                <div id="kt_aside_menu" class="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-icon-gray-500 menu-arrow-gray-500 fw-semibold fs-6 my-auto" data-kt-menu="true">
                    <div v-for="menuItem in menuItems" :key="menuItem.id" :class="['menu-item py-2', isMenuItemActive(menuItem.routeName) ? 'here show' : '']" 
         data-bs-toggle="tooltip" :data-bs-title="menuItem.title">                    <span class="menu-link menu-center">
                        <span class="menu-icon me-0">
                            <router-link :id="menuItem.id" :to="{name: menuItem.routeName}" class="router-link ">
                                <i :class="['ki-duotone', menuItem.icon, 'fs-2x']">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                            </router-link>
                        </span>
                    </span>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import chiefHatVue from '@/components/icons/chiefHat.vue';
export default {
    name: 'MenuAside',
    components: {
        chiefHatVue
    },
    data() {
        return {
            menuItems: [
            { id: 'menuAside_home', routeName: 'Home', icon: 'ki-home-2', title: 'Home' },
            { id: 'menuAside_inventory', routeName: 'Inventory', icon: 'ki-basket', title: 'Inventory' },
            { id: 'menuAside_recipe', routeName: 'Recipes', icon: 'ki-scroll', title: 'Recipes' },
            { id: 'menuAside_weeklymeals', routeName: 'WeeklyMeals', icon: 'ki-calendar', title: 'Weekly Meals' },
            { id: 'menuAside_shoppinglist', routeName: 'ShoppingList', icon: 'ki-handcart', title: 'Shopping List' }
            ],
        };
    },
    methods: {
        isMenuItemActive(routeName) {
            return this.$route.name === routeName || (routeName ==='default' &&  this.$route.name === routeName) ;
        }
    },
}
</script>
<style>
.router-link {
  all:unset
}
</style>