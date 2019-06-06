<template>
  <div class="container">
    <transition name="mw">
    <div v-if="modalWindow" class="modal--display">
      <transition appear name="window">
      <div class="modal--window" v-if="modalWindow">
        <button class="close" @click="closeModalwindow"><v-icon>clear</v-icon></button>
        <img class="image--avatar" :src="iamgeSrc" v-if="iamgeSrc">
        <img class="image--avatar" :src="userData.avatar" v-if='!iamgeSrc'>
        <button class="save" @click="save(userData)"
        :disabled="!iamgeSrc"
        >
          <v-progress-circular
          indeterminate
          size="24"
          color="blue"
          v-if="loading"
          ></v-progress-circular>
          <span class="button--span" v-if="!loading">Сохранить</span>
          </button>
        <button class="upload" @click="triggerUpload">
          <span class="button--span" v-if="!loading">Загрузить</span>
        </button>
        <input ref="fileInput"
        type="file"
        style="display: none;"
        accept="image/*"
        @change="onFileChange"
        >
        <div class="clearfix"></div>
      </div>
      </transition>
      
    </div>
    </transition>
    <transition name="mw">
    <div v-if="imageData.src" class="modal--display">
      <div class="modal--window">
        <button class="close" @click="closeUploadImage"><v-icon>clear</v-icon></button>
        <img class="image--avatar" :src="imageData.src">
        <button class="save" @click="saveUploadImage(imageData)">
          <v-progress-circular
          indeterminate
          size="24"
          color="blue"
          v-if="loading"
          ></v-progress-circular>
          <span class="button--span" v-if="!loading">Сохранить</span>
          </button>
          <div class="clearfix"></div>
      </div>
    </div>
    </transition>
    <div class="body">
      <div class="page--menu">
        <router-link tag="button" class="btn--menu"
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        active-class="active"
        exact
        >
          <v-icon class="btn--menu-icon"
          >
            {{link.icon}}
          </v-icon>
          <span>{{link.title}}</span>
        </router-link>
      </div>
      
      <div class="page--content">
        <transition appear name="view">
        <router-view></router-view>
        </transition>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {title: 'Обо мне', icon: 'person', url: '/'},
        {title: 'Фото', icon: 'camera_alt', url: '/photo'},
        {title: 'Видео', icon: 'camera_roll', url: '/video'},
        {title: 'Редактирование', icon: 'create', url: '/change'}
      ],
      image: null,
      iamgeSrc: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    modalWindow () {
      return this.$store.getters.getModalWindow
    },
    userData () {
      return this.$store.getters.userData
    },
    bigImg () {
      return this.$store.getters.getBigImg
    },
    imageData () {
      return this.$store.getters.getImageData
    }
  },
  methods: {
    closeUploadImage () {
      const closeWindow = {
        src: '',
        file: null
      };
      this.$store.dispatch('closeUploadImage', closeWindow)
    },
    closeModalwindow () {
      var closeWindow = false;
      this.$store.dispatch('changeModalwindow', closeWindow)

    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]

      const reader = new FileReader()
      console.log(reader.result)
      reader.onload = e => {
        this.iamgeSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.userData.avatar = file
    },
    save (userData) {
      this.$store.dispatch('changeUserDataImage', userData)
      .then(() => {
          this.$router.push('/')
        })
        .catch((err) => console.log(err))
      },
      saveUploadImage (imageData) {
        this.$store.dispatch('saveUploadImage', imageData.file)
        .then(() => {
          this.$router.push('/photo')
        })
        .catch((err) => console.log(err))

      
      }
    }
}
</script>

<style scoped>

.view-enter {
  opacity: 0;
}

.view-enter-active {
  transition: 0.8s
}
.view-leave-active {
  transition: 0s
}
.view-leave-to {
  opacity: 0;
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


.image--avatar {
  display: block;
  max-height: 500px;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  padding-top: 30px;
}

div .modal--display {
  margin: 0;
  float: left;
  position: absolute;
  top: 50px;
  right: px;
  display: block;
  
  width: 100%;
  min-height: 1080px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.close {
  float: right;
  right: 5px;
  top: 5px;
}

.modal--window {
  max-width: 600px;
  max-height: 600px;
  margin: 0 auto;
  left: 450px;
  opacity: 100%;
  background-color: aliceblue;
  z-index: 9999;
  margin-top: 30px;

}


.container {
  background-color:rgb(208, 221, 244);
  max-width: 100%;
  min-height: 1080px;
  padding: 0;
  padding-top: 15px;
  
  
}
.body {
  width: 1000px;
  background-color:rgb(208, 221, 244);
  height: 50px;
  margin-right: auto;
  margin-left: auto;
  min-height: 1000px;
  padding: 0px;
}
.page--menu {
  background-color:rgb(208, 221, 244);
  width: 200px;
  min-height: 500px;
  float: left;
  
}
.page--content {
  width: 790px;
  float: right;
  padding-top: 0px;
}
.btn--menu {
  display: block;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  text-align: left; 
  padding-left: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.btn--menu:hover {
  background-color:rgb(131, 174, 247);
}
.active {
  outline: none;
  background-color:rgb(60, 103, 173);
  color: white;
}
.active  .btn--menu-icon {
  color: white;
}

.btn--menu:focus .btn--menu-icon {
  color: white;

}
.button--span {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
}
.btn--menu:focus {
  outline: none;
  background-color:rgb(60, 103, 173);
  color: white;
}

.btn--menu-icon {
  padding-left: 5px;
  float: left;
  padding-right: 10px;
}
span {
  display: block;
  float: left;
  margin-top: 3px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif

}

.save {
  float: right;
  width: 110px;
}

.upload {
  float: left;
  width: 100px;
}

.save, .upload {
  display: block;
  background-color:  rgb(35, 85, 160);
  height: 40px;
  min-width: 70px;
  padding: 10px 15px;
  border-radius: 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 15px;
  color: rgb(234, 239, 247);
  box-shadow: 2px 5px 5px 0px rgb(97, 102, 109);
  cursor: pointer;
  text-align: center;
  margin: 30px;

}

.save:focus, .upload:focus {
  outline: none;
}

.save:active, .upload:active {
  color: #b5b8bc;
  box-shadow: 0px 0px 5px 0px rgb(97, 102, 109);
  
}

.button--span {
  margin: auto
}

.clearfix {
  height: 0px;
  clear: both;
  background-color: #e74c3c;
}
</style>

