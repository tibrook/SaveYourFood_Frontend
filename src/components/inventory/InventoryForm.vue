<template>
     <div class="card card-flush bg-body " id="kt_pos_form" > 
        <div class="card-header pt-5">
            <div class="d-flex justify-content-between w-100">
                <h3 class="card-title fw-bold text-gray-800 fs-2qx">{{ selectedIngredient.name }}</h3>
                <div class="btn btn-sm btn-icon">
                    <i  class="ki-duotone ki-cross fs-2 "  @click="closeCard"><span class="path1"></span><span  class="path2"></span></i>
                </div>
            </div>
            
            <form id="kt_account_profile_details_form" class="form">
            <div class="card-body border-top p-9">
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Image</label>
                    <div class="col-lg-8">
                        <div  class="image-input image-input-outline image-input-empty" data-kt-image-input="true" :style="selectedIngredient ? 'background-image:url('+ selectedIngredient.image +')' : 'blank'">
                            <div class="image-input-wrapper w-125px h-125px"></div>
                            <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                <i class="ki-duotone ki-pencil fs-7">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                                <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                <input type="hidden" name="avatar_remove" />
                            </label>
                            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                <i class="ki-duotone ki-cross fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                            </span>
                            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                <i class="ki-duotone ki-cross fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                            </span>
                        </div>
                        <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-semibold fs-6">Nom</label>
                    <div class="col-lg-8">
                        <div class="row">
                            <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" :value="selectedIngredient ?selectedIngredient.name : 'nom' " />
                        </div>
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Description</label>
                    <div class="col-lg-8 fv-row">
                        <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" :value="selectedIngredient ?selectedIngredient.description : 'description'" />
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-semibold fs-6">Emplacement</label>
                    <div class="col-lg-8 fv-row">
                        <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" :value="selectedIngredient ?selectedIngredient.location : 'emplacement'" />
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-semibold fs-6">Type</label>
                    <div class="col-lg-8 fv-row">
                        <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" :value="selectedIngredient ?selectedIngredient.type : 'type'" />
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-end py-6 px-9">
                <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">{{  'Mettre à jour' }}</button>
            </div>
            </form>
        </div>
        </div>
</template>
<script>

export default {
    props: {
      selectedIngredient: {
        type: Object,
        required: true
      },
    },
    methods:{
        closeCard(){
            this.$emit('close-ingredient-form', this.recipe);
        },
    }
  };
</script>
