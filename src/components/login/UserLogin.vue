<template>
	<div id="kt_app_signin" class="auth-bg bgi-size-cover bgi-attachment-fixed bgi-position-center bgi-no-repeat">
		<div class="d-flex flex-column flex-root">
			<div class="d-flex flex-column flex-column-fluid flex-lg-row">
        <div class="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
					<div class="d-flex flex-center flex-lg-start flex-column align-items-center">
            <a href="#" class="mb-7">
              <chiefHatVue :className="'h-450px'" color="white"/>
            </a>
						<h2 class="text-white fw-normal m-0">{{$t('Header_ManageKitchen')}}</h2>
					</div>
				</div>
				<div class="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
            <div class="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
              <div class="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                <form class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" @submit.prevent="connect" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="index.html" action="#">
                  <div class="text-center mb-11">
                    <h1 class="text-gray-900 fw-bolder mb-3">{{$t('SignIn_Title')}}</h1>
                    <div class="text-gray-500 fw-semibold fs-6">{{$t('SignIn_Subtitle')}}</div>
                  </div>
                  <div class="row g-3 mb-9">
                    <div class="col-md-6">
                      <a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                      <img alt="Logo" src="@/assets/media/svg/brand-logos/google-icon.svg" class="h-15px me-3" />{{$t('SignIn_WithGoogle')}}</a>
                    </div>
                    <div class="col-md-6">
                      <a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                      <img alt="Logo" src="@/assets/media/svg/brand-logos/apple-black.svg" class="theme-light-show h-15px me-3" />
                      <img alt="Logo" src="@/assets/media/svg/brand-logos/apple-black-dark.svg" class="theme-dark-show h-15px me-3" />{{$t('SignIn_WithApple')}}</a>
                    </div>
                  </div>
                  <div class="separator separator-content my-14">
                    <span class="w-125px text-gray-500 fw-semibold fs-7">{{$t('SignIn_OrWithEmail')}}</span>
                  </div>
                  <div class="fv-row mb-8 fv-plugins-icon-container">
                    <input type="text" :placeholder="$t('Auth_EnterEmailAddress')" name="email" v-model="form.email" autocomplete="off" class="form-control bg-transparent" :class="{ 'is-invalid': v$.form.email.$error, 'is-valid': v$.form.email.$dirty && !v$.form.email.$error }"/>
                    <div v-if="v$.form.email.$error" class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" >
                      {{$t('Form_FieldRequired')}}
                    </div>
                  </div>
                  <div class="fv-row mb-3 fv-plugins-icon-container">
                    <input type="password" name="password" autocomplete="off" class="form-control bg-transparent" :placeholder="$t('Auth_EnterPassword')"
                            v-model="form.password" :class="{ 'is-invalid': v$.form.password.$error,'is-valid': v$.form.password.$dirty && !v$.form.password.$error}" />
                    <div v-if="v$.form.password.required.$invalid" class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                        {{$t('Form_FieldRequired')}}
                      </div>
                      <div v-else-if="v$.form.password.validatePassword.$invalid" class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                        {{$t('Password_Strength')}}
                      </div>
                      <div v-else-if="loginError" class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                        {{ loginError }}
                      </div>
                  </div>
                  <div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div></div>
                    <a href="authentication/layouts/creative/reset-password.html" class="link-primary">{{$t('Form_ForgotPassword')}}</a>
                  </div>
                  <div class="d-grid mb-10">
                    <button type="submit" id="kt_sign_in_submit" class="btn btn-primary">
                      <span class="indicator-label">{{$t('Auth_SignIntoAccount')}}</span>
                      <span class="indicator-progress">{{$t('SignIn_Wait')}} 
                        <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                  </div>
                  <div class="text-gray-500 text-center fw-semibold fs-6">{{$t('Footer_NotMember')}}
                    <a href="authentication/layouts/creative/sign-up.html" class="link-primary">{{$t('Footer_SignUp')}}</a>
                  </div>
                </form>
              </div>
              <div class="d-flex flex-stack px-lg-10">
                <div class="me-0">
                  <button class="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, 0px">
                    <img data-kt-element="current-lang-flag" class="w-20px h-20px rounded me-3" :src="currentFlag" alt="" />
                    <span data-kt-element="current-lang-name" class="me-1" >{{currentLanguage === 'en' ? 'English' : 'Français'}}</span>
                    <i class="ki-duotone ki-down fs-5 text-muted rotate-180 m-0"></i>
                  </button>
                  <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7" data-kt-menu="true" id="kt_auth_lang_menu">
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link d-flex px-5" data-kt-lang="English" @click="changeLanguage('en')">
                        <span class="symbol symbol-20px me-4">
                          <img data-kt-element="lang-flag" class="rounded-1" src="@/assets/media/flags/united-states.svg" alt="" />
                        </span>
                        <span data-kt-element="lang-name" >{{$t('Language_English')}}</span>
                      </a>
                    </div>
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link d-flex px-5" data-kt-lang="French" @click="changeLanguage('fr')">
                        <span class="symbol symbol-20px me-4">
                          <img data-kt-element="lang-flag" class="rounded-1" src="@/assets/media/flags/france.svg" alt="" />
                        </span>
                        <span data-kt-element="lang-name" >{{$t('Language_French')}}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="d-flex fw-semibold text-primary fs-base gap-5">
                  <a href="pages/team.html" target="_blank">{{$t('Footer_Terms')}}</a>
                  <a href="pages/pricing/column.html" target="_blank">{{$t('Footer_Plans')}}</a>
                  <a href="pages/contact.html" target="_blank">{{$t('Footer_ContactUs')}}</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
  import { ref } from 'vue';
  import chiefHatVue from '@/components/icons/chiefHat.vue'
  import leftImage from '@/assets/loginBackground.png';
  import imageLogo from "@/assets/chiefHat.svg"
  import { useVuelidate } from '@vuelidate/core'; 
  import { required ,email  } from '@vuelidate/validators'
  import { validatePassword } from '@/utils/validations';
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n'; 
  import {  mapGetters,mapActions } from 'vuex';

  export default {
    name: 'UserLogin',
    components:{chiefHatVue},
    data() {
      return {  
        form: {
          email: '',
          password: '',
         
        },
        credentials: {
          email: '',
          password: ''
        },
        loginError: '',
        leftImageUrl: leftImage,
        notification: null,
        imageLogoUrl : imageLogo,
        animateIngredient: false,
        animateCarrot: false,

      };
    },
    validations() {
      return {
        form: {
          email: { required, email },
          password: { required, validatePassword },
        }
      }
    },
    computed: {
      ...mapGetters(['currentLanguage'])
    },
    setup() {
      const i18n = useI18n(); 
      const router = useRouter();
      const v$ = useVuelidate();
      const currentLanguage = ref(localStorage.getItem('language') || 'en');
      const currentFlag = ref(require(`@/assets/media/flags/${currentLanguage.value === 'en' ? 'united-states.svg' : 'france.svg'}`));

      const changeLanguage = (lang) => {
        const flagImage = lang === 'en' ? 'english.png' : 'french.jpg';
        i18n.locale.value = lang; 
        currentFlag.value = require(`@/assets/${flagImage}`);
        currentLanguage.value = lang;
        localStorage.setItem('language', lang);
      }
      return { v$ , router,changeLanguage,currentFlag, currentLanguage};

    },
    methods: {
      ...mapActions(['login']),
      async connect() {
        this.loginError = '';
        this.v$.$validate();
        if (!this.v$.$error) {
          try {
              const response = await this.login(this.form);
              if(response && response.statusCode){
                this.loginError = response.message;
              }
              this.$router.push('/home');
          } catch (error) {
            console.log('Catching error...', error);
            this.loginError = error.message;
          }
        }
      },
    },
    mounted() {
      this.v$.$touch()
    },

  }
  </script>
  <style scoped>
  #kt_app_signin{
    background-image: url('../../assets/auth/bg4.jpg')
  }    
  </style>
  
  
  