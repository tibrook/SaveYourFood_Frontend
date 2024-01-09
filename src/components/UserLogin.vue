<template>
	<div id="kt_app_signin" class="auth-bg bgi-size-cover bgi-attachment-fixed bgi-position-center bgi-no-repeat">
		<div class="d-flex flex-column flex-root">
			<div class="d-flex flex-column flex-column-fluid flex-lg-row">
        <div class="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
					<!--begin::Aside-->
					<div class="d-flex flex-center flex-lg-start flex-column">
						<!--begin::Logo-->
						<a href="index.html" class="mb-7">
							<img alt="Logo" src="@/assets/logo1Trspr.png" />
						</a>
						<!--end::Logo-->
						<!--begin::Title-->
						<h2 class="text-white fw-normal m-0">Manage your kitchen from your phone</h2>
						<!--end::Title-->
					</div>
					<!--begin::Aside-->
				</div>
				<div class="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
            <div class="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
              <div class="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                <form class="form w-100" @submit.prevent="login" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="index.html" action="#">
                  <div class="text-center mb-11">
                    <h1 class="text-gray-900 fw-bolder mb-3">Sign In</h1>
                    <div class="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
                  </div>
                  <div class="row g-3 mb-9">
                    <!--begin::Col-->
                    <div class="col-md-6">
                      <!--begin::Google link=-->
                      <a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                      <img alt="Logo" src="@/assets/media/svg/brand-logos/google-icon.svg" class="h-15px me-3" />Sign in with Google</a>
                      <!--end::Google link=-->
                    </div>
                    <!--end::Col-->
                    <!--begin::Col-->
                    <div class="col-md-6">
                      <!--begin::Google link=-->
                      <a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                      <img alt="Logo" src="@/assets/media/svg/brand-logos/apple-black.svg" class="theme-light-show h-15px me-3" />
                      <img alt="Logo" src="@/assets/media/svg/brand-logos/apple-black-dark.svg" class="theme-dark-show h-15px me-3" />Sign in with Apple</a>
                      <!--end::Google link=-->
                    </div>
                    <!--end::Col-->
                  </div>
                  <div class="separator separator-content my-14">
                    <span class="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
                  </div>
                  <div class="fv-row mb-8">
                    <!--begin::Email-->
                    <input type="text" :placeholder="$t('enter_email_address')" name="email" v-model="form.email" autocomplete="off" class="form-control bg-transparent" :class="{ 'is-invalid': v$.form.email.$error, 'is-valid': v$.form.email.$dirty && !v$.form.email.$error }"/>
                    <div v-if="v$.form.email.$error" class="invalid-feedback" >
                      {{$t('field_required')}}
                    </div>
                    <!--end::Email-->
                  </div>
                  <div class="fv-row mb-3">
                    <!--begin::Password-->
                    <input type="password" name="password" autocomplete="off" class="form-control bg-transparent" :placeholder="$t('enter_password')"
                            v-model="form.password" :class="{ 'is-invalid': v$.form.password.$error,'is-valid': v$.form.password.$dirty && !v$.form.password.$error}" />
                    <!--end::Password-->
                    <div v-if="v$.form.password.required.$invalid" class="invalid-feedback">
                        {{$t('field_required')}}
                      </div>
                      <div v-else-if="v$.form.password.validatePassword.$invalid" class="invalid-feedback">
                        {{$t('password_strength')}}
                      </div>
                      <div v-else-if="loginError" class="error-message">
                        {{ loginError }}
                      </div>
                  </div>

                  <div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div></div>
                    <!--begin::Link-->
                    <a href="authentication/layouts/creative/reset-password.html" class="link-primary">Forgot Password ?</a>
                    <!--end::Link-->
                  </div>
                  <div class="d-grid mb-10">
                    <button type="submit" id="kt_sign_in_submit" class="btn btn-primary">
                      <!--begin::Indicator label-->
                      <span class="indicator-label">{{$t('sign_into_account')}}</span>
                      <!--end::Indicator label-->
                      <!--begin::Indicator progress-->
                      <span class="indicator-progress">Please wait... 
                      <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                      <!--end::Indicator progress-->
                    </button>
                  </div>
                  <div class="text-gray-500 text-center fw-semibold fs-6">Not a Member yet? 
                    <a href="authentication/layouts/creative/sign-up.html" class="link-primary">Sign up</a>
                  </div>
                </form>
              </div>
              <div class="d-flex flex-stack px-lg-10">
                <div class="me-0">
                  <button class="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, 0px">
                    <img data-kt-element="current-lang-flag" class="w-20px h-20px rounded me-3" :src="currentFlag" alt="" />
                    <span data-kt-element="current-lang-name" class="me-1" >{{currentLanguage}}</span>
                    <i class="ki-duotone ki-down fs-5 text-muted rotate-180 m-0"></i>
                  </button>
                  <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7" data-kt-menu="true" id="kt_auth_lang_menu">
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link d-flex px-5" data-kt-lang="English" @click="changeLanguage('en')">
                        <span class="symbol symbol-20px me-4">
                          <img data-kt-element="lang-flag" class="rounded-1" src="@/assets/media/flags/united-states.svg" alt="" />
                        </span>
                        <span data-kt-element="lang-name" >English</span>
                      </a>
                    </div>
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link d-flex px-5" data-kt-lang="French" @click="changeLanguage('fr')">
                        <span class="symbol symbol-20px me-4">
                          <img data-kt-element="lang-flag" class="rounded-1" src="@/assets/media/flags/france.svg" alt="" />
                        </span>
                        <span data-kt-element="lang-name" >French</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="d-flex fw-semibold text-primary fs-base gap-5">
                  <a href="pages/team.html" target="_blank">Terms</a>
                  <a href="pages/pricing/column.html" target="_blank">Plans</a>
                  <a href="pages/contact.html" target="_blank">Contact Us</a>
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
  import leftImage from '@/assets/loginBackground.png';
  import imageLogo from "@/assets/logo1.png"
  import { useVuelidate } from '@vuelidate/core'; 
  import { required ,email  } from '@vuelidate/validators'
  import { validatePassword } from '@/utils/validations';
  import { useRouter } from 'vue-router';
  import  auth  from '@/api/auth';
  import { useI18n } from 'vue-i18n'; 
  import {  mapGetters } from 'vuex';

  export default {
    name: 'UserLogin',
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
        currentLanguage.value = lang === 'en' ? 'English' : 'Français'
        localStorage.setItem('language', lang);
      }
      return { v$ , router,changeLanguage,currentFlag, currentLanguage};

    },
    methods: {
      async login() {
        this.loginError = '';
        this.v$.$validate();
        if (!this.v$.$error) {
          try {
              const response = await auth.login(this.form);
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
      triggerAnimations() {
        this.animateCarrot = true
        this.animateIngredient = true
      }
    },
    mounted() {
      this.triggerAnimations();
      this.v$.$touch()
    },

  }
  </script>
  <style scoped>
  #kt_app_signin{
    background-image: url('../assets/auth/bg4.jpg')
  }    
  </style>
  
  
  