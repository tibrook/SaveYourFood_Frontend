<template>
    <div class="card-header cursor-pointer">
        <div class="card-title m-0">
            <h3 class="fw-bold m-0">{{$t('Recipes_MyRecipes')}}</h3>
        </div>
        <a href="account/settings.html" class="btn btn-sm btn-primary align-self-center">{{$t('Recipes_AddNew')}}</a>
    </div>
    <div class="card-body p-9">
        <div class="row g-6 g-xl-9">
            <div class="col-md-6 col-xl-4" v-for="(recipe, key) in myRecipes" :key="key">
                <a href="/recipes" class="card border-hover-primary">
                    <div class="card-header border-0 pt-9">
                        <div class="card-title m-0">
                            <div class="symbol symbol-50px bg-light">
                                <div class="symbol-label">
                                    <img :src="recipe.image" :alt="recipe.name" class="full-height-img" />
                                </div>
                            </div>
                        </div>
                        <div class="card-toolbar">
                            <span class="badge badge-light-primary fw-bold me-auto px-4 py-3">{{ recipe.category }}</span>
                        </div>
                    </div>
                    <div class="card-body p-9">
                        <div class="fs-3 fw-bold text-gray-900">{{ recipe.name }}</div>
                        <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">{{ recipe.description }}</p>
                        <div class="d-flex flex-wrap mb-5">
                            <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                <div class="fs-6 text-gray-800 fw-bold">{{ recipe.datePublication }}</div>
                                <div class="fw-semibold text-gray-500">{{$t('Common_PublicationDate')}}</div>
                            </div>
                            <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                <div class="fs-6 text-gray-800 fw-bold">{{ recipe.preparationTime }}</div>
                                <div class="fw-semibold text-gray-500">{{$t('Common_Preparation')}}</div>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap mb-5">
                            <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                <div class="fs-6 text-gray-800 fw-bold">{{ recipe.portions }}</div>
                                <div class="fw-semibold text-gray-500">{{$t('Common_PortionNumber')}}</div>
                            </div>
                            <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                <div class="fs-6 text-gray-800 fw-bold">{{ recipe.cookingTime }}</div>
                                <div class="fw-semibold text-gray-500">{{$t('Label_CookingTime')}}</div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex';
export default {

    name: 'MyRecipes',
    data() {
        return {
            myRecipes: {}
        }
    },
    mounted(){
        this.getUserRecipes();
    },
    computed: {
        ...mapGetters(['userRecipes']),

    },
    methods:{
        ...mapActions(['fetchUserRecipes']),
        async getUserRecipes(){
            await this.fetchUserRecipes()
            this.myRecipes = this.userRecipes
        }
    }
}
</script>
<style>
.full-width {
    flex-grow: 1!important; 
  }

  .full-height-img {
    height: 100%!important; 
  }
  .symbol-label {
    overflow: hidden; 
    border-radius: inherit; 
  }
  
  .full-height-img {
    height: 100%; 
    width: 100%; 
    object-fit: cover; 
    border-radius: inherit; 
  }
  </style>
