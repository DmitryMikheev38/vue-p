import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/components/store/users'
import shared from '@/components/store/shared'
import dataUser from '@/components/store/dataUser'
import modalWindow from '@/components/store/modalWindow'
import photo from '@/components/store/photo'

Vue.use(Vuex)

export default new Vuex.Store({
 modules: {
   user, shared, dataUser, modalWindow, photo
 }
})