<template>
    <div class="card card-flush mb-4" :class="selectedIngredient === item ? 'border-primary border-4px' : ''" >
        <div class="card-body text-center  cursor-pointer">
            <img :src="item.image" class="rounded-3 mb-2 mt-2" alt="" style="width: 100px; height: 100px;" />
            <div class="mb-2">
                <div class="text-center">
                    <span class="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6">{{ item.name }}</span>
                    <span class="text-gray-500 fw-semibold d-block fs-7">Quantité : {{ item.quantity }}</span>
                    <span class="text-gray-500 fw-semibold d-block fs-7">{{ item.location }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        item:{
            type: Object, 
            required: true        
        }
    },
    mounted(){
        console.log(this.item)
    },
    methods: {
        onItemClick() {
            this.$emit('item-clicked', this.recipe);
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