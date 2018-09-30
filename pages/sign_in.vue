<template>
  <div>
    <h1>Sign in</h1>
    <v-btn
      class="sign-in-btn"
      @click="signIn"
    >
      Sign in with google
    </v-btn>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase'

  export default {
    created() {
      if (this.$store.state.auth.user) {
        this.$router.replace('/')
      }
    },
    methods: {
      signIn() {
        this.$store.dispatch('auth/signIn').then(() => {
          this.$router.replace('/')
        })
      }
    },
  }
</script>

<style>
.sign-in-btn {
  margin: 0;
  margin-top: 12px;
}
</style>
