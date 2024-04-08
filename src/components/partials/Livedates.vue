<script>
  export default {
    methods: {
      vaiAiTour() {
      window.open('https://rollingstones.com/tour//', '_blank');
    }
    }
  }
</script>

<template>
<div class="container-fluid total">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center">Live Dates</h2>
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
    <div class="container mb-5">
      <div class="row">
        <div class="col-12">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <span>+</span>17/08/2020 GEM FESTIVAL 2020 ANAKALIA, GEORGIA
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"> <img src="../../assets/images/Anakalia.png" alt=""> <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <span>+</span>24/9/2020 GROOVEFEST DOMINICAL REPUBLIC
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"><img src="../../assets/images/Dominical.png" alt=""> <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <span>+</span>31/10/2020 OASIS FESTIVAL 2020 MARRAKECH, MOROCCO
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"><img src="../../assets/images/Anakalia.png" alt=""> <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  <span>+</span>07/11/2020 MOGA FESTIVAL 2020 - ESSAOURIA, MOROCCO
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"><img src="../../assets/images/Anakalia.png" alt=""> <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  <span>+</span>10/12/2020 ENVISION FESTIVAL - UVITA, COSTA RICA
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"><img src="../../assets/images/Anakalia.png" alt=""><code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div 
    class="dates d-flex align-items-center justify-content-center"
    @click="vaiAiTour">
      <h3>VIEW ALL LIVE DATES</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';

.total{
  min-height: 100%;
  background-color: $livedates-bg;
  color: white;
  h2{
    margin-top: 4%;
    font-size: 6rem;
    font-weight: bolder;
    }
  p{
    font-size: 2rem;
    margin: 2%;
    color: $livedates-text;
    margin: 0 20%;
    color: white;
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

button{
  color:$livedates-text;
  font-weight: bold;
  span{
    color: white;
    margin: 5px;
    padding: 5px 7px;
    background-color: $livedates-text;
  }
}

.dates{
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