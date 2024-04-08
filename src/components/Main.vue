<script>
import Card from './partials/Card.vue'
import Latestbandnews from './partials/Latestbandnews.vue'
import Musicislife from './partials/Musicislife.vue'
import {store} from './partials/data/store'
  export default {
    components:{
      Card,
      Musicislife,
      Latestbandnews

    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <Musicislife />
  <Latestbandnews />
</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/_variables.scss';
</style>