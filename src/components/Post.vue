<template>
    <div class="tile">
        <article class="tile is-child box">
            <p class="title">{{ postData.title }}</p>
            <p class="text">{{ postData.date }}</p>
            <figure class="image is-square">
                <img :src="imageUrl">
            </figure>
        </article>
    </div>
</template>

<script>
import { db } from '../firebase'
import { storage } from '../firebase'

const posts = db.ref("posts")

export default {
    props: ['postId'],

    data() {
        return {
            postData: {},
            imageUrl: '',
        }
    },

    watch: {
        postData: function() {
            storage.ref().child(this.postData.image).getDownloadURL().then(downloadURL => {
                this.imageUrl = downloadURL
            })
        },

        postId: {
            // call it upon creation too
            immediate: true,
            handler(id) {
                this.$rtdbBind('postData', posts.child(id))
            },
        },
    },
}

</script>