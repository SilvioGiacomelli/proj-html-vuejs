<script>
import { store } from './partials/data/store';
export default {
  methods: {    
    playClickSound() {
      const audio = new Audio('../assets/audio/click.mp3');
      audio.play();
    },
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
    <a v-for="(icons, index) in store.icons" 
    :key="icons.id" 
    :href="icons.link" 
    target="_blank"
    @click="playClickSound"
    >
      <i :class="['fa-brands', icons.font]"></i>
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