<script>
  export default {
    
  }
</script>

<template>
  <div class="container-fluid footer-up d-flex justify-content-between align-items-center">
    <img
    class="ms-5" 
    src="../assets/images/avada-music-logo.png"
    alt="">
      <ul class="d-flex lista-indice">
        <li>Home</li>
        <li>Meet the Band</li>
        <li>Live Dates</li>
        <li>Latest News</li>
        <li>Albums</li>
        <li>Fans</li>
      </ul>
  </div>
  <div class="container-fluid footer-down">
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
.footer-down{
  background-color: $footer-down-bg;
  height: 300px;
}
.lista-indice{
  margin-right: 20px;
  li{
    padding: 0 20px;
  }
}
</style>