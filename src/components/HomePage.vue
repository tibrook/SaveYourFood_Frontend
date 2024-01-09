 <template>
  <div id="kt_body" class="header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-disabled">
		<!--begin::Theme mode setup on page load-->
		<!--end::Theme mode setup on page load-->
		<!--begin::Main-->
		<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">
				<!--begin::Aside-->
				<div id="kt_aside" class="aside" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="auto" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle">
					<!--begin::Logo-->
					<div class="aside-logo flex-column-auto pt-10 pt-lg-20" id="kt_aside_logo">
						<a href="index.html">
							<img alt="Logo" src="@/assets/logo1.png" class="h-40px" />
						</a>
					</div>
					<!--end::Logo-->
					<!--begin::Nav-->
					<div class="aside-menu flex-column-fluid pt-0 pb-7 py-lg-10" id="kt_aside_menu">
						<!--begin::Aside menu-->
						<div id="kt_aside_menu_wrapper" class="w-100 hover-scroll-y scroll-lg-ms d-flex" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: trur}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu" data-kt-scroll-offset="0">
							<div id="kt_aside_menu" class="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-icon-gray-500 menu-arrow-gray-500 fw-semibold fs-6 my-auto" data-kt-menu="true">
								<!--begin:Menu item-->
								<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item here show py-2" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" data-bs-title='inventory'>
									<!--begin:Menu link-->
									<span class="menu-link menu-center">
										<span class="menu-icon me-0">
											<i class="ki-duotone ki-home-2 fs-2x">
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
										</span>
									</span>
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2">
									<!--begin:Menu link-->
									<span class="menu-link menu-center">
										<span class="menu-icon me-0">
											<i class="ki-duotone ki-abstract-35 fs-2x">
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
										</span>
									</span>
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2">
									<!--begin:Menu link-->
									<span class="menu-link menu-center">
										<span class="menu-icon me-0">
											<i class="ki-duotone ki-abstract-35 fs-2x">
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
										</span>
									</span>
								</div>
							</div>
						</div>
						<!--end::Aside menu-->
					</div>
					<!--end::Nav-->
				</div>
				<!--end::Aside-->
				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<!--begin::Header tablet and mobile-->
					<div class="header-mobile py-3">
						<!--begin::Container-->
						<div class="container d-flex flex-stack">
							<!--begin::Mobile logo-->
							<div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
								<a href="index.html">
									<img alt="Logo" src="assets/media/logos/demo9.svg" class="h-35px" />
								</a>
							</div>
							<!--end::Mobile logo-->
							<!--begin::Aside toggle-->
							<button class="btn btn-icon btn-active-color-primary me-n4" id="kt_aside_toggle">
								<i class="ki-duotone ki-abstract-14 fs-2x">
									<span class="path1"></span>
									<span class="path2"></span>
								</i>
							</button>
							<!--end::Aside toggle-->
						</div>
						<!--end::Container-->
					</div>
					<!--end::Header tablet and mobile-->
					<!--begin::Header-->
					<div id="kt_header" class="header py-6 py-lg-0" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{lg: '300px'}">
						<!--begin::Container-->
						<div class="header-container container-xxl">
							<!--begin::Page title-->
							<div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-20 py-3 py-lg-0 me-3">
								<!--begin::Heading-->
								<h1 class="d-flex flex-column text-gray-900 fw-bold my-1">
									<span class="text-white fs-1">Dashboard</span>
								</h1>
								<!--end::Heading-->
							</div>
							<!--end::Page title=-->
							<!--begin::Wrapper-->
							<div class="d-flex align-items-center flex-wrap">
								<!--begin::Search-->
								<div class="header-search py-3 py-lg-0 me-3">
									<!--begin::Search-->
									<div id="kt_header_search" class="header-search d-flex align-items-center w-lg-250px" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-search-responsive="false" data-kt-menu-trigger="auto" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
										<!--begin::Tablet and mobile search toggle-->
										<div data-kt-search-element="toggle" class="search-toggle-mobile d-flex d-lg-none align-items-center">
											<div class="d-flex">
												<i class="ki-duotone ki-magnifier fs-1">
													<span class="path1"></span>
													<span class="path2"></span>
												</i>
											</div>
										</div>
									</div>
									<!--end::Search-->
								</div>
								<!--end::Search-->
								<!--begin::Action-->
								<div class="d-flex align-items-center py-3 py-lg-0">
									<!--begin::Item-->
									<div class="me-3">
										<a href="#" class="btn btn-icon btn-custom btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
											<i class="ki-duotone ki-user fs-1">
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
										</a>
										<!--begin::User account menu-->
										<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
											<!--begin::Menu item-->
											<div class="menu-item px-3">
												<div class="menu-content d-flex align-items-center px-3">
													<!--begin::Avatar-->
													<div class="symbol symbol-50px me-5">
														<img alt="Logo" src="assets/media/avatars/300-1.jpg" />
													</div>
													<!--end::Avatar-->
													<!--begin::Username-->
													<div class="d-flex flex-column">
														<div class="fw-bold d-flex align-items-center fs-5">Max Smith 
														<span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
														<a href="#" class="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
													</div>
													<!--end::Username-->
												</div>
											</div>
											<!--end::Menu item-->
											<!--begin::Menu separator-->
											<div class="separator my-2"></div>
											<!--end::Menu separator-->
											<!--begin::Menu item-->
											<div class="menu-item px-5">
												<a href="account/overview.html" class="menu-link px-5">My Profile</a>
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item px-5">
												<a href="account/statements.html" class="menu-link px-5">My Recipes</a>
											</div>
											<!--end::Menu item-->
											<!--begin::Menu separator-->
											<div class="separator my-2"></div>
											<!--end::Menu separator-->
											<!--begin::Menu item-->
											<div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" data-kt-menu-offset="-15px, 0">
												<a href="#" class="menu-link px-5">
													<span class="menu-title position-relative">Language 
													<span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English 
													<img class="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" /></span></span>
												</a>
												<!--begin::Menu sub-->
												<div class="menu-sub menu-sub-dropdown w-175px py-4">
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<a href="account/settings.html" class="menu-link d-flex px-5 active">
														<span class="symbol symbol-20px me-4">
															<img class="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
														</span>English</a>
													</div>
													<!--end::Menu item-->
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<a href="account/settings.html" class="menu-link d-flex px-5">
														<span class="symbol symbol-20px me-4">
															<img class="rounded-1" src="assets/media/flags/france.svg" alt="" />
														</span>French</a>
													</div>
													<!--end::Menu item-->
												</div>
												<!--end::Menu sub-->
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item px-5 my-1">
												<a href="account/settings.html" class="menu-link px-5">Account Settings</a>
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item px-5">
												<a href="authentication/layouts/corporate/sign-in.html" class="menu-link px-5">Sign Out</a>
											</div>
											<!--end::Menu item-->
										</div>
										<!--end::User account menu-->
									</div>
									<!--end::Item-->
									<!--begin::Item-->
									<a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Import Aliment</a>
									<!--end::Item-->
								</div>
								<!--end::Action-->
							</div>
							<!--end::Wrapper-->
						</div>
						<!--end::Container-->
					</div>
					<!--end::Header-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
</div>
  

</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  watch: {
  },
  name: 'HomePage',
  components: {
  },
  data() {
    return {
      headerHeight: 0, 
      items: [
        {
          id: 'inventory',
          page: 'inventory',
          icon: 'fa-solid fa-boxes',
          path: '/inventory',
          imgSrc: require('@/assets/pantry.png'),
          altText: 'inventory',
          title: 'inventory',
          message: 'inventory_message',
          actions: [
            '- ' +  this.$t('import_food'),
            '- '+ this.$t('manage_inventory')
          ],
          buttonText: 'explore'
        },
        {
          id: 'recipes',
          page: 'recipes',
          icon: 'fa-solid fa-utensils',
          imgSrc: require('../assets/grandmother.png'),
          altText: 'recipes',
          path: '/Recipes',
          title: 'recipes',
          message: 'recipes_message',
          actions: [
            '- '+this.$t('get_recipes'),
            '- '+this.$t('add_recipes')
          ],
          buttonText: 'view_recipes'
        },
        {
          id: 'weeklyMeals',
          page: 'weeklyMeals',
          icon: 'fa-solid fa-calendar-week',
          path: '/weeklyMeals',
          imgSrc: require('../assets/weelkymenu.png'),
          altText: 'weekly_meals',
          title: 'weekly_meals',
          message: 'weekly_meals_message',
          actions: [
            '- '+this.$t('manage_meals'), 
            '- '+this.$t('statistics_weeks')
          ],
          buttonText: 'plan_meals'
        },
        {
          id: 'shoppingList',
          page: 'shoppingList',
          path: '/shoppingList',
          icon: 'fa-solid fa-shopping-cart',
          imgSrc: require('../assets/shoppinglist.png'),
          altText: 'shopping_list',
          title: 'shopping_list',
          message: 'shopping_list_message',
          actions: [
            '- '+this.$t('manage_shopping_list'),
            '- '+this.$t('manage_inventory'),
          ],
          buttonText: 'make_a_list'
        },
        {
          id: 'userSettings',
          page: 'userSettings',
          path: '/userSettings',
          icon: 'fa-solid fa-user-cog',
          imgSrc: require('../assets/thinkingmen.png'),
          altText: this.$t('user_settings'),
          title: this.$t('user_settings'),
          message: 'shopping_list_message',
          actions: [
            '-'+this.$t('user_preferences'),
            '-'+this.$t('user_settings'),
          ],
          buttonText: 'manage_user_settings'
        }
      ],
      
    }
  },
 

  methods:{
    
    goToPage(page) {
      this.$router.push(`/${page}`);
    }
   
  }
})
</script>