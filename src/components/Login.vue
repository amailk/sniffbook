<template>
    <div class="columns is-vcentered is-centered">
        <div class="column is-one-third">

            <figure class="image is-3by1">
                <img src="../assets/logo.png">
            </figure>

            <b-field label="Username"
                type="is-success"
                message="This username is available">
                <b-input value="johnsilver" maxlength="30"></b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password"
                    value="iwantmytreasure"
                    password-reveal>
                </b-input>
            </b-field>

            <b-field horizontal>
                <p class="control">
                    <button class="button is-primary">Login</button>
                </p>
            </b-field>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>