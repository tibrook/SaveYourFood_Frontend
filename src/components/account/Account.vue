<template>
	<div class="d-flex flex-column flex-root">
		<div class="page d-flex flex-row flex-column-fluid">
			<MenuAside />
			<div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
				<div class="header-mobile py-3">
					<div class="container d-flex flex-stack">
						<div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
							<a href="index.html">
								<chiefHat />
							</a>
						</div>
						<button class="btn btn-icon btn-active-color-primary me-n4" id="kt_aside_toggle">
							<i class="ki-duotone ki-abstract-14 fs-2x">
								<span class="path1"></span>
								<span class="path2"></span>
							</i>
						</button>
					</div>
				</div>
				<HeaderApp />
				<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
					<div class="container-xxl" id="kt_content_container">
							<div class="card mb-5 mb-xl-10">
								<div class="card-body pt-9 pb-0">
									<div class="d-flex flex-wrap flex-sm-nowrap">
										<div class="me-7 mb-4">
											<div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
												<img src="/img/userLogo.7329b931.jpg" alt="image" />
												<div class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
											</div>
										</div>
										<div class="flex-grow-1">
											<div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
												<div class="d-flex flex-column">
													<div class="d-flex align-items-center mb-2">
														<a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Alex</a>
														<a href="#">
															<i class="ki-duotone ki-verify fs-1 text-primary">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</a>
													</div>
													<div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
														<a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
														<i class="ki-duotone ki-sms fs-4">
															<span class="path1"></span>
															<span class="path2"></span>
														</i>admin@gmail.com</a>
													</div>
												</div>
											</div>
											<div class="d-flex flex-wrap flex-stack">
												<div class="d-flex flex-column flex-grow-1 pe-8">
													<div class="d-flex flex-wrap">
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
															<div class="d-flex align-items-center">
																<i class="ki-duotone ki-arrow-up fs-3 text-success me-2">
																	<span class="path1"></span>
																	<span class="path2"></span>
																</i>
																<div class="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div>
															</div>
															<div class="fw-semibold fs-6 text-gray-500">Ingredients</div>
														</div>
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
															<div class="d-flex align-items-center">
																<i class="ki-duotone ki-arrow-down fs-3 text-danger me-2">
																	<span class="path1"></span>
																	<span class="path2"></span>
																</i>
																<div class="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="80">0</div>
															</div>
															<div class="fw-semibold fs-6 text-gray-500">Recipes</div>
														</div>
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
															<div class="d-flex align-items-center">
																<i class="ki-duotone ki-arrow-up fs-3 text-success me-2">
																	<span class="path1"></span>
																	<span class="path2"></span>
																</i>
																<div class="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div>
															</div>
															<div class="fw-semibold fs-6 text-gray-500">Items in shopping list</div>
														</div>
													</div>
												</div>
												<div class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
													<div class="d-flex justify-content-between w-100 mt-auto mb-2">
														<span class="fw-semibold fs-6 text-gray-500">Profile Compleation</span>
														<span class="fw-bold fs-6">50%</span>
													</div>
													<div class="h-5px mx-3 w-100 bg-light mb-3">
														<div class="bg-success rounded h-5px" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5 active" data-bs-toggle="tab" href="#preferences_tab">{{$t('preferences')}}</a>
										</li>
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5" data-bs-toggle="tab" href="#accountSettings_tab">{{$t('account_settings')}}</a>
										</li>
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5" data-bs-toggle="tab" href="#myRecipes_tab">{{ $t('my_recipes') }}</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="tab-content" id="kt_profile_details_view">
								<div id="preferences_tab" class="tab-pane fade card active show" role="tabpanel">
									<Preferences />
								</div>
								<div id="accountSettings_tab" class="tab-pane fade card" role="tabpanel">
									<AccountSettings />
								</div>
								<div id="myRecipes_tab" class="tab-pane fade card" role="tabpanel">
									<MyRecipes />
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import MenuAside from '@/components/menu/MenuAside.vue'
import HeaderApp from "@/components/header.vue"
import chiefHat from "@/components/icons/chiefHat.vue"
import Preferences from "@/components/Preferences.vue"
import AccountSettings from "@/components/AccountSettings.vue"
import MyRecipes from "@/components/MyRecipes.vue";

export default {
    name: 'UserAccount',
	components: {
		HeaderApp,MenuAside,Preferences, chiefHat, AccountSettings, MyRecipes
		},
	}
  </script>
  <style scoped>
  </style>
  
  
  