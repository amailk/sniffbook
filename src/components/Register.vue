<template>
    <div class="columns is-centered">
        <div class="column is-one-third">

            <b-field label="Name" :label-position="labelPosition">
                <b-input value="Kevin Garvey"></b-input>
            </b-field>

            <b-field label="Email"
                :label-position="labelPosition"
                type="is-danger"
                message="This email is invalid">
                <b-input type="email"
                    value="john@"
                    maxlength="30">
                </b-input>
            </b-field>

            <b-field label="Username"
                :label-position="labelPosition"
                type="is-success"
                message="This username is available">
                <b-input value="johnsilver" maxlength="30"></b-input>
            </b-field>

            <b-field label="Password"
                :label-position="labelPosition"
                type="is-danger"
                :message="['Password is too short', 'Password must have at least 8 characters']">
                <b-input value="123" type="password" maxlength="30"></b-input>
            </b-field>


            <b-field label="Repeat Password"
                :label-position="labelPosition"
                type="is-danger"
                :message="['Passwords must match']">
                <b-input value="123" type="password" maxlength="30"></b-input>
            </b-field>

            <b-field horizontal>
                <p class="control">
                    <button class="button is-primary">Register</button>
                </p>
            </b-field>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>