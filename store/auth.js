import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
const provider = new firebase.auth.GoogleAuthProvider()

const state = () => {
  return {
    user: firebase.auth().currentUser,
  }
}

const mutations = {
  setUser (state, user) {
    state.user = user;
  }
}

const actions = {
  signIn({commit}) {
    return new Promise((resolve, reject) => {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return firebase.auth().signInWithPopup(provider)
        }).then((result) => {
          const { user, credential } = result;
          commit('setUser', user);
          resolve();
        })
    })
  },
  signOut({commit}) {
    firebase.auth().signOut().then(function() {
      commit('setUser', null);
    })
  }
}

export default {
  state,
  mutations,
  actions
}
