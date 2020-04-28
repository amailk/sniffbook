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
                    <b-datepicker v-model="date" 
                        inline>
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
                <button class="button is-primary" @click="createPost()">Post</button>
            </footer>
        </div>
</template>

<script>

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage';

import { db } from '../firebase'
import { storage } from '../firebase'

export default {
    props: ['userId', 'postIndex'],

    data() {
        return {
            title: "Title here",
            file: null,
            date: new Date(),
            uploadValue: 0,
            picture: null,
        }
    },

    methods: {
        createPost: function() {
            const storageRef = storage.ref(`${this.file.name}`)

            var uploadTask = storageRef.put(this.file)

            uploadTask.on('state_changed', function(snapshot){
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                    }
            }, function(error) {
                // Handle unsuccessful uploads
                console.log(error)
            }, () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at', downloadURL);
                });

                this.createPostObject(storageRef.fullPath)
            });
        },

        createPostObject: function(storageRefPath) {
            const dbRef = db.ref('posts').push(
                {
                    title: this.title,
                    date: this.date.toISOString().slice(0,10).replace(/-/g,"/"),
                    image: storageRefPath,
                }
            )

            console.log("published post", dbRef.key)
            db.ref("users").child(this.userId).child("posts").child(this.postIndex).set(dbRef.key)
            console.log("updated user posts")
            }
        }
    }
    </script>
