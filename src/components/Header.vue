<script>
import {store} from '../data/store'
  export default {
    data(){
      return{
      }
    }
  }
</script>

<template>
  <header class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-between headbar">
        <img src="../assets/images/avada-music-logo.png" alt="">
        <span class="burger"><i class="fa-solid fa-bars"></i></span>
      </div>
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

  header {
    width: 100%; 
    height: 1300px; 
    background-image: url('../assets/images/home_slider.jpg'); 
    background-position: center center; 
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
    font-size: 10em;
  }

  h6{
    font-size: 1.2rem;
  }

  button{
    margin: 10px;
    color: white;
    margin-top: 3%;
  }

  .trasparente{
    background-color: Transparent;
    background-repeat:no-repeat;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    border: solid 1px white;
  }

</style>