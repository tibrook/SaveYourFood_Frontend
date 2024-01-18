<template>
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <MenuAside />
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <HeaderApp :page="$t('Meals_Weekly')"/>
                <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                    <div class="container-xxl full-height" id="kt_content_container">
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
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['currentWeekMeals'])
    },
    methods: {
        ...mapActions(['fetchWeeklyMeals']),
        initializeCalendar(events) {
            var calendarEl = document.getElementById("kt_calendar_app");
            //eslint-disable-next-line
            var calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: "prev,next today",
                center: "title",
                right: "timeGridWeek,timeGridDay"
            },
            height: 800,
            contentHeight: 780,
            locale:'fr',
            aspectRatio: 3,
            nowIndicator: true,
            views: {
                timeGridWeek: { buttonText: "Semaine" }
            },
            initialView: "timeGridWeek",
            slotMinTime: "11:00:00", 
            slotMaxTime: "21:00:00",
            editable: true,
            dayMaxEvents: true,
            navLinks: true,
            events:events,
        });
            calendar.render();
        }
    },
    components:{
        MenuAside, HeaderApp
    },
    mounted(){
        this.fetchWeeklyMeals().then(() => {
        const events = this.currentWeekMeals.flatMap(meal => {
            if (meal.meal) {
                return [
                    {
                        title: meal.meal.title + ' (Midi)',
                        start: meal.date + 'T12:00:00',
                        end: meal.date + 'T13:00:00',
                    },
                    {
                        title: meal.meal.title + ' (Soir)',
                        start: meal.date + 'T20:00:00',
                        end: meal.date + 'T21:00:00',
                    }
                ];
            }
            return [];
        });
        this.initializeCalendar(events);
    });
    }
}
</script>
<style>
.full-height {
    height: 50vh;
    display: flex;
    flex-direction: column;
}

#kt_content_container {
    flex: 1; 
}
</style>
