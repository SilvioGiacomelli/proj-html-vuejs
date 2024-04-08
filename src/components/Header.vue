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
      <div class="col-12 text-center ">
        <h1 class="text-center">Untold Stories</h1>
        <h6>There is an untold story behind every favorite song.</h6>
        <div>
          <button type="button" class="btn btn-danger">LATEST ALBUM</button>
          <button type="button trasparent" class="btn btn-transparent">LIVE DATES</button>
        </div>


      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>

  header{
    background-image: url('../assets/images/home_slider.jpg');
    background-size: cover;
    color: white;
    height: 1300;
    padding-top: 100px;
  }

  h1{
    font-size: 2em;
  }

  h6{
    font-size: 1em;
  }

  button{
    margin: 10px;
    color: white;
  }

  .trasparent{
    background-color: Transparent;
    background-repeat:no-repeat;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    border: solid 1px white;
  }
</style>