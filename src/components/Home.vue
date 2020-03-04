<template>
    <div>
        <b-navbar>
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="../assets/logo.png"
                        alt="Sniffbook logo"
                    >
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item href="#">
                    Home
                </b-navbar-item>
            </template>

            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>

        <section class="hero">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-one-fifth">
                        <figure class="image is-150x150">
                            <img class="is-rounded" src="../assets/profile.png">
                        </figure>
                    </div>
                    <div class="column">
                        <h1 class="title">
                            Felix  
                        </h1>
                        <h2 class="subtitle">
                            Kitchener, ON
                        </h2>
                    </div>
                </div>
            </div>
        </section>

        <b-tabs v-model="activeTab">
            <b-tab-item label="Posts">
                <div class="tile is-ancestor">
                    <div class="tile">
                        <!-- Add content or other tiles -->
                        <article class="tile is-child box">
                            <figure class="image is-square">
                                <img src="../assets/post1.jpg">
                            </figure>
                            <p class="text">2019 Jan 15</p>
                        </article>
                    </div>
                    <div class="tile">
                        <!-- Add content or other tiles -->
                        <article class="tile is-child box">
                            <figure class="image is-square">
                                <img src="../assets/post2.jpg">
                            </figure>
                        </article>
                    </div>
                    <div class="tile">
                        <!-- Add content or other tiles -->
                        <article class="tile is-child box">
                            <figure class="image is-square">
                                <img src="../assets/post3.jpg">
                            </figure>
                        </article>
                    </div>
                </div>
            </b-tab-item>

            <b-tab-item label="Events">
                Lorem <br>
                ipsum <br>
                dolor <br>
                sit <br>
                amet.
            </b-tab-item>

            <b-tab-item label="Adventures">
                <p>Map Here</p>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
export default {
    
}
</script>