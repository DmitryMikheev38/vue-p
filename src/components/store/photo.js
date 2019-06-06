import * as fb from 'firebase' 
import { Store } from 'vuex';

export default {
  state: {
    images: [],
    imageData: {
      src: '',
      file: null
    }
  },
  mutations: {
    setImageData (state, payload) {
      state.imageData = payload
    },
    setImages (state, payload) {
      state.images = payload
    }
  },
  actions: {
    setImageData ({commit}, payload) {
      commit('setImageData', payload)
    },
    closeUploadImage ({commit}, payload) {
      commit('setImageData', payload)
    },
    async saveUploadImage ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      const image = payload
      var idName = 'image' + Math.round(Math.random() * 1000000000)
      try {
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))
        await fb.storage().ref(`/userPhoto/${getters.user.id}/${idName}`).put(image)
        const imageSrc = await fb.storage().ref(`/userPhoto/${getters.user.id}/${idName}`).getDownloadURL()
        const imgData = {
          url: imageSrc,
          id: idName
        }
        await fb.database().ref(`/users/${getters.user.id}/user/images`).push(imgData)
        const resultImg = []
        const imgVal = await fb.database().ref(`/users/${getters.user.id}/user/images`).once('value')
        const img = imgVal.val()
        Object.keys(img).forEach(key => {
            const imgObj = {
              url: img[key].url,
              id: img[key].id,
              keyImage: key
            }
            resultImg.push(imgObj)
        })
        commit('setImages', resultImg)
        commit('setLoading', false)

        commit('setImageData', {src: '', file: null})
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fechImages ({commit, getters}) {
      commit('clearError')
      commit('setLoading', true)
      
      try {
        const resultImg = []
        const imgVal = await fb.database().ref(`/users/${getters.user.id}/user/images`).once('value')
        const img = imgVal.val()
        Object.keys(img).forEach(key => {
            const imgObj = {
              url: img[key].url,
              id: img[key].id,
              keyImage: key
            }
            resultImg.push(imgObj)
       })
       commit('setImages', resultImg)
       commit('setLoading', false)

      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async deleteImage ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const imageSrc = await fb.storage().ref(`/userPhoto/${getters.user.id}`).child(payload.id).delete()
        .then(() => {
          console.log('delete')
        }).catch((err) => {
          console.log(err)
        })
        await fb.database().ref(`/users/${getters.user.id}/user/images`).child(payload.keyImage).remove()
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    getImages (state) {
      return state.images
    },
    adImage (state) {
      return imgId => {
        return state.images.find(img => img.id === imgId)
      }
    },
    getImageData (state) {
      return state.imageData
    }
  }
}