import store from '../components/store/index'

export default function (to, from, next) {
  if (localStorage.getItem('user')) {
    next()
  } else {
    next('/login?loginError=true')
  }
}