<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">New Event</p>
        </header>

        <section class="modal-card-body">    
            <b-field label="Title">
                <b-input v-model="title"></b-input>
            </b-field>

            <b-field label="Select a date">
                <b-datepicker v-model="date" 
                    inline>
                </b-datepicker>
            </b-field>

            <b-field label="Select a time">
                <b-timepicker v-model="time" inline hour-format="12"></b-timepicker>
            </b-field>


        </section>

        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary" @click="createEvent()">Create Event</button>
        </footer>
    </div>
</template>

<script>

import { db } from '../firebase'

export default {
    data() {
        return {
            title: 'My Event Title',
            date: new Date(),
            time: new Date(),
        }
    },

    methods: {
        createEvent: function() {
            db.ref('events').push(
                {
                    title: this.title,
                    date: this.date.toISOString().slice(0,10).replace(/-/g,"/"),
                    time: this.time.toLocaleTimeString(),
                }
            )

            this.$parent.close()
        }
    }
}
</script>
