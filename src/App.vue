
<template>
	<div>
    <HeaderApp v-if="showHeader"/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderApp from '@/components/header/header.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components:{
    HeaderApp
  },
  setup() {
    const route = useRoute();
    const showHeader = computed(() => route.meta.header !== false); 

    return { showHeader };
  }
}
</script>
<style>


</style>