<template>
      <div class="col-md-6 col-xl-4" >
        <a href="#" class="card border-hover-primary" @click="onRecipeClick">
            <div class="card-header border-0 pt-9 me-4 ms-4">
                <div class="card-title m-0 ">
                    <div class="symbol symbol-50px  bg-light full-width">
                        <div class="symbol-label bg-light">
                        <img :src="recipe.image" alt="image" class="full-height-img" />
                        </div>
                    </div>
                </div>
                <!-- <div class="card-toolbar">
                    <span class="badge badge-light-primary fw-bold me-auto px-4 py-3">{{recipe.category}}</span>
                </div> -->
            </div>
            <div class="card-body p-9">
                <div class="fs-3 fw-bold text-gray-900">{{recipe.name}}</div>
                <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">{{recipe.description}}</p>
                <div class="d-flex flex-wrap mb-5">
                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                        <div class="fs-6 text-gray-800 fw-bold">{{recipe.preparationTime}}</div>
                        <div class="fw-semibold text-gray-500">Préparation</div>
                    </div>
                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                        <div class="fs-6 text-gray-800 fw-bold">{{recipe.cookingTime}}</div>
                        <div class="fw-semibold text-gray-500">Temps de cuisson</div>
                    </div>
                </div>
            </div>
        </a>
    </div>
  </template>
<script>
export default{
    props:{
        recipe:{
            type: Object, 
            default:null
        }
    },
    methods: {
        onRecipeClick() {
        this.$emit('recipe-clicked', this.recipe);
        }
    }
}
</script>
<style scoped>
.full-width {
  flex-grow: 1!important; 
}
.full-height-img {
  height: 100%; 
  width: 100%;
  object-fit: cover;
  border-radius: inherit; 
}
</style>