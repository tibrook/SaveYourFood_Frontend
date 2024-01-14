<template>
    <div class="card-header cursor-pointer">
        <div class="card-title m-0">
            <h3 class="fw-bold m-0">{{$t('Settings_Preferences')}}</h3>
        </div>
        <a href="account/settings.html" class="btn btn-sm btn-primary align-self-center">{{$t('Settings_EditPreferences')}}</a>
    </div>
    <div class="card-body p-9">
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_cuisineFavorite')}}</label>
            <div class="col-lg-8">
                <input type="text" :value="userPreferences?.cuisineFavorite" data-role="tagify" class="tagify-input">
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_favoriteFoods')}}</label>
            <div class="col-lg-8 fv-row">
                <input type="text" :value="userPreferences?.favoriteFoods" data-role="tagify" class="tagify-input">
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_preferredOrigin')}}</label>
            <div class="col-lg-8 fv-row">
                <input type="text" :value="userPreferences?.preferredOrigin" data-role="tagify" class="tagify-input">
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_allergies')}}
            </label>
            <div class="col-lg-8 d-flex align-items-center">
                <input type="text" :value="userPreferences?.allergies" data-role="tagify" class="tagify-input">
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_dislikedFoods')}}
            </label>
            <div class="col-lg-8 d-flex align-items-center">
                <input type="text" :value="userPreferences?.dislikedFoods" data-role="tagify" class="tagify-input">
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_dietaryRestrictions')}}
            </label>
            <div class="col-lg-8 d-flex align-items-center">
                <input type="text" :value="userPreferences?.dietaryRestrictions" data-role="tagify" class="tagify-input">
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_mealTypePreference')}}
            </label>
            <div class="col-lg-8 d-flex align-items-center">
                <input type="text" :value="userPreferences?.mealTypePreference" data-role="tagify" class="tagify-input">
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_cookingSkillLevel')}}
            </label>
            <div class="col-lg-8 d-flex align-items-center">
                <span class="fw-bold fs-6 text-gray-800 me-2">{{userPreferences.cookingSkillLevel}}</span>
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_favoriteIngredients')}}
            </label>
            <div class="col-lg-8 d-flex align-items-center">
                <input type="text" :value="userPreferences?.favoriteIngredients" data-role="tagify" class="tagify-input">
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_healthFocus')}}
            </label>
            <div class="col-lg-8 d-flex align-items-center">
                <input type="text" :value="userPreferences?.healthFocus" data-role="tagify" class="tagify-input">
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_mealPreparationTime')}}
            </label>
            <div class="col-lg-8 d-flex align-items-center">
                <span class="fw-bold fs-6 text-gray-800 me-2">{{userPreferences?.mealPreparationTime}}</span>
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{$t('Preferences_spiceTolerance')}}
            </label>
            <div class="col-lg-8 d-flex align-items-center">
                <span class="fw-bold fs-6 text-gray-800 me-2">{{userPreferences?.spiceTolerance}}</span>
            </div>
        </div>
    </div>
</template>

<script>

import {  mapGetters, mapActions } from 'vuex';

export default {
    name: 'AccountPreferences',
    computed: {
     ...mapGetters(['userPreferences']),
     
    },
    mounted(){
        this.getUserPreferences()
        this.initializeTagify();
    },
    methods:{
        ...mapActions(['fetchUserPreferences']),
        getUserPreferences(){
            this.fetchUserPreferences()
        },
        initializeTagify() {
            document.querySelectorAll('.tagify-input').forEach(input => {
                //eslint-disable-next-line
                new Tagify(input);
            });
        }

    }
}
</script>
