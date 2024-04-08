<script>
import axios from 'axios';
import {store} from './components/partials/data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
  export default {
    components:{
      Header,
      Main,
    },
    data(){
      return{
        store,
      }
    }
  }
</script>

  <template>

    <Header />

    <Main />

  </template>

<style lang="scss">
@use './assets/scss/main.scss';
</style>
