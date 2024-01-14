<template>
    <div class="card-header cursor-pointer">
        <div class="card-title m-0">
            <h3 class="fw-bold m-0">{{$t('Settings_MyPreferences')}}</h3>
        </div>
        <a href="account/settings.html" class="btn btn-sm btn-primary align-self-center">{{$t('Settings_EditPreferences')}}</a>
    </div>
    <div class="card-body p-9">
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">Cuisine preferée</label>
            <div class="col-lg-8">
                <span class="fw-bold fs-6 text-gray-800">Cuisine traditionnelle</span>
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">Aliments préférés</label>
            <div class="col-lg-8 fv-row">
                <span class="fw-bold fs-6 text-gray-800 me-2">Pâtes, Crevettes, Saumon, Boeuf</span>
            </div>
        </div>
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">Origine préférée
            </label>
            <div class="col-lg-8 d-flex align-items-center">
                <span class="fw-bold fs-6 text-gray-800 me-2">Cuisine Française, thailandaise</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AccountPreferences',
}
</script>
