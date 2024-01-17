<template>
      <div class="col-md-6 col-xl-4" >
        
        <a href="#" class="card border-hover-primary" @click="onRecipeClick" :class="selectedRecipe ? 'border-primary': undefined" >
            <div class="add-icon " @click.stop="addToFavorites(recipe)" @mouseover.stop>
                    <i v-if="myRecipe" class="fa fa-plus-circle fs-2 "></i>
                    <i v-else  class="fa-solid fa-circle-minus fs-2 "></i>

                </div>
            <div class="card-header border-0 pt-9 m-auto">
                
                <div class="card-title m-0 ">
                    <div class="symbol symbol-150px  bg-light full-width">
                        <div class="symbol-label bg-light">
                            <img :src="recipe.image" alt="image" class="full-height-img m-auto" />
                        </div>

                    </div>
                </div>
                
                <!-- <div class="card-toolbar">
                    <span class="badge badge-light-primary fw-bold me-auto px-4 py-3">{{recipe.category}}</span>
                </div> -->
            </div>
            <div class="card-body p-2">
                <div class="fs-3 fw-bold text-gray-900 text-center mb-2">{{recipe.name}}</div>
                <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">{{recipe.description}}</p>
                <div class="d-flex flex-wrap mb-5">
                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                        <div class="fs-6 text-gray-800 fw-bold">{{recipe.preparationTime}}</div>
                        <div class="fw-semibold text-gray-500">{{$t('Label_PreparationTime')}}</div>
                    </div>
                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                        <div class="fs-6 text-gray-800 fw-bold">{{recipe.cookingTime}}</div>
                        <div class="fw-semibold text-gray-500">{{$t('Label_CookingTime')}}</div>
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
        },
        myRecipe:{
            type: Boolean, 
            required:true
        }
    },
    data(){
        return{
            selectedRecipe: false,

        }
    },
    methods: {
        onRecipeClick() {
            this.$emit('recipe-clicked', this.recipe);
            this.selectedRecipe = this.recipe
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
.add-icon {
    color: green; 
    position: absolute;
    right: 16px;
    top:8px;
    transition: color 0.3s ease;
    z-index: 10;
    /* autres styles de l'icône */
}
.fa-plus-circle{
    color: green; 
}
.fa-circle-minus{
    color: red; 
}

</style>