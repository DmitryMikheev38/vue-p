import Vue from 'vue'
import Router from 'vue-router'
import RouterGuarg from './router-guard'
import AboutMe from '@/components/myRoute/AboutMe'
import Photo from '@/components/myRoute/Photo'
import Video from '@/components/myRoute/Video'
import Redaction from '@/components/myRoute/Redaction'
import Registration from '@/components/myRoute/Registration'
import Login from '@/components/myRoute/Login'
import ChangeData from '@/components/myRoute/ChangeData'
import PhotoBig from '@/components/myRoute/PhotoBig'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'me',
      component: AboutMe,
      beforeEnter: RouterGuarg
    },
    {
      path: '/photo/',
      name: 'photo',
      component: Photo,
      beforeEnter: RouterGuarg
    },
    {
      path: '/redaction',
      name: 'redaction',
      component: Redaction,
      beforeEnter: RouterGuarg
    },
    {
      path: '/reg',
      name: 'registration',
      component: Registration
    },
    {
      path: '/video',
      name: 'video',
      component: Video,
      beforeEnter: RouterGuarg
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/change',
      name: 'change',
      component: ChangeData
    },
    {
      path: '/photoBig/:id',
      name: 'photoBig',
      component: PhotoBig,
      props: true
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
