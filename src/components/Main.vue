<script>
import Card from './partials/Card.vue'
import {store} from '../data/store'
  export default {
    components:{
      Card
    },
    data(){
      return{
        store
      }
    }
  }
</script>
<template>
  <main>
    <section class="mil">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="text-center">Music Is Life</h2>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in molestias, dolorem earum quidem nobis architecto sed fugiat maiores reprehenderit vel, mollitia voluptatem consequuntur id atque, quo unde libero eius!</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/_variables.scss';
  
    main{
      width: 100%;
    }
  
    h2{
      font-size: 2em;
    }
  
    p{
      font-size: 1em;
    }

    .mil{
      height: 740px;
      background-color: $music-islife-bg;
      color: white;
    }

</style>