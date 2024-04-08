<script>
import {store} from './partials/data/store'
export default {
  data(){
    return{
      isMenuVisible: false,
      videoSrc: '',
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible; 
    },
    playMusic(){
      this.videoSrc = 'https://www.youtube.com/embed/OmRIeBtjIi8?autoplay=1';
    }
  }
}
</script>

<template>
  <header class="container-fluid">
    <iframe
      width="1"
      height="1"
      :src="videoSrc"
      frameborder="0"
      allow="encrypted-media;"
      >
    </iframe>
    <div class="d-flex justify-content-between headbar">
        <img 
        src="../assets/images/avada-music-logo.png" 
        @click="playMusic"
        class="musci-button"
        alt="">
        <span 
        class="burger"
        @click="toggleMenu">
          <i class="fa-solid fa-bars"></i>
        </span>
        <div 
        class="full-page-menu" 
        v-if="isMenuVisible">
        <div class="logo-container">
          <img src="../assets/images/avada-music-logo.png" alt="AVADA MUSIC"
          @click="toggleMenu"
          class="escape"></img>
        </div>
          <ul class="menu text-center">
            <li>Home</li>
            <li>Meet The Band</li>
            <li>Live Dates</li>
            <li>Latest News</li>
            <li>Albums</li>
            <li>Fans</li>
          </ul>
        </div>
      </div>
    <div class="row mt-5 ">
      <div class="col-12 text-center center">
        <h1 class="text-center">Untold Stories</h1>
        <h6>There is an untold story behind every favorite song.</h6>
        <div>
          <button type="button" class="btn btn-danger">LATEST ALBUM</button>
          <button type="button" class="btn btn-transparent trasparente">LIVE DATES</button>
        </div>


      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/_variables.scss';

  header {
    width: 100%; 
    height: 1300px; 
    background-image: url('../assets/images/home_slider.jpg'); 
    background-position: center; 
    background-size: cover; 
    background-repeat: no-repeat; 
    display: flex; 
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center; 
    color: white; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
  }

  .center {
  height: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-self: center; 
  margin-top: 10%;
  }

  .headbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px; 
  box-sizing: border-box; 
  span{
    font-size: 2rem;
  }
}

  .burger{
    cursor: pointer;
  }

  h1{
    font-size: 11em;
    font-weight: bold;
  }

  h6{
    font-size: 2.5rem;
  }

  button{
    margin: 10px;
    color: white;
    margin-top: 3%;
    font-size: 2rem;
    &:hover{
      background-color: white;
      color: black;
    }
  }

  .trasparente{
    background-color: Transparent;
    background-repeat:no-repeat;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    border: solid 1px white;
  }

  .escape{
    cursor: pointer;
  }

  .full-page-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: $header-bg-collapse;
  z-index: 1050; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
  opacity: 1; 
  padding-top: 20px;
}

.menu{
  list-style: none;
  color: grey;
  li{
    font-size: 2rem;
    margin: 20px;
    cursor: pointer;
    &:hover{
      color: white;
    }
  }
}

  .fa-bars{
    font-size: 2rem;
}

.logo-container {
  align-self: flex-start;
  position: absolute; 
  top: 0;
  left: 0;
  padding: 20px; 
}

.music-button{
  cursor: pointer;
}
</style>