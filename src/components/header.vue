<template>
  <div class="conteiner">
    <div class="conteiner--center">
      <h1>my page</h1>
        <router-link v-if="!isUserLoggedIn" tag="button" to="/login" class="list--menu auth" ><v-icon class="v--icon" color="white">person</v-icon><span>Вход</span></router-link>
        <router-link v-if="!isUserLoggedIn" tag="button" to="/reg" class="list--menu reg" ><v-icon class="v--icon" color="white">how_to_reg</v-icon><span>Регистрация</span></router-link>
        <button class="list--menu" @click="logOut" v-if="isUserLoggedIn"><v-icon class="v--icon" color="white">exit_to_app</v-icon><span>Выход</span></button>
    </div>
  </div>
</template>

<script>
export default {
 data () {
   return {
     counter: 0
   }
 },
 computed: {
   isUserLoggedIn () {
     return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.$store.getters.isUserLoggedIn) {
        return []
      } else {
        return [
          {title: 'Войти в акаут', url: '/login', key: 1, icons: 'account_box'},
          {title: 'Регистрация', url: '/reg', key: 2, icons: 'how_to_reg'}
          ]
      }
    }
 },
 methods: {
   logOut () {
     this.$store.dispatch('logOutUser')
     localStorage.removeItem('user')
     this.$router.push('/login')
   }
 }
}
</script>

<style scoped>
.conteiner {
  background-color:rgb(60, 103, 173);
  min-width: 100%;
  height: 50px;
}

.conteiner--center {
  background-color:rgb(60, 103, 173);
  width: 1000px;
  margin-left: AUTO;
  margin-right: auto;
  height: 50px;
}
.list--menu {
  float: right;
  height: 50px;
  padding: 0px;
  width: 50px;
  background-color:rgb(60, 103, 173);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-radius: 30px;
  overflow: hidden;
  vertical-align: bottom;
  transition: width .5s, background-color .3s;

}

.list--menu:focus {
  outline: none;
}
.v--icon {
  background-color:rgb(60, 103, 173);
  float: left;
  margin-right: 0px;
  padding: 12px;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  transition: background-color .3s
}
.list--menu span {
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  margin-top: 12px;
  width: 0px;
  float: left;

}


.list--menu:hover {
  width: 120px;
  background-color: rgb(31, 66, 124);
}

.auth:hover  {
  width: 110px;
}

.reg:hover {
  width: 175px;
}

.list--menu:hover .v--icon {
  background-color: rgb(31, 66, 124);
}



h1 {
  display: block;
  float: left;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding-top: 5px;
  padding-bottom: 5px;
  color: rgb(234, 240, 249);
}

</style>
