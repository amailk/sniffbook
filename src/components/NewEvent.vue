<template>
    <form action="">
        <div class="modal-card" style="width: 960, height: 960">
            <header class="modal-card-head">
                <p class="modal-card-title">New Event</p>
            </header>

            <section class="modal-card-body">    
                <b-field label="Title">
                    <b-input v-model="title"></b-input>
                </b-field>

                <b-field label="Select a date">
                    <b-datepicker
                        placeholder="Click to select..."
                        icon="calendar-today"
                        trap-focus>
                    </b-datepicker>
                </b-field>

                <b-field label="Select time">
                    <b-timepicker
                        rounded
                        placeholder="Click to select..."
                        icon="clock"
                        :hour-format="12">
                    </b-timepicker>
                </b-field>

            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary" @click="createEvent()">Create Event</button>
            </footer>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                name: 'John Silver'
            }
        },

        methods: {
            createEvent: function() {
                console.log("Creating event")
            }
        }
    }
</script>
