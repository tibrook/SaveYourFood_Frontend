<template>
    <div class="card card-flush mb-4 me-4" :class="selectedIngredient === item ? 'border-primary border-4px' : ''" >
        <div class="card-body text-center  cursor-pointer">
            <img :src="item.image" class="rounded-3 mb-2 mt-2" alt="" style="width: 100px; height: 100px;" />
            <div class="mb-2">
                <div class="text-center">
                    <span class="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6">{{ item.name }}</span>
                    <span class="text-gray-500 fw-semibold d-block fs-7">{{$t('Inventory_Quantity')}} : {{ item.quantity }}</span>
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
        },
        selectedIngredient:{
            type: Object, 
            default: null        
        }
    },
    methods: {
        onItemClick() {
            this.$emit('item-clicked', this.recipe);
        }
    }
}
</script>
