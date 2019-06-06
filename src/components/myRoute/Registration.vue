<template>
<div class="reg--container">
<v-flex class="flex" md6 xs6>
  <h1>Create acaunt</h1>
 <v-form
    ref="form"
    lazy-validation
    v-model="valid"
  >
    <v-text-field
      v-model="email"
      label="E-mail"
      :rules="emailRules"
      required
      type="mail"
      solo
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      required
      :rules="passwordRules"
      :counter="6"
      solo
      type="password"
    ></v-text-field>

    <v-text-field
      v-model="confirmPassword"
      label="Confirm password"
      required
      solo
      type="password"
      :rules="confirmPasswordRules"
    ></v-text-field>
  </v-form>

   <button @click="reset">
      Reset
   </button>

    <button @click="createAcaunt" :disabled="!valid || loading">
      Create acaunt
    </button>
</v-flex>
</div>
</template>

<script>
export default {
  data () {
    return {
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
            v => (v && v.length >= 6) || 'Password must be or more than 6 characters'
          ],
        confirmPasswordRules: [
          v => !!v || 'Password is required',
          v => v === this.password || 'Пароли не совпадают'
        ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAcaunt () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
        .then(() => {
          this.$router.push('/redaction')
        })      
      }
    },
    reset () {
      this.email = '',
      this.password = '',
      this.confirmPassword = ''
    }
  }
  
}
</script>

<style scoped>
.reg--container {
  background-color: rgb(244, 247, 252);
  border-radius: 5px;
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
 border-radius: 20px;
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
