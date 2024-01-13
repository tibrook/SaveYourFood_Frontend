<template>
  <footer>
      <div class="footer-content">
        <LangageSwitcher />
        <router-link to="/contact" class="footer-link">Contact us</router-link>
        <router-link to="/feedback" class="footer-link">Feedback</router-link>
        <a href="#!" class="footer-link">{{$t('Legal_TermsOfUse')}}</a>
        <a href="#!" class="footer-link">{{$t('Legal_TermsOfUse')}}</a>
      </div>
    </footer>
</template>
<script>
import LangageSwitcher from './LangageSwitcher.vue';
export default({
  components:{LangageSwitcher}
})
</script>
<style>

footer {
  background-color: #2C3E50;
  color: white;
  padding: 12px 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  flex-wrap: wrap; 
}
.footer-link:hover {
  color: #17a2b8;
}
.footer-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}
.footer-content {
  display: flex;
  gap: 20px; 
  align-items: center;
}
.footer-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  padding: 0 10px;
}
.footer-link:hover{
  color: #17a2b8;
  text-decoration: underline;
}

</style>