
<template>
  <div class="reg--container">
    <h1>Photo</h1>
    <transition name="mw">
      <div class="image--open" v-if="open">
        <div class="testImage">
            <img :src="testImg" id="photo" v-if="testImg">
        </div>
        <button class="close" @click="open = !open"><v-icon>clear</v-icon></button>
        <button @click="back" >back</button>
        <button @click="next">next</button>
      </div>
    </transition>
    <v-flex class="flex" md12 @click="eventImg($event)">
      <div v-for="image in images" :key="image.url" class="photo--collection">
        <transition appear name="image">
        <img :src="image.url">
      </transition>
      </div>
      <div class="clearfix"></div>
    </v-flex>
  </div>
</template>

<script>
export default {
  data () {
    return {
      testImg: '',
      index: 0,
      open: false
    }
  },
  computed: {
    minWidth () {
      var width = document.getElementById(photo)
    },
    defaultImg () {
      return this.images[0].url
    },
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
    next () {
      this.index++;
      if (this.index >= this.images.length) this.index = 0;
      this.testImg = this.images[this.index].url;
    },
    back () {
      this.index--;
      if (this.index < 0) this.index = this.images.length - 1;
      this.testImg = this.images[this.index].url;
    },
    eventImg (event) {
      //for (var key in event.target) {
      //  console.log('key: ' + key + '||' + 'event.key: ' + event.target[key]) 
     // }
     if (event.target.tagName !== 'IMG') {
       return
     }
      this.testImg = event.target.src
      for (var i = 0; i < this.images.length; i++) {
        if (this.images[i].url === event.target.src) {
          this.index = i;
          console.log('index-' + this.index)
        }
      };
      this.open = true;
    }, 
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
  watch: {
  },
  created () {
    this.$store.dispatch('fechImages')
    .then(() => {
    })
    this.$store.dispatch('fetchUserData')
    
  }
}
</script>

<style scoped> 
.close {
  position: absolute;
  right: 5px;
  top: 5px;
}

button {
  height: 30px;
  width: 70px;
  background-color: #b5b8bc;
}
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
  .testImage {
    
    display: block;
    width: 100%;
    height: 95%;
    padding-top: 20px;
  
  }


  .image--open {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    min-width: 80%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
  }
  .flex {
    margin-left: 20px;
    white-space: wrap;
    justify-content: center;
    
  }

  .photo--collection {
    float: left;
    display: flex;
    height: 150px;
    min-width: 0px;
    padding: 2px;
    justify-content: center;
    margin: 0 10px 10px 10px;
    cursor: pointer;

  }

  img {
    max-height: 100%;
    max-width: 100%;
    height: 100%;
    margin: 0px auto;
    display: block
    
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