<template>
    <div class="card card-xl-stretch mb-xl-8 col-4 me-8" >
        <div class="card-header border-0 py-5">
            <h3 class="card-title align-items-start flex-column">
                <span class="card-label fw-bold fs-3 mb-1">{{$t('Recipes_List')}}</span>

                <span class="text-muted fw-semibold fs-7">{{$t('Recipes_Next')}}</span>
            </h3>
        </div>
        <div class="card-body d-flex flex-column">
            <div  v-for="(recipe, index) in recipes" :key="index">
                <router-link :to="`/recipe/${recipe.id}`" class="router-link ">
                    <div class="d-flex flex-stack mb-5" role="button">
                        <div class="d-flex align-items-center me-2 full-width">
                            <div class="symbol symbol-50px me-3 full-width">
                                <div class="symbol-label bg-light full-width">
                                    <img :src="recipe.image" alt="" class="full-height-img">
                                </div>
                            </div>
                            <div class="full-width">
                                    <span class="text-gray-800 text-hover-primary fw-bold fs-6">{{ recipe.name }}</span>
                                <div class="fs-7 text-muted fw-semibold mt-1">{{ recipe.description }}</div>
                            </div>
                        </div>
                        <div class="badge badge-light fw-semibold py-4 px-3">{{ recipe.plannedDate }}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        widgetHeight:{
            type: String, 
            default: null
        },
        recipes:{
            type: Array,
            required: true
        }
    },
    data(){
        return{
            
        }
    },
}
</script>
<style>
.router-link {
  all:unset
}
</style>