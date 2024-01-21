<template>
   <img src="@/assets/basilic.png" :class="{ 'basil-leaf': animateIngredient }" alt="Floating Ingredient">
  <img src="@/assets/carrot.png" :class="{ 'carrot': animateIngredient }" alt="Carrot">
  <img src="@/assets/flour.png" :class="{ 'flour': animateIngredient }" alt="flour">
  <img src="@/assets/rouleau.png" :class="{ 'rouleau': animateIngredient }" alt="flour">
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border-radius: 1rem;">
              <div class="row g-0">
                <div class="col-md-7 col-lg-7 d-none d-md-block">
                  <img :src="leftImageUrl" alt="Sample image" class="img-fluid" style="border-radius: 1rem 0 0 1rem;">
                </div>
                <div class="col-md-5 col-lg-5 d-flex align-items-center h-100">
                  <div class="card-body p-s-4 pe-4 pb-0 text-black">
                    <form @submit.prevent="handleRegister" class="w-100">
                      <div class="d-flex align-items-center pb-1 pe- ps-4">
                        <img :src="imageLogoUrl" alt="Sample image" class="imgLogo me-2" style="border-radius: 1rem 0 0 1rem;">
                        <h1 class="fw-bold mb-2 titlePage">SaveYourFood</h1>
                      </div>
                      <h5 class="fw-normal pb-3" style="letter-spacing: 1px;">{{$t('Auth_RegisterNewAccount')}}</h5>
                      <div class="form-outline">
                        <input type="text"
                              class="form-control form-control-md"
                              :placeholder="$t('Auth_EnterLastName')" 
                              :class="{ 'is-invalid': v$.form.lastName.$error, 'is-valid': v$.form.lastName.$dirty && !v$.form.lastName.$error }"
                              v-model="form.lastName">
                          <div v-if="v$.form.lastName.$error" class="invalid-feedback">
                            <div v-if="v$.form.lastName.required.$invalid">{{$t('Form_FieldRequired')}}</div>
                            <div v-else-if="v$.form.lastName.noSpecialChars.$invalid">{{$t('Form_NoSpecialCharacters')}}</div>
                          </div>
                      </div>
                     
                      <div class="form-outline ">
                        <input type="text"
                              class="form-control form-control-md"
                              :placeholder="$t('Auth_EnterFirstName')" 
                              :class="{ 'is-invalid': v$.form.firstName.$error, 'is-valid': v$.form.firstName.$dirty && !v$.form.firstName.$error }"
                              v-model="form.firstName">
                          <div v-if="v$.form.firstName.$error" class="invalid-feedback">
                            <div v-if="v$.form.firstName.required.$invalid">{{$t('Form_FieldRequired')}}</div>
                            <div v-else-if="v$.form.firstName.noSpecialChars.$invalid">{{$t('Form_NoSpecialCharacters')}}</div>
                          </div>
                      </div>
                     
                      <div class="form-outline">
                        <input type="text"
                              class="form-control form-control-md"
                              :class="{ 'is-invalid': v$.form.username.$error, 'is-valid': v$.form.username.$dirty && !v$.form.username.$error }"
                              :placeholder="$t('Auth_EnterUsername')" 
                              v-model="form.username">
                          <div v-if="v$.form.username.$error" class="invalid-feedback">
                            <div v-if="v$.form.username.required.$invalid">{{$t('Form_FieldRequired')}}</div>
                          </div>
                      </div>
                   
                      <div class="form-outline ">
                        <input type="email" 
                                class="form-control form-control-md"
                                :placeholder="$t('Auth_EnterEmailAddress')" 
                                :class="{ 'is-invalid': v$.form.email.$error || emailError, 'is-valid': v$.form.email.$dirty && !v$.form.email.$error }"
                                id="email" 
                                v-model="form.email"
                        >
                        <div v-if="v$.form.email.$error" class="invalid-feedback">
                          <div v-if="v$.form.email.required.$invalid">{{$t('Form_FieldRequired')}}</div>
                          <div v-else-if="v$.form.email.email.$invalid">{{$t('Auth_EmailFormatPrompt')}}</div>
                        </div>
                        <div>
                          {{ emailError }}
                        </div>
                      </div>
                      <div class="form-outline -2 ">
                        <input 
                          type="password" 
                          class="form-control form-control-md mb-2" 
                          :placeholder="$t('Auth_EnterPassword')"
                          v-model="form.password"
                          :class="{ 'is-invalid': v$.form.password.$error, 'is-valid': v$.form.password.$dirty && !v$.form.password.$error }"
                        >
                        <div class="progress mt-2">
                          <div 
                            class="progress-bar" 
                            role="progressbar" 
                            :style="{ width: passwordStrength + '%' }" 
                            :class="getProgressBarClass(passwordStrength)"
                            aria-valuemin="0" 
                            aria-valuemax="100">
                          </div>
                        </div>
                        <div class="password-criteria invalid-feedback">
                          <span v-if="missingPasswordCriteria">{{ missingPasswordCriteria }}</span>
                        </div>
                      </div>
  
                      <div v-if="registerError" class="error-message">
                        {{ registerError }}
                      </div>
                      
                      <div class="pt-1 d-flex justify-content-between align-items-center mb-3">
                          <a class="small text-muted" href="/login">{{$t('Auth_AlreadyHaveAccount')}}</a>
                        <button :disabled="v$.$invalid" type="submit" class="btn btn-primary btn-lg"
                                style="padding-left: 2.5rem; padding-right: 2.5rem;">{{$t(Auth_RegisterButton)}}</button>
                       </div>
                       <LangageSwitcher />

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { useVuelidate } from '@vuelidate/core'; 
  import imageLogo from "@/assets/chiefHat.svg"
  import leftImage from '@/assets/loginBackground.png';
  import LangageSwitcher from '@/components/utils/LangageSwitcher.vue';
  import { required ,email  } from '@vuelidate/validators'; 
  import { useRouter } from 'vue-router';
  import {  mapActions } from 'vuex';
  import { noSpecialChars, validatePassword } from '@/utils/validations';
    export default {
      name: 'RegisterUser',
      components:{
        LangageSwitcher
      },
      data() {
        return {
          imageLogoUrl : imageLogo,
          leftImageUrl: leftImage,
          animateIngredient: false,
          emailError: '',
          passwordCriteria: {
            minLength: false,
            specialChar: false,
            upperCase: false,
            lowerCase: false,
            number: false
          },
          form: {
            email: '',
            password: '',
            firstName: '', 
            lastName: '',   
            username: '',   
          },
          registerError: '', 
        };
      },
      watch: {
        'form.password': function(newVal) {
          this.passwordCriteria.minLength = newVal.length >= 8;
          this.passwordCriteria.specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newVal);
          this.passwordCriteria.upperCase = /[A-Z]/.test(newVal);
          this.passwordCriteria.lowerCase = /[a-z]/.test(newVal);
          this.passwordCriteria.number = /\d/.test(newVal);
        }
      },
      validations() {
        return {
          form: {
            email: { required, email },
            password: { required, validatePassword  },
            firstName: { required, noSpecialChars  },  
            lastName: { required, noSpecialChars },   
            username: { required },   
          }
        }
      },
      setup() {
        const router = useRouter();
        const v$ = useVuelidate();
        return { v$ , router};
      },
      computed: {
        missingPasswordCriteria() {
          const criteria = [];
          if (!this.passwordCriteria.minLength) criteria.push(this.$t("password_criteria.Password_MinLength"));
          if (!this.passwordCriteria.specialChar) criteria.push(this.$t("password_criteria.Password_SpecialChar"));
          if (!this.passwordCriteria.upperCase) criteria.push(this.$t("password_criteria.uppercase"));
          if (!this.passwordCriteria.lowerCase) criteria.push(this.$t("password_criteria.lowercase"));
          if (!this.passwordCriteria.number) criteria.push(this.$t("password_criteria.number"));

          return criteria.length > 0 ? this.$t("Form_MissingCriteria") + criteria.join(", ") : "";
        },
        passwordStrength() {
          let strength = 0;
          if (this.form.password.length >= 8) strength += 20;
          if (/[!@#$%^&*(),.?":{}|<>]/.test(this.form.password)) strength += 20;
          if (/[A-Z]/.test(this.form.password)) strength += 20;
          if (/[a-z]/.test(this.form.password)) strength += 20;
          if (/\d/.test(this.form.password)) strength += 20;
          return strength; // return number between 0 and 100
        }
      },
      methods: {
        ...mapActions(['register']),
        getProgressBarClass(strength) {
          if (strength < 40) return 'bg-danger';
          if (strength < 60) return 'bg-warning';
          if (strength < 80) return 'bg-info';
          return 'bg-success';
        },
        async handleRegister() {
          try {
            const userData = {
              email: this.form.email,
              password: this.form.password,
              firstName: this.form.firstName,
              lastName: this.form.lastName,
              username: this.form.username
            };
           let response = await this.register(userData);
           if (response) {
              if (response.statusCode === 409) {
                this.emailError = this.$t('Auth_EmailInUse');
              }else if (response.status === 201) {
                this.$router.push('/home');
            }
            }          
          } catch (error) {
            console.error("Registration failed:", error);
          }
        },
        triggerAnimations() {
          this.animateIngredient = true;
        }
      },
      mounted() {
        this.v$.$touch();
        this.triggerAnimations();
      }
    }
  </script>
  

  <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,100&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:ital,wght@0,300;0,400;0,700;1,100&display=swap');
    @keyframes fall-and-stop {
      0% {
        transform: translateY(-100vh);
        opacity: 0;
      }
      75% {
        opacity: 1;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .progress {
       height: 10px;
    }
    
    .error-message {
      color: #dc3545; 
    }
    .h625{
      height: 620px;
    }
    .basil-leaf {
      position: absolute;
      top: 0px; /* Start off-screen */
      left: 0%; /* Adjust as needed */
      animation: fall-and-stop 1.2s ease forwards;
      z-index: 10;
    }

    .carrot {
      height: 300px;
      position: absolute;
      top: 50%; /* Start off-screen */
      left: 0%; /* Adjust as needed */
      animation: fall-and-stop 1.5s ease forwards;
      z-index: 9;
    }
    .rouleau{
      position: absolute;
      top: 40%; /* Start off-screen */
      right: 0%; /* Adjust as needed */
      animation: fall-and-stop 1.2s ease forwards;
      z-index: 11;
    }
    .flour {
      height: 400px;
      position: absolute;
      top: 0px; /* Start off-screen */
      right: 2%; /* Adjust as needed */
      animation: fall-and-stop 1.8s ease forwards;
      z-index: 8;
    }
    .vh-100 {
        background: linear-gradient(to right, #0f4c81, var(--navy-blue));
        color: var(--text-gray);
    }
    body, button, input, textarea {
      font-family: 'Roboto', sans-serif;
    }
    .form-control-lg {
        background-color: var(--form-background);
    }
    .form-control {
      opacity: 1;
      border: 1px solid #ced4da;
    }
    .footer-links a {
      text-decoration: none; 
      transition: color 0.3s ease;
    }
    .footer-links a:hover {
      color: #c0392b; 
    }

    .title {
      font-family: 'Merriweather', serif;
      font-weight: 700; 
    }
    
    .form-control, .btn {
      font-family: 'Open Sans', sans-serif;
    }
    a.link-danger {
      color: var(--accent-gold);
    }
    .button-submit {
      background-color: var(--button-green);
      color: white;
      border: 2px solid var(--accent-gold);
    }
    #forgot-password, #terms-of-use, #privacy-policy {
      color: var(--text-gray);
      transition: color 0.3s ease;
    }

    #forgot-password:hover, #terms-of-use:hover, #privacy-policy:hover {
      color: var(--accent-gold);
    }
    .btn-login {
      margin-top:12px;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .btn-login:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    .form-control:focus, .btn:focus {
      border-color: #c0392b;
     box-shadow: 0 0 0 0.2rem rgba(192, 57, 43, 0.25);
    }
    form {
      display: flex;
      flex-direction: column; /* Stack the form elements */
      justify-content: flex-start; /* Align to the top */
      flex-grow: 1; /* Grow to take available space */
      overflow: hidden; /* Prevents it from pushing the footer down */
    }
    .img-fluid {
      width: 100%; 
      height: auto;
      object-fit: cover; 
      border-radius: 1rem 0 0 1rem;
    }
    .card {
      min-height: 600px; 
      max-height: 630px; 
      display: flex;
      flex-direction: column;
    }
    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between; 
      height: 100%; 
      position: relative;
    }
    .form-outline {
      min-height: 75px;
    }
    .card-links {
      text-align: center;
      margin-top: auto;
      
    }
    .imgLogo{
      height: 50px;
      width: 50px
    } 
    .button-submit:hover {
      background-color: var(--accent-gold); 
      color: var(--navy-blue);
    }
    .btn-primary {
      background-color: #c0392b;
      border-color: #c0392b;
    }

    .btn-primary:hover {
      background-color: #e74c3c; 
      border-color: #e74c3c;
    }
    @media (max-width: 768px) {
      .login-card {
        width: 90%;
        margin: auto;
      }
    }
 </style>
  