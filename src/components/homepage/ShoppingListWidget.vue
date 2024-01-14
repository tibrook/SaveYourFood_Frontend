<template>
    <div class="card card-xl-stretch mb-5 mb-xl-8 col-4">
        <div class="card-header border-0">
            <h3 class="card-title fw-bold text-gray-900">{{$t('ShoppingList_Main')}}</h3>
        </div>
        <div class="card-body pt-2">
            <div v-for="(item, index) in shoppingList" :key="index" class="d-flex align-items-center mb-8">
                <span class="bullet bullet-vertical h-40px" :class="{'bg-danger': item.urgent, 'bg-warning': !item.urgent && !item.completed, 'bg-success': item.completed}"></span>
                <div class="form-check form-check-custom form-check-solid mx-5">
                    <input class="form-check-input" type="checkbox" v-model="item.completed">
                </div>
                <div class="flex-grow-1">
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">{{ item.name }}</a>
                    <span class="text-muted fw-semibold d-block">{{ item.quantity }}</span>
                </div>
                <span class="badge" :class="getBadgeClass(item.supplier)">{{ item.supplier }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        shoppingList:{
            type: Array, 
            required : true
        }
    },
    methods: {
        getBadgeClass(supplier) {
            switch (supplier) {
                case 'Boucher': return 'badge-light-warning';
                case 'Supermarché': return 'badge-light-primary';
                case 'Producteur': return 'badge-light-success';
                case 'Boulangerie': return 'badge-light-danger';
                default: return 'badge-light-info';
            }
        }
    }
}
</script>
