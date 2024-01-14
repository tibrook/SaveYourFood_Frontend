<template>
    <div class="card mb-5 mb-xl-8 col-3 me-8 ">
        <div class="card-header align-items-center border-0 mt-4">
            <h3 class="card-title align-items-start flex-column">
                <span class="fw-bold mb-2 text-gray-900">{{$t('Inventory_QuickConsume')}}</span>            
                <span class="text-muted fw-semibold fs-7">3 {{ $t('Inventory_ThisWeekConsume') }}</span>
            </h3>
        </div>
        <div class="card-body pt-5">
            <div class="timeline-label">
                <div class="timeline-item" v-for="(item, index) in items" :key="index">
                    <div class="timeline-label fw-bold text-gray-800 fs-6">{{ item.daysRemaining }}</div>
                        <div class="timeline-badge">
                            <i :class="`fa ${item.iconClass} fs-1`"></i>
                        </div>
                        <div class="timeline-content fw-mormal text-muted ps-3">
                            {{ item.name }}
                            <a :href="item.recipeLink">
                                <i :class="`ki-duotone ki-note fs-3 ${item.isPlanned ? 'text-danger' : 'text-success'}`" 
                                data-bs-toggle="tooltip" 
                                :data-bs-title="item.tooltipTitle">
                                    <span class="path1"></span><span class="path2"></span>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            
        }
    },
    props:{
        items:{
            type: Array,
            required: true
        }
    }
}
</script>