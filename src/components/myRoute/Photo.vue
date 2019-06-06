<template>
<div>
  <v-progress-circular
    indeterminate
    size="50"
    class="progress"
    color="blue"
    v-if="loading"
  ></v-progress-circular>
  <div class="reg--container" v-if="!loading">
    <h1>Photo</h1>
    <div class="kk" @click="triggerUpload"><span>Добавить фото</span><v-icon class="v--icon">cloud_upload</v-icon></div>

    <v-flex class="flex" md12>
      
      <router-link class="photo--collection" v-for="image in images" :key="image.url" :to="'/photoBig/' + image.id">
      <transition appear name="image">
        <img :src="image.url" v-if="!loading">
      </transition>
      </router-link>
      <input ref="fileUpload" type="file" accept="image/*" style="display: none" @change="onFileChange">
      <div class="clearfix"></div>
    </v-flex>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
     loading () {
      return this.$store.getters.loading
    },
    images () {
      return this.$store.getters.getImages
    },
    imageData () {
      return this.$store.getters.getImageData
    },
     userData () {
      return this.$store.getters.userData
    }
  },
  methods: {
    triggerUpload () {
      this.$refs.fileUpload.click()
    },
    onFileChange (event) {
      var file = event.target.files[0]      
      const reader = new FileReader()
      reader.onload = e => {
        this.imageData.src = reader.result
      }
      reader.readAsDataURL(file)
      this.imageData.file = file
      this.$store.dispatch('setImageData', this.imageData)
      .then(() => {
      })
    }
  },
  created () {
    this.$store.dispatch('fechImages')
    .then(() => {
    })
  }
}
</script>

<style scoped>
.image-enter {
 transform: scale(0,0)
}
.image-enter-active {
  transition: 0.4s;
}

.image-leave-active {
  
  transition: transform 0.4s;
}

.image-leave-to {
  
  transform: scale(0,0);
}

  .reg--container {
    background-color: rgb(244, 247, 252);
    width: 790px;
    box-shadow: 0px 3px 5px -1px rgb(97, 102, 109);
    margin: 0px;
    padding: 0px;
    text-align: center;
    position: relative;

  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    margin-right: 10px;
    flex-grow: 1;
    justify-content: center;
    
  }

  .photo--collection {
    float: left;
    height: 150px;
    min-width: 0px;
    max-width: 250px;
    padding: 1px;
    display: flex;
    overflow: hidden;
    flex-grow: 1;
    justify-content: left;
    margin: 0 5px 10px 5px;
    cursor: pointer;

  }

  img {   
    max-width: 100%;
    height: 100%;
    margin: 0px auto;
}

.clearfix {
  height: 0px;
  clear: both;
}

h1 {
  padding: 25px 
}

.kk {
  position: absolute;
  top: 15px;
  right: 20px;
  float: right;
  height: 40px;
  width: 40px;
  background-color:rgb(60, 103, 173);
  justify-content: center;
  border-radius: 30px;
  padding-top: 8px;
  padding-right: 8px;
  box-shadow: 0px 1px 4px 0px rgb(97, 102, 109);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s;
  color: rgb(234, 239, 247);

}
.v--icon {
  position: relative;
  float: right;
  color: rgb(234, 239, 247);
  
}
.kk span {
 width: 140px;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  margin-top: 12px;

  float: left;
  position: absolute;
  right: 40px;
  top: -5px
}

.kk:hover {
  background-color: rgb(31, 66, 124);
  width: 185px;
}

.kk:active {
  color: #b5b8bc;
  box-shadow: 0px 0px 5px 0px rgb(97, 102, 109);
}

.progress {
  margin-left: 350px;
  margin-top: 150px;
  
}
</style>

