<template>
    <div class="card mb-xl-8">
      <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold text-gray-900">Preferences</span>
        </h3>
      </div>
      <div class="card-body pt-5">
        <div v-for="(preference, index) in preferences" :key="index" class="d-flex align-items-sm-center mb-7">
          <div class="symbol symbol-50px me-5">
            <span class="symbol-label">
              <i :class="preference.icon"></i>
            </span>
          </div>
          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
            <div class="flex-grow-1 me-2">
              <a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold">{{ preference.title }}</a>
              <span class="text-muted fw-semibold d-block fs-7">{{ preference.subtitle }}</span>
            </div>
            <span class="badge badge-light fw-bold my-2">{{ preference.meals }} meals</span>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'UserPreferencesWidget',
  props: {
    preferences: Array
  }
};
</script>