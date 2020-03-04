<template>
    <div class="container">
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

         <b-button type="is-primary">Login</b-button>
    </div>
</template>

<script>
export default {
    
}
</script>