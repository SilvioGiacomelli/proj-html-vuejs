<script>
import { store } from './partials/data/store';

export default {
  props: {
    menuItems: {
      type: Array,
      required: true,
      default: () => []
    },
  },
  data(){
    return{
      isMenuVisible: false,
      videoSrc: '',
      store,
      isReduced: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible; 
    },
    playMusic(){
      if (this.videoSrc) {
        this.videoSrc = '';
      } else {
        this.videoSrc = 'https://www.youtube.com/embed/OmRIeBtjIi8?autoplay=1';
      }
    },
    vaiAiTour() {
      window.open('https://rollingstones.com/tour//', '_blank');
    },
    onScroll() {
      this.isReduced = window.pageYOffset > 20;
    },
  }
}
</script>

<template>
  <header class="container-fluid" :class="{ 'reduced': isReduced }">
    <iframe
      width="1"
      height="1"
      :src="videoSrc"
      frameborder="0"
      allow="autoplay; encrypted-media;"
      allowfullscreen
    ></iframe>
    <div class="d-flex justify-content-between headbar">
      <img 
        src="../assets/images/avada-music-logo.png" 
        @click="playMusic"
        class="music-button"
        alt="Music logo">
      <span 
        class="burger"
        @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </span>
      <div 
        class="full-page-menu" 
        v-if="isMenuVisible">
        <div class="logo-container">
          <img 
            src="../assets/images/avada-music-logo.png" 
            alt="AVADA MUSIC"
            @click="toggleMenu"
            class="escape">
        </div>
        <ul class="menu text-center">
          <li v-for="item in store.menuItems" :key="item.id"> {{ item.text }} </li>
        </ul>
      </div>
    </div>
    <div class="row mt-5" v-if="!isReduced">
      <div class="col-12 text-center center">
        <h1>Untold Stories</h1>
        <h6>There is an untold story behind every favorite song.</h6>
        <div>
          <button 
          type="button" 
          class="btn btn-danger">LATEST ALBUM</button>
          <button 
          type="button" 
          class="btn btn-transparent transparent"
          @click="vaiAiTour"
          >LIVE DATES</button>
        </div>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/_variables.scss';

header {
  width: 100vw;
  height: 100vh; 
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
  position: fixed; 
  top: 0;
  left: 0;
  transition: height 0.3s ease-in-out;  
  z-index: 1000; 
  &.reduced {
    height: 5px; 
    padding: 0 1rem; 
    justify-content: flex-start;
  }
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