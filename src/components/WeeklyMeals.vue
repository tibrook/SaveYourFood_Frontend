<template>
  <!--begin::Theme mode setup on page load-->
		<!--end::Theme mode setup on page load-->
		<!--begin::Main-->
		<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">
				<!--begin::Aside-->
                <MenuAside />
				<!--end::Aside-->
				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<!--begin::Header tablet and mobile-->
					<!--end::Header tablet and mobile-->
					<HeaderApp :page="$t('weekly_meals')"/>
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<!--begin::Container-->
						<div class="container-xxl" id="kt_content_container">
							<!--begin::Card-->
							<div class="card">
								<!--begin::Card header-->
								<div class="card-header">
									<h2 class="card-title fw-bold">Calendar</h2>
									<div class="card-toolbar">
										<button class="btn btn-flex btn-primary" data-kt-calendar="add">
										<i class="ki-duotone ki-plus fs-2"></i>Add Event</button>
									</div>
								</div>
								<!--end::Card header-->
								<!--begin::Card body-->
								<div class="card-body">
									<!--begin::Calendar-->
									<div id="kt_calendar_app"></div>
									<!--end::Calendar-->
								</div>
								<!--end::Card body-->
							</div>
							<!--end::Card-->
						</div>
						<!--end::Container-->
					</div>
					
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
	
</template>
.
<script>
import MenuAside from "@/components/MenuAside.vue"
import HeaderApp from "@/components/header.vue"

export default {
    components:{
        MenuAside, HeaderApp
    },
    mounted(){
        var calendarEl = document.getElementById("kt_calendar_app");
        //eslint-disable-next-line
        var calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: "prev,next today",
                center: "title",
                right: "timeGridWeek,timeGridDay,listMonth"
            },

            height: 800,
            contentHeight: 780,
            aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio

            nowIndicator: true,

            views: {
                // dayGridMonth: { buttonText: "month" },
                timeGridWeek: { buttonText: "week" },
                // timeGridDay: { buttonText: "day" }
            },

            initialView: "dayGridMonth",

            editable: true,
            dayMaxEvents: true, // allow "more" link when too many events
            navLinks: true,
            events: [
            ],

            // eventContent: function (info) {
                // var element = $(info.el);

                // if (info.event.extendedProps && info.event.extendedProps.description) {
                //     if (element.hasClass("fc-day-grid-event")) {
                //         element.data("content", info.event.extendedProps.description);
                //         element.data("placement", "top");
                //         KTApp.initPopover(element);
                //     } else if (element.hasClass("fc-time-grid-event")) {
                //         element.find(".fc-title").append("<div class="fc-description">" + info.event.extendedProps.description + "</div>");
                //     } else if (element.find(".fc-list-item-title").lenght !== 0) {
                //         element.find(".fc-list-item-title").append("<div class="fc-description">" + info.event.extendedProps.description + "</div>");
                //     }
                // }
            // }
        });

        calendar.render();
    }
}
</script>
