import * as fb from 'firebase'

export default {
  state: {
    modalWindow: false,
    bigImg: false
  },
  mutations: {
    setModalWindow (state, payload) {
      state.modalWindow = payload
    },
    setBigImg (state, payload) {
      state.bigImg = payload
    }
  },
  actions: {
    changeModalwindow ({commit}, payload) {
      commit('setModalWindow', payload)
    },
    changeBigImg ({commit}, payload) {
      commit('setBigImg', payload)
    }
  },
  getters: {
    getModalWindow (state) {
      return state.modalWindow
    },
    getBigImg (state) {
      return state.bigImg
    }
  }
}