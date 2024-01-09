<template>
  <div id="kt_header" class="header py-6 py-lg-0" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{lg: '300px'}">
    <!--begin::Container-->
    <div class="header-container container-xxl">
      <!--begin::Page title-->
      <div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-20 py-3 py-lg-0 me-3">
        <!--begin::Heading-->
        <h1 class="d-flex flex-column text-gray-900 fw-bold my-1">
          <span class="text-white fs-1">{{page}}</span>
        </h1>
        <!--end::Heading-->
      </div>
      <!--end::Page title=-->
      <!--begin::Wrapper-->
      <div class="d-flex align-items-center flex-wrap">
        <!--begin::Action-->
        <div class="d-flex align-items-center py-3 py-lg-0">
          <!--begin::Item-->
          <div class="me-3">
            <a href="#" class="btn btn-icon btn-custom btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
              <i class="ki-duotone ki-user fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
            </a>
            <!--begin::User account menu-->
            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content d-flex align-items-center px-3">
                  <!--begin::Avatar-->
                  <div class="symbol symbol-50px me-5">
                    <img alt="Logo" src="@/assets/userLogo.jpg" />
                  </div>
                  <!--end::Avatar-->
                  <!--begin::Username-->
                  <div class="d-flex flex-column">
                    <div class="fw-bold d-flex align-items-center fs-5">Alex </div>
                    <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">alex@gmail.com</a>
                  </div>
                  <!--end::Username-->
                </div>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <a href="account/overview.html" class="menu-link px-5">My Profile</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <a href="account/statements.html" class="menu-link px-5">My Recipes</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" data-kt-menu-offset="-15px, 0">
                <a href="#" class="menu-link px-5">
                  <span class="menu-title position-relative">Language 
                  <img class="w-15px h-15px rounded-1 ms-2" :src="currentFlag" alt="" /></span>
                </a>
                <!--begin::Menu sub-->
                <div class="menu-sub menu-sub-dropdown w-175px py-4">
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="#" class="menu-link d-flex px-5" @click="changeLanguage('en')">
                    <span class="symbol symbol-20px me-4">
                      <img class="rounded-1" src="@/assets/media/flags/united-states.svg" alt="" />
                    </span>English</a>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="#" class="menu-link d-flex px-5" @click="changeLanguage('fr')">
                    <span class="symbol symbol-20px me-4">
                      <img class="rounded-1" src="@/assets/media/flags/france.svg" alt="" />
                    </span>French</a>
                  </div>
                  <!--end::Menu item-->
                </div>
                <!--end::Menu sub-->
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-5 my-1">
                <a href="account/settings.html" class="menu-link px-5">Account Settings</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <a href="authentication/layouts/corporate/sign-in.html" class="menu-link px-5">Sign Out</a>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::User account menu-->
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">{{$t('import_aliment')}}</a>
          <!--end::Item-->
        </div>
        <!--end::Action-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Container-->
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import auth from '@/api/auth'; 
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'; 
import {  mapGetters } from 'vuex';

export default{ 
name: "HeaderApp",
props:{
  page: {
    default:"Dashboard",
    type: String
  }
},
setup() {
      const i18n = useI18n(); 
      const router = useRouter();
      const currentLanguage = ref(localStorage.getItem('language') || 'en');
      const currentFlag = ref(require(`@/assets/media/flags/${currentLanguage.value === 'en' ? 'united-states.svg' : 'france.svg'}`));
      const changeLanguage = (lang) => {
        const flagImage = lang === 'en' ? 'english.png' : 'french.jpg';
        i18n.locale.value = lang; 
        currentFlag.value = require(`@/assets/${flagImage}`);
        localStorage.setItem('language', lang);
      }
      return {  router,changeLanguage,currentFlag, currentLanguage};

    },
data(){
    return {
        showDropdown: false,
    }
},
mounted(){
},

methods: {
  toggleDropdown(event) {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
    let dropdownMenu = document.querySelector('.menuLinks');
    if(dropdownMenu) {
      dropdownMenu.classList.toggle('open', this.showDropdown);
    }
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
  logout (){
    const router = useRouter();
    auth.logout(); // Call the logout function from auth.js
    router.push('/login'); // Redirect to login page after logout
  }
},
computed: {
  ...mapGetters(['currentLanguage'])
},
watch:{
}
}
</script>
<style>
.navbar {
display: flex;
align-items: center;
padding: 0 1rem;
}
.menuLinks li router-link i {
margin-right: 8px; 
color: white; 
}
.hamburger-menu {
cursor: pointer;
font-size: 2rem;
user-select: none;
color: white;
}
.hamburger-menu i {
color: white; 
}
.hamburger-menu:hover {
color: #ddd; 
}
.linkMenu{
text-decoration: none;
color: white;
font-size: 1.2rem;
padding: 10px 20px; 
box-sizing: border-box; 
transition: all 0.3s ease; 
}
.linkMenu:hover{
color: white;


}
.menuLinks {
display: none;
flex-direction: column;
align-items: flex-start;
position: absolute;
background-color: #17a2b8;
top: 60px;
left: 0;
width: 250px; 
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
border-radius: 4px;
padding: 0.4rem;
z-index: 1001;
transition: all 0.3s ease; 
}
.menuLinks.open {
display: flex; 
}
.menuLinks li {
background-color: #2C3E50;
padding: 0.75rem 1rem; 
width: 100%;
text-align: center;
text-decoration: none;
color: white;
display: block;
cursor: pointer;
transition: color 0.2s; 
border-bottom: 1px solid rgba(255,255,255,0.1);
transition: transform 0.3s ease, background-color 0.3s ease; 
}

.menuLinks li:last-child {
border-bottom: none;
}

.menuLinks li:hover {
transform: scale(1.05);
border-radius: 4px;
border: 2px  solid #17a2b8;
}

.sidebar {
transform: translateX(-100%);
transition: transform 0.3s ease;
}
.logo-container {
margin-right: auto;
width: 49%;
display: flex;
justify-content: end;
align-items: center;
position: relative;
}
.imgLogo{
  height: 50px;
  margin-right: 15px;
}  

.sidebar.open {
transform: translateX(0);
}
header {
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: #2C3E50;
  position: fixed; 
  width: 100%;
  z-index: 1000;
  padding: 6px 4%; 
}
.logout-button {
background-color: #17a2b8;
color: white;
border: none; 
border-radius: 20px; 
padding: 10px 20px;
font-size: 1rem;
font-weight: bold; 
text-transform: uppercase;
cursor: pointer;
transition: background-color 0.2s, box-shadow 0.2s; 
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
margin-left: auto;
}

.logout-button:hover {
background-color: #138496; 
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}


</style>
