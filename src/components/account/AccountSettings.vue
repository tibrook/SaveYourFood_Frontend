<template>
    <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
            <div class="card-title m-0">
                <h3 class="fw-bold m-0">{{$t('Settings_User')}}</h3>
            </div>
    </div>
    <div id="kt_Settings_Account_profile_details" class="collapse show">
        <form id="kt_account_profile_details_form" class="form">
            <div class="card-body border-top p-9">
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Avatar</label>
                    <div class="col-lg-8">
                        <div class="image-input image-input-outline image-input-empty" data-kt-image-input="true" style="background-image:url(/assets/userLogo.jpg)">
                            <div class="image-input-wrapper w-125px h-125px" style="background-image: url(imageUrl)"></div>
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
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-semibold fs-6">{{$t('NewIngredient_NameLabel')}}</label>
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-6 fv-row">
                                <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" :placeholder="$t('Auth_EnterFirstName')" :value="userSettings.firstName"/>
                            </div>
                            <div class="col-lg-6 fv-row">
                                <input type="text" name="lname" class="form-control form-control-lg form-control-solid" :placeholder="$t('Auth_EnterLastName')" :value="userSettings.lastName" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-6">
                    <label class="col-lg-4 col-form-label required fw-semibold fs-6">Emplacements alimentaires</label>
                    <div class="col-lg-8">
                        <div class="row">
                            <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="Emplacements alimentaires" value="Frigidaire, placards, garage" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-end py-6 px-9">
                <button type="reset" class="btn btn-light btn-active-light-primary me-2">Discard</button>
                <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">Save Changes</button>
            </div>
        </form>
    </div>
</template>
<script>
import {  mapGetters } from 'vuex';

export default {
    name: 'AccountSettings',
    data(){
        return{
            imageUrl: '@/assets/userLogo.jpg'
        }
    },
    computed: {
     ...mapGetters(['userSettings'])
    },
    mounted(){
        //eslint-disable-next-line
        KTImageInput.createInstances();
    }
}
</script>
