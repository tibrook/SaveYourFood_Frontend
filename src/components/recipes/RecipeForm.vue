<template>
    <div class="card card-flush bg-body" id="kt_pos_form">
        <div class="card-header pt-5">
            <h3 class="card-title fw-bold text-gray-800 fs-2qx">{{isEditing ?selectedRecipe?.name :  'Ajouter recette' }}</h3>
        </div>
        <form id="kt_account_profile_details_form" class="form">
        <div class="card-body border-top p-9">
            <div class="row mb-6">
                <label class="col-lg-4 col-form-label fw-semibold fs-6">Image</label>
                <div class="col-lg-8">
                    <div  class="image-input image-input-outline image-input-empty" data-kt-image-input="true" :style="selectedRecipe ? 'background-image:url('+ selectedRecipe.image +')' : 'blank'">
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
                        <input type="text" name="fname" class="form-control" placeholder="Nom de la recette" :value="selectedRecipe ?selectedRecipe.name : undefined " />
                    </div>
                </div>
            </div>
            <div class="row mb-6">
                <label class="col-lg-4 col-form-label required fw-semibold fs-6">Ingrédients</label>
                <div class="col-lg-8 ">
                    <div class="row">
                        <input class="form-control" :value="selectedRecipe ?selectedRecipe?.ingredients : undefined" placeholder="Ajoutez les ingrédients" id="kt_tagify_1"/>
                    </div>
                </div>
            </div>
            
            <div class="row mb-6">
                <label class="col-lg-4 col-form-label required fw-semibold fs-6">Catégorie</label>
                <div class="col-lg-8">
                    <div class="row">
                        <input class="form-control" :value="selectedRecipe ?selectedRecipe?.category : undefined" placeholder="Ajoutez une ou plusieurs catégories" id="kt_tagify_1"/>
                    </div>                                                 
                </div>
            </div>
            <div class="row mb-6">
                <div class="col-lg-8 fv-row d-flex justify-content-between w-100">
                    <label class="col-lg-4 col-form-label required fw-semibold fs-6 w-auto me-2">Préparation</label>
                    <div class="input-group mb-5 ms2">
                        <input type="text" name="fname" class="form-control "  :value="selectedRecipe ?selectedRecipe?.preparationTime : undefined" />
                        <span class="input-group-text" id="basic-addon2">min</span>
                    </div>
                </div>
            </div>
            <div class="row mb-6">
                <div class="col-lg-8 fv-row d-flex justify-content-between w-100">
                    <label class="col-lg-4 col-form-label required fw-semibold fs-6 w-auto me-2">Cuisson</label>
                    <div class="input-group mb-5 ms4">
                        <input type="text" name="fname" class="form-control "  :value="selectedRecipe ?selectedRecipe?.cookingTime : undefined" />
                        <span class="input-group-text" id="basic-addon2">min</span>
                    </div>                                                    
                </div>
            </div>
            <div class="row mb-6">
                <label class="col-lg-4 col-form-label required fw-semibold fs-6">Etapes de préparation</label>
                <div class="col-lg-8 fv-row">
                    <placeholder type="text" name="fname" class="form-control" placeholder='type'>
                    {{   selectedRecipe ?selectedRecipe?.preparationSteps  : undefined }}
                    </placeholder>
                </div>
            </div>
            <div class="row mb-6">
                <label class="col-lg-4 col-form-label required fw-semibold fs-6">Conseils et astuces</label>
                <div class="col-lg-8 fv-row">
                    <placeholder type="text" name="fname" class="form-control  mb-3 mb-lg-0" placeholder="Conseils" >
                        {{ selectedRecipe ?selectedRecipe?.tips : undefined }}
                    </placeholder>
                </div>
            </div>
            <div class="row mb-6">
                <div class="col-lg-8 fv-row d-flex justify-content-between w-100">
                    <label class="col-lg-4 col-form-label required fw-semibold fs-6 w-auto me-2">Portions</label>
                    <div class="input-group mb-5 ms4">
                        <input type="text" name="fname" class="form-control mb-3 mb-lg-0" placeholder="Portions"  />
                        <span class="input-group-text" id="basic-addon2">Personnes</span>
                    </div>  
                </div>
            </div>
            <div class="row mb-6">
                <label class="col-lg-4 col-form-label fw-semibold fs-6">Description</label>
                <div class="col-lg-8 fv-row">
                    <placeholder  name="fname" class="form-control" placeholder="Description"  >
                        {{ selectedRecipe ?selectedRecipe.description : undefined }}
                    </placeholder>
                </div>
            </div>
            <div class="row mb-6">
                <label class="col-lg-4 col-form-label required fw-semibold fs-6">Suggestionde plats complémentaires (vins..)</label>
                <div class="col-lg-8 fv-row">
                    <input type="text" name="fname" class="form-control  mb-3 mb-lg-0" placeholder="Suggestion" :value="selectedRecipe ?selectedRecipe.type : 'type'" />
                </div>
            </div>
        </div>
        <div class="card-footer d-flex justify-content-end py-6 px-9">
            <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">{{  'Mettre à jour' }}</button>
        </div>
        </form>
    </div>
  </template>
  <script>
  export default {
    props: {
      selectedRecipe: {
        type: Object,
        default: () => {}
      },
      isEditing: {
        type: Boolean,
        required: true
      },
    },
  };
  </script>
  <style scoped>

.ms2{
 margin-left: 2.5rem;
}
.ms4{
 margin-left: 4rem;

}
</style>