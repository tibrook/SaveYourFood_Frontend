<template>
  <div class="enjoy-app-steps">
    <div class="step" v-for="(step, index) in steps" :key="index">
      <div class="step-number">{{ index + 1 }}.</div>
      <div class="step-text">{{ step }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepAppli',
  data() {
    return {
      steps: [
        this.$t('Recipes_IngredientList'),
        this.$t('Preferences_Enter'),
        this.$t('Preferences_SelectFavorites'),
      ]
    }
  }
}
</script>

<style scoped>
.enjoy-app-steps {
    margin-top:86px;
    margin-left: 4px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.step {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.step-number {
  font-size: 1.5em;
  color: #2C3E50;
  margin-right: 10px;
  font-weight: bold;
}

.step-text {
  font-size: 1em;
  color: #333;
}
</style>