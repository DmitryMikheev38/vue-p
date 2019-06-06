import * as fb from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}
export default {
  state: {
    user: null,
    ad: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
  },
  actions: {
    async registerUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password) 
        commit('setUser', new User(user.user.uid))
        var userId = JSON.stringify(user.user.uid)
        localStorage.setItem('user', userId)
        commit('setLoading', false)
      } catch(error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(user.user.uid))
        var userId = JSON.stringify(user.user.uid)
        localStorage.setItem('user', userId)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    autoLoginUser ({commit}, payload) {
      commit('setUser', new User(payload))
    },
    logOutUser ({commit}) {
      fb.auth().signOut()
      commit('setUser', null)
    },
  },
  getters: {
    user (state) {
      return state.user
    },
    isUserLoggedIn (state) {
      return state.user.id !== null
    }
  }
}