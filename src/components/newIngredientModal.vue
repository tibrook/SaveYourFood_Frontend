<template>
    <div class="modal fade" id="kt_modal_new_ingredient" tabindex="-1" aria-hidden="true">
        <!--begin::Modal dialog-->
        <div class="modal-dialog modal-dialog-centered mw-650px">
            <!--begin::Modal content-->
            <div class="modal-content rounded">
                <!--begin::Modal header-->
                <div class="modal-header pb-0 border-0 justify-content-end">
                    <!--begin::Close-->
                    <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                        <i class="ki-duotone ki-cross fs-1">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                    </div>
                    <!--end::Close-->
                </div>
                <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                    <!--begin:Form-->
                    <form id="kt_modal_new_target_form" class="form" action="#">
                        <!--begin::Heading-->
                        <div class="mb-13 text-center">
                            <h1 class="mb-3">Importer un Aliment</h1>
                        </div>
                        <div class="row g-9 mb-8">
                            <!--begin::Col-->
                            <div class="col-md-6 fv-row d-flex flex-column align-items-center">
                                <div class="d-flex flex-center" data-kt-add-auth-action="qr-code">
                                    <img src="@/assets/media/misc/qr.png" alt="Scan this QR code" class="h-50px" />
                                </div>
                                <button class="btn btn-light-primary mt-4">Scan QrCode</button>
                            </div>

                            <div class="col-md-6 fv-row d-flex flex-column align-items-center">
                                <div class="d-flex flex-center" data-kt-add-auth-action="qr-code">
                                    <img src="@/assets/camera.png" alt="Scan this QR code" class="h-50px" />
                                </div>
                                <button class="btn btn-light-primary mt-4">Analyse Image</button>

                            </div>
                        </div>
                        <div class="row g-9 mb-8">
                            <!--begin::Col-->
                            <div class="col-md-6 fv-row">
                                <label class="required fs-6 fw-semibold mb-2">Nom</label>
                                <input type="text" class="form-control form-control-solid" placeholder="Entrer le nom de l'aliment" name="target_title" />
                            </div>
                            <!--end::Col-->
                            <!--begin::Col-->
                            <div class="col-md-6 fv-row d-flex flex-column align-items-center">
                                    <!--begin::Image input-->
                                    <div  class="image-input image-input-outline" data-kt-image-input="true" :style="selectedIngredient ? 'background-image:url('+ selectedIngredient.image +')' : 'blank'">
                                        <!--begin::Preview existing avatar-->
                                        <div class="image-input-wrapper w-75px h-75px"></div>
                                        <!--end::Preview existing avatar-->
                                        <!--begin::Label-->
                                        <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                            <i class="ki-duotone ki-pencil fs-7">
                                                <span class="path1"></span>
                                                <span class="path2"></span>
                                            </i>
                                            <!--begin::Inputs-->
                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                            <input type="hidden" name="avatar_remove" />
                                            <!--end::Inputs-->
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Cancel-->
                                        <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                            <i class="ki-duotone ki-cross fs-2">
                                                <span class="path1"></span>
                                                <span class="path2"></span>
                                            </i>
                                        </span>
                                        <!--end::Cancel-->
                                        <!--begin::Remove-->
                                        <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                            <i class="ki-duotone ki-cross fs-2">
                                                <span class="path1"></span>
                                                <span class="path2"></span>
                                            </i>
                                        </span>
                                        <!--end::Remove-->
                                    </div>
                                    <!--end::Image input-->
                                    <!--begin::Hint-->
                                    <div class="form-text">Fichier autorisés: png, jpg, jpeg.</div>
                                    <!--end::Hint-->
                                </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="row g-9 mb-8">
                            <!--begin::Col-->
                            <div class="col-md-6 fv-row">
                                <label class="required fs-6 fw-semibold mb-2">Catégorie</label>
                                <select class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Sélectionner la cétagorie d'aliment" name="target_assign">
                                    <option value="">Légume</option>
                                    <option value="1">Fruit</option>
                                    <option value="2">Condiment</option>
                                </select>
                            </div>
                            <!--end::Col-->
                            <!--begin::Col-->
                            <div class="col-md-6 fv-row">
                                <label class="required fs-6 fw-semibold mb-2">Date de péremption</label>
                                <!--begin::Input-->
                                <div class="position-relative d-flex align-items-center">
                                    <!--begin::Icon-->
                                    <i class="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                        <span class="path3"></span>
                                        <span class="path4"></span>
                                        <span class="path5"></span>
                                        <span class="path6"></span>
                                    </i>
                                    <!--end::Icon-->
                                    <!--begin::Datepicker-->
                                    <input class="form-control form-control-solid ps-12" placeholder="Sélectionner la date" name="due_date" />
                                    <!--end::Datepicker-->
                                </div>
                                <!--end::Input-->
                            </div>
                            <!--end::Col-->
                        </div>
                        <div class="row g-9 mb-8">
                            <!--begin::Col-->
                            <div class="col-md-6 fv-row">
                                <label class="required fs-6 fw-semibold mb-2">Emplacement</label>
                                <select class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Séléctionner l'emplacement" name="target_assign">
                                    <option value="">Placards</option>
                                    <option value="1">Frigo</option>
                                    <option value="2">Garage</option>
                                </select>
                            </div>
                            <!--end::Col-->
                            <!--begin::Col-->
                            <div class="col-md-6 fv-row">
                                <label class="required fs-6 fw-semibold mb-2">Quantité</label>
                                <!--begin::Input-->
                                <div class="position-relative d-flex align-items-center">
                                    <!--begin::Icon-->
                                    <!--begin::Datepicker-->
                                    <input class="form-control form-control-solid ps-12 w-200px" placeholder="Saisir la quantité" name="due_date" />
                                    <select class="form-select form-select-solid w-40px" data-control="select2" data-hide-search="true" data-placeholder="Selectionner l'unité" name="target_assign">
                                        <option value="3">Kg</option>
                                        <option value="1">G</option>
                                        <option value="2">Litres</option>
                                    </select>
                                    <!--end::Datepicker-->
                                </div>
                                <!--end::Input-->
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="d-flex flex-column mb-8">
                            <label class="fs-6 fw-semibold mb-2">Description</label>
                            <textarea class="form-control form-control-solid" rows="3" name="target_details" placeholder="Ajouter des détails"></textarea>
                        </div>
                        <!--end::Input group-->
                        <!--begin::Actions-->
                        <div class="text-center">
                            <button type="reset" id="kt_modal_new_target_cancel" class="btn btn-light me-3">Annuler</button>
                            <button type="submit" id="kt_modal_new_target_submit" class="btn btn-primary">
                                <span class="indicator-label">Ajouter</span>
                                <span class="indicator-progress">Please wait... 
                                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                            </button>
                        </div>
                        <!--end::Actions-->
                    </form>
                    <!--end:Form-->
                </div>
                <!--end::Modal body-->
            </div>
            <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
    </div>

</template>
<script>

export default {
   
}
</script>
<style>

</style>