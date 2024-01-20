<template>
  <div id="kt_header" class="header py-6 py-lg-0" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{lg: '300px'}">
    <div class="header-container container-xxl">
      <div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-20 py-3 py-lg-0 me-3">
        <h1 class="d-flex flex-column text-gray-900 fw-bold my-1">
          <span class="text-white fs-1">{{pageTitle }}</span>
        </h1>
      </div>
      <div class="d-flex align-items-center flex-wrap">
        <div class="d-flex align-items-center py-3 py-lg-0">
          <div class="me-3">
            <a href="#" class="btn btn-icon btn-custom btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
              <i class="ki-duotone ki-user fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
            </a>
            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
              <div class="menu-item px-3">
                <div class="menu-content d-flex align-items-center px-3">
                  <div class="symbol symbol-50px me-5">
                    <img alt="Logo" src="@/assets/userLogo.jpg" />
                  </div>
                  <div class="d-flex flex-column">
                    <div class="fw-bold d-flex align-items-center fs-5">{{userSettings.name}}</div>
                    <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">{{userSettings.email}}</a>
                  </div>
                </div>
              </div>
              <div class="separator my-2"></div>
              <div class="menu-item px-5">
                <router-link id="usermenu_accountPreferencesLink" :to="{name: 'accountPreferences'}" class=" router-link">
                    <span class="menu-link px-5">{{ $t("Settings_MyPreferences") }}</span>
                </router-link>
              </div>
              <div class="menu-item px-5">
                <a href="account/my-recipes" class="menu-link px-5">{{$t('Recipes_MyRecipes')}}</a>
              </div>
              <div class="separator my-2"></div>
              <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" data-kt-menu-offset="-15px, 0">
                <a href="#" class="menu-link px-5">
                  <span class="menu-title position-relative">{{$t('Settings_Language')}} 
                  <img class="w-15px h-15px rounded-1 ms-2" :src="currentFlag" alt="" /></span>
                </a>
                <div class="menu-sub menu-sub-dropdown w-175px py-4">
                  <div class="menu-item px-3">
                    <a href="#" class="menu-link d-flex px-5" @click="changeLanguage('en')">
                    <span class="symbol symbol-20px me-4">
                      <img class="rounded-1" src="@/assets/media/flags/united-states.svg" alt="" />
                    </span>English</a>
                  </div>
                  <div class="menu-item px-3">
                    <a href="#" class="menu-link d-flex px-5" @click="changeLanguage('fr')">
                    <span class="symbol symbol-20px me-4">
                      <img class="rounded-1" src="@/assets/media/flags/france.svg" alt="" />
                    </span>Français</a>
                  </div>
                </div>
              </div>
              <div class="menu-item px-5">

              <router-link id="usermenu_accountPreferencesLink" :to="{name: 'accountSettings'}" class="menu-link px-5">
                    {{ $t("Settings_User") }}
                </router-link>
              </div>
              <div class="menu-item px-5">
                <a href="#"  class="menu-link px-5" @click="disconnect">{{$t('Auth_SignOut')}}</a>
              </div>
            </div>
          </div>
          <input type="text" class="form-control custom-form-control ps-13 me-4" name="search" value="" placeholder="Rechercher" data-kt-search-element="input" />
         <NewIngredientModal showModal="showModal"/>
          <button href="#" class="btn btn-primary w-100" data-bs-toggle="modal" @click="emitOpenModalEvent"  data-bs-target="#kt_modal_new_ingredient">{{$t('Inventory_ImportAliment')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter,useRoute } from 'vue-router';
import { ref } from 'vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'; 
import {  mapGetters, mapActions } from 'vuex';
import NewIngredientModal from '@/components/header/newIngredientModal.vue';

export default{
    name: "HeaderApp",
    props: {
        page: {
            default: "Dashboard",
            type: String
        }
    },
    setup() {
        //eslint-disable-next-line
        KTMenu.createInstances();
        const i18n = useI18n();
        const router = useRouter();
        const currentLanguage = ref(localStorage.getItem('language') || 'en');
        const currentFlag = ref(require(`@/assets/media/flags/${currentLanguage.value === 'en' ? 'united-states.svg' : 'france.svg'}`));
        const changeLanguage = (lang) => {
            const flagImage = lang === 'en' ? 'english.png' : 'french.jpg';
            i18n.locale.value = lang;
            currentFlag.value = require(`@/assets/${flagImage}`);
            localStorage.setItem('language', lang);
        };
        const route = useRoute();
        const pageTitle = computed(() => {
          return route.meta.title || 'Default Page Title';
        });
        return { router, changeLanguage, currentFlag, currentLanguage,pageTitle };
    },
    data() {
        return {
            showDropdown: false,
            showModal : false
        };
    },
    computed: {
        ...mapGetters(['currentLanguage', 'userSettings'])
    },
    methods: {
      ...mapActions(['logout']),
        toggleDropdown(event) {
            event.stopPropagation();
            this.showDropdown = !this.showDropdown;
            let dropdownMenu = document.querySelector('.menuLinks');
            if (dropdownMenu) {
                dropdownMenu.classList.toggle('open', this.showDropdown);
            }
        },
        emitOpenModalEvent() {
          this.showModal = true
        },
        handleClickOutside(event) {
            const menu = this.$refs.menu;
            if (menu && !menu.contains(event.target) && this.showDropdown) {
                this.showDropdown = false;
            }
        },
        goToInventory() {
            this.$router.push('/inventory');
        },
        disconnect() {
            this.logout().then(() => {
                this.$router.push('/login');  // Redirection après le logout
            });
        }
    },
   
    components: { NewIngredientModal }
}
</script>

<style>
.router-link {
  all:unset
}
</style>