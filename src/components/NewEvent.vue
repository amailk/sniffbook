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
    export default {
        data() {
            return {
                title: 'John Silver',
                date: new Date(),
                time: new Date(),
            }
        },

        methods: {
            createEvent: function() {
                console.log("Creating event")
            }
        }
    }
</script>
