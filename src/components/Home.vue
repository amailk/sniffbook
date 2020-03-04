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
                            <img class="is-rounded" src="../assets/profile.jpg">
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
                            <p class="text">02 Jan 2020</p>
                        </article>
                    </div>
                    <div class="tile">
                        <!-- Add content or other tiles -->
                        <article class="tile is-child box">
                            <figure class="image is-square">
                                <img src="../assets/post2.jpg">
                            </figure>
                            <p class="text">15 Jan 2020</p>
                        </article>
                    </div>
                    <div class="tile">
                        <!-- Add content or other tiles -->
                        <article class="tile is-child box">
                            <figure class="image is-square">
                                <img src="../assets/post3.jpg">
                            </figure>
                            <p class="text">20 Feb 2020</p>
                        </article>
                    </div>
                </div>
            </b-tab-item>

            <b-tab-item label="Events">
                <div class="list is-hoverable">

                    <a class="list-item">
                        <div class="content">
                            <p class="title is-5">Golden Retreiver Meetup</p>
                            <time datetime="2016-1-1">2:00 PM - 20 Jan 2020</time>
                        </div>
                    </a>

                    <a class="list-item">
                        <div class="content">
                            <p class="title is-5">Puppy Training</p>
                            <time datetime="2016-1-1">5:00 PM - 24 Feb 2020</time>
                        </div>
                    </a>

                    <a class="list-item">
                        <div class="content">
                            <p class="title is-5">Puppy Socialization</p>
                            <time datetime="2016-1-1">12:00 PM - 20 Mar 2020</time>
                        </div>
                    </a>

                    <a class="list-item">
                        <div class="content">
                            <p class="title is-5">March Break Dog Meetup</p>
                            <time datetime="2016-1-1">9:00 AM - 21 Mar 2020</time>
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
export default {
    
}
</script>