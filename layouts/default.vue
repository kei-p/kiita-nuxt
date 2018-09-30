<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title"/>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt v-if="loading == false"/>
      </v-container>
    </v-content>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import firebase from '~/plugins/firebase'

  export default {
    data() {
      return {
        loading: true,
        clipped: false,
        drawer: false,
        fixed: false,
        items: [],
        miniVariant: false,
        right: false,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    created() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.$store.commit('auth/setUser', user);
        } else {
          this.$router.replace('/sign_in')
        }
        this.loading = false
      });
    },
  }
</script>
