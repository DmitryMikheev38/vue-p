<template>
  <div class="reg--container">
    <transition name="mw">
      <div class="dialog--window" v-if="window">
        <p>Вы дейстиветьльно хотите удалить изображение?</p>
        <button class="yes" @click="deleteImage"><span>Да</span></button>
        <button class="no" @click="closeWindow"><span>Отмена</span></button>
        <div class="clearfix"></div>
      </div>
    </transition>
    <v-flex class="flex" md12>
      <button class="back" @click="$router.go(-1)"><v-icon class="v--icon" color="white">keyboard_backspace</v-icon><span>Назад</span></button>
      <button class="dell" @click="openWindow"><span>Удалить</span><v-icon class="v--icon" color="white">delete</v-icon></button>
      <div class="clearfix"></div>
      <div class="img--container">
        <img class="image" :src="image.url">
      </div>
    </v-flex>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      iid: this.$route.params['id'],
      window: false
    }
  },
  computed: {
    image () {
      const id = this.iid
      return this.$store.getters.adImage(id)
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    deleteImage () {
      const id = this.image
      this.$store.dispatch('deleteImage', id)
      .then(() => {
        this.$router.push('/photo')
      })
    },
    openWindow () {
      this.window = true;
    },
    closeWindow () {
      this.window = false;
    }
  }
}
</script>

<style scoped>
  .v--icon {
  
  float: left;
  margin-right: 0px;
  padding: 12px;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  transition: background-color 0.3s
}

  .reg--container {
    background-color: rgb(244, 247, 252);
    width: 790px;
     box-shadow: 0px 3px 5px -1px rgb(97, 102, 109);
    margin: 0px;
    padding: 20px;
    position: relative;
  }
  .yes span, .no span {
    color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
  }
  .dialog--window {
    background-color: rgb(244, 247, 252);
    box-shadow: 0px 1px 100px 1px rgb(97, 102, 109);
    width: 500px;
    height: 150px;
    padding: 0px;
    position: absolute;
    top: 150px;
    left:150px;
    
  }

  .clearfix {
    height: 0px;
    clear: both;
  }

  .flex {
    margin-left: px;
    white-space: wrap;
    justify-content: center;
  }

  .img--container {
    max-height: 600px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    margin: 0;
  }
  .image {
    display: block;
    max-height: 600px;
    margin: 0px auto;
    max-width: 100%;
    
  }
 
  .back:hover {
    width: 110px;
    background-color: rgb(31, 66, 124);
  }

  button {
  display: block;
  background-color:rgb(60, 103, 173);
  height: 40px;
  width: 40px;
  border-radius: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 15px;
  color: rgb(234, 239, 247);
  box-shadow: 0px 0px 4px 0px rgb(97, 102, 109);
  cursor: pointer;
  text-align: center;
  margin-bottom: 30px;
  overflow: hidden;
  transition: width .4s, background-color .3s;
}

.yes, .no {
  width: 100px;
  margin: 20px;
}
.yes {
  float: left;
}
.no {
  float: right;
}

.dialog--window p {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  margin: 0px auto;
  text-align: center;
  padding: 25px 0px;
}
.back span {
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  margin-top: 7px;
  width: 0px;
  float: left;

}

.back {
  float:left;
}

.dell {
  float: right;
  position: relative;
}

.dell .v--icon {
  float: right;
}

.dell:hover {
    width: 125px;
    background-color: rgb(214, 72, 72);
  }


.dell span {
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  margin-top: 12px;
  width: 0px;
  float: left;
  position: absolute;
  right: 110px;
  top: -5px

}


button:active {
  color: #b5b8bc;
  box-shadow: 0px 0px 5px 0px rgb(97, 102, 109);
  
}
button:focus {
  outline: none;
}

.clearfix {
  height: 0px;
  clear: both;
}

.mw-enter {
 transform: scale(0,0)
}
.mw-enter-active {
  transition: 0.4s;
}

.mw-leave-active {
  
  transition: transform 0.4s;
}

.mw-leave-to {
  
  transform: scale(0,0);
}

</style>




