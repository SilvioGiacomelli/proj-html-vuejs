<script>
import { store } from './partials/data/store';
export default {
    props: {
      icons: {
        type: Array,
        required: true,
        default: () => [
      { 
        id:   1, 
        font: 'fa-brands fa-facebook-f', 
        link: 'https://www.facebook.com/' 
      },
      { 
        id:   2, 
        font: 'fa-brands fa-x-twitter', 
        link: 'https://twitter.com/' 
      },
      { 
        id:   3, 
        font: 'fa-brands fa-instagram', 
        link: 'https://www.instagram.com/' 
      },
      { 
        id:   4, 
        font: 'fa-brands fa-youtube', 
        link: 'https://www.youtube.com/' 
      },
    ]
  },
  methods: {    
    playClickSound() {
      const audio = new Audio('../assets/audio/click.mp3');
      audio.play();
    },
  }
},
  data() {
    return {
      store,
      menuItems: [
        'Home',
        'Meet the Band',
        'Live Dates',
        'Latest News',
        'Albums',
        'Fans'
      ]
    }
  }
}
</script>

<template>
  <div class="container-fluid footer-up d-flex justify-content-between align-items-center">
    <img
    class="ms-5" 
    src="../assets/images/avada-music-logo.png"
    alt="">
    <ul class="d-flex lista-indice">
      <li 
      v-for="(menuItem, index) in menuItems" 
      :key="index">{{ menuItem }}</li>
    </ul>
  </div>
  <div class="container-fluid footer-down d-flex justify-content-between align-items-center px-5">
    <div class="text-footer">
      <span>© Copyright 2022 - 2020 | AVADA THEME BY THEMEFUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS</span>
    </div>
    <div class="icons-footer">
    <a v-for="icon in icons" 
    :key="icon.id" 
    :href="icon.link" 
    target="_blank"
    @click="playClickSound"
    >
      <i :class="['fa', icon.font]"></i>
    </a>
  </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/_variables.scss';

.footer-up{
  background-color: $footer-up-bg;
  height: 300px;
  ul{
    list-style: none;
    li{
      cursor: pointer;
      color: $footer-text;
      font-size: 2rem;
      &:hover{
        color: white;
      }
    }
  }
}
.footer-down {
  background-color: $footer-down-bg;
  height: 100px;
  color: $footer-text;
  font-size: 1rem;

  .text-footer {
    span {
      color: #fff;
    }
  }

  .icons-footer {
    a {
      color: #7c7a8c; 
      font-size: 1.5rem; 
      margin-left: 20px;
      background-color: #323844;
      padding: 15px; 
      &:hover {
        color: white; 
      }
    }
  }
}
.lista-indice{
  margin-right: 20px;
  li{
    padding: 0 20px;
  }
}
</style>