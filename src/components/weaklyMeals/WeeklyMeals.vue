<template>
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <MenuAside />
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <HeaderApp :page="$t('Meals_Weekly')"/>
                <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                    <div class="container-xxl" id="kt_content_container">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title fw-bold">{{$t('Meals_Calendar')}}</h2>
                                <div class="card-toolbar">
                                    <button class="btn btn-flex btn-primary" data-kt-calendar="add">
                                    <i class="ki-duotone ki-plus fs-2"></i>{{$t('Meals_AddDish')}}</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div id="kt_calendar_app"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
.
<script>
import MenuAside from '@/components/menu/MenuAside.vue'
import HeaderApp from "@/components/header/header.vue"

export default {
    methods: {
    },
    components:{
        MenuAside, HeaderApp
    },
    mounted(){
        var calendarEl = document.getElementById("kt_calendar_app");

        // eslint-disable-next-line
        var calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: "prev,next today",
                center: "title",
                right: "timeGridWeek,timeGridDay"
            },
            height: 800,
            contentHeight: 780,
            aspectRatio: 3,
            nowIndicator: true,
            views: {
                timeGridWeek: { buttonText: "week" }
            },
            initialView: "timeGridWeek",
            slotMinTime: "11:00:00", 
            slotMaxTime: "21:00:00",
            editable: true,
            dayMaxEvents: true,
            navLinks: true,
            events: [
                { title: 'Menu Midi', start: '2024-01-17T12:00:00', end: '2024-01-17T13:00:00' },
                { title: 'Menu Soir', start: '2024-01-17T20:00:00', end: '2024-01-17T21:00:00' },
            ],
        });

        calendar.render();
    }
}
</script>
