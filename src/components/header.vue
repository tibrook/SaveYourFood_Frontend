<template>
  <header class = "header d-flex justify-content-between">
      <!-- Navigation Hamburger Menu -->
      <div class="navbar">
          <div class="hamburger-menu" @click="toggleDropdown($event)">
            <i class="fa fa-bars"></i>
          </div>
      </div>
      <ul ref="menu" v-show="showDropdown" class="menuLinks">
        <li v-for="menu in menus" :key="menu.title">
          <i :class="menu.icon"></i>
          <router-link class="linkMenu" :to="menu.path">{{ menu.title }}</router-link>
        </li>
      </ul>
      <div class="logo-container">
          <img :src="imageLogoUrl" alt="FriSave Logo" class="imgLogo">
          <h1 class="fw-bold title text-white">FriSave</h1>
      </div>
      <div class="logout-container">
          <button @click="logout" class="logout-button">{{$t('logout')}}</button>
      </div>
  </header>



</template>
<script>
import imageLogo from '@/assets/logo1Trspr.png';
import { useRouter } from 'vue-router';
import auth from '@/api/auth'; 

export default{ 
name: "HeaderApp",
data(){
    return {
        isSidebarOpen : false,
        imageLogoUrl : imageLogo,
        showDropdown: false,
          menus: [
            {
              page: 'inventory',
              title: this.$t('inventory'),
              icon: 'fa-solid fa-boxes',
              path: '/inventory',

            },
            {
              page: 'recipes',
              title: this.$t('recipes'),
              path: '/recipes',
              icon: 'fa-solid fa-utensils',

            },
            {
              page: 'weeklyMeals',
              path: '/weeklyMeals',
              title: this.$t('weekly_meals'),
              icon: 'fa-solid fa-calendar-week',

            
            },
            {
              page: 'shoppingList',
              path: '/shoppingList',
              title: this.$t('shopping_list'),
              icon: 'fa-solid fa-shopping-cart',

            
            },
            {
              page: 'userSettings',
              icon: 'fa-solid fa-user-cog',
              path: '/userSettings',
              title: this.$t('user_settings'),
            }
        ],
    }
},
mounted() {
  window.addEventListener('click', this.handleClickOutside);
},
beforeUnmount() {
  window.removeEventListener('click', this.handleClickOutside);
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
