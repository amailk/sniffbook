<template>
    <div>
        <b-navbar class="navbar">
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img class="logo-top"
                        src="../assets/logo.png"
                        alt="Sniffbook logo"
                    >
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <b-button tag="router-link"
                            to="/register"
                            type="is-primary">
                            Register
                        </b-button>
                        <b-button tag="router-link"
                            to="/login"
                            type="is-light">
                            Login
                        </b-button>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>

        <section class="hero">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-one-fifth">
                        <figure class="image is-150x150">
                            <img class="is-rounded" :src="profilePhotoUrl">
                        </figure>
                    </div>
                    <div class="column">
                        <h1 class="title">
                            {{ userData.name }}  
                        </h1>
                        <h2 class="subtitle">
                            {{ userData.city }}, {{ userData.province }}
                        </h2>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <button class="button is-primary is-medium" @click="isNewEventModalActive = true">
                New Event
            </button>

            <b-modal :active.sync="isNewEventModalActive"
                    has-modal-card
                    trap-focus
                    :destroy-on-hide="false"
                    aria-role="dialog"
                    aria-modal>
                <new-event/>
            </b-modal>
        </section>

        <b-tabs v-model="activeTab">
            <b-tab-item label="Posts">
                <span v-for="row in numRows" v-bind:key="row">
                    <div class="tile is-ancestor">
                        <post
                            v-for="postId in postsForRow(row)"
                            v-bind:postId="postId"
                            v-bind:key="postId" />
                    </div>
                </span>        
            </b-tab-item>

            <b-tab-item label="Events">
                <div class="list is-hoverable">

                    <a class="list-item" v-for="event in events" v-bind:key="event.title">
                        <div class="content">
                            <p class="title is-5">{{ event.title }}</p>
                            <time datetime="2016-1-1">{{ event.time }}  - {{ event.date }}</time>
                        </div>
                    </a>    
                </div>
            </b-tab-item>

            <b-tab-item label="Adventures">
                <p>Map Here</p>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>

import Post from './Post.vue'
import NewEvent from './NewEvent.vue'

import { db } from '../firebase'
import { storage } from '../firebase'

const userId = "user_id1"
const numColumns = 3

export default {
    data() {
        return {
            userData: {},
            posts: null,
            profilePhotoUrl: '',
            numColumns: numColumns,
            events: null,
            isNewEventModalActive: false,
        }
    },

    firebase: {
        posts: db.ref('users').child(userId).child("posts"),
        userData: db.ref('users').child(userId).child("user_data"),
        events: db.ref('events')
    },

    watch: {
        userData: function() {
            storage.ref().child(this.userData.profileImage).getDownloadURL().then(downloadURL => {
                this.profilePhotoUrl = downloadURL
            })
        }
    },

    components: {
        Post,
        NewEvent,
    },

    computed: {
        numRows: function() {
            if (this.posts) {
                return Math.ceil(this.posts.length / numColumns)
            } else {
                return 1
            }
        }
    },

    methods: {
        postsForRow: function(row) {
            let result = []
            if (this.posts) {
                for(var i = numColumns * (row-1); i < numColumns * (row); i++) {
                    if (i >= this.posts.length) break
                    result.push(this.posts[i])
                }
            }
            console.log("Row ", row)
            console.log(result)
            return result
        },
    },
}
</script>