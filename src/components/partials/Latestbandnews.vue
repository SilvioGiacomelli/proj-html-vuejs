<script>
export default {
  methods: {
    //FUNZIONE PER APRIRE LA PAGINA DELLE NEWS
    goToNewsPage() {
      window.open('https://www.rollingstone.it/musica/news-musica/', '_blank');
    }
  }
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

        <div class="container text-center my-5 ">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam iusto nemo itaque commodi similique recusandae voluptatibus nam reprehenderit labore dolorum quae, impedit facere modi incidunt voluptas assumenda! Consequatur ad dicta adipisci? Alias minus dolore molestiae?</p>
        </div>
      </div>
    </div>
    <div class="container cards pb-5 ">
      <div class="row">
        <div class="col-8 left">
          <div class="card cinquecento">
            <img class="card-img-top" src="../../assets/images/blog_music_techo-1200x600.jpg">
            <div class="card-body">
              <h5 class="card-title">Technology and music</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="d-flex">
            <div class="card mille">
            <img class="card-img-top" src="../../assets/images/blog-post3-600x900.jpg">
            <div class="card-body">
              <h5 class="card-title">While my guitar gently weeps</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card mille">
            <img class="card-img-top" src="../../assets/images/blog-post4-600x900.jpg">
            <div class="card-body">
              <h5 class="card-title">It just sound better</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          </div>
          <div class="card cinquecento">
            <img class="card-img-top" src="../../assets/images/blog_flavor_rock.jpg">
            <div class="card-body">
              <h5 class="card-title">The flavor of rock</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-4 right">
          <div class="card mille">
            <img class="card-img-top" src="../../assets/images/blog-post1-600x900.jpg">
            <div class="card-body">
              <h5 class="card-title">Taking back to the old school</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card mille">
            <img class="card-img-top" src="../../assets/images/blog-post2-600x900.jpg">
            <div class="card-body">
              <h5 class="card-title">Sharing the stage witha a legend</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div 
    class="news d-flex align-items-center justify-content-center" 
    @click="goToNewsPage">
  <h3>VIEW ALL LATEST NEWS</h3>
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
    font-size: 6rem;
    font-weight: bolder;
    }
  p{
    font-size: 2rem;
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

  .card{
    background-color: $latest-card-bg;
    margin: 1%;
      &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(255, 255, 255, 0.5);
        p {
          color: white;
        }
      }
    h5{
      font-size: 1.5rem;
      color: $latest-title;
    }
  }

  .card-body{
      max-height: 25%;
    }

  .cinquecento img{
    height: 450px;
    object-fit: cover;
  }

  .mille img{
    height: 900px;
    object-fit: cover;
  }

  .right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .news {
  background-color: $news-background;
  height: 300px;
  cursor: pointer;

  &:hover {
    background-color: white; 
    h3 {
      color: black;
    }
  }
}

h3 {
  font-size: 2rem;
  color: white; 
}
</style>