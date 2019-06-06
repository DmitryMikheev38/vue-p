<template>
<div>
  <v-progress-circular
    indeterminate
    size="50"
    class="progress"
    color="blue"
    v-if="loading"
  ></v-progress-circular>
  <div v-if="!loading">
    <div class="my--photo">
      <a>
        <img :src="userData.avatar" v-if="userData.avatar" width="230px">
        <img src="@/assets/me.jpg" v-else width="230px">
      </a>
      <button class="change--image" @click="openModalWindow">Изменить фото</button>
    </div>
    <div class="my--info">
      <h1 class="my--name">{{userData.name}} {{ userData.surname }} {{userId}}</h1>
        <table>
          <tr>
            <td>День рождения:</td>
            <td>{{userData.burnYear}}</td>
          </tr>
          <tr>
            <td>Город:</td>
            <td>{{userData.city}}</td>
          </tr>
          <tr>
            <td>Образование:</td>
            <td>{{userData.education}}</td>
          </tr>
          <tr>
            <td>Моб. телефон:</td>
            <td>{{userData.telephone}}</td>
          </tr>
          <tr>
            <td>ВУЗ:</td>
            <td>{{userData.university}}</td>
          </tr>
          <tr>
            <td>Факультет:</td>
            <td>{{userData.fac}}</td>
          </tr>
        </table>
        <h1 class="about--me">Обо мне</h1>

        <p>
          {{userData.description}}
        </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['userId'],
  data () {
    return {
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    userData () {
      return this.$store.getters.userData
    },
    loading () {
      return this.$store.getters.loading
    },
    modalWindow () {
      return this.$store.getters.getModalWindow
    }
  },
  methods: {
    openModalWindow () {
      var openWindow = true
      this.$store.dispatch('changeModalwindow', openWindow)
    }
  },
  created () {
    this.$store.dispatch('fetchUserData')
    .then(() => {
    })
  }
  
}
</script>

<style scoped>
.progress {
  margin-left: 350px;
  margin-top: 150px;
  
}

.my--photo {
  background-color:  rgb(244, 247, 252);
  width: 250px;
  overflow:hidden;
  padding: 10px;
  float: left;
  box-shadow: 0px 3px 5px -1px rgb(97, 102, 109);
}
.change--image {
  width: 230px;
  background-color: grey;
  border-radius: 20px;
  height: 40px;
  margin-top: 5px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.change--image:focus {
  outline: none;
}

.my--info {
  background-color:  rgb(244, 247, 252);
  float: right;
  width: 520px;
  min-height: 200px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  box-shadow: 0px 3px 5px -1px rgb(97, 102, 109);
  padding: 15px;
  word-wrap: break-word; 
}
</style>
