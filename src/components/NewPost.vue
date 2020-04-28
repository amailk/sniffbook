<template>
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">New Post</p>
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

                <b-field class="file">
                    <b-upload v-model="file">
                        <a class="button is-primary">
                            <b-icon icon="upload"></b-icon>
                            <span>Click to upload</span>
                        </a>
                    </b-upload>
                    <span class="file-name" v-if="file">
                        {{ file.name }}
                    </span>
                </b-field>



            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary" @click="createEvent()">Post</button>
            </footer>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Title here",
                file: null,
            }
        },

        methods: {
            createEvent: function() {
                console.log("Creating post")
            }
        }
    }
</script>
