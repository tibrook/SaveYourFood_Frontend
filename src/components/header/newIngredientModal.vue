<template>
    <div class="modal fade" id="kt_modal_new_ingredient" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mw-650px">
            <div class="modal-content rounded">
                <div class="modal-header pb-0 border-0 justify-content-end">
                    <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                        <i class="ki-duotone ki-cross fs-1">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                    </div>
                </div>
                <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                    <form id="kt_modal_new_target_form" class="form" action="#">
                        <div class="mb-13 text-center">
                            <h1 class="mb-3">{{$t('NewIngredient_ModalTitle')}}</h1>
                        </div>
                        <div class="row g-9 mb-8">
                            <div class="col-md-6 fv-row d-flex flex-column align-items-center">
                                <div class="d-flex flex-center" data-kt-add-auth-action="qr-code">
                                    <img src="@/assets/media/misc/qr.png" alt="Scan this QR code" class="h-50px" />
                                </div>
                                <button class="btn btn-light-primary mt-4">{{$t('NewIngredient_ScanQrCode')}}</button>
                            </div>

                            <div class="col-md-6 fv-row d-flex flex-column align-items-center">
                                <div class="d-flex flex-center" data-kt-add-auth-action="qr-code">
                                    <img src="@/assets/camera.png" alt="Scan this QR code" class="h-50px" />
                                </div>
                                <button class="btn btn-light-primary mt-4">{{$t('NewIngredient_AnalyseImage')}}</button>

                            </div>
                        </div>
                        <div class="row g-9 mb-8">
                            <div class="col-md-6 fv-row">
                                <label class="required fs-6 fw-semibold mb-2">{{$t('NewIngredient_NameLabel')}}</label>
                                <input type="text" class="form-control form-control-solid" :placeholder="$t('NewIngredient_NamePlaceholder')" name="target_title" />
                            </div>
                            <div class="col-md-6 fv-row d-flex flex-column align-items-center">
                                    <div  class="image-input image-input-outline" data-kt-image-input="true" :style="selectedIngredient ? 'background-image:url('+ selectedIngredient.image +')' : 'blank'">
                                        <div class="image-input-wrapper w-75px h-75px"></div>
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
                                    <div class="form-text">{{$t('Image_FormText')}}</div>
                                </div>
                        </div>
                        <div class="row g-9 mb-8">
                            <div class="col-md-6 fv-row">
                                <label class="required fs-6 fw-semibold mb-2">{{$t('NewIngredient_CategoryLabel')}}</label>
                                <select class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Sélectionner la cétagorie d'aliment" name="target_assign">
                                    <option value="">Légume</option>
                                    <option value="1">Fruit</option>
                                    <option value="2">Condiment</option>
                                </select>
                            </div>
                            <div class="col-md-6 fv-row">
                                <label class="required fs-6 fw-semibold mb-2">{{$t('NewIngredient_ExpiryDateLabel')}}</label>
                                <div class="position-relative d-flex align-items-center">
                                    <i class="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                        <span class="path3"></span>
                                        <span class="path4"></span>
                                        <span class="path5"></span>
                                        <span class="path6"></span>
                                    </i>
                                    <input class="form-control form-control-solid ps-12" :placeholder="$t('NewIngredient_ExpiryDatePlaceholder')" name="due_date" />
                                </div>
                            </div>
                        </div>
                        <div class="row g-9 mb-8">
                            <div class="col-md-6 fv-row">
                                <label class="required fs-6 fw-semibold mb-2">{{$t('NewIngredient_LocationLabel')}}</label>
                                <select class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Séléctionner l'emplacement" name="target_assign">
                                    <option value="">Placards</option>
                                    <option value="1">Frigo</option>
                                    <option value="2">Garage</option>
                                </select>
                            </div>
                            <div class="col-md-6 fv-row">
                                <label class="required fs-6 fw-semibold mb-2">{{$t('NewIngredient_QuantityLabel')}}</label>
                                <div class="position-relative d-flex align-items-center">
                                    <input class="form-control form-control-solid ps-12 w-200px" :placeholder="$t('NewIngredient_QuantityPlaceholder')" name="due_date" />
                                    <select class="form-select form-select-solid w-40px" data-control="select2" data-hide-search="true" data-placeholder="Selectionner l'unité" name="target_assign">
                                        <option value="3">Kg</option>
                                        <option value="1">G</option>
                                        <option value="2">Litres</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column mb-8">
                            <label class="fs-6 fw-semibold mb-2">{{$t('NewIngredient_DescriptionLabel')}}</label>
                            <textarea class="form-control form-control-solid" rows="3" name="target_details" :placeholder="$t('NewIngredient_DescriptionPlaceholder')"></textarea>
                        </div>
                        <div class="text-center">
                            <button type="reset" id="kt_modal_new_target_cancel" class="btn btn-light me-3">{{$t('NewIngredient_CancelButton')}}</button>
                            <button type="submit" id="kt_modal_new_target_submit" class="btn btn-primary">
                                <span class="indicator-label">{{$t('NewIngredient_AddButton')}}</span>
                                <span class="indicator-progress">{{$t('NewIngredient_PleaseWait')}}
                                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
   
}
</script>
