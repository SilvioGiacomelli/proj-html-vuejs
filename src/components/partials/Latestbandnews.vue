<script>
  export default {
    
  }
</script>

<template>
  <div class="container-fluid total">
    <div class="row up">
      <div class="red-bar"></div>
      <div class="col-12">
        <h2 class="text-center">Latest Band News</h2>
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
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../../assets/images/blog_music_techo-1200x600.jpg">
            <div class="card-body">
              <h5 class="card-title">Technology and music</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="d-flex">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../../assets/images/blog_music_techo-1200x600.jpg">
            <div class="card-body">
              <h5 class="card-title">Technology and music</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../../assets/images/blog_music_techo-1200x600.jpg">
            <div class="card-body">
              <h5 class="card-title">Technology and music</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../../assets/images/blog_music_techo-1200x600.jpg">
            <div class="card-body">
              <h5 class="card-title">Technology and music</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../../assets/images/blog_music_techo-1200x600.jpg">
            <div class="card-body">
              <h5 class="card-title">Technology and music</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../../assets/images/blog_music_techo-1200x600.jpg">
            <div class="card-body">
              <h5 class="card-title">Technology and music</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';

.total{
  background-color: $latest-bg;
  color: white;
  h2{
    margin-top: 4%;
    font-size: 4rem;
    font-weight: bolder;
    }
  p{
    font-size: 1rem;
    margin-top: 2%;
    color: $music-islife-text;
    }
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