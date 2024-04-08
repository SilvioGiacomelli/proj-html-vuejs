<script>
import Video from './partials/Video.vue'
import Latestbandnews from './partials/Latestbandnews.vue'
import Musicislife from './partials/Musicislife.vue'
import Livedates from './partials/Livedates.vue'
import {store} from './partials/data/store'
  export default {
    components:{
      Video,
      Musicislife,
      Latestbandnews,
      Livedates,
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
  <Video />
  <Livedates />
</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/_variables.scss';
</style>