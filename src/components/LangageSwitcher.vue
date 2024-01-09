<template>
    <div class="d-flex justify-content-around background-white">
      <div class="dropdown">
        <a class="dropdown-toggle" href="#" id="Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img :src="currentFlag" alt="Language" class="flag-icon m-0">
        </a>

        <ul class="dropdown-menu" aria-labelledby="Dropdown">
          <li>
            <a class="dropdown-item" href="#" @click="changeLanguage('en')">
              <img src="@/assets/english.png" alt="UK" class="flag-icon">
              <span class="language-text">English</span>
            </a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#" @click="changeLanguage('fr')">
              <img src="@/assets/french.jpg" alt="FR" class="flag-icon">
              <span class="language-text">French</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n'; 
import { mapActions, mapGetters } from 'vuex';

export default {
  setup() {
    const i18n = useI18n(); 
    const currentLanguage = ref(localStorage.getItem('language') || 'en');
    const currentFlag = ref(require(`@/assets/${currentLanguage.value === 'en' ? 'english.png' : 'french.jpg'}`));

    watchEffect(() => {
      const flagImage = currentLanguage.value === 'en' ? 'english.png' : 'french.jpg';
      currentFlag.value = require(`@/assets/${flagImage}`);
    });

    // Fonction pour changer la langue
    function changeLanguage(lang) {
      const flagImage = lang === 'en' ? 'english.png' : 'french.jpg';
      i18n.locale.value = lang; 
      currentFlag.value = require(`@/assets/${flagImage}`);
      localStorage.setItem('language', lang);
    }

    return {
      currentLanguage,
      currentFlag,
      changeLanguage,
    };
  },
  computed: {
    ...mapGetters(['currentLanguage'])
  },
  methods: {
    ...mapActions(['setLanguage'])
  }
};
</script>
<style>
.language-switcher {
  float: left; 
}

.language-switcher select {
  background: url('@/assets/languageswitcher.png') no-repeat right; 
  border: none; 
  padding: 5px 10px;
  margin-right: 20px; 
  cursor: pointer;
  background: transparent;
  appearance: none;
}

.language-text {
  display: inline;
  vertical-align: middle;
}
.language-switcher select:focus {
  outline: none; 
}
.lang-switcher img {
  border-radius: 50%;
  border: 2px solid white; 
  transition: transform 0.3s ease;
}
.lang-switcher img:hover {
  transform: scale(1.1); 
}
.flag-icon {
  width: 40px; 
  height: 30px;
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle; 
}

.card-footer {
  clear: both; 
}
.dropdown {
  position: relative; 
  z-index: 1000; 
}

.dropdown-toggle {
  background: transparent;
  border: none;
  padding: 0;
}

.dropdown-menu {
  position: absolute;
  left: 0; 
  top: 100%;
}

.dropdown-item {
  display: flex;
  align-items: center;
}

.dropdown-item .flag {
  width: 20px;
  margin-right: 10px;
}

.d-flex.justify-content-between {
  align-items: center;
}


.dropdown-item i.flag + span {
  display: none;
}

</style>
  