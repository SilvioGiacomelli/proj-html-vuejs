<script>
  export default {
    
  }
</script>

<template>
  <div class="container-fluid total">
    <div class="row up">
      <div class="red-bar"></div>
      <div class="col-12">
        <h2 class="text-center">Music is Life</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="grey-bar"></div>

        <div class="container text-center">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam iusto nemo itaque commodi similique recusandae voluptatibus nam reprehenderit labore dolorum quae, impedit facere modi incidunt voluptas assumenda! Consequatur ad dicta adipisci? Alias minus dolore molestiae?</p>
          
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';

.total{
  margin-top: 100px;
  min-height: 100%;
  background-color: $music-islife-bg;
  color: white;
  h2{
    margin-top: 4%;
    font-size: 5rem;
    font-weight: bolder;
    }
  p{
    font-size: 1.5rem;
    margin: 4%;
    color: $music-islife-text;
    }
  }

  .red-bar {
  margin: 0 auto;
  height: 15px; 
  background-color: $music-islife-bar; 
  width: 20%; 
  }

  .grey-bar {
  margin: 0 auto;
  background-color: $music-islife-gbar;
  width: 18%;
  height: 3px;
  margin-top: 1%;
  margin-bottom: 1%;
  }

</style>