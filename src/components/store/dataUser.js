import * as fb from 'firebase'


class AdUsData {
  constructor (name = '', surname = '', ownerId = '', burnYear = '', city = '', education = '', telephone = '', university = '', fac = '', formStudy = '', description = '', avatar = '', images = [], id = null) {
    this.name = name,
    this.surname = surname,
    this.ownerId = ownerId,
    this.burnYear = burnYear,
    this.city = city,
    this.education = education,
    this.telephone = telephone,
    this.university = university,
    this.fac = fac,
    this.formStudy = formStudy,
    this.description = description,
    this.avatar = avatar
    this.images = images
    this.id = id
  }
}

 export default {
   state: {
    userData: [],
   },
   mutations: {
    loadUserData (state, payload) {
      state.userData = payload
    }
   },
   actions: {
     async createUserData ({commit, getters}, payload) {
       const adUsData = new AdUsData (payload.name, payload.surname, getters.user.id)
       commit('clearError')
       try {
        await fb.database().ref(`/users/${getters.user.id}/user`).push(adUsData)
        commit('loadUserData', adUsData)
       } catch (error) {
         commit('error', error.message)
         throw error
       }
     },
     async fetchUserData ({commit, getters}) {
      commit('clearError')
      commit('setLoading', true)
      

      const resultUserData = []

      try {
        const fbVal = await fb.database().ref(`/users/${getters.user.id}/user`).once('value')
        const userData = fbVal.val()
        
        Object.keys(userData).forEach(key => {
          const o = userData[key]
          
          resultUserData.push(
            new AdUsData(o.name, o.surname, o.ownerId, o.burnYear, o.city, o.education, o.telephone, o.university, o.fac, o.ormStudy, o.description, o.avatar, o.images, key)
          )
        })
        
        commit('loadUserData', resultUserData)
        console.log(userData)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
      }
    },
    async changeUserData ({commit, getters}, payload) {
      commit('clearError')
      
      try {
       
        await fb.database().ref(`/users/${getters.user.id}/user`).child(payload.id).update(payload)
        

      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    },
    async changeUserDataImage ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      const image = payload.avatar
      try {
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))
        await fb.storage().ref(`users/${getters.user.id}.${imageExt}`).put(image)
        const imageSrc = await fb.storage().ref(`users/${getters.user.id}.${imageExt}`).getDownloadURL()
        payload.avatar = imageSrc
        await fb.database().ref(`/users/${getters.user.id}/user`).child(payload.id).update(payload)
        commit('setLoading', false)
        commit('setModalWindow', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    }
    },
   getters: {
    userData (state) {
      return state.userData[0]
    }
   }

 }