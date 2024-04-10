<script>
  //IMPORTO IMMAGINI LA CARTELLA ASSETS
  import { store } from '../../components/partials/data/store';
  export default {
    components: {
      store
    },
    data() {
      return {
        store
      }
    },
    methods: {
      // APRE UNA NUOVA FINESTRA SUL SITO ESTERNO
        vaiAiTour() {
        window.open('https://rollingstones.com/tour//', '_blank');
        this.playClickSound();
        },
      // FUNZIONE PER FAR SUONARE IL SUONO DEL CLICK
        playClickSound() {
        const audio = new Audio('../../assets/audio/click.mp3');
        audio.play();
        },
        getImagePath(imgPath) {
        return new URL(`../../assets/images/maps/${imgPath}`, import.meta.url).href
        },
      },
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
            <div class="accordion-item" v-for="(item, index) in store.accordionData" :key="index">
              <h2 class="accordion-header" :id="`flush-heading${index}`">
                <button 
                class="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                :data-bs-target="`#flush-collapse${index}`"
                aria-expanded="false" 
                :aria-controls="`flush-collapse${index}`">
                  <p class="acc-text"> {{ item.date }} {{ item.name }} {{ item.location }} </p>
                </button>
              </h2>
              <div 
              :id="`flush-collapse${index}`" 
              class="accordion-collapse collapse" 
              :aria-labelledby="`flush-heading${index}`" 
              data-bs-parent="#accordionFlushExample">
                <div class="accordion-body d-flex"> 
                  <img :src="getImagePath(item.imgSrc)" :alt="`Image of ${item.name}`">
                    <div class="testo d-flex flex-column ">
                      <ul>
                        <li>
                          <h4> {{ item.name }} </h4>
                          <span> {{ item.content }} </span>
                        </li>
                        <li>
                        <div>
                          <button class=" btn-acc btn mt-5" style="color: white;">Button</button>
                        </div>
                        </li>
                      </ul>
                    </div> 
                  </div>
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

.total {
  min-height: 100%;
  background-color: $livedates-bg;
  color: white;

  h2 {
    margin-top: 4%;
    font-size: 6rem;
    font-weight: bolder;
  }

  p {
    font-size: 2rem;
    margin: 0 20%;
    color: $livedates-text-grey;
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

// STILI ACCORDION

.btn-acc{
  background-color: $livedates-text;
  font-size: 1.8rem;
  display: flex-end;
  padding: 0 3%;
}

.accordion-button {
  background-color: #323844;
  color: white;
  position: relative;
  border: none;
  font-weight: bold;
  text-align: left;
  padding-left: 2rem;
  height: 105px;
  p{
    color: $livedates-text;
  }

  &:hover {
    background-color: lighten(#323844, 5%);
  }

  &::before {
    content: '+'; //IMPOSTO IL CONTENUTO DA INSERIRE
    position: absolute;
    left: 0.5rem; 
    top: 50%;
    transform: translateY(-50%); 
    color: white; 
    width: 1.5rem; 
    height: 1.5rem; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -2px; 
  }


  &:not(.collapsed)::before {
    
    content: '-';     //SOSTITUISCO IL CONTENUTO
    background-color: $livedates-text;
  }
}

.accordion-item {
  background-color: #323844;
  .accordion-header {
    .accordion-button {
      padding-left: 32px;       
      border-bottom: none;
    }
  }

  .accordion-collapse {
    background-color: #323844;
    color: white;
  }

}

.accordion-body {
  padding: 1rem;
  border-top: none; 
}

.testo {
  margin-left: 5%;
  color: $livedates-text-grey;
  ul{
    list-style: none;
  }

  h4 {
    margin-top: 2%;
    color: white;
    font-size: 2rem;
    margin-bottom: 2%;
  }

  span {
    font-size: 1.3rem;
  }
}


.dates {
  background-color: $news-background;
  height: 300px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    h3 {
      color: black;
    }
    &:active {
    transform: translateY(5px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
  }

  h3 {
    font-size: 2rem;
    color: white;
    margin: 0; 
  }
}

</style>