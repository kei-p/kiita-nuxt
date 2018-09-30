<template>
  <div>
    <h1>Hello World</h1>
    <div v-if="this.$store.state.auth.user">
      {{ this.$store.state.auth.user.email }}
      <v-btn
        class="sign-out-btn"
        @click="signOut"
      >
        Signout
      </v-btn>
    </div>
  </div>
</template>


<script>
  export default {
    methods: {
      signOut() {
        this.$store.dispatch('auth/signOut')
      }
    },
  }
</script>
