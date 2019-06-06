<template>
<div class="reg--container">
<v-flex class="flex" md6 xs6>
  <h1>Добавление имени пользователя</h1>
 <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      label="Name"
      required
      solo
    ></v-text-field>

    <v-text-field
      v-model="surname"
      label="Surname"
      required
      solo
    ></v-text-field>
  </v-form>

   <button>
      Reset
   </button>

    <button @click="adUserData" >
      Changed
    </button>
</v-flex>
</div>
</template>

<script>
export default {
  data () {
    return {
        name: '',
        surname: '',
    }
  },
  computed: {
    userData () {
      return this.$store.getters.userData
    }
  },
  methods: {
    adUserData () {
      const userData = {
        name: this.name,
        surname: this.surname
      }
      this.$store.dispatch('createUserData', userData)
      .then(() => {
        this.$router.push('/')
      })
      .catch (error => console.log(error))
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
.reg--container {
  background-color: rgb(244, 247, 252);
  width: 790px;
  box-shadow: 0px 3px 5px -1px rgb(97, 102, 109);
  margin: 0px;
  padding: 0px;
}
.flex {
  margin-left: 180px;
}
button {
  display: inline-block;
 background-color:  rgb(35, 85, 160);
 height: 40px;
 min-width: 70px;
 padding: 10px;
 border-radius: 4px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 15px;
  color: rgb(234, 239, 247);
  box-shadow: 2px 5px 5px 0px rgb(97, 102, 109);
  cursor: pointer;
  text-align: center;
  margin-bottom: 30px;
}
button:active {
  color: #b5b8bc;
  box-shadow: 0px 0px 5px 0px rgb(97, 102, 109);
  
}
button:focus {
  outline: none;
}

button:first-child {
  float: left;
}
button:last-child {
  float: right;
}
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  padding: 20px;
}

button:disabled {
  background-color: #b5b8bc;
  box-shadow: 0px 0px 5px 0px rgb(97, 102, 109);
}
</style>
